import { useEffect, useRef, useState } from 'react';

export default function Section({ id, eyebrow, title, description, children, cta, background = 'white' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`${background === 'gray' ? 'bg-[#f7f8fa]' : 'bg-white'} border-b border-[#e6e8ee]`}
      aria-labelledby={id ? `${id}-title` : undefined}>
      <div className={`mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <div className="max-w-3xl">
          {eyebrow && <p className="text-xs uppercase tracking-[0.15em] text-[#092e61] mb-3">{eyebrow}</p>}
          {title && (
            <h2 id={id ? `${id}-title` : undefined} className="text-3xl sm:text-4xl font-semibold text-[#121212] leading-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-[#092e61] text-base sm:text-lg leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
        {children && <div className="mt-10">{children}</div>}
        {cta && (
          <div className="mt-10">
            <a href={cta.href} className="inline-flex items-center rounded-md bg-[#205db2] px-5 py-2.5 text-white hover:bg-[#092e61] transition-colors">
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
