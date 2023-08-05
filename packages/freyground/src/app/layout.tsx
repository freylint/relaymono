import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "RelayGround",
  description: "Personal playground, blog, and projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
