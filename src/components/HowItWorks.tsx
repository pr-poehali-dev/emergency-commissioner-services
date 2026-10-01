import Icon from "@/components/ui/icon";

const steps = [
  {
    icon: "Phone",
    title: "Звонок или заявка",
    desc: "Позвоните или оставьте заявку на сайте. Уточним, где вы находитесь, и сразу отправим комиссара.",
  },
  {
    icon: "Car",
    title: "Выезд на место",
    desc: "Приезжаем по Тольятти и Ставропольскому району в среднем за 20 минут, в любое время суток.",
  },
  {
    icon: "FileText",
    title: "Оформление ДТП",
    desc: "Фиксируем обстановку, делаем фото и схему, помогаем правильно оформить документы или европротокол.",
  },
  {
    icon: "Banknote",
    title: "Помощь со страховой",
    desc: "Подскажем, как подать документы, и поможем добиться справедливой страховой выплаты.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#d4861e" }}>
            Просто и понятно
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold" style={{ color: "#172840" }}>
            Как мы работаем в Тольятти
          </h2>
          <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: "#5783a4" }}>
            От звонка до страховой выплаты вы не остаётесь один: всё оформление берём на себя.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="p-7 rounded-2xl border"
              style={{ background: "white", borderColor: "#f5dba8" }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#faefd8" }}>
                  <Icon name={step.icon} size={22} style={{ color: "#d4861e" }} />
                </div>
                <span className="font-cormorant text-4xl font-semibold" style={{ color: "#e8a03a" }}>
                  {i + 1}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#172840" }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5783a4" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
