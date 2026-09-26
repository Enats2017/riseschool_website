import ui from "./shared.module.css";

/**
 * Two-tier heading used across the page:
 *   lead    – light Montserrat line ("What Makes")
 *   title   – display line in Boogaloo, with an optional maroon `accent` tail
 */
export default function SectionHeading({ id, lead, title, accent, align = "center", as: Tag = "h2", children }) {
  return (
    <header className={`${ui.heading} ${align === "start" ? ui.headingStart : ""}`}>
      <Tag id={id}>
        {lead && <span className={ui.lead}>{lead}</span>}
        <span className={ui.display}>
          {title}
          {accent && (
            <>
              {title ? " " : ""}
              <span className={ui.accent}>{accent}</span>
            </>
          )}
        </span>
      </Tag>
      {children}
    </header>
  );
}
