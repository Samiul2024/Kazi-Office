import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function SocialBar() {
  return (
    <div className="flex gap-4 justify-center py-10">
      
      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61589520876344"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-blue-700 text-white"
      >
        <FaFacebookF />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/8801714969697"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-green-600 text-white"
      >
        <FaWhatsapp />
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com/@YOUR_CHANNEL"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-red-600 text-white"
      >
        <FaYoutube />
      </a>

    </div>
  );
}