export default function Card({ icon, title, text }) {
  return (
    <div className="group rounded-lg border border-[#e6e8ee] bg-white p-6 hover:border-[#c9ccd5] transition-colors">
      {icon && <div className="text-[#092e61] mb-4">{icon}</div>}
      <h3 className="text-lg font-semibold text-[#121212]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#092e61]">{text}</p>
    </div>
  );
}
