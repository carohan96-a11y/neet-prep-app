import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "NEET MCQ Practice",
  description: "Fancy NEET MCQ practice with filters, timer, and analytics",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
