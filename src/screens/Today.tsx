import { Bell, Flame, ArrowRight, ChevronRight, Cloud, Sparkles, Play } from 'lucide-react'
import { user, dailyQuest, todayContent, lookOfTheDay, missions } from '@/lib/data'
import type { Screen } from '@/lib/data'

export function Today({ go }: { go: (s: Screen) => void }) {
  return (
    <div className="absolute inset-0 overflow-y-auto pb-28 no-scrollbar">
      {/* Top header */}
      <div className="px-6 pt-14">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[12px] tracking-wide text-foreground/50">Доброе утро, {user.name}</p>
            <h1 className="font-display text-[28px] leading-tight">Среда, 7 мая</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card">
              <Bell size={17} strokeWidth={1.6} />
              <span className="absolute mt-[-12px] ml-3 h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand))]" />
            </button>
            <button onClick={() => go('profile')} className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
              <span className="text-[12px] font-semibold">А</span>
            </button>
          </div>
        </div>

        {/* Streak + weather strip */}
        <div className="mt-5 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-[hsl(var(--brand))] px-3.5 py-2 text-white">
            <Flame size={14} strokeWidth={2.4} className="text-[hsl(var(--brand-soft))]" />
            <span className="text-[12px] font-semibold">{user.streak} дней подряд</span>
          </div>
          <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-card border border-border px-3.5 py-2">
            <Cloud size={14} strokeWidth={1.8} className="text-foreground/60" />
            <span className="text-[12px] font-medium">+14° СПб</span>
          </div>
          <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-card border border-border px-3.5 py-2">
            <span className="text-[12px] font-medium">{user.points.toLocaleString('ru')} баллов</span>
          </div>
        </div>
      </div>

      {/* Daily quest hero */}
      <div className="px-6 pt-6">
        <div className="relative overflow-hidden rounded-[26px] bg-[#1a1410] p-6 text-white">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1410] via-[#1a1410]/80 to-transparent" />
          <div className="relative">
            <div className="flex items-center gap-2 text-[10px] font-medium tracking-[0.25em] text-white/60 uppercase">
              <Sparkles size={11} />
              <span>Задание дня</span>
            </div>
            <h2 className="mt-3 font-display text-[28px] leading-[1.1]">{dailyQuest.title}</h2>
            <p className="mt-2 text-[13px] leading-relaxed text-white/60">{dailyQuest.subtitle}</p>

            <div className="mt-5 flex items-center justify-between text-[11px] text-white/60">
              <span>{dailyQuest.step}</span>
              <span>+{dailyQuest.reward} баллов</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-[hsl(var(--brand-soft))]"
                style={{ width: `${dailyQuest.progress * 100}%` }}
              />
            </div>

            <button
              onClick={() => go('stylist')}
              className="mt-5 flex w-full items-center justify-between rounded-full bg-white px-5 py-3.5 text-[13px] font-semibold text-[#1a1410]"
            >
              Продолжить квест
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Look of the day */}
      <div className="mt-7">
        <div className="flex items-end justify-between px-6">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/45 uppercase">
              Стилист
            </p>
            <h3 className="font-display text-[22px] leading-tight">Образ дня</h3>
          </div>
          <button onClick={() => go('stylist')} className="flex items-center gap-1 text-[12px] text-foreground/60">
            Все образы <ChevronRight size={14} />
          </button>
        </div>

        <div className="mt-3 px-6">
          <div className="overflow-hidden rounded-[22px] bg-card border border-border">
            <div className="relative aspect-[4/5]">
              <img src={lookOfTheDay.cover} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold tracking-wide text-foreground">
                AI-стилист
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-display text-[20px] leading-tight">{lookOfTheDay.subtitle}</h4>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {lookOfTheDay.items.map(it => (
                  <span key={it} className="rounded-full bg-secondary px-2.5 py-1 text-[11px] text-foreground/70">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Today content carousel */}
      <div className="mt-7">
        <div className="flex items-end justify-between px-6">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/45 uppercase">
              Лента
            </p>
            <h3 className="font-display text-[22px] leading-tight">Что сегодня посмотреть</h3>
          </div>
        </div>
        <div className="mt-3 flex gap-3 overflow-x-auto px-6 pb-1 no-scrollbar">
          {todayContent.map(c => (
            <div
              key={c.title}
              onClick={() => c.type === 'wellness' ? go('wellness') : null}
              className="relative shrink-0 overflow-hidden rounded-[20px] border border-border bg-card"
              style={{ width: 220 }}
            >
              <div className="relative aspect-[4/5]">
                <img src={c.cover} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-3 top-3 flex items-center justify-between">
                  <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-foreground">
                    {c.accent}
                  </span>
                  {c.type === 'wellness' && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95">
                      <Play size={12} fill="#1a1410" className="ml-0.5" />
                    </div>
                  )}
                </div>
                <div className="absolute inset-x-3 bottom-3 text-white">
                  <p className="text-[11px] opacity-80">{c.duration}</p>
                  <h4 className="mt-0.5 font-display text-[18px] leading-tight">{c.title}</h4>
                  <p className="mt-0.5 text-[11px] opacity-70">{c.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active missions */}
      <div className="mt-7 px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/45 uppercase">
              Клуб
            </p>
            <h3 className="font-display text-[22px] leading-tight">Ваши миссии</h3>
          </div>
          <button onClick={() => go('club')} className="flex items-center gap-1 text-[12px] text-foreground/60">
            Все <ChevronRight size={14} />
          </button>
        </div>

        <div className="mt-3 space-y-2">
          {missions.map(m => (
            <div key={m.title} className="rounded-2xl border border-border bg-card p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-3">
                  <h4 className="text-[14px] font-semibold leading-tight">{m.title}</h4>
                  <p className="mt-0.5 text-[11px] text-foreground/55">{m.days}</p>
                </div>
                <div className="rounded-full bg-[hsl(var(--brand))]/10 px-2.5 py-1 text-[11px] font-semibold text-[hsl(var(--brand))]">
                  +{m.reward}
                </div>
              </div>
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-foreground transition-all"
                  style={{ width: `${m.progress * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-4" />
    </div>
  )
}
