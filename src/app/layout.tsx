import "./globals.css";
import { Nunito } from "next/font/google";
import Analytics from "@/components/Analytics";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Wahab Shaikh",
  description:
    "Wahab Shaikh's personal (and professional) space on the internet. Wahab Shaikh is an Indie Maker and Freelance Developer based out of Mumbai, India who builds full-stack, serverless web apps using Next.js, Tailwind CSS, TypeScript, tRPC, Prisma, Supabase, LangChain and OpenAI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
