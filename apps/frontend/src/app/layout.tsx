import "#/lib/styles/font.css";
import "#/lib/styles/reset.css";
import "#/lib/styles/tailwind.css";
import type { PropsWithChildren, ReactElement } from "react";
import type { Metadata } from "next";
import { Provider } from "./provider";

export const metadata: Metadata = {
  title: "Unveiled - Discover who's the liar",
  description: [
    "Unveiled is a captivating word game, do not fall of the traps and strategy of the players,",
    "discover who is the imposter in an interactive turn game."
  ].join(", "),
  icons: "/logo.png"
};

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <html>
      <head />

      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}