export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://toritaku-naha.vercel.app/sitemap.xml",
    host: "https://toritaku-naha.vercel.app",
  };
}
