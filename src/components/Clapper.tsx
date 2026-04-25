'use client'

export function Clapper() {
  return (
    <svg
      width="280"
      height="280"
      viewBox="0 0 280 280"
      className="animate-clapper-spin drop-shadow-2xl"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Clapper board main body */}
      <rect
        x="20"
        y="100"
        width="240"
        height="140"
        rx="8"
        fill="#1A1A18"
        stroke="#C8A97E"
        strokeWidth="2"
      />

      {/* Clapper board stripes background */}
      <defs>
        <pattern
          id="stripes"
          patternUnits="userSpaceOnUse"
          width="20"
          height="20"
        >
          <rect width="10" height="20" fill="#000" />
          <rect x="10" y="0" width="10" height="20" fill="#C8A97E" />
        </pattern>
      </defs>

      {/* Top clapper stick - rotating */}
      <g
        className="origin-center animate-clapper-flip"
        style={{
          transformOrigin: "140px 100px",
          transformStyle: "preserve-3d",
        }}
      >
        <rect
          x="80"
          y="40"
          width="120"
          height="60"
          rx="4"
          fill="#C8A97E"
          stroke="#9E7D52"
          strokeWidth="2"
        />

        {/* Stripes on top bar */}
        <rect
          x="85"
          y="45"
          width="110"
          height="50"
          fill="url(#stripes)"
          opacity="0.7"
        />

        {/* Text on clapper */}
        <text
          x="140"
          y="82"
          textAnchor="middle"
          fill="#1A1A18"
          fontSize="14"
          fontWeight="700"
          fontFamily="DM Sans"
        >
          CENA
        </text>
      </g>

      {/* Fixed bottom part */}
      <rect
        x="40"
        y="100"
        width="200"
        height="130"
        fill="url(#stripes)"
        opacity="0.4"
      />

      {/* Frame numbers - left */}
      <text
        x="60"
        y="155"
        fill="#C8A97E"
        fontSize="18"
        fontWeight="700"
        fontFamily="DM Sans"
      >
        001
      </text>

      {/* Scene info */}
      <text
        x="140"
        y="155"
        textAnchor="middle"
        fill="#C8A97E"
        fontSize="12"
        fontWeight="500"
        fontFamily="DM Sans"
      >
        AÇÃO
      </text>

      {/* Take number - right */}
      <text
        x="220"
        y="155"
        textAnchor="end"
        fill="#C8A97E"
        fontSize="18"
        fontWeight="700"
        fontFamily="DM Sans"
      >
        1
      </text>

      {/* Bottom label */}
      <text
        x="140"
        y="210"
        textAnchor="middle"
        fill="#C8A97E"
        fontSize="11"
        fontWeight="500"
        fontFamily="DM Sans"
        opacity="0.7"
      >
        Ready for production
      </text>

      {/* Accent circles */}
      <circle cx="50" cy="120" r="3" fill="#C8A97E" opacity="0.6" />
      <circle cx="230" cy="210" r="3" fill="#C8A97E" opacity="0.6" />
    </svg>
  )
}
