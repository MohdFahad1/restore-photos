// utils.js
const shimmer = () => `
<svg width="300" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#7986AC" offset="20%" />
      <stop stop-color="#68769e" offset="50%" />
      <stop stop-color="#7986AC" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="300" height="400" fill="#7986AC" />
  <rect id="r" width="300" height="400" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-300" to="400" dur="1s" repeatCount="indefinite" />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const dataUrl = `data:image/svg+xml;base64,${toBase64(shimmer())}`;
