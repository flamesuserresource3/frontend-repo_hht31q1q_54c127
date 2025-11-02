import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e6e8ee]" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid grid-cols-2 gap-0.5" aria-hidden>
                <span className="h-2 w-2 bg-[#205db2]" />
                <span className="h-2 w-2 bg-[#c9ccd5]" />
                <span className="h-2 w-2 bg-[#c9ccd5]" />
                <span className="h-2 w-2 bg-[#205db2]" />
              </div>
              <p className="text-sm text-[#121212]">We make interiors intelligent.</p>
            </div>
          </div>
          <div>
            <nav aria-label="Footer">
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#solutions', label: 'Solutions' },
                  { href: '#how', label: 'How It Works' },
                  { href: '#industries', label: 'Industries' },
                  { href: '#resources', label: 'Resources' },
                  { href: '#about', label: 'About' },
                  { href: '#contact', label: 'Contact' },
                ].map((i) => (
                  <li key={i.href}>
                    <a className="text-[#121212] hover:text-[#092e61] underline-offset-4 hover:underline" href={i.href}>{i.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-[#121212]"><Mail size={16} aria-hidden /> <a className="hover:text-[#092e61] underline-offset-4 hover:underline" href="mailto:hello@climasolutions.com">hello@climasolutions.com</a></li>
              <li className="flex items-center gap-2 text-[#121212]"><Phone size={16} aria-hidden /> <a className="hover:text-[#092e61] underline-offset-4 hover:underline" href="https://wa.me/1234567890">WhatsApp +1 234 567 890</a></li>
              <li className="flex items-center gap-2 text-[#121212]"><Linkedin size={16} aria-hidden /> <a className="hover:text-[#092e61] underline-offset-4 hover:underline" href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-xs text-[#092e61]">
          <p>© Clima Solutions. All rights reserved.</p>
          <p>Charcoal #121212 · Dark Navy #092e61 · Royal Blue #205db2 · Light Gray #c9ccd5</p>
        </div>
      </div>
    </footer>
  );
}
