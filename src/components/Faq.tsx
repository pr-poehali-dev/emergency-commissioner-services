import Icon from "@/components/ui/icon";

export const faqItems = [
  {
    q: "Что делать после ДТП в Тольятти?",
    a: "Включите аварийку, выставьте знак аварийной остановки, не двигайте машины без необходимости и позвоните нам. Аварийный комиссар приедет на место, поможет с документами и подскажет, как действовать дальше.",
  },
  {
    q: "Когда нужен аварийный комиссар?",
    a: "Когда есть спор о виновнике, не хочется разбираться в бумагах или нужно правильно оформить европротокол. Комиссар зафиксирует обстановку и защитит ваши интересы перед страховой.",
  },
  {
    q: "Вы выезжаете в Ставропольский район?",
    a: "Да, мы работаем по всему Тольятти и Ставропольскому району. Выезжаем круглосуточно, среднее время прибытия — около 20 минут.",
  },
  {
    q: "Сколько стоит вызов аварийного комиссара?",
    a: "Стоимость называем заранее по телефону, без скрытых доплат. Позвоните или оставьте заявку, и мы сориентируем по цене до выезда.",
  },
  {
    q: "Можно ли оформить европротокол с вашей помощью?",
    a: "Да, поможем правильно заполнить европротокол без вызова ГИБДД, чтобы страховая не вернула документы на доработку.",
  },
  {
    q: "Поможете ли вы получить выплату от страховой?",
    a: "Да, подскажем, какие документы подавать, и поможем при несогласии с суммой выплаты, в том числе с независимой оценкой ущерба.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-24 px-6" style={{ background: "#f0f4f8" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#d4861e" }}>
            Ответы на вопросы
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold" style={{ color: "#172840" }}>
            Частые вопросы
          </h2>
        </div>

        <div className="space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl p-5"
              style={{ background: "white", border: "1px solid #f5dba8" }}
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold" style={{ color: "#172840" }}>
                {item.q}
                <Icon
                  name="ChevronDown"
                  size={18}
                  className="flex-shrink-0 transition-transform group-open:rotate-180"
                  style={{ color: "#d4861e" }}
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "#3d6589" }}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
