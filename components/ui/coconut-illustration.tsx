import type { SVGProps } from "react";

/**
 * Cartoon coconut pair (one whole, one halved) drawn in `currentColor`,
 * meant to sit behind content as a faint decorative watermark.
 */
export function CoconutIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 420 400"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {/* Palm leaf */}
      <path
        d="M150 70C190 10 270 0 330 22c-58 6-104 34-132 76"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M150 70c46-34 96-48 180-48"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Whole coconut */}
      <circle cx="150" cy="180" r="118" fill="currentColor" opacity="0.8" />
      <g fill="currentColor">
        <ellipse cx="118" cy="128" rx="13" ry="17" />
        <ellipse cx="170" cy="118" rx="13" ry="17" />
        <ellipse cx="148" cy="166" rx="12" ry="15" />
      </g>
      <g stroke="currentColor" strokeWidth="5" strokeLinecap="round">
        <path d="M58 150c-6 26-4 52 6 76" />
        <path d="M84 232c10 22 26 38 46 48" />
        <path d="M96 196c4 14 10 24 18 32" />
        <path d="M222 110c12 14 20 30 24 48" />
      </g>

      {/* Halved coconut */}
      <ellipse cx="282" cy="262" rx="128" ry="120" fill="currentColor" />
      <ellipse cx="282" cy="262" rx="106" ry="98" fill="#fff" opacity="0.85" />
      <ellipse
        cx="282"
        cy="262"
        rx="76"
        ry="68"
        fill="currentColor"
        opacity="0.45"
      />
      <path
        d="M236 236c10-18 30-30 52-30"
        stroke="#fff"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.8"
      />
      <g stroke="currentColor" strokeWidth="5" strokeLinecap="round">
        <path d="M166 318l-14 14" />
        <path d="M206 356l-8 18" />
        <path d="M388 338l14 12" />
      </g>
    </svg>
  );
}
