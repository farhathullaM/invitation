import { useState, useEffect } from "react";

const NIKKAH = {
  title: "Nikkah",
  time: "11:00 AM",
  place: "Sunni Juma Masjid",
  area: "Chamapparambu",
  map: "https://maps.app.goo.gl/ycfx67ncyPtSgi6BA?g_st=ic",
};

const RECEPTION = {
  title: "Reception",
  time: "11:30 AM onwards",
  place: "VMM Arcade",
  area: "Karappuram",
  map: "https://maps.app.goo.gl/zUXF9jAb2gzvixps6?g_st=ic",
};

const TARGET = new Date("2026-11-12T11:00:00+05:30").getTime();

const Divider = () => (
  <div className="flex items-center justify-center gap-3 my-6 w-48 mx-auto">
    <div className="rule flex-1" />
    <span className="text-[#b08a45] text-xs">◆</span>
    <div className="rule flex-1" />
  </div>
);

const Label = ({ children }) => (
  <p className="tracking-[.3em] text-xs uppercase text-[#a37b3a] text-center">
    {children}
  </p>
);

function Countdown() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const d = Math.max(0, TARGET - now);
  const items = [
    ["Days", Math.floor(d / 864e5)],
    ["Hours", Math.floor(d / 36e5) % 24],
    ["Mins", Math.floor(d / 6e4) % 60],
    ["Secs", Math.floor(d / 1e3) % 60],
  ];

  return (
    <div className="grid grid-cols-4 gap-2 w-full max-w-xs mx-auto">
      {items.map(([label, value]) => (
        <div key={label} className="card py-3 text-center">
          <div className="text-3xl font-semibold">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-[10px] tracking-widest uppercase text-[#a37b3a]">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

function EventCard({ title, time, place, area, map }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const text = `${place}, ${area}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy address:", text);
    }
  };

  return (
    <div className="card p-6 w-full flex flex-col items-center text-center">
      <Label>{title}</Label>
      <p className="text-lg italic mt-2">12 November 2026</p>
      <p className="text-2xl font-semibold mt-1">{time}</p>
      <div className="rule w-full my-4" />
      <p className="tracking-[.2em] uppercase text-lg font-semibold">{place}</p>
      <p className="tracking-[.25em] uppercase text-xs mt-1 text-[#a37b3a]">
        {area}
      </p>
      <div className="grid grid-cols-2 gap-3 mt-5 w-full">
        <a
          href={map}
          target="_blank"
          rel="noopener noreferrer"
          className="gold rounded-xl py-3 text-xs tracking-[.2em] uppercase font-semibold flex items-center justify-center"
        >
          Get Directions
        </a>
        <button
          onClick={copy}
          className="gold rounded-xl py-3 text-xs tracking-[.2em] uppercase font-semibold flex items-center justify-center"
        >
          {copied ? "Copied ✓" : "Copy Address"}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="paper min-h-screen w-full overflow-x-hidden">
      {Array.from({ length: 9 }, (_, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${i * 11 + 4}%`,
            animationDuration: `${11 + i * 2}s`,
            animationDelay: `${-i * 2}s`,
          }}
        />
      ))}

      <main className="relative max-w-md mx-auto px-6 py-24 flex flex-col items-center text-center">
        {/* Opening */}
        <section className="fade flex flex-col items-center">
          <p className="arabic text-3xl text-[#a37b3a] py-5">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
          <Divider />
          <h1 className="text-4xl tracking-[.2em] uppercase font-semibold">
            Wedding
          </h1>
          <p className="tracking-[.4em] uppercase text-sm mt-1">Invitation</p>
          <Divider />
          <p className="italic text-[#6b7a5c] leading-relaxed">
            With the blessings of Allah and the love and prayers of our
            families, you are warmly invited to the wedding of
          </p>
          <h2 className="script text-6xl mt-6 leading-tight">Dr Febitha</h2>
            
              <p>D/O Hyderkutty &amp; Ansar Beegum</p>
           
          <p className="script text-5xl text-[#b08a45] my-4">&amp;</p>
          <h2 className="script text-6xl leading-tight">Dr Hisham</h2>
       
            <p>S/O Musthafa Eriyaden &amp; Ummu Habeeba</p>
          
        </section>

        <Divider />

        {/* Verse */}
        <section className="mt-8 flex flex-col items-center">
          <Label>From the Holy Qur’an</Label>
          <h3 className="script text-5xl text-[#a37b3a] mt-1">
            A Sacred Promise
          </h3>
          <p className="arabic text-2xl leading-[2.2] mt-5 font-bold">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
            لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً
          </p>
          <p className="italic mt-4 leading-relaxed">
            And of His signs is that He created for you from yourselves mates
            that you may find tranquillity in them; and He placed between you
            affection and mercy.
          </p>
          <p className="tracking-[.25em] uppercase text-xs mt-3 text-[#a37b3a]">
            Sūrah Ar-Rūm · 30:21
          </p>
        </section>

        <Divider />

        {/* Save the date */}
        <section className="mt-8 w-full flex flex-col items-center">
          <h3 className="script text-5xl text-[#a37b3a]">Save the Date</h3>
          <p className="tracking-[.25em] uppercase text-xs mt-2">
            Every moment brings us closer
          </p>
          <button
            onClick={() => setRevealed(true)}
            className="gold rounded-3xl w-full h-36 mt-6 flex flex-col items-center justify-center"
          >
            {revealed ? (
              <span className="fade flex flex-col items-center">
                <span className="text-4xl font-semibold">12</span>
                <span className="tracking-[.3em] uppercase text-sm">
                  November 2026
                </span>
                <span className="italic mt-1">Thursday</span>
              </span>
            ) : (
              <span className="flex flex-col items-center">
                <span className="tracking-[.3em] uppercase text-sm">
                  Tap to reveal
                </span>
                <span className="script text-3xl mt-1">our special day</span>
              </span>
            )}
          </button>
          {revealed && (
            <div className="mt-6 w-full fade">
              <Countdown />
            </div>
          )}
        </section>

        <Divider />

        {/* Venues */}
        <section className="mt-8 w-full flex flex-col items-center gap-6">
          <h3 className="script text-5xl text-[#a37b3a]">Where Hearts Meet</h3>
          <EventCard {...NIKKAH} />
          <EventCard {...RECEPTION} />
        </section>

        <Divider />

        {/* Footer */}
        <p className="script text-4xl text-[#a37b3a] mt-8">With love &amp; prayers</p>
        <p className="italic text-[#6b7a5c] mt-2">
          Your presence and duas will make our day complete.
        </p>
        <p className="mt-6 tracking-[.3em] uppercase text-xs text-[#a37b3a]">
          Febitha &amp; Hisham · 2026
        </p>
      </main>
    </div>
  );
}