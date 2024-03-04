import "../styles/global.css";
import { Children } from "react";

export const metadata = {
  title: "Prompty",
  description: "Prompty is a simple AI prompt sharing app",
};

function RootLayout(_children) {
  return (
    <html lang="en">
      <body>
        <div className="div">
          <div className="gradient" />
        </div>
        <main className="app">{Children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
