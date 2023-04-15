import "./globals.css";

export const metadata = {
  title: "MDX Blog Devraj",
  description: "Blog Application created with MDX",
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
