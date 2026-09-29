import ui from "./shared.module.css";

/**
 * Two-tier heading used across the page:
 *   lead    – light Montserrat line ("What Makes")
 *   title   – display line in Boogaloo, with an optional maroon `accent` tail
 *   accentBreak – on phones only, put the accent on its own line
 */
export default function SectionHeading({ id, lead, title, accent, align = "center", as: Tag = "h2", accentBreak = false, children }) {
  return (
    <header className={`${ui.heading} ${align === "start" ? ui.headingStart : ""}`}>
      <Tag id={id}>
        {lead && <span className={ui.lead}>{lead}</span>}
        <span className={ui.display}>
          {title}
          {accent && (
            <>
              {title ? " " : ""}
              {accentBreak && <br className={ui.mbr} />}
              <span className={ui.accent}>{accent}</span>
            </>
          )}
        </span>
      </Tag>
      {children}
    </header>
  );
}
