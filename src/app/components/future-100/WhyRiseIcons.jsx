// Custom red outline vector icons matching the reference design for Future 100 "RISE Their Best Start"

export function RatioIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Teacher on the left */}
      <circle cx="16" cy="18" r="4.5" />
      <path d="M9 36v-3a7 7 0 0 1 14 0v3" />
      <path d="M21 27l6 -3" />

      {/* Presentation Board on stand */}
      <rect x="27" y="10" width="26" height="18" rx="2" />
      <line x1="32" y1="15" x2="43" y2="15" />
      <line x1="32" y1="19" x2="48" y2="19" />
      <line x1="32" y1="23" x2="39" y2="23" />
      {/* Board legs */}
      <line x1="33" y1="28" x2="29" y2="38" />
      <line x1="47" y1="28" x2="51" y2="38" />

      {/* 3 Kids in front */}
      <circle cx="28" cy="46" r="3.5" />
      <path d="M22 57a6 6 0 0 1 12 0" />

      <circle cx="40" cy="44" r="3.5" />
      <path d="M34 57a6 6 0 0 1 12 0" />

      <circle cx="52" cy="46" r="3.5" />
      <path d="M46 57a6 6 0 0 1 12 0" />
    </svg>
  );
}

export function FloorIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Building blocks on table */}
      <rect x="26" y="22" width="12" height="11" />
      <path d="M24 22 L32 12 L40 22 Z" />
      <rect x="38" y="25" width="5" height="8" />

      {/* Table */}
      <rect x="18" y="33" width="28" height="3" rx="1.5" />
      <line x1="22" y1="36" x2="22" y2="52" />
      <line x1="42" y1="36" x2="42" y2="52" />
      <line x1="22" y1="45" x2="42" y2="45" />

      {/* Left Chair */}
      <path d="M9 25v27" />
      <line x1="9" y1="38" x2="18" y2="38" />
      <line x1="18" y1="38" x2="18" y2="52" />
      <line x1="6" y1="30" x2="12" y2="30" />

      {/* Right Chair */}
      <path d="M55 25v27" />
      <line x1="55" y1="38" x2="46" y2="38" />
      <line x1="46" y1="38" x2="46" y2="52" />
      <line x1="52" y1="30" x2="58" y2="30" />
    </svg>
  );
}

export function ClockIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Outer clock circle */}
      <circle cx="32" cy="32" r="17" />
      
      {/* Clock hands pointing at 3 PM (hour to 3, minute to 12) */}
      <line x1="32" y1="32" x2="42" y2="32" strokeWidth="2.2" />
      <line x1="32" y1="32" x2="32" y2="21" strokeWidth="2.2" />
      <circle cx="32" cy="32" r="1.5" fill="currentColor" />

      {/* Hour dots around dial */}
      <circle cx="32" cy="18" r="1" fill="currentColor" stroke="none" />
      <circle cx="46" cy="32" r="1" fill="currentColor" stroke="none" />
      <circle cx="32" cy="46" r="1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="32" r="1" fill="currentColor" stroke="none" />

      {/* Circular tracking/timer arrow wrapping around top-right */}
      <path d="M52 24a22 22 0 1 0 4 14" strokeDasharray="3 3" />
      <path d="M52 17l4 7l-7 1" />
    </svg>
  );
}

export function ExperiencesIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Scalloped badge / award ribbon */}
      <path d="M38 12a4 4 0 0 1 4 4a4 4 0 0 1 5 2a4 4 0 0 1 2 5a4 4 0 0 1 4 4a4 4 0 0 1 -1 5a4 4 0 0 1 1 5a4 4 0 0 1 -4 4a4 4 0 0 1 -2 5a4 4 0 0 1 -5 2a4 4 0 0 1 -4 4a4 4 0 0 1 -5 -2a4 4 0 0 1 -5 -4a4 4 0 0 1 -4 -2a4 4 0 0 1 -2 -5a4 4 0 0 1 -1 -5a4 4 0 0 1 1 -5a4 4 0 0 1 4 -4a4 4 0 0 1 2 -5a4 4 0 0 1 5 -2a4 4 0 0 1 4 -4z" />
      
      {/* Child profile inside badge */}
      <circle cx="35" cy="24" r="3.5" />
      <path d="M29 34a6 6 0 0 1 12 0" />

      {/* Hand holding the badge */}
      <path d="M14 48c4 -4 10 -4 15 -1l11 4c3 1 5 4 4 7c-1 3 -4 4 -7 3l-8 -3" />
      <path d="M12 56c4 -3 8 -5 13 -4" />

      {/* Sparkles / stars */}
      <path d="M18 16l1 2l2 1l-2 1l-1 2l-1 -2l-2 -1l2 -1z" fill="currentColor" stroke="none" />
      <path d="M53 14l1 1.5l1.5 1l-1.5 1l-1 1.5l-1 -1.5l-1.5 -1l1.5 -1z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IbIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Roof pediment */}
      <path d="M14 26 L32 12 L50 26 Z" />
      
      {/* Flagpole & Flag */}
      <line x1="32" y1="12" x2="32" y2="4" />
      <path d="M32 4 L42 8 L32 12 Z" fill="currentColor" />

      {/* Circle/Clock in pediment */}
      <circle cx="32" cy="20" r="2.5" />

      {/* Building walls */}
      <rect x="18" y="26" width="28" height="26" />

      {/* Left 4-pane window */}
      <rect x="21" y="31" width="7" height="8" />
      <line x1="24.5" y1="31" x2="24.5" y2="39" />
      <line x1="21" y1="35" x2="28" y2="35" />

      {/* Right 4-pane window */}
      <rect x="36" y="31" width="7" height="8" />
      <line x1="39.5" y1="31" x2="39.5" y2="39" />
      <line x1="36" y1="35" x2="43" y2="35" />

      {/* Center Doorway */}
      <path d="M29 52V42a3 3 0 0 1 6 0v10" />
      <line x1="32" y1="42" x2="32" y2="52" />

      {/* Steps */}
      <line x1="14" y1="52" x2="50" y2="52" />
      <line x1="11" y1="56" x2="53" y2="56" />
    </svg>
  );
}

export function FrenchIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Speech bubble */}
      <path d="M14 16h36a6 6 0 0 1 6 6v18a6 6 0 0 1 -6 6H24l-8 7v-7h-2a6 6 0 0 1 -6 -6V22a6 6 0 0 1 6 -6z" />
      
      {/* Letter F */}
      <path d="M24 28v14M24 28h8M24 34h6" strokeWidth="2.4" />
      
      {/* Letter R */}
      <path d="M37 28v14M37 28h6a3.5 3.5 0 0 1 0 7h-6m6 0l4 7" strokeWidth="2.4" />
    </svg>
  );
}

export function SpeechDramaIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Back speech bubble */}
      <path d="M32 14h18a6 6 0 0 1 6 6v12a6 6 0 0 1 -6 6h-4l-5 5v-5h-9a6 6 0 0 1 -6 -6v-12a6 6 0 0 1 6 -6z" />
      <line x1="34" y1="21" x2="48" y2="21" strokeWidth="1.8" />
      <line x1="34" y1="27" x2="44" y2="27" strokeWidth="1.8" />

      {/* Front speech bubble */}
      <path d="M10 26h22a6 6 0 0 1 6 6v13a6 6 0 0 1 -6 6h-6l-6 6v-6h-10a6 6 0 0 1 -6 -6v-13a6 6 0 0 1 6 -6z" fill="#f3fbff" />
      <line x1="16" y1="34" x2="30" y2="34" strokeWidth="1.8" />
      <line x1="16" y1="40" x2="26" y2="40" strokeWidth="1.8" />
    </svg>
  );
}

export function NapIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Sleeping child head */}
      <circle cx="36" cy="35" r="14" />
      
      {/* Hair strands */}
      <path d="M26 27c4 -5 14 -5 19 0" />
      <path d="M34 21c2 -2 5 -2 6 0" />

      {/* Sleeping eyes (closed curved lines) */}
      <path d="M29 36c1 1.5 3 1.5 4 0" strokeWidth="2" />
      <path d="M39 36c1 1.5 3 1.5 4 0" strokeWidth="2" />
      
      {/* Cute sleeping smile */}
      <path d="M34 41c1 1 3 1 4 0" strokeWidth="1.8" />

      {/* Floating ZZZ */}
      <path d="M49 20h4l-4 5h4" strokeWidth="2" />
      <path d="M53 11h5l-5 6h5" strokeWidth="2.2" />

      {/* Bedside mini clock at bottom-left */}
      <circle cx="18" cy="46" r="6.5" fill="#f3fbff" />
      <line x1="18" y1="46" x2="18" y2="42" />
      <line x1="18" y1="46" x2="21" y2="46" />
      <line x1="14" y1="52" x2="12" y2="55" />
      <line x1="22" y1="52" x2="24" y2="55" />
      <path d="M16 39.5a2 2 0 0 1 4 0" />
    </svg>
  );
}

export function FunverseIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Left playhouse tower with pitched roof */}
      <path d="M12 28 L24 14 L36 28 Z" />
      <rect x="15" y="28" width="18" height="26" />
      
      {/* Arched door in playhouse */}
      <path d="M20 54V40a4 4 0 0 1 8 0v14" />

      {/* Ladder steps on left */}
      <line x1="10" y1="34" x2="15" y2="34" />
      <line x1="10" y1="41" x2="15" y2="41" />
      <line x1="10" y1="48" x2="15" y2="48" />
      <line x1="10" y1="30" x2="10" y2="54" />

      {/* Slide on right */}
      <path d="M33 34c6 0 8 10 16 10c4 0 6 -2 9 8" strokeWidth="2.2" />
      <path d="M33 38c4 0 6 8 14 8c4 0 5 -1 8 6" />

      {/* Ground line */}
      <line x1="6" y1="54" x2="58" y2="54" />
    </svg>
  );
}

export function OutdoorsIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Soccer pitch rectangle */}
      <rect x="14" y="10" width="28" height="44" rx="2" />
      
      {/* Halfway line & center circle */}
      <line x1="14" y1="32" x2="42" y2="32" />
      <circle cx="28" cy="32" r="6" />
      <circle cx="28" cy="32" r="1" fill="currentColor" />

      {/* Penalty boxes */}
      <path d="M20 10v7h16v-7" />
      <path d="M20 54v-7h16v7" />

      {/* Soccer ball on bottom right */}
      <circle cx="47" cy="45" r="8" fill="#f3fbff" />
      <polygon
        points="47,42 50,44 49,48 45,48 44,44"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <line x1="47" y1="42" x2="47" y2="37" />
      <line x1="50" y1="44" x2="54" y2="42" />
      <line x1="49" y1="48" x2="52" y2="51" />
      <line x1="45" y1="48" x2="42" y2="51" />
      <line x1="44" y1="44" x2="40" y2="42" />
    </svg>
  );
}

export function SplashIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Beach ball */}
      <circle cx="32" cy="27" r="14" />
      <ellipse cx="32" cy="14" rx="3" ry="1.5" fill="currentColor" />

      {/* Curved panels */}
      <path d="M32 14c-7 3 -11 9 -11 17" />
      <path d="M32 14c7 3 11 9 11 17" />
      <line x1="32" y1="14" x2="32" y2="41" />

      {/* Water ripples / waves */}
      <path d="M12 44c4 -2 8 2 12 0s8 -2 12 0s8 2 12 0s8 -2 12 0" strokeWidth="2" />
      <path d="M16 50c4 -1.5 8 1.5 12 0s8 -1.5 12 0s8 1.5 12 0" strokeWidth="1.8" />
    </svg>
  );
}

export function AppleIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Leaf */}
      <path d="M34 11c3 -3 8 -3 10 2c-3 3 -8 3 -10 -2z" />

      {/* Apple outline with bite taken out */}
      <path d="M41 23c2.5 3.5 1.5 7.5 -1.5 9.5c-2.5 1.5 -5 0.5 -7.5 -1c-2.5 1.5 -5 2.5 -8 1.5c-6 -2 -9 -8 -8 -15c1.5 -8 8.5 -11.5 14.5 -10.5c3.5 0.5 5.5 2.5 7 2.5c1.5 0 3.5 -2 7 -2.5c4 -0.5 7.5 1.5 9.5 4.5c-4 2.5 -4.5 7.5 -3 11z" />
    </svg>
  );
}
