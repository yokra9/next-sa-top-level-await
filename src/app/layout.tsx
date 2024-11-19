import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "next-sa-top-level-await",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
