// Small hand-drawn accents from the reference design (paper plane trail, light bulb).
// Purely decorative, so they are hidden from assistive technology.

export function PaperPlane({ className, ...rest }) {
  return (
    <svg className={className} viewBox="0 0 150 80" fill="none" aria-hidden="true" focusable="false" {...rest}>
      <path
        d="M4 70c14-2 22-14 16-24s-20-4-14 8 30 12 42-4 2-26-10-18 4 30 26 26 30-20 44-34"
        stroke="#b9b9b9"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M146 6 98 22l18 6 4 18 8-12 12 4z" fill="#f05a28" />
      <path d="m116 28 30-22-26 28z" fill="#c43d12" />
    </svg>
  );
}

export function BulbDoodle({ className, ...rest }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false" {...rest}>
      <path
        d="M30 12c-9 0-16 7-16 16 0 6 3 10 7 13 2 2 3 4 3 7h14c0-3 1-5 3-7 4-3 7-7 7-13 0-9-8-16-18-16z"
        fill="#ffcf2f"
        stroke="#1d1d1d"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M25 52h12M26 57h10" stroke="#1d1d1d" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M26 30c2 4 3 9 3 18M36 30c-2 4-3 9-3 18" stroke="#1d1d1d" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M50 8l4-5M56 16l6-2M54 24l5 2" stroke="#27b4d6" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function AbBlock({ className, ...rest }) {
  return (
    <svg className={className} viewBox="0 0 90 72" aria-hidden="true" focusable="false" {...rest}>
      <path d="M6 22 50 8l34 14-44 16z" fill="#fbc6dc" />
      <path d="M6 22l34 16v30L10 54z" fill="#f47fb0" />
      <path d="M40 38l44-16v30L40 68z" fill="#f58db9" />
      <path d="M17 48l6-17 6 20M19 43h7" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M52 36v20m0-20c10-3 12 6 2 8 11-2 12 9 0 10" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function Rocket({ className, ...rest }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" focusable="false" {...rest}>
      <g transform="rotate(45 50 50)">
        <path d="M24 70c-8 4-12 12-12 22 8-2 14-8 16-16z" fill="#1bb39a" />
        <path d="M76 70c8 4 12 12 12 22-8-2-14-8-16-16z" fill="#1bb39a" />
        <path d="M50 4C30 22 26 48 32 78h36c6-30 2-56-18-74z" fill="#f04e23" />
        <path d="M50 4c12 11 18 26 19 44H50z" fill="#ff6b3d" opacity="0.6" />
        <circle cx="50" cy="42" r="11" fill="#fff" />
        <circle cx="50" cy="42" r="6.5" fill="#1c3f7a" />
        <path d="M38 78h24l-4 8H42z" fill="#b8321a" />
        <path d="M42 86c0 6 3 10 8 14 5-4 8-8 8-14z" fill="#fcb813" />
      </g>
    </svg>
  );
}

export function LoopPlane({ className, ...rest }) {
  return (
    <svg className={className} viewBox="0 0 100 90" fill="none" aria-hidden="true" focusable="false" {...rest}>
      <path
        d="M22 20c-2 16 2 30 8 38 8 10 18 8 16-2s-14-6-10 8 18 16 26 6 4-20-6-14 2 26 24 22"
        stroke="#9a9a9a"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M10 2 34 14l-14 2-4 12z" fill="#f05a28" />
      <path d="m20 16 14-2-10 8z" fill="#2f2a6b" />
    </svg>
  );
}
