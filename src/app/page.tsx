import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-8 py-24 text-center">
      <Image
        src="/wahab-shaikh.jpg"
        alt="Wahab Shaikh"
        className="rounded-full"
        height={192}
        width={192}
      />
      <h1 className="text-5xl font-bold">Wahab Shaikh</h1>
      <div className="space-y-2">
        <p className="text-xl font-semibold">
          Indie Maker • Freelance Developer
        </p>
        <p className="flex items-center justify-center gap-4 font-medium">
          <span className="text-sm">📍 Mumbai, India</span>
          <span className="text-sm">🎂 December 14, 2000</span>
        </p>
      </div>
      <ul className="flex items-center justify-center gap-4">
        <li>
          <a
            href="https://twitter.com/iwahabshaikh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/iwahabshaikh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/wahabshaikh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/wahabshaikh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="mailto:hey.wahabshaikh@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </main>
  );
}
