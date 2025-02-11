// app/layout.js
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doctor Listing App",
  description: "Modern and elegant design for a doctor or clinic.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        {/* -- NAVBAR -- */}
        <div className="navbar bg-base-500 px-4">
          <div className="navbar-start">
            <Link href="/" className="btn btn-ghost normal-case text-xl">
              DoctorApp
            </Link>
          </div>
          <div className="navbar-end gap-2">
            <Link href="/" className="btn btn-ghost">Home</Link>
            <Link href="/doctors" className="btn btn-ghost">Doctors</Link>
            {/* <a href="#contact" className="btn btn-primary">Contact</a> */}
          </div>
        </div>

<div className="w-50  p-8 d-fle" style={{height:200,display:"flex",alignItems:"center",backgroundColor:"rgb(88, 88, 88)"}}>
  <h2>Our Doctors</h2>
</div>
        {/* -- MAIN CONTENT -- */}
        <main>{children}</main>

 
        
      </body>
    </html>
  );
}
