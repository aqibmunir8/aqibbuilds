import React from "react";

export interface ClientLogo {
  name: string;
  render: (props: { className?: string }) => React.JSX.Element;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: "PULSE SYS",
    render: ({ className = "h-8 sm:h-9 w-auto" }) => (
      <svg
        className={className}
        viewBox="0 0 160 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="PULSE SYS"
      >
        {/* ECG pulse rhythm wave */}
        <path
          d="M3 16 h6 l3.5 -8 l5 16 l4 -13 l3.5 7 h6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* PULSE text */}
        <text
          x="38"
          y="21"
          fontSize="15"
          fontWeight="800"
          letterSpacing="0.14em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          PULSE
        </text>
        {/* SYS text */}
        <text
          x="115"
          y="20"
          fontSize="10"
          fontWeight="500"
          letterSpacing="0.22em"
          fontFamily="system-ui, -apple-system, sans-serif"
          opacity="0.8"
        >
          SYS
        </text>
      </svg>
    ),
  },
  {
    name: "APEX CORP",
    render: ({ className = "h-8 sm:h-9 w-auto" }) => (
      <svg
        className={className}
        viewBox="0 0 160 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="APEX CORP"
      >
        {/* Geometric delta / chevron mark */}
        <g transform="translate(4, 5)">
          <path
            d="M10 0 L20 22 L14 22 L10 13 L6 22 L0 22 Z"
            fill="currentColor"
          />
        </g>
        {/* APEX text */}
        <text
          x="34"
          y="21.5"
          fontSize="16"
          fontWeight="800"
          letterSpacing="0.16em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          APEX
        </text>
        {/* CORP text */}
        <text
          x="97"
          y="21"
          fontSize="10.5"
          fontWeight="500"
          letterSpacing="0.22em"
          fontFamily="system-ui, -apple-system, sans-serif"
          opacity="0.85"
        >
          CORP
        </text>
      </svg>
    ),
  },
  {
    name: "NOVA STREAM",
    render: ({ className = "h-8 sm:h-9 w-auto" }) => (
      <svg
        className={className}
        viewBox="0 0 180 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="NOVA STREAM"
      >
        {/* Aperture / orbit target mark */}
        <g transform="translate(3, 4)">
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <circle cx="12" cy="12" r="3.5" fill="currentColor" />
        </g>
        {/* NOVA text */}
        <text
          x="35"
          y="21.5"
          fontSize="15.5"
          fontWeight="800"
          letterSpacing="0.16em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          NOVA
        </text>
        {/* STREAM text */}
        <text
          x="94"
          y="21.5"
          fontSize="13"
          fontStyle="italic"
          fontWeight="500"
          letterSpacing="0.14em"
          fontFamily="'Times New Roman', Georgia, serif"
          opacity="0.85"
        >
          STREAM
        </text>
      </svg>
    ),
  },
  {
    name: "SYNAPSE AI",
    render: ({ className = "h-8 sm:h-9 w-auto" }) => (
      <svg
        className={className}
        viewBox="0 0 170 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SYNAPSE AI"
      >
        {/* 3-node connected synaptic graph mark */}
        <g transform="translate(3, 5)">
          {/* Connector lines */}
          <line
            x1="5"
            y1="11"
            x2="16"
            y2="4"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="5"
            y1="11"
            x2="16"
            y2="18"
            stroke="currentColor"
            strokeWidth="2"
          />
          {/* Nodes */}
          <circle cx="5" cy="11" r="3.2" fill="currentColor" />
          <circle cx="16" cy="4" r="3.2" fill="currentColor" />
          <circle cx="16" cy="18" r="3.2" fill="currentColor" />
        </g>
        {/* SYNAPSE text */}
        <text
          x="30"
          y="21.5"
          fontSize="15.5"
          fontWeight="800"
          letterSpacing="0.16em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          SYNAPSE
        </text>
        {/* [ AI ] badge pill */}
        <g transform="translate(126, 7)">
          <rect
            x="0"
            y="0"
            width="25"
            height="18"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.85"
          />
          <text
            x="5.5"
            y="13"
            fontSize="10"
            fontWeight="700"
            letterSpacing="0.08em"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            AI
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "VANGUARD",
    render: ({ className = "h-8 sm:h-9 w-auto" }) => (
      <svg
        className={className}
        viewBox="0 0 155 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="VANGUARD"
      >
        {/* Dual chevron arrows */}
        <g transform="translate(3, 7)">
          <path
            d="M0 0 L7 9 L0 18 L5 18 L12 9 L5 0 Z"
            fill="currentColor"
          />
          <path
            d="M7 0 L14 9 L7 18 L12 18 L19 9 L12 0 Z"
            fill="currentColor"
          />
        </g>
        {/* VANGUARD text */}
        <text
          x="32"
          y="21.5"
          fontSize="16.5"
          fontWeight="900"
          letterSpacing="0.16em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          VANGUARD
        </text>
      </svg>
    ),
  },
  {
    name: "KINETIC LABS",
    render: ({ className = "h-8 sm:h-9 w-auto" }) => (
      <svg
        className={className}
        viewBox="0 0 175 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="KINETIC LABS"
      >
        {/* Kinetic orbital dynamics mark */}
        <g transform="translate(3, 4)">
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4.5"
            transform="rotate(-30 12 12)"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </g>
        {/* KINETIC text */}
        <text
          x="34"
          y="21.5"
          fontSize="15.5"
          fontWeight="800"
          letterSpacing="0.14em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          KINETIC
        </text>
        {/* LABS text */}
        <text
          x="122"
          y="21"
          fontSize="11"
          fontWeight="500"
          letterSpacing="0.2em"
          fontFamily="system-ui, -apple-system, sans-serif"
          opacity="0.8"
        >
          LABS
        </text>
      </svg>
    ),
  },
];
