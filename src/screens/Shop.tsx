import { useState } from 'react'
import { Search, Heart, ShoppingBag, SlidersHorizontal, Sparkles } from 'lucide-react'
import { products, shopCategories } from '@/lib/data'

export function Shop() {
  const [cat, setCat] = useState('Новое')

  return (
    <div className="absolute inset-0 overflow-y-auto pb-28 no-scrollbar">
      <div className="px-6 pt-14">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[12px] tracking-wide text-foreground/50">Магазин</p>
            <h1 className="font-display text-[28px] leading-tight">ZARINA · SS26</h1>
          </div>
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card">
            <Heart size={17} strokeWidth={1.6} />
          </button>
        </div>

        {/* Search + filter */}
        <div className="mt-5 flex gap-2">
          <div className="flex flex-1 items-center gap-2 rounded-full border border-border bg-card px-4 py-3">
            <Search size={16} className="text-foreground/50" />
            <input placeholder="Найти товар" className="flex-1 bg-transparent text-[13px] outline-none" />
          </div>
          <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card">
            <SlidersHorizontal size={16} strokeWidth={1.6} />
          </button>
        </div>
      </div>

      {/* AI banner */}
      <div className="mt-5 px-6">
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-gradient-to-r from-[hsl(var(--brand-soft))]/50 to-transparent p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <Sparkles size={16} className="text-[hsl(var(--brand-deep))]" strokeWidth={1.6} />
          </div>
          <div className="flex-1">
            <p className="text-[13px] font-semibold leading-tight text-[hsl(var(--brand-deep))]">
              Подобрано под ваш гардероб
            </p>
            <p className="text-[11px] text-foreground/60">7 вещей, которые соберут капсулу</p>
          </div>
        </div>
      </div>

      {/* Category chips */}
      <div className="mt-5 flex gap-2 overflow-x-auto px-6 pb-1 no-scrollbar">
        {shopCategories.map(c => (
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

      {/* Hero card */}
      <div className="mt-5 px-6">
        <div className="relative overflow-hidden rounded-[24px] bg-card">
          <div className="relative aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-4 text-white">
              <span className="rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-foreground">
                Новая коллекция
              </span>
              <h3 className="mt-2 font-display text-[26px] leading-tight">Капсула «Тихий весенний свет»</h3>
              <p className="mt-1 text-[12px] opacity-80">12 базовых вещей · только для Insider</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="mt-6 grid grid-cols-2 gap-3 px-6">
        {products.map(p => (
          <div key={p.name} className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative aspect-[3/4]">
              <img src={p.img} className="absolute inset-0 h-full w-full object-cover" />
              {p.tag && (
                <span className="absolute left-2 top-2 rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-semibold tracking-wide text-foreground">
                  {p.tag}
                </span>
              )}
              <button className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/85 backdrop-blur text-foreground/70">
                <Heart size={13} strokeWidth={1.6} />
              </button>
            </div>
            <div className="p-3">
              <p className="text-[12px] font-semibold leading-tight">{p.name}</p>
              <div className="mt-1 flex items-center justify-between">
                <p className="text-[12px] font-semibold">{p.price}</p>
                <button className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background">
                  <ShoppingBag size={12} strokeWidth={1.8} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-4" />
    </div>
  )
}
