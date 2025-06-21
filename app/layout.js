import Link from "next/link";
import Head from "./Head";
import "./fanta.css"
import "./globals.css";
import GoTo from "@/components/GoTo";
import { AuthProvider } from "@/context/AuthContext";



export const metadata = {
  title: "Expaisa · The Subscription Tracker",
  description: "Track all your subscription analytics!",
};

export default function RootLayout({ children }) {
  const header = (
    <header>
        <div>
          <Link href={'/'}>
            <h1 className="text-gradient">Expaisa</h1>
            <p>The Subscription Tracker</p>
          </Link>
        </div>
        <GoTo/>
    </header>
  )
  const footer = (
    <footer>
      <div className="hard-line"/>
      <div className="footer-content">
        <div>
          <div>
            <h4>Expenny</h4>
            <p>|</p>
            <button disabled>Install app</button>
          </div>
          <p className="copyright">© Copyright 2025-2026, Sourarghya De.<br/>All rights reserved.</p>
        </div>
        <div>
          <p>Facing Issues? <a>Get help</a></p>
          <p>Suggestions for improvement? <a href="https://mail.google.com/mail/?view=cm&to=sourarghyade@gmail.com&subject=Hello&body=I saw your website." target="_blank">Share feedback!</a>
          </p>
          <div>
            <Link href={'/privacy'}>Privacy Policy</Link>
            <Link href={'/tos'}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <Head/>
      <AuthProvider>
        <body>
          {header}
          <div className="full-line"/>
          <main>
            {children}
          </main>
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
