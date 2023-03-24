import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Raleway, Inter } from "@next/font/google";
import Main from "@/components/layout/Main";

const raleway = Raleway({ subsets: ["latin"] });

const poppins = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  if (globalThis.document) {
    document.documentElement.style.setProperty(
      "--ff-primary",
      raleway.style.fontFamily
    );
    document.documentElement.style.setProperty(
      "--ff-secondary",
      poppins.style.fontFamily
    );
  }
  return (
    <>
      <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <Main>
          <Component {...pageProps} />
        </Main>
      </div>
    </>
  );
}
