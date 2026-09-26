"use client";

import ui from "./shared.module.css";
import { FORM_ID } from "./data";

/**
 * Scrolls to the on-page "Book your visit" form and moves focus to its first field.
 * Every APPLY CTA on the page uses this so they all lead to the same enquiry form.
 */
export function scrollToEnquiryForm() {
  const form = document.getElementById(FORM_ID);
  if (!form) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  form.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });

  const firstField = form.querySelector("input, select");
  if (firstField) {
    window.setTimeout(() => firstField.focus({ preventScroll: true }), reduceMotion ? 0 : 900);
  }
}

export default function ApplyButton({ children = "Apply now", variant = "default", className = "" }) {
  const classes = [ui.apply, variant === "future" ? ui.applyFuture : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={`#${FORM_ID}`}
      className={classes}
      onClick={(event) => {
        event.preventDefault();
        scrollToEnquiryForm();
      }}
    >
      {children}
    </a>
  );
}

/** "APPLY FOR FUTURE 100" label, matching the reference button lockup. */
export function Future100Label() {
  return (
    <>
      Apply for <strong>Future</strong>
      <span className={ui.hundred}>100</span>
    </>
  );
}
