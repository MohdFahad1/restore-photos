import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/lib/db";

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("Sign-in callback initiated");
      const start = Date.now();

      try {
        const mongoose = await connectToDatabase();
        const db = mongoose.connection.db;
        const collection = db.collection("users");

        // Find or create user
        const result = await collection.findOneAndUpdate(
          { email: user.email },
          { $setOnInsert: { ...user } },
          { returnOriginal: false, upsert: true }
        );

        console.log("User processed:", result.value.email);
        const end = Date.now();
        console.log(`Sign-in callback completed in ${end - start}ms`);
        return true;
      } catch (error) {
        console.error("Error during sign-in callback:", error);
        return false;
      }
    },
    async session({ session, token, user }) {
      console.log("Session callback");
      return session;
    },
  },

  // callbacks: {
  //   async signIn({ user, account }) {
  //     return true;
  //   },
  //   async session({ session, token, user }) {
  //     session.accessToken = token.accessToken;
  //     session.user.id = token.id;

  //     return session;
  //   },
  // },
});

export { handler as GET, handler as POST };
