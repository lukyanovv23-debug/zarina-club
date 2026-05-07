import { useState } from 'react'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'

const steps = [
  {
    title: 'Какой стиль вам ближе?',
    subtitle: 'Выберите 1–2 варианта — стилист подстроится',
    options: [
      { v: 'minimal', label: 'Минимализм', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=70' },
      { v: 'classic', label: 'Классика', img: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&q=70' },
      { v: 'romantic', label: 'Романтичный', img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&q=70' },
      { v: 'casual', label: 'Кэжуал', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=70' },
    ],
  },
  {
    title: 'Что важно в гардеробе?',
    subtitle: 'Можно выбрать несколько',
    options: [
      { v: 'capsule', label: 'Капсульность' },
      { v: 'comfort', label: 'Комфорт' },
      { v: 'trends', label: 'Тренды' },
      { v: 'quality', label: 'Качество ткани' },
      { v: 'unique', label: 'Уникальность' },
      { v: 'price', label: 'Соотношение цены' },
    ],
  },
  {
    title: 'Цели в wellness',
    subtitle: 'Что хочется усилить в жизни?',
    options: [
      { v: 'energy', label: 'Энергия' },
      { v: 'calm', label: 'Спокойствие' },
      { v: 'focus', label: 'Фокус' },
      { v: 'confidence', label: 'Уверенность' },
      { v: 'sleep', label: 'Сон' },
      { v: 'habit', label: 'Привычки' },
    ],
  },
]

export function Onboarding({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0)
  const [picks, setPicks] = useState<Record<number, Set<string>>>({ 0: new Set(), 1: new Set(), 2: new Set() })

  const current = steps[step]
  const togglePick = (v: string) => {
    setPicks(p => {
      const next = new Set(p[step])
      if (next.has(v)) next.delete(v)
      else next.add(v)
      return { ...p, [step]: next }
    })
  }
  const canNext = picks[step].size > 0

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1)
    else onDone()
  }
  const back = () => {
    if (step > 0) setStep(step - 1)
  }

  return (
    <div className="absolute inset-0 flex flex-col bg-background">
      <div className="px-6 pt-12">
        <div className="flex items-center gap-2">
          <button onClick={back} className={`text-foreground/40 ${step === 0 ? 'invisible' : ''}`}>
            <ArrowLeft size={20} />
          </button>
          <div className="flex flex-1 items-center gap-1.5">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-all ${
                  i <= step ? 'bg-foreground' : 'bg-foreground/15'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-medium text-foreground/50">
            {step + 1}/{steps.length}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-8 no-scrollbar">
        <h2 className="font-display text-[34px] leading-[1.05] text-foreground">
          {current.title}
        </h2>
        <p className="mt-2 text-[14px] text-foreground/55">{current.subtitle}</p>

        {step === 0 && (
          <div className="mt-7 grid grid-cols-2 gap-3">
            {current.options.map((o: any) => {
              const active = picks[step].has(o.v)
              return (
                <button
                  key={o.v}
                  onClick={() => togglePick(o.v)}
                  className={`group relative aspect-[3/4] overflow-hidden rounded-2xl border-2 transition-all ${
                    active ? 'border-foreground' : 'border-transparent'
                  }`}
                >
                  <img src={o.img} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-white">{o.label}</span>
                    {active && (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-foreground">
                        <Check size={14} strokeWidth={3} />
                      </div>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        )}

        {step !== 0 && (
          <div className="mt-7 flex flex-wrap gap-2">
            {current.options.map((o: any) => {
              const active = picks[step].has(o.v)
              return (
                <button
                  key={o.v}
                  onClick={() => togglePick(o.v)}
                  className={`rounded-full border px-4 py-3 text-[13px] font-medium transition-all ${
                    active
                      ? 'border-foreground bg-foreground text-background'
                      : 'border-border bg-card text-foreground/80'
                  }`}
                >
                  {o.label}
                </button>
              )
            })}
          </div>
        )}
      </div>

      <div className="border-t border-border/60 bg-background/95 px-6 pb-8 pt-4 backdrop-blur">
        <button
          onClick={next}
          disabled={!canNext}
          className="flex w-full items-center justify-between rounded-full bg-foreground px-6 py-4 text-[14px] font-semibold text-background disabled:opacity-30"
        >
          {step === steps.length - 1 ? 'Готово' : 'Дальше'}
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}
