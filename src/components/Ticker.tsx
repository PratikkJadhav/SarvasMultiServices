import { siteContent } from '@/data/siteContent';

const { items } = siteContent.ticker;

const maskStyle = {
  maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
  WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
};

function TickerRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span key={item} className="flex shrink-0 items-center">
          <span className="whitespace-nowrap px-8 font-mono text-sm uppercase tracking-[0.18em] text-navy">{item}</span>
          <span className="h-2 w-2 shrink-0 rotate-45 bg-amber" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="marquee-wrap overflow-hidden border-y border-line bg-paper py-5" style={maskStyle}>
      <div className="marquee-track flex w-max">
        <TickerRow />
        <TickerRow hidden />
      </div>
    </div>
  );
}
