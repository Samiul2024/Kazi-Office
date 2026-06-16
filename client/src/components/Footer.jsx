export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white  mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">

        <h3 className="text-2xl font-bold mb-4">
          Kazi Office Boyra
        </h3>

        <p>
          Marriage Registration Services in Khulna
        </p>

        <p className="mt-4 text-sm text-slate-400">
           2026 All Rights Reserved
        </p>

      </div>
      <div className="flex flex-wrap items-center py-4 justify-center gap-2 text-slate-500">
          <span>Developed by</span>

          <a
            href="https://mdsamiullahossen.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-500 font-medium transition"
          >
            MD. Samiulla Hossen
          </a>

          <a
            href="https://wa.me/8801766768546"
            target="_blank"
            rel="noreferrer"
            className="text-green-600 hover:text-green-500"
          >
            WhatsApp
          </a>
        </div>

    </footer>
  );
}
