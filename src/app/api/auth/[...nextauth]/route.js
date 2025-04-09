import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectMongoDB } from "@/lib/db";
import User from "@/models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      console.log("USER: ", user);
      console.log("ACCOUNT: ", account);

      if (account.provider === "google") {
        const { name, email } = user;
        try {
          await connectMongoDB();

          const existingUser = await User.findOne({ email });

          if (!existingUser) {
            const res = await fetch("https://restore-photos-tmtb.vercel.app/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email }),
            });
            
            if (res.ok) {
              console.log("User registered successfully");
            } else {
              console.log("Failed to register user");
            }            
          }
        } catch (error) {
          console.log("Error: ", error);
        }
      }

      return user;
    },
  },
});

export { handler as GET, handler as POST };
