export type Screen =
  | 'splash'
  | 'onboarding'
  | 'today'
  | 'club'
  | 'stylist'
  | 'wellness'
  | 'shop'
  | 'profile'
  | 'product'
  | 'wellness-track'
  | 'outfit'

export const user = {
  name: 'Анна',
  status: 'Insider',
  nextStatus: 'Icon',
  points: 4280,
  toNextStatus: 1720,
  streak: 12,
  city: 'Санкт-Петербург',
  joined: 'март 2025',
}

export const dailyQuest = {
  title: 'Соберите образ на встречу',
  subtitle: 'Стилист подобрал 6 вариантов из вашего гардероба',
  reward: 50,
  progress: 0.6,
  step: '2 из 3',
}

export const todayContent = [
  {
    type: 'wellness',
    title: 'Утренняя практика',
    subtitle: '5 минут · дыхание и фокус',
    duration: '5:12',
    cover: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=70',
    accent: 'Wellness',
  },
  {
    type: 'style',
    title: 'Капсула на весну',
    subtitle: '7 вещей, 12 образов',
    duration: '3 мин чтения',
    cover: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=70',
    accent: 'Стиль',
  },
  {
    type: 'brand',
    title: 'История одной нити',
    subtitle: 'Как создаётся коллекция SS26',
    duration: '6 мин',
    cover: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=800&q=70',
    accent: 'Бренд',
  },
]

export const lookOfTheDay = {
  title: 'Образ дня',
  subtitle: 'Лёгкий тренч, прямые брюки и минимальные акценты',
  cover: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80',
  items: ['Тренч из габардина', 'Брюки прямого кроя', 'Топ из шёлка'],
}

export const achievements = [
  { name: '7 дней подряд', icon: 'Flame', earned: true },
  { name: 'Первый образ', icon: 'Sparkles', earned: true },
  { name: 'Wellness-неделя', icon: 'Leaf', earned: true },
  { name: 'Капсула собрана', icon: 'Layers', earned: false },
  { name: 'Икона стиля', icon: 'Crown', earned: false },
  { name: 'Друг клуба', icon: 'Users', earned: false },
]

export const missions = [
  { title: 'Пройдите wellness-трек', reward: 100, progress: 0.4, days: '3 из 7' },
  { title: 'Соберите 5 образов', reward: 80, progress: 0.6, days: '3 из 5' },
  { title: 'Посетите магазин', reward: 200, progress: 0, days: 'до 31 мая' },
]

export const wellnessTracks = [
  {
    title: 'Утренняя ясность',
    days: 7,
    progress: 0.43,
    cover: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=70',
    category: 'Фокус',
  },
  {
    title: 'Осанка и дыхание',
    days: 14,
    progress: 0,
    cover: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=70',
    category: 'Тело',
  },
  {
    title: 'Спокойный вечер',
    days: 5,
    progress: 0.6,
    cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=70',
    category: 'Сон',
  },
  {
    title: 'Энергия дня',
    days: 10,
    progress: 0,
    cover: 'https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=800&q=70',
    category: 'Энергия',
  },
]

export const wellnessCategories = [
  'Все',
  'Дыхание',
  'Медитация',
  'Тело',
  'Сон',
  'Фокус',
  'Энергия',
]

export const wardrobeCategories = [
  { name: 'Всё', count: 42 },
  { name: 'Верх', count: 14 },
  { name: 'Низ', count: 10 },
  { name: 'Платья', count: 6 },
  { name: 'Верхняя', count: 4 },
  { name: 'Обувь', count: 8 },
]

export const wardrobeItems = [
  { name: 'Тренч бежевый', cat: 'Верхняя', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=70' },
  { name: 'Рубашка белая', cat: 'Верх', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=70' },
  { name: 'Брюки прямые', cat: 'Низ', img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=70' },
  { name: 'Свитер кашемир', cat: 'Верх', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=70' },
  { name: 'Юбка миди', cat: 'Низ', img: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=400&q=70' },
  { name: 'Платье льняное', cat: 'Платья', img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&q=70' },
  { name: 'Лоферы', cat: 'Обувь', img: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400&q=70' },
  { name: 'Жакет твид', cat: 'Верх', img: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&q=70' },
]

export const outfits = [
  {
    occasion: 'Встреча',
    weather: '+14°',
    cover: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=70',
    items: 4,
  },
  {
    occasion: 'Прогулка',
    weather: '+18°',
    cover: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=70',
    items: 3,
  },
  {
    occasion: 'Ужин',
    weather: 'вечер',
    cover: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=70',
    items: 5,
  },
]

export const shopCategories = ['Новое', 'Платья', 'Верх', 'Низ', 'Аксессуары', 'Sale']

export const products = [
  { name: 'Тренч прямого кроя', price: '7 990 ₽', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=70', tag: 'NEW' },
  { name: 'Платье из вискозы', price: '4 590 ₽', img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=70' },
  { name: 'Брюки палаццо', price: '3 990 ₽', img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=70' },
  { name: 'Блуза шёлковая', price: '4 290 ₽', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=70', tag: 'BEST' },
  { name: 'Жакет оверсайз', price: '6 490 ₽', img: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=70' },
  { name: 'Юбка плиссе', price: '3 590 ₽', img: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=600&q=70' },
]

export const events = [
  { date: '18 мая', title: 'Закрытый показ SS26', place: 'ZARINA · Невский 35', tag: 'Только Insider' },
  { date: '24 мая', title: 'Wellness-завтрак', place: 'Studio · СПб', tag: 'Открыто' },
  { date: '02 июня', title: 'Стилист в магазине', place: 'ZARINA · Галерея', tag: 'Открыто' },
]

export const benefits = [
  { title: 'Ранний доступ к коллекциям', tier: 'Insider', icon: 'Sparkles' },
  { title: 'Бесплатная доставка', tier: 'Insider', icon: 'Truck' },
  { title: 'Подарок ко дню рождения', tier: 'Insider', icon: 'Gift' },
  { title: 'Закрытые события', tier: 'Icon', icon: 'Star' },
  { title: 'Личный стилист', tier: 'Icon', icon: 'UserCircle' },
  { title: 'Капсула в подарок', tier: 'Icon', icon: 'PackageOpen' },
]
