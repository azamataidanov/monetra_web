const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.monetra.monetra";

const copy = {
  en: {
    navCta: "Get on Play",
    heroLead:
      "Track expenses and income across every account — budgets, goals, a home widget, and voice entry when you need speed.",
    getItOn: "GET IT ON",
    seeFeatures: "See features",
    demoBalance: "Total balance",
    demoMonth: "This month",
    demoBudget: "Budget",
    demoGrocery: "Groceries",
    demoToday: "Today",
    demoTaxi: "Transport",
    demoYday: "Yesterday",
    demoSalary: "Salary",
    demoWeek: "This week",
    featuresTitle: "Built for real money habits",
    featuresSub:
      "One calm place for cash, cards, and savings — without spreadsheet chaos.",
    f1Title: "Multiple accounts",
    f1Body:
      "Keep cash, bank, and savings balances together with a clear monthly picture.",
    f2Title: "Widget + voice",
    f2Body:
      "Add expense or income from your home screen. Premium voice entry when your hands are full.",
    f3Title: "Budgets & AI tips",
    f3Body:
      "Category budgets, recurring costs, and optional Premium AI coaching from your own data.",
    ctaTitle: "Start tracking in minutes",
    ctaBody: "Available on Google Play. EN · RU · KK. Works offline-first.",
    ctaButton: "Open on Google Play",
    privacy: "Privacy",
  },
  ru: {
    navCta: "В Google Play",
    heroLead:
      "Учитывайте расходы и доходы по всем счетам — бюджеты, цели, виджет и голосовой ввод, когда нужно быстро.",
    getItOn: "ДОСТУПНО В",
    seeFeatures: "Возможности",
    demoBalance: "Общий баланс",
    demoMonth: "Этот месяц",
    demoBudget: "Бюджет",
    demoGrocery: "Продукты",
    demoToday: "Сегодня",
    demoTaxi: "Транспорт",
    demoYday: "Вчера",
    demoSalary: "Зарплата",
    demoWeek: "На этой неделе",
    featuresTitle: "Для реальных денежных привычек",
    featuresSub:
      "Спокойное место для наличных, карт и накоплений — без хаоса таблиц.",
    f1Title: "Несколько счетов",
    f1Body:
      "Наличные, банк и накопления вместе, с понятной картиной месяца.",
    f2Title: "Виджет + голос",
    f2Body:
      "Добавляйте расход или доход с домашнего экрана. Голос — в Premium, когда руки заняты.",
    f3Title: "Бюджеты и AI",
    f3Body:
      "Лимиты по категориям, регулярные платежи и опциональный Premium AI-коучинг по вашим данным.",
    ctaTitle: "Начните учёт за минуты",
    ctaBody: "В Google Play. EN · RU · KK. Сначала офлайн.",
    ctaButton: "Открыть в Google Play",
    privacy: "Конфиденциальность",
  },
  kk: {
    navCta: "Play-ден алу",
    heroLead:
      "Шығыс пен кірісті барлық шоттар бойынша бақылаңыз — бюджет, мақсат, виджет және жылдам дауыстық енгізу.",
    getItOn: "ЖҮКТЕҢІЗ",
    seeFeatures: "Мүмкіндіктер",
    demoBalance: "Жалпы баланс",
    demoMonth: "Осы ай",
    demoBudget: "Бюджет",
    demoGrocery: "Азық-түлік",
    demoToday: "Бүгін",
    demoTaxi: "Көлік",
    demoYday: "Кеше",
    demoSalary: "Жалақы",
    demoWeek: "Осы апта",
    featuresTitle: "Нақты ақша әдеттері үшін",
    featuresSub:
      "Қолма-қол, карта және жинақ бір жерде — кесте хаосынсыз.",
    f1Title: "Бірнеше шот",
    f1Body:
      "Қолма-қол, банк және жинақ бірге, айдың анық көрінісімен.",
    f2Title: "Виджет + дауыс",
    f2Body:
      "Үй экранынан шығыс немесе кіріс қосыңыз. Premium дауыс — қолдарыңыз бос емес кезде.",
    f3Title: "Бюджет және AI",
    f3Body:
      "Санат лимиттері, тұрақты төлемдер және өз деректеріңізден Premium AI кеңестері.",
    ctaTitle: "Бірнеше минутта бастаңыз",
    ctaBody: "Google Play-де. EN · RU · KK. Офлайн-бірінші.",
    ctaButton: "Google Play-де ашу",
    privacy: "Құпиялылық",
  },
};

function applyLang(lang) {
  const dict = copy[lang] || copy.en;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.setAttribute(
      "aria-pressed",
      btn.getAttribute("data-lang") === lang ? "true" : "false",
    );
  });
  try {
    localStorage.setItem("monetra_landing_lang", lang);
  } catch (_) {}
}

function initLang() {
  let lang = "en";
  try {
    const saved = localStorage.getItem("monetra_landing_lang");
    if (saved && copy[saved]) lang = saved;
    else {
      const nav = (navigator.language || "en").toLowerCase();
      if (nav.startsWith("ru")) lang = "ru";
      else if (nav.startsWith("kk")) lang = "kk";
    }
  } catch (_) {}
  applyLang(lang);
}

document.querySelectorAll(".lang button").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLang(btn.getAttribute("data-lang") || "en");
  });
});

const header = document.getElementById("siteHeader");
if (header) {
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

document.querySelectorAll(`a[href="${PLAY_URL}"]`).forEach(() => {});

initLang();
