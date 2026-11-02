type IllustrationVariant = 'medical-gas' | 'oxygen' | 'elevator';

const INK = '#0B2E3B';
const TEAL = '#0E7C86';
const AMBER = '#F4A62A';
const MUTED = '#5B6F78';
const LINE = '#C9D8DA';

function Grid({ id }: { id: string }) {
  return (
    <>
      <defs>
        <pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke={LINE} strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="480" height="300" fill="#F3F8F8" />
      <rect width="480" height="300" fill={`url(#${id})`} />
    </>
  );
}

function MedicalGasIllustration() {
  const rooms = ['ICU', 'OT', 'WARD'];
  const lines = [
    { y: 66, color: AMBER, label: 'O2' },
    { y: 150, color: TEAL, label: 'VAC' },
    { y: 234, color: MUTED, label: 'AIR' },
  ];
  return (
    <>
      <Grid id="grid-medical-gas" />
      {rooms.map((room, i) => (
        <g key={room}>
          <rect x="30" y={36 + i * 84} width="120" height="60" fill="#FFFFFF" stroke={INK} strokeWidth="1.2" />
          <text x="90" y={70 + i * 84} textAnchor="middle" fill={INK} fontSize="11" className="font-mono">
            {room}
          </text>
        </g>
      ))}
      {lines.map((line) => (
        <g key={line.label}>
          <line x1="150" y1={line.y} x2="450" y2={line.y} stroke={line.color} strokeWidth="4" />
          <line x1="150" y1={line.y} x2="450" y2={line.y} stroke="#FFFFFF" strokeWidth="1" strokeDasharray="6 6" opacity="0.6" />
          {[230, 310, 390].map((x) => (
            <g key={x}>
              <line x1={x} y1={line.y} x2={x} y2={line.y - 16} stroke={INK} strokeWidth="1" />
              <rect x={x - 6} y={line.y - 26} width="12" height="10" fill="#FFFFFF" stroke={INK} strokeWidth="1" />
            </g>
          ))}
          <text x="156" y={line.y - 8} fill={INK} fontSize="10" className="font-mono">
            {line.label}
          </text>
        </g>
      ))}
      <line x1="150" y1="280" x2="450" y2="280" stroke={INK} strokeWidth="0.8" />
      <path d="M150 275 L150 285 M450 275 L450 285" stroke={INK} strokeWidth="0.8" />
      <text x="300" y="272" textAnchor="middle" fill={INK} fontSize="9" className="font-mono">
        DISTRIBUTION RUN
      </text>
    </>
  );
}

function OxygenIllustration() {
  return (
    <>
      <Grid id="grid-oxygen" />
      <rect x="30" y="50" width="180" height="200" fill="#FFFFFF" stroke={INK} strokeWidth="1.2" />
      <text x="40" y="68" fill={INK} fontSize="9" className="font-mono">
        PLANT ROOM
      </text>
      <rect x="50" y="84" width="70" height="40" fill="none" stroke={INK} strokeWidth="1" />
      <text x="85" y="108" textAnchor="middle" fill={INK} fontSize="9" className="font-mono">
        COMPRESSOR
      </text>
      <rect x="50" y="150" width="70" height="40" fill="none" stroke={INK} strokeWidth="1" />
      <text x="85" y="174" textAnchor="middle" fill={INK} fontSize="9" className="font-mono">
        PSA UNIT
      </text>
      <rect x="140" y="150" width="58" height="40" fill="none" stroke={INK} strokeWidth="1" />
      <text x="169" y="174" textAnchor="middle" fill={INK} fontSize="9" className="font-mono">
        DRYER
      </text>
      <line x1="85" y1="124" x2="85" y2="150" stroke={INK} strokeWidth="1" strokeDasharray="3 3" />
      <line x1="120" y1="170" x2="140" y2="170" stroke={INK} strokeWidth="1" strokeDasharray="3 3" />

      {[262, 316, 370].map((x) => (
        <g key={x}>
          <rect x={x} y="100" width="36" height="110" rx="18" fill="#FFFFFF" stroke={INK} strokeWidth="1.2" />
          <line x1={x + 18} y1="82" x2={x + 18} y2="100" stroke={INK} strokeWidth="1" />
        </g>
      ))}
      <text x="316" y="236" textAnchor="middle" fill={INK} fontSize="9" className="font-mono">
        BUFFER VESSELS
      </text>

      <line x1="210" y1="170" x2="262" y2="170" stroke={AMBER} strokeWidth="4" />
      <line x1="210" y1="90" x2="450" y2="90" stroke={TEAL} strokeWidth="3" />
      <line x1="450" y1="90" x2="450" y2="40" stroke={TEAL} strokeWidth="3" />
      <line x1="298" y1="170" x2="450" y2="170" stroke={AMBER} strokeWidth="4" />
      <line x1="450" y1="170" x2="450" y2="236" stroke={AMBER} strokeWidth="4" />
      <text x="300" y="162" fill={AMBER} fontSize="9" className="font-mono">
        O2 HEADER
      </text>
      <text x="300" y="82" fill={TEAL} fontSize="9" className="font-mono">
        MEDICAL AIR
      </text>
      <circle cx="450" cy="40" r="4" fill={INK} />
      <text x="404" y="30" fill={INK} fontSize="9" className="font-mono">
        TO WARDS
      </text>
    </>
  );
}

function ElevatorIllustration() {
  const landings = [
    { y: 70, label: 'L4' },
    { y: 130, label: 'L3' },
    { y: 190, label: 'L2' },
    { y: 250, label: 'L1' },
  ];
  return (
    <>
      <Grid id="grid-elevator" />
      <rect x="170" y="20" width="150" height="260" fill="#FFFFFF" stroke={INK} strokeWidth="1.4" />
      <rect x="182" y="32" width="126" height="236" fill="none" stroke={LINE} strokeWidth="1" strokeDasharray="4 4" />
      <line x1="190" y1="32" x2="190" y2="268" stroke={MUTED} strokeWidth="2" />
      <line x1="300" y1="32" x2="300" y2="268" stroke={MUTED} strokeWidth="2" />
      {landings.map((l) => (
        <g key={l.label}>
          <line x1="120" y1={l.y} x2="170" y2={l.y} stroke={INK} strokeWidth="1" />
          <line x1="320" y1={l.y} x2="370" y2={l.y} stroke={INK} strokeWidth="1" />
          <text x="112" y={l.y + 4} textAnchor="end" fill={INK} fontSize="10" className="font-mono">
            {l.label}
          </text>
        </g>
      ))}
      <rect x="205" y="170" width="80" height="80" fill="#DDF0EE" stroke={INK} strokeWidth="1.6" />
      <line x1="245" y1="170" x2="245" y2="250" stroke={INK} strokeWidth="1" />
      <line x1="215" y1="158" x2="275" y2="158" stroke={INK} strokeWidth="0.8" />
      <line x1="285" y1="170" x2="335" y2="150" stroke={AMBER} strokeWidth="1" />
      <text x="340" y="148" fill={INK} fontSize="9" className="font-mono">
        CAR
      </text>
      <text x="245" y="50" textAnchor="middle" fill={MUTED} fontSize="9" className="font-mono">
        HOISTWAY
      </text>
      <line x1="85" y1="20" x2="85" y2="280" stroke={INK} strokeWidth="0.8" />
      <path d="M80 25 L90 15 M80 285 L90 275" stroke={INK} strokeWidth="0.8" />
      <text x="70" y="150" textAnchor="middle" fill={INK} fontSize="9" className="font-mono" transform="rotate(-90 70 150)">
        SHAFT HEIGHT
      </text>
    </>
  );
}

export default function ProjectIllustration({ variant }: { variant: IllustrationVariant }) {
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" role="img" aria-label={`Illustrative ${variant.replace('-', ' ')} technical diagram`}>
      {variant === 'medical-gas' && <MedicalGasIllustration />}
      {variant === 'oxygen' && <OxygenIllustration />}
      {variant === 'elevator' && <ElevatorIllustration />}
    </svg>
  );
}
