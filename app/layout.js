import "./globals.css";

const siteUrl = "https://toritaku-naha.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "焼き鳥とお酒 鳥拓 那覇 居酒屋｜牧志駅徒歩5分",
  description:
    "焼き鳥とお酒 鳥拓 那覇 居酒屋は、那覇市安里・牧志駅徒歩5分の焼き鳥居酒屋。塩つくね、博多ゴマサバ、日本酒を楽しめます。営業時間17:00〜翌1:00。予約・アクセス・店舗情報をご案内します。",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: {
    google: "ayHXvvh7MAYyEd0yabm5xYrI98qeN_1bfcLkvUPkbrM",
  },
  openGraph: {
    title: "焼き鳥とお酒 鳥拓 那覇 居酒屋",
    description:
      "那覇市安里、牧志駅徒歩5分。焼き鳥、博多ゴマサバ、選りすぐりの日本酒を楽しむ居酒屋。",
    url: siteUrl,
    siteName: "焼き鳥とお酒 鳥拓 那覇 居酒屋",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "焼き鳥とお酒 鳥拓 那覇 居酒屋",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "焼き鳥とお酒 鳥拓 那覇 居酒屋",
    description: "那覇市安里・牧志駅徒歩5分の焼き鳥居酒屋",
    images: ["/og.svg"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
