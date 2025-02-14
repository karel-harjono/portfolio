import StyledComponentsRegistry from "../registry";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function LetterLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body style={{ margin: 0, padding: 0, overflow: "hidden" }} className={playfair.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
