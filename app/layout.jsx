import "../styles/global.css";

export const metadata = {
  title: "Prompty",
  description: "Prompty is a simple AI prompt sharing app",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="div">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
