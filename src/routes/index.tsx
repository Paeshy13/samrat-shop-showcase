import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/samrat-logo.png";
import aisleImg from "@/assets/aisle.jpg";
import mapImg from "@/assets/nyeri-map.jpg";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Samrat Supermarket — The King of Supermarkets in Nyeri" },
      {
        name: "description",
        content:
          "Samrat Supermarket in Nyeri, Kenya — fresh groceries, household goods, bakery and more. The king of supermarkets.",
      },
      { property: "og:title", content: "Samrat Supermarket — The King of Supermarkets" },
      {
        property: "og:description",
        content:
          "Quality shopping in Nyeri, Kenya. Fresh groceries, household goods, bakery and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#products", label: "What We Sell" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

const categories = [
  {
    icon: "🛒",
    title: "Fresh Groceries",
    text: "Farm-fresh vegetables, seasonal fruits, and premium pantry staples sourced from local Nyeri farmers.",
  },
  {
    icon: "🔌",
    title: "Home Appliances",
    text: "Reliable kitchenware, home electronics, and everyday household essentials at king-sized value.",
  },
  {
    icon: "🍞",
    title: "The King's Bakery",
    text: "Freshly baked breads, customized cakes for all occasions, and mouth-watering pastries every morning.",
  },
];

function Index() {
  return (
    <div
      id="top"
      className="min-h-screen font-body bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300"
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-samrat-blue dark:bg-slate-900 text-white border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <a href="#top" className="flex items-center gap-3 shrink-0">
            <img
              src={logo}
              alt="Samrat Supermarket logo — crown flanked by two horses"
              className="h-10 w-auto"
              width={1024}
              height={1024}
            />
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-samrat-orange transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden bg-samrat-blue dark:bg-slate-950 py-24">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-samrat-orange rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <img
            src={logo}
            alt="Samrat Supermarket logo — crown flanked by two horses"
            className="mx-auto h-24 w-auto mb-8 drop-shadow-lg"
            width={1024}
            height={1024}
          />
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            SAMRAT <span className="text-samrat-orange">SUPERMARKET</span>
          </h1>
          <p className="text-samrat-orange font-heading text-xl md:text-2xl tracking-[0.3em] uppercase mb-12">
            The king of supermarkets!!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#products"
              className="px-8 py-4 bg-samrat-orange text-white font-bold rounded-sm hover:bg-orange-600 transition-colors"
            >
              OUR PRODUCTS
            </a>
            <a
              href="#location"
              className="px-8 py-4 border border-white/30 text-white font-bold rounded-sm hover:bg-white/10 transition-colors"
            >
              FIND US IN NYERI
            </a>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-6 border-l-4 border-samrat-orange pl-6">
              Quality Shopping in Nyeri
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Samrat Supermarket has been a cornerstone of the Nyeri community.
              We pride ourselves on providing a regal shopping experience where
              every customer is treated like royalty.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              From farm-fresh produce to everyday essentials, we stock only
              dependable goods at fair, king-sized value.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div className="text-samrat-orange font-bold text-2xl mb-1">100%</div>
                <div className="text-sm uppercase tracking-wide">Fresh Quality</div>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div className="text-samrat-blue dark:text-samrat-orange font-bold text-2xl mb-1">
                  Daily
                </div>
                <div className="text-sm uppercase tracking-wide">Restocked</div>
              </div>
            </div>
          </div>
          <img
            src={aisleImg}
            alt="Inside Samrat Supermarket in Nyeri — fresh produce and friendly staff"
            className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
            width={944}
            height={704}
            loading="lazy"
          />
        </div>
      </section>

      {/* What We Sell */}
      <section id="products" className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Everything You Need</h2>
            <div className="h-1 w-24 bg-samrat-orange mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((c) => (
              <div
                key={c.title}
                className="bg-white dark:bg-slate-950 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800"
              >
                <div className="w-12 h-12 bg-samrat-blue/10 rounded-full mb-6 grid place-items-center text-2xl">
                  {c.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="location" className="py-24 max-w-7xl mx-auto px-6">
        <div
          id="contact"
          className="grid lg:grid-cols-2 gap-12 bg-samrat-blue dark:bg-slate-900 rounded-3xl overflow-hidden text-white"
        >
          <div className="p-12 flex flex-col justify-center">
            <h2 className="font-heading text-3xl font-bold mb-8 text-samrat-orange">
              Visit the Kingdom
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-samrat-orange text-xl" aria-hidden="true">📍</div>
                <div>
                  <p className="font-bold">Main Branch</p>
                  <p className="text-white/70">Kimathi Way, Nyeri Town, Kenya</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-samrat-orange text-xl" aria-hidden="true">📞</div>
                <div>
                  <p className="font-bold">Call Us</p>
                  <p className="text-white/70">+254 700 000 000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-samrat-orange text-xl" aria-hidden="true">✉️</div>
                <div>
                  <p className="font-bold">Email Support</p>
                  <p className="text-white/70">info@samratnyeri.co.ke</p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={mapImg}
            alt="Map showing Samrat Supermarket location in Nyeri town centre"
            className="h-full min-h-[400px] w-full object-cover grayscale brightness-75 contrast-125"
            width={1008}
            height={800}
            loading="lazy"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-heading font-bold text-xl tracking-tighter">
            SAMRAT <span className="text-samrat-orange">NYERI</span>
          </div>
          <div className="text-slate-500 dark:text-slate-400 text-sm">
            © 2026 Samrat Supermarket. The King of Supermarkets!!
          </div>
          <div className="flex gap-6">
            <a
              href="#contact"
              className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-samrat-orange transition-colors"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="#contact"
              className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-samrat-orange transition-colors"
              aria-label="Instagram"
            >
              i
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
