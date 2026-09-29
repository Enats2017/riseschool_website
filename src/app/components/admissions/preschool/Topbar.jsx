import { Phone } from "lucide-react";
import ui from "./shared.module.css";
import { CONTACT } from "./data";

/**
 * Plain white bar with the school logo and phone number.
 * The site's main Navbar is hidden on /future-100 (see Navbar.jsx),
 * so this stands in for it on this landing page only.
 *
 * The logo is intentionally NOT a link: this is a focused landing page and the
 * only exits should be the enquiry form and the phone number.
 */
export default function TopBar() {
  // "+91 86570 15231" -> "+91 8657015231" (the mobile design prints it without the inner space)
  const compact = CONTACT.phoneDisplay.replace(/(\d{5})\s(\d{5})/, "$1$2");

  return (
    <div className={ui.topbar}>
      <div className={`${ui.container} ${ui.topbarInner}`}>
        <img
          src="/images/logo.png"
          alt="Rising India School of Excellence"
          width={220}
          height={45}
          className={ui.topLogo}
          draggable={false}
        />

        <a href={CONTACT.phoneHref} className={ui.topCall}>
          <Phone size={18} aria-hidden="true" className={ui.topCallIcon} />
          <span>
            Call{" "}
            <span className={ui.numFull}>{CONTACT.phoneDisplay}</span>
            <span className={ui.numCompact}>{compact}</span>
          </span>
        </a>
      </div>
    </div>
  );
}
