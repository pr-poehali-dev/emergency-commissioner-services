import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/44b03f54-3aeb-49fd-9735-65db2edc1ad3/files/bcf0b306-4a34-4caf-9828-e1c0269852e7.jpg";
const COMMISSIONER_IMAGE = "https://cdn.poehali.dev/projects/44b03f54-3aeb-49fd-9735-65db2edc1ad3/files/d27468b8-de48-458e-88b0-1d879a668814.jpg";

const services = [
  {
    icon: "FileText",
    title: "Оформление ДТП",
    desc: "Полное оформление документов на месте аварии. Протоколы, схемы, фотофиксация.",
  },
  {
    icon: "Shield",
    title: "Защита интересов",
    desc: "Представляем ваши интересы перед ГИБДД и страховыми компаниями.",
  },
  {
    icon: "Scale",
    title: "Независимая оценка",
    desc: "Объективная оценка ущерба и помощь при несогласии с решением страховой.",
  },
  {
    icon: "Phone",
    title: "Выезд 24/7",
    desc: "Приедем в любое время суток. Среднее время прибытия — 25 минут.",
  },
  {
    icon: "Car",
    title: "Эвакуация авто",
    desc: "Организуем эвакуацию поврежденного транспортного средства.",
  },
  {
    icon: "BadgeCheck",
    title: "Европротокол",
    desc: "Помощь в правильном оформлении европротокола без вызова ГИБДД.",
  },
];

const stats = [
  { value: "8 лет", label: "на рынке" },
  { value: "4 200+", label: "решённых случаев" },
  { value: "25 мин", label: "среднее время прибытия" },
  { value: "98%", label: "успешных выплат" },
];

export default function Index() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen font-golos bg-[#faf7f2] text-navy-900" style={{ color: "#1e3347" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf7f2]/90 backdrop-blur-md border-b border-warm-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-warm-500 flex items-center justify-center">
              <Icon name="ShieldCheck" size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight" style={{ color: "#1e3347" }}>АварКом</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: "#3d6589" }}>
            <a href="#services" className="hover:text-warm-600 transition-colors">Услуги</a>
            <a href="#about" className="hover:text-warm-600 transition-colors">О нас</a>
            <a href="#form" className="hover:text-warm-600 transition-colors">Заявка</a>
          </div>
          <a
            href="tel:+79001234567"
            className="flex items-center gap-2 bg-warm-500 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-warm-600 transition-colors"
          >
            <Icon name="Phone" size={14} />
            +7 (900) 123-45-67
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(23,40,64,0.88) 40%, rgba(23,40,64,0.3) 100%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ background: "rgba(212,134,30,0.25)", color: "#e8a03a", border: "1px solid rgba(212,134,30,0.4)" }}
            >
              <span className="w-2 h-2 rounded-full bg-warm-400 animate-pulse" />
              Выезд в течение 25 минут · 24/7
            </div>

            <h1 className="font-cormorant text-5xl md:text-6xl font-semibold leading-tight mb-6 text-white">
              Аварийный<br />
              <span style={{ color: "#e8a03a" }}>комиссар</span> рядом,<br />
              когда это важно
            </h1>

            <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              Профессиональная помощь на месте ДТП. Берём на себя оформление документов,
              переговоры со страховой и защиту ваших прав.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all hover:scale-105"
                style={{ background: "#d4861e" }}
              >
                <Icon name="FileText" size={18} />
                Оставить заявку
              </a>
              <a
                href="tel:+79001234567"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105"
                style={{ background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(8px)" }}
              >
                <Icon name="Phone" size={18} />
                Позвонить сейчас
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "rgba(255,255,255,0.4)" }}>
          <span className="text-xs tracking-widest uppercase">Узнать больше</span>
          <Icon name="ChevronDown" size={16} className="animate-bounce" />
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#172840" }}>
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <div className="font-cormorant text-4xl font-semibold mb-1" style={{ color: "#e8a03a" }}>{s.value}</div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#d4861e" }}>Что мы делаем</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold" style={{ color: "#172840" }}>
              Наши услуги
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
                style={{ background: "white", borderColor: "#f5dba8" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors group-hover:bg-warm-500"
                  style={{ background: "#faefd8" }}
                >
                  <Icon name={svc.icon} size={22} style={{ color: "#d4861e" }} className="group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#172840" }}>{svc.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5783a4" }}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6" style={{ background: "#f0f4f8" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-48 h-48 rounded-full opacity-20"
              style={{ background: "#d4861e", filter: "blur(40px)" }}
            />
            <img
              src={COMMISSIONER_IMAGE}
              alt="Аварийный комиссар"
              className="relative z-10 rounded-3xl w-full object-cover shadow-xl"
              style={{ maxHeight: "480px" }}
            />
            <div
              className="absolute -bottom-5 -right-5 z-20 px-6 py-4 rounded-2xl shadow-lg"
              style={{ background: "white" }}
            >
              <div className="font-cormorant text-3xl font-semibold" style={{ color: "#d4861e" }}>8 лет</div>
              <div className="text-sm" style={{ color: "#5783a4" }}>профессионального опыта</div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#d4861e" }}>О компании</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold mb-6" style={{ color: "#172840" }}>
              Мы защищаем ваши<br />интересы в трудный момент
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: "#3d6589" }}>
              АварКом — команда лицензированных специалистов, которые приедут на место ДТП,
              возьмут на себя всё бумажное оформление и помогут получить справедливую страховую выплату.
            </p>
            <p className="leading-relaxed mb-10" style={{ color: "#3d6589" }}>
              Работаем по всему городу и области. Не нужно ни в чём разбираться —
              просто позвоните нам, мы займёмся всем остальным.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "Работаем 24 часа в сутки, 7 дней в неделю",
                "Собственный штат юристов и оценщиков",
                "Фиксированная стоимость — без скрытых доплат",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#faefd8" }}>
                    <Icon name="Check" size={12} style={{ color: "#d4861e" }} />
                  </div>
                  <span className="text-sm" style={{ color: "#253f58" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#d4861e" }}>Быстро и удобно</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold" style={{ color: "#172840" }}>
              Оставьте заявку
            </h2>
            <p className="mt-4 text-sm" style={{ color: "#5783a4" }}>
              Ответим в течение 5 минут и организуем выезд
            </p>
          </div>

          {submitted ? (
            <div
              className="text-center py-16 px-8 rounded-3xl"
              style={{ background: "white", border: "1px solid #f5dba8" }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "#faefd8" }}>
                <Icon name="CheckCircle" size={32} style={{ color: "#d4861e" }} />
              </div>
              <h3 className="font-cormorant text-3xl font-semibold mb-3" style={{ color: "#172840" }}>
                Заявка принята!
              </h3>
              <p style={{ color: "#5783a4" }}>Наш специалист свяжется с вами в ближайшие 5 минут.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl p-8 md:p-10 shadow-sm"
              style={{ background: "white", border: "1px solid #f5dba8" }}
            >
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#253f58" }}>
                    Ваше имя <span style={{ color: "#d4861e" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm"
                    style={{
                      borderColor: "#e5d5b5",
                      background: "#faf7f2",
                      color: "#172840",
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = "#d4861e"}
                    onBlur={e => e.currentTarget.style.borderColor = "#e5d5b5"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#253f58" }}>
                    Телефон <span style={{ color: "#d4861e" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm"
                    style={{
                      borderColor: "#e5d5b5",
                      background: "#faf7f2",
                      color: "#172840",
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = "#d4861e"}
                    onBlur={e => e.currentTarget.style.borderColor = "#e5d5b5"}
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2" style={{ color: "#253f58" }}>
                  Адрес ДТП
                </label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Улица, дом или ориентир"
                  className="w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm"
                  style={{
                    borderColor: "#e5d5b5",
                    background: "#faf7f2",
                    color: "#172840",
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = "#d4861e"}
                  onBlur={e => e.currentTarget.style.borderColor = "#e5d5b5"}
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2" style={{ color: "#253f58" }}>
                  Нужная услуга
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm appearance-none"
                  style={{
                    borderColor: "#e5d5b5",
                    background: "#faf7f2",
                    color: form.service ? "#172840" : "#9aadbe",
                  }}
                >
                  <option value="">Выберите услугу...</option>
                  <option value="dtp">Оформление ДТП</option>
                  <option value="insurance">Взаимодействие со страховой</option>
                  <option value="europrotocol">Европротокол</option>
                  <option value="evacuation">Эвакуация авто</option>
                  <option value="assessment">Независимая оценка</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium mb-2" style={{ color: "#253f58" }}>
                  Комментарий
                </label>
                <textarea
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Кратко опишите ситуацию..."
                  className="w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm resize-none"
                  style={{
                    borderColor: "#e5d5b5",
                    background: "#faf7f2",
                    color: "#172840",
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = "#d4861e"}
                  onBlur={e => e.currentTarget.style.borderColor = "#e5d5b5"}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.99]"
                style={{ background: "#d4861e" }}
              >
                Отправить заявку
              </button>

              <p className="text-center text-xs mt-4" style={{ color: "#9aadbe" }}>
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#172840" }} className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-warm-500 flex items-center justify-center">
                <Icon name="ShieldCheck" size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg text-white">АварКом</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              <a href="tel:+79001234567" className="hover:text-warm-400 transition-colors flex items-center gap-1.5">
                <Icon name="Phone" size={14} />
                +7 (900) 123-45-67
              </a>
              <a href="mailto:info@avarkom.ru" className="hover:text-warm-400 transition-colors flex items-center gap-1.5">
                <Icon name="Mail" size={14} />
                info@avarkom.ru
              </a>
              <span className="flex items-center gap-1.5">
                <Icon name="Clock" size={14} />
                Работаем 24/7
              </span>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-xs" style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.3)" }}>
            © 2024 АварКом. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}