import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen">
        <Main />
        <div id="overlays"></div>
      </body>
      <NextScript />
    </Html>
  );
}
