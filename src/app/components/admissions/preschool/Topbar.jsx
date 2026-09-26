import Link from "next/link";
import { Phone } from "lucide-react";
import ui from "./shared.module.css";
import { CONTACT } from "./data";

/**
 * Plain white bar with the school logo and phone number.
 * The site's main Navbar is hidden on /future-100 (see Navbar.jsx),
 * so this stands in for it on this landing page only.
 */
export default function TopBar() {
  return (
    <div className="bg-white">
      <div className={`${ui.container} flex items-center justify-between py-3`}>
        <Link href="/" aria-label="Rising India School of Excellence — Home">
          <img
            src="/images/logo.png"
            alt="Rising India School of Excellence"
            width={220}
            height={45}
            className="w-[150px] md:w-[220px]"
          />
        </Link>

        <a
          href={CONTACT.phoneHref}
          className="flex items-center gap-2 font-bold text-[#831719] whitespace-nowrap"
        >
          <Phone size={18} aria-hidden="true" />
          Call {CONTACT.phoneDisplay}
        </a>
      </div>
    </div>
  );
}