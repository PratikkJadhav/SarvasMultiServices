import type { CSSProperties } from 'react';

const TEAL_LINE = '#5CC6CC';
const AMBER = '#F4A62A';
const MINT = '#DDF0EE';

const boxes = [
  { label: 'MAIN HOSPITAL', x: 190, y: 28, w: 180, h: 52, delay: 200 },
  { label: 'ICU / OT BLOCK', x: 40, y: 170, w: 170, h: 52, delay: 700 },
  { label: 'OXYGEN PLANT', x: 350, y: 170, w: 170, h: 52, delay: 800 },
  { label: 'VACUUM PLANT', x: 350, y: 320, w: 170, h: 52, delay: 1200 },
];

const pipes = [
  { d: 'M435 170 V120 H330 V80', color: AMBER, width: 3, delay: 400, label: 'O2 LINE', lx: 360, ly: 112 },
  { d: 'M230 80 V110 H125 V170', color: TEAL_LINE, width: 3, delay: 900, label: 'MEDICAL GAS', lx: 138, ly: 102 },
  { d: 'M350 196 H210', color: TEAL_LINE, width: 2, delay: 1400, label: 'MEDICAL AIR', lx: 218, ly: 188 },
  { d: 'M350 346 H150 V222', color: TEAL_LINE, width: 2, delay: 1900, label: 'VACUUM LINE', lx: 200, ly: 362 },
];

const junctions = [
  { cx: 435, cy: 170 },
  { cx: 330, cy: 80 },
  { cx: 230, cy: 80 },
  { cx: 125, cy: 170 },
  { cx: 350, cy: 196 },
  { cx: 150, cy: 346 },
];

export default function PipelineDiagram() {
  return (
    <svg
      viewBox="0 0 560 430"
      className="h-auto w-full"
      role="img"
      aria-label="Illustrative medical gas pipeline layout linking the main hospital, ICU and OT block, oxygen plant and vacuum plant"
      fill="none"
    >
      <defs>
        <pattern id="diagram-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" stroke="rgba(221,240,238,0.08)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="560" height="430" fill="url(#diagram-grid)" />
      <rect x="8" y="8" width="544" height="414" stroke="rgba(221,240,238,0.3)" />

      <g className="diagram-fade" style={{ animationDelay: '2300ms' } as CSSProperties}>
        <circle cx="60" cy="60" r="15" stroke="rgba(221,240,238,0.5)" />
        <path d="M60 72 V50 M55 55 L60 50 L65 55" stroke={MINT} strokeWidth="1.5" />
        <text x="60" y="32" textAnchor="middle" fill={MINT} fontSize="10" className="font-mono">
          N
        </text>
      </g>

      <g>
        {boxes.map((box) => (
          <g key={box.label} className="diagram-fade" style={{ animationDelay: `${box.delay}ms` } as CSSProperties}>
            <rect x={box.x} y={box.y} width={box.w} height={box.h} stroke="rgba(221,240,238,0.6)" fill="rgba(14,124,134,0.12)" />
            <rect x={box.x + 4} y={box.y + 4} width={box.w - 8} height={box.h - 8} stroke="rgba(221,240,238,0.15)" />
            <text
              x={box.x + box.w / 2}
              y={box.y + box.h / 2 + 4}
              textAnchor="middle"
              fill={MINT}
              fontSize="11"
              letterSpacing="1.5"
              className="font-mono"
            >
              {box.label}
            </text>
          </g>
        ))}
      </g>

      <g>
        {pipes.map((pipe) => (
          <path
            key={pipe.label}
            d={pipe.d}
            pathLength={1}
            stroke={pipe.color}
            strokeWidth={pipe.width}
            strokeLinecap="square"
            strokeLinejoin="miter"
            className="pipe-draw"
            style={{ '--d': `${pipe.delay}ms` } as CSSProperties}
          />
        ))}
        {junctions.map((j) => (
          <circle
            key={`${j.cx}-${j.cy}`}
            cx={j.cx}
            cy={j.cy}
            r="4"
            fill="#0B2E3B"
            stroke={AMBER}
            strokeWidth="1.5"
            className="diagram-fade"
            style={{ animationDelay: '1600ms' } as CSSProperties}
          />
        ))}
      </g>

      <g>
        {pipes.map((pipe) => (
          <text
            key={`label-${pipe.label}`}
            x={pipe.lx}
            y={pipe.ly}
            fill={pipe.color === AMBER ? AMBER : MINT}
            fontSize="9"
            letterSpacing="1"
            className="diagram-fade font-mono"
            style={{ animationDelay: `${pipe.delay + 1200}ms` } as CSSProperties}
          >
            {pipe.label}
          </text>
        ))}
      </g>

      <g className="diagram-fade" style={{ animationDelay: '2400ms' } as CSSProperties}>
        <line x1="40" y1="404" x2="520" y2="404" stroke="rgba(221,240,238,0.5)" />
        {[40, 280, 520].map((x) => (
          <path key={x} d={`M${x - 5} 409 L${x + 5} 399`} stroke={MINT} strokeWidth="1.2" />
        ))}
        <text x="280" y="396" textAnchor="middle" fill={MINT} fontSize="9" letterSpacing="1" className="font-mono">
          DIM. A
        </text>
        <line x1="24" y1="28" x2="24" y2="222" stroke="rgba(221,240,238,0.5)" />
        {[28, 222].map((y) => (
          <path key={y} d={`M19 ${y + 5} L29 ${y - 5}`} stroke={MINT} strokeWidth="1.2" />
        ))}
        <text
          x="14"
          y="125"
          textAnchor="middle"
          fill={MINT}
          fontSize="9"
          letterSpacing="1"
          className="font-mono"
          transform="rotate(-90 14 125)"
        >
          DIM. B
        </text>
      </g>

      <g className="diagram-fade" style={{ animationDelay: '2500ms' } as CSSProperties}>
        <text x="40" y="268" fill={AMBER} fontSize="9" letterSpacing="1" className="font-mono">
          NOTE 01
        </text>
        <text x="40" y="282" fill={MINT} fontSize="9" letterSpacing="0.5" className="font-mono">
          ROUTING SUBJECT
        </text>
        <text x="40" y="296" fill={MINT} fontSize="9" letterSpacing="0.5" className="font-mono">
          TO SITE SURVEY
        </text>
      </g>

      <g className="diagram-fade" style={{ animationDelay: '2600ms' } as CSSProperties}>
        <text x="380" y="24" fill={MINT} fontSize="9" letterSpacing="1" className="font-mono">
          SCALE
        </text>
        <rect x="380" y="30" width="35" height="6" fill={MINT} />
        <rect x="415" y="30" width="35" height="6" stroke={MINT} />
        <rect x="450" y="30" width="35" height="6" fill={MINT} />
        <text x="380" y="50" fill={MINT} fontSize="9" className="font-mono">
          0
        </text>
        <text x="415" y="50" fill={MINT} fontSize="9" className="font-mono">
          5
        </text>
        <text x="450" y="50" fill={MINT} fontSize="9" className="font-mono">
          10 M
        </text>
      </g>
    </svg>
  );
}
