import { useState } from 'react'
import { Heart } from 'lucide-react'

export function EnvelopeLanding({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false)

  const open = () => {
    if (opening) return
    setOpening(true)
    window.setTimeout(onOpen, 1250)
  }

  return <main className={`landing-screen fixed inset-0 z-20 flex min-h-screen items-center justify-center overflow-hidden px-5 py-12 text-center transition-opacity duration-700 ${opening ? 'pointer-events-none opacity-0' : 'opacity-100'}`}>
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true"><span className="ornament ornament-one" /><span className="ornament ornament-two" /><span className="absolute left-[8%] top-[15%] h-32 w-32 rounded-full bg-[#d4c39b]/20 blur-3xl" /><span className="absolute bottom-[10%] right-[6%] h-40 w-40 rounded-full bg-[#a3ad8e]/20 blur-3xl" /></div>
    <div className="relative z-10 flex w-full max-w-lg flex-col items-center">
      <p className="mb-3 text-[10px] uppercase tracking-[.38em] text-[#8f7954]">A little note for you</p>
      <h1 className="script text-5xl text-[#586349] sm:text-6xl">You’re invited</h1>
      <p className="mt-3 text-sm italic text-[#777762]">A celebration of love, faith &amp; family</p>
      <button onClick={open} aria-label="Open wedding invitation" className={`envelope-scene mt-12 w-full max-w-[370px] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#9b8255] ${opening ? 'is-opening' : ''}`}>
        <span className="envelope-letter"><span className="script text-4xl text-[#657052]">Faris <span className="text-[#b2935d]">&amp;</span> Shifa</span><span className="mt-2 block text-[9px] uppercase tracking-[.3em] text-[#8e7853]">16 · 11 · 2026</span></span>
        <span className="envelope-body" /><span className="envelope-flap" /><span className="envelope-front" />
        <span className="seal"><Heart size={20} fill="currentColor" strokeWidth={1.2} /></span>
      </button>
      <button onClick={open} className="mt-10 rounded-full border border-[#a58b60]/60 px-7 py-3 text-[10px] font-semibold uppercase tracking-[.28em] text-[#706346] transition hover:bg-[#a58b60] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9b8255]">Open invitation <span aria-hidden="true" className="ml-2">↗</span></button>
      <p className="mt-5 text-[10px] tracking-[.15em] text-[#91876f]">FARIS &amp; SHIFA · NOVEMBER 2026</p>
    </div>
  </main>
}
