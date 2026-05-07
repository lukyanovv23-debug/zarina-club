import { ArrowRight } from 'lucide-react'

export function Splash({ onStart }: { onStart: () => void }) {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#1a1410] text-white">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410]/30 via-[#1a1410]/60 to-[#1a1410]" />

      <div className="relative z-10 flex flex-1 flex-col p-8 pt-24">
        <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.3em] text-white/70">
          <span>Z A R I N A</span>
          <span className="text-white/30">·</span>
          <span>C L U B</span>
        </div>

        <div className="mt-auto">
          <h1 className="font-display text-[54px] font-normal leading-[1] tracking-[-0.02em]">
            Стиль, который<br />становится <span className="font-bold text-[hsl(var(--brand-soft))]">привычкой</span>
          </h1>
          <p className="mt-5 max-w-[280px] text-[14px] leading-relaxed text-white/70">
            Lifestyle-клуб ZARINA: ежедневные практики, AI-стилист и программа лояльности нового типа.
          </p>

          <button
            onClick={onStart}
            className="mt-10 flex w-full items-center justify-between rounded-full bg-white px-6 py-4 text-[15px] font-semibold text-[#1a1410]"
          >
            Войти в клуб
            <ArrowRight size={18} />
          </button>
          <button className="mt-3 w-full py-3 text-[13px] text-white/60">
            У меня уже есть аккаунт
          </button>
        </div>
      </div>
    </div>
  )
}
