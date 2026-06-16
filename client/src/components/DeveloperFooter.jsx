import React from "react";

const DeveloperFooter = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-4 mt-auto pb-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs sm:text-sm">

        {/* LEFT */}
        <p className="text-slate-500">
          {new Date().getFullYear()} DealerBook All Rights Reserved
        </p>

        {/* CENTER */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-slate-500">
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

        {/* RIGHT */}
        <p className="text-slate-400">
          MERN Stack Developer
        </p>

      </div>
    </footer>
  );
};

export default DeveloperFooter;