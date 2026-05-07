import { useState } from 'react'
import { Camera, Plus, Sparkles, Wand2, Search, ArrowRight, MessageCircle } from 'lucide-react'
import { wardrobeCategories, wardrobeItems, outfits } from '@/lib/data'

export function Stylist() {
  const [tab, setTab] = useState<'wardrobe' | 'outfits' | 'chat'>('wardrobe')

  return (
    <>
      <div className={`absolute inset-0 overflow-y-auto no-scrollbar ${tab === 'chat' ? 'pb-44' : 'pb-28'}`}>
        <div className="px-6 pt-14">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[12px] tracking-wide text-foreground/50">AI-стилист</p>
              <h1 className="font-display text-[28px] leading-tight">Гардероб</h1>
            </div>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
              <Plus size={18} strokeWidth={2} />
            </button>
          </div>

          {/* Tabs */}
          <div className="mt-5 flex gap-1 rounded-full border border-border bg-card p-1">
            {[
              { id: 'wardrobe', label: 'Мои вещи' },
              { id: 'outfits', label: 'Образы' },
              { id: 'chat', label: 'Стилист' },
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id as any)}
                className={`flex-1 rounded-full py-2 text-[12px] font-semibold transition-all ${
                  tab === t.id ? 'bg-foreground text-background' : 'text-foreground/55'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {tab === 'wardrobe' && <WardrobeTab />}
        {tab === 'outfits' && <OutfitsTab />}
        {tab === 'chat' && <ChatTab />}
      </div>

      {tab === 'chat' && <ChatInputBar />}
    </>
  )
}

function ChatInputBar() {
  return (
    <div className="absolute inset-x-0 bottom-[88px] z-20 px-4">
      <div className="pointer-events-none absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-background to-transparent" />
      <div className="relative flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 shadow-[0_8px_24px_-8px_rgba(50,30,20,0.18)]">
        <MessageCircle size={16} className="text-foreground/50" />
        <input
          placeholder="Спросите стилиста..."
          className="flex-1 bg-transparent text-[13px] outline-none"
        />
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background">
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}

function WardrobeTab() {
  const [cat, setCat] = useState('Всё')

  const filtered = cat === 'Всё' ? wardrobeItems : wardrobeItems.filter(i => i.cat === cat)

  return (
    <>
      <div className="px-6 pt-5">
        {/* AI capsule recommendation */}
        <div className="relative overflow-hidden rounded-[22px] border border-border bg-gradient-to-br from-[hsl(var(--brand-soft))]/60 to-[hsl(var(--brand))]/15 p-5">
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.2em] text-[hsl(var(--brand-deep))] uppercase">
                <Wand2 size={11} />
                <span>Совет стилиста</span>
              </div>
              <h3 className="mt-2 font-display text-[19px] leading-snug text-[hsl(var(--brand-deep))]">
                Вашему гардеробу не хватает<br />2 вещей для капсулы
              </h3>
              <button className="mt-3 inline-flex items-center gap-1 rounded-full bg-[hsl(var(--brand-deep))] px-3.5 py-2 text-[11px] font-semibold text-white">
                Подобрать
                <ArrowRight size={12} />
              </button>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <Sparkles size={22} className="text-[hsl(var(--brand-deep))]" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="mt-5 px-6">
        <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3">
          <Search size={16} className="text-foreground/50" />
          <input placeholder="Найти в гардеробе" className="flex-1 bg-transparent text-[13px] outline-none" />
        </div>
      </div>

      {/* Category chips */}
      <div className="mt-4 flex gap-2 overflow-x-auto px-6 pb-1 no-scrollbar">
        {wardrobeCategories.map(c => (
          <button
            key={c.name}
            onClick={() => setCat(c.name)}
            className={`shrink-0 rounded-full border px-4 py-2 text-[12px] font-semibold transition-all ${
              cat === c.name
                ? 'border-foreground bg-foreground text-background'
                : 'border-border bg-card text-foreground/70'
            }`}
          >
            {c.name}
            <span className="ml-1.5 opacity-60">{c.count}</span>
          </button>
        ))}
      </div>

      {/* Items grid */}
      <div className="mt-4 grid grid-cols-2 gap-3 px-6">
        {/* Add tile */}
        <button className="flex aspect-[3/4] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-card text-foreground/55">
          <Camera size={22} strokeWidth={1.5} />
          <span className="text-[12px] font-semibold">Добавить фото</span>
          <span className="text-[10px]">AI распознает вещь</span>
        </button>

        {filtered.map(it => (
          <div key={it.name} className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative aspect-[3/4]">
              <img src={it.img} className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="p-2.5">
              <p className="text-[12px] font-semibold leading-tight">{it.name}</p>
              <p className="text-[10px] text-foreground/55">{it.cat}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="h-4" />
    </>
  )
}

function OutfitsTab() {
  return (
    <>
      <div className="px-6 pt-5">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/45 uppercase">
          На сегодня
        </p>
        <h3 className="font-display text-[20px] leading-tight">Подобрано стилистом</h3>

        <div className="mt-4 space-y-3">
          {outfits.map(o => (
            <div key={o.occasion} className="overflow-hidden rounded-[22px] border border-border bg-card">
              <div className="relative aspect-[16/10]">
                <img src={o.cover} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-x-4 bottom-3 flex items-end justify-between text-white">
                  <div>
                    <p className="text-[10px] tracking-wide opacity-80">{o.weather} · {o.items} вещей</p>
                    <h4 className="font-display text-[22px] leading-tight">{o.occasion}</h4>
                  </div>
                  <button className="rounded-full bg-white/95 p-2 text-foreground">
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-dashed border-border p-5 text-center">
          <Sparkles size={18} className="mx-auto text-foreground/55" />
          <p className="mt-2 text-[13px] font-semibold">Собрать новый образ</p>
          <p className="mt-1 text-[11px] text-foreground/55">Подобрать под повод, погоду или настроение</p>
        </div>
      </div>
      <div className="h-4" />
    </>
  )
}

function ChatTab() {
  return (
    <div className="px-6 pt-5">
      <div className="space-y-3">
        <Message role="ai">
          Привет, Анна. На завтра обещают +14° и облачно. Хотите соберу образ для встречи или для прогулки?
        </Message>
        <Message role="user">Нужен образ на встречу — деловой, но не строгий</Message>
        <Message role="ai">
          <p>Подобрала 3 варианта из вашего гардероба:</p>
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {[
              'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&q=70',
              'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=300&q=70',
              'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&q=70',
            ].map(src => (
              <div key={src} className="aspect-[3/4] overflow-hidden rounded-lg">
                <img src={src} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] opacity-70">Если нужно дополнить — могу подобрать туфли из новой коллекции ZARINA.</p>
        </Message>
        <Message role="user">Покажи деловой</Message>
        <Message role="ai">
          Идеально подойдёт жакет твид + рубашка шёлк + брюки прямого кроя. Оставлю в «Образы»?
        </Message>
      </div>
    </div>
  )
}

function Message({ role, children }: { role: 'ai' | 'user'; children: any }) {
  if (role === 'user') {
    return (
      <div className="flex justify-end">
        <div className="max-w-[78%] rounded-[18px] rounded-br-[6px] bg-foreground px-4 py-2.5 text-[13px] leading-relaxed text-background">
          {children}
        </div>
      </div>
    )
  }
  return (
    <div className="flex gap-2">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand))] text-white">
        <Sparkles size={13} strokeWidth={1.8} />
      </div>
      <div className="max-w-[78%] rounded-[18px] rounded-tl-[6px] bg-card border border-border px-4 py-3 text-[13px] leading-relaxed">
        {children}
      </div>
    </div>
  )
}
