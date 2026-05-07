import { useState } from 'react'
import { Play, Heart, Clock, ChevronRight, Headphones, Pause, SkipForward, SkipBack } from 'lucide-react'
import { wellnessTracks, wellnessCategories } from '@/lib/data'

export function Wellness() {
  const [cat, setCat] = useState('Все')

  return (
    <div className="absolute inset-0 overflow-y-auto pb-44 no-scrollbar">
      <div className="px-6 pt-14">
        <p className="text-[12px] tracking-wide text-foreground/50">Wellness</p>
        <h1 className="font-display text-[28px] leading-tight">Сегодня для себя</h1>
      </div>

      {/* Daily practice */}
      <div className="mt-5 px-6">
        <div className="relative overflow-hidden rounded-[24px] bg-card border border-border">
          <div className="relative aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=900&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-x-5 top-5 flex items-center gap-2 text-white">
              <span className="rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-foreground">
                Практика дня
              </span>
              <span className="rounded-full bg-black/30 backdrop-blur px-2.5 py-1 text-[10px] font-semibold">
                +30 баллов
              </span>
            </div>
            <div className="absolute inset-x-5 bottom-4 text-white">
              <h3 className="font-display text-[24px] leading-tight">Утренняя ясность</h3>
              <div className="mt-1.5 flex items-center gap-3 text-[11px] text-white/80">
                <span className="flex items-center gap-1"><Clock size={11} /> 5:12</span>
                <span className="flex items-center gap-1"><Headphones size={11} /> аудио</span>
              </div>
            </div>
          </div>

          {/* Player bar */}
          <div className="flex items-center gap-3 p-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background">
              <Play size={15} fill="currentColor" className="ml-0.5" />
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-semibold">Дыхание 4-7-8</p>
              <div className="mt-1.5 flex items-center gap-2">
                <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-foreground" style={{ width: '34%' }} />
                </div>
                <span className="text-[10px] text-foreground/55">1:46 / 5:12</span>
              </div>
            </div>
            <button className="text-foreground/60">
              <Heart size={18} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mt-7">
        <div className="flex gap-2 overflow-x-auto px-6 pb-1 no-scrollbar">
          {wellnessCategories.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`shrink-0 rounded-full border px-4 py-2 text-[12px] font-semibold transition-all ${
                cat === c
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border bg-card text-foreground/70'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Tracks */}
      <div className="mt-5 px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/45 uppercase">
              Программы
            </p>
            <h3 className="font-display text-[22px] leading-tight">Треки</h3>
          </div>
          <button className="flex items-center gap-1 text-[12px] text-foreground/60">
            Все <ChevronRight size={14} />
          </button>
        </div>

        <div className="mt-3 space-y-3">
          {wellnessTracks.map(t => (
            <div key={t.title} className="flex gap-3 overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative aspect-square w-[110px] shrink-0">
                <img src={t.cover} className="absolute inset-0 h-full w-full object-cover" />
                {t.progress > 0 && (
                  <div className="absolute inset-x-2 bottom-2">
                    <div className="h-0.5 overflow-hidden rounded-full bg-white/30">
                      <div className="h-full rounded-full bg-white" style={{ width: `${t.progress * 100}%` }} />
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col justify-center p-3 pl-0 pr-3">
                <span className="text-[10px] font-semibold tracking-[0.15em] text-[hsl(var(--brand))] uppercase">
                  {t.category}
                </span>
                <h4 className="mt-0.5 font-display text-[18px] leading-tight">{t.title}</h4>
                <p className="mt-1 text-[11px] text-foreground/55">{t.days} дней</p>
                {t.progress > 0 ? (
                  <p className="mt-1 text-[11px] font-semibold text-foreground">
                    {Math.round(t.days * t.progress)} / {t.days} · продолжить
                  </p>
                ) : (
                  <p className="mt-1 text-[11px] font-semibold text-[hsl(var(--brand))]">Начать</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mini player */}
      <div className="absolute bottom-24 inset-x-3 z-10">
        <div className="flex items-center gap-3 rounded-full border border-border bg-card/95 backdrop-blur px-3 py-2 shadow-sm">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=120&q=70" className="h-full w-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-[12px] font-semibold">Дыхание 4-7-8 · Утренняя ясность</p>
            <p className="text-[10px] text-foreground/55">1:46 / 5:12</p>
          </div>
          <div className="flex items-center gap-1 text-foreground/70">
            <button className="p-1.5"><SkipBack size={14} /></button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background">
              <Pause size={13} fill="currentColor" />
            </button>
            <button className="p-1.5"><SkipForward size={14} /></button>
          </div>
        </div>
      </div>

      <div className="h-4" />
    </div>
  )
}
