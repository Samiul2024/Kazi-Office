import { businessInfo } from "../data/businessInfo";

export default function ContactPage() {
  return (
    <div className="max-w-7xl min-h-screen mx-auto px-4 py-20">

      <h1 className="text-5xl text-center font-bold mb-8">
        Contact Us
      </h1>

      <div className="text-center space-y-4">
        <h1 className="text-5xl semibold mb-8">
          কাজী অফিস খুলনা
        </h1>

        <p>বয়রা বাজার, জিপিও  9000, সোনাডাঙ্গা, খুলনা</p>

        <a
          href="tel:+8801714969697"
        >call : 01714969697
        </a>
        <a
          
        >, 01619805509
        </a>
        <p className="mb-4">
          <b>Email:</b> {businessInfo.email}
        </p>

      </div>

    </div>
  );
}
