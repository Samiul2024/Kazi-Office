import { businessInfo } from "../data/businessInfo";

export default function ContactPage() {
  return (
    <div className="max-w-7xl min-h-screen mx-auto px-4 py-20">

      <h1 className="text-5xl font-bold mb-8">
        Contact Us
      </h1>

      <div className="space-y-4">

        <p>Boyra, Khulna</p>

        <a
          href="tel:+8801714969697"
        >call : 01714969697
        </a>
        <p className="mb-4">
          <b>Email:</b> {businessInfo.email}
        </p>

      </div>

    </div>
  );
}
