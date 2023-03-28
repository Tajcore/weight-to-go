import "./globals.css";

export const metadata = {
  title: "Weight To Go",
  description:
    "Discover the most effective weight loss program tailored to your needs and lifestyle, a no-deprivation, enjoyable approach to lasting weight loss.",
  image: "/weighttogo_logo.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
