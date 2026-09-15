import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/samrat-logo.png";
import aisleImg from "@/assets/aisle.jpg";
import mapImg from "@/assets/nyeri-map.jpg";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import { Menu, X, MessageCircle, Mail, Phone } from "lucide-react";

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
      { property: "og:image", content: "/samrat-logo.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "google-site-verification", content: "verify-your-google-code-here" },
    ],
  }),
});

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#products", label: "What We Sell" },
  { href: "#hours", label: "Hours" },
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

const products = [
  { name: "Fresh Tomatoes (1kg)", price: "100 KES", icon: "🍅", category: "Groceries" },
  { name: "Maize Flour (2kg)", price: "180 KES", icon: "🌽", category: "Groceries" },
  { name: "Ugali Flour (5kg)", price: "350 KES", icon: "🥄", category: "Groceries" },
  { name: "Fresh Milk (1L)", price: "65 KES", icon: "🥛", category: "Groceries" },
  { name: "Whole Wheat Bread", price: "80 KES", icon: "🍞", category: "Bakery" },
  { name: "Samosa Pack (6pcs)", price: "150 KES", icon: "🥟", category: "Bakery" },
  { name: "Stainless Steel Pots", price: "1,500 KES", icon: "🍳", category: "Appliances" },
  { name: "LED Bulbs (4pack)", price: "200 KES", icon: "💡", category: "Appliances" },
];

const testimonials = [
  {
    name: "Mary Wanjiru",
    role: "Regular Customer",
    text: "Samrat has the freshest produce in town! Always stocked and friendly staff.",
    rating: 5,
  },
  {
    name: "David Kipchoge",
    role: "Business Owner",
    text: "Best prices and reliable quality. I've been shopping here for 5 years!",
    rating: 5,
  },
  {
    name: "Grace Muthoni",
    role: "Home Baker",
    text: "Their bakery section is amazing. Perfect ingredients and great service!",
    rating: 5,
  },
];

const operatingHours = [
  { day: "Monday - Friday", hours: "7:00 AM - 8:00 PM" },
  { day: "Saturday", hours: "7:00 AM - 9:00 PM" },
  { day: "Sunday", hours: "8:00 AM - 7:00 PM" },
  { day: "Public Holidays", hours: "9:00 AM - 6:00 PM" },
];

const faqs = [
  {
    question: "Do you offer home delivery?",
    answer: "Yes! Orders above 500 KES within Nyeri town get free delivery. Call us or use WhatsApp to order.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Cash, M-Pesa, and cards. All methods are welcome!",
  },
  {
    question: "Are your products fresh daily?",
    answer: "Absolutely! We restock fresh produce every morning directly from local Nyeri farms.",
  },
  {
    question: "Do you sell wholesale quantities?",
    answer: "Yes! We offer competitive wholesale prices for businesses. Contact us for bulk orders.",
  },
  {
    question: "Can I pre-order custom cakes?",
    answer: "Yes! Our bakery team creates custom cakes for all occasions. Order 2-3 days in advance.",
  },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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

          {/* Desktop Navigation */}
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

          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-white/10 pt-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block py-2 text-sm font-medium uppercase tracking-wider hover:text-samrat-orange transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
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

      {/* Featured Products */}
      <section id="products" className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Featured Products</h2>
            <div className="h-1 w-24 bg-samrat-orange mx-auto" />
            <p className="text-slate-600 dark:text-slate-400 mt-4">Our best-selling items at unbeatable prices</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-white dark:bg-slate-950 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-bold mb-2">{p.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{p.category}</p>
                <div className="text-samrat-orange font-bold text-lg">{p.price}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-slate-600 dark:text-slate-400 mb-4">These are just a few of our products!</p>
            <a
              href="https://wa.me/254700000000?text=Hi%20Samrat%20Supermarket!%20I'd%20like%20to%20know%20more%20about%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={20} />
              View Full Catalog on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* What We Sell */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Everything You Need</h2>
            <div className="h-1 w-24 bg-samrat-orange mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((c) => (
              <div
                key={c.title}
                className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-samrat-orange transition-colors"
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

      {/* Operating Hours */}
      <section id="hours" className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Hours of Operation</h2>
            <div className="h-1 w-24 bg-samrat-orange mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {operatingHours.map((h) => (
              <div
                key={h.day}
                className="bg-white dark:bg-slate-950 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 text-center"
              >
                <p className="font-bold text-lg mb-2">{h.day}</p>
                <p className="text-samrat-orange font-semibold">{h.hours}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-samrat-blue dark:bg-slate-900 text-white rounded-xl text-center">
            <p className="text-lg mb-4">📢 Extended hours during festive seasons!</p>
            <a
              href="https://wa.me/254700000000?text=Hi%20Samrat!%20What%20are%20your%20festive%20season%20hours?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-samrat-orange hover:text-orange-400 transition-colors font-bold"
            >
              <MessageCircle size={20} />
              Ask us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">What Our Customers Say</h2>
            <div className="h-1 w-24 bg-samrat-orange mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800"
              >
                <div className="flex gap-1 mb-4">
                  {Array(t.rating)
                    .fill(0)
                    .map((_, j) => (
                      <span key={j} className="text-samrat-orange text-xl">
                        ⭐
                      </span>
                    ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 italic">"{t.text}"</p>
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="h-1 w-24 bg-samrat-orange mx-auto" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full p-6 text-left font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors flex items-center justify-between"
                >
                  {faq.question}
                  <span className={`transition-transform ${expandedFaq === i ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
                    {faq.answer}
                  </div>
                )}
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
                <div className="text-samrat-orange text-2xl flex-shrink-0">📍</div>
                <div>
                  <p className="font-bold text-lg">Main Branch</p>
                  <p className="text-white/70">Kimathi Way, Nyeri Town, Kenya</p>
                  <a
                    href="https://maps.google.com/?q=Nyeri+Kimathi+Way"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-samrat-orange hover:text-orange-400 text-sm mt-1 inline-block"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-samrat-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-lg">Call Us</p>
                  <a
                    href="tel:+254700000000"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    +254 700 000 000
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MessageCircle className="text-samrat-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-lg">WhatsApp</p>
                  <a
                    href="https://wa.me/254700000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Chat with us
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-samrat-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-lg">Email Support</p>
                  <a
                    href="mailto:info@samratnyeri.co.ke"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    info@samratnyeri.co.ke
                  </a>
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

      {/* Newsletter */}
      <section className="py-24 bg-samrat-orange">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Stay Updated with Our Offers
          </h2>
          <p className="text-white/90 mb-8">
            Subscribe to get updates on new products, special offers, and promotions
          </p>
          <div className="flex gap-2 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg focus:outline-none"
            />
            <button className="px-8 py-3 bg-samrat-blue text-white font-bold rounded-lg hover:bg-blue-800 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-white/70 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254700000000?text=Hi%20Samrat%20Supermarket!%20I%20have%20a%20question"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-40 flex items-center justify-center"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-heading font-bold text-xl tracking-tighter mb-4">
                SAMRAT <span className="text-samrat-orange">NYERI</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The King of Supermarkets since 2020
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#products" className="hover:text-samrat-orange transition-colors">Products</a></li>
                <li><a href="#about" className="hover:text-samrat-orange transition-colors">About Us</a></li>
                <li><a href="#hours" className="hover:text-samrat-orange transition-colors">Hours</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="tel:+254700000000" className="hover:text-samrat-orange transition-colors">+254 700 000 000</a></li>
                <li><a href="mailto:info@samratnyeri.co.ke" className="hover:text-samrat-orange transition-colors">info@samratnyeri.co.ke</a></li>
                <li><a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="hover:text-samrat-orange transition-colors">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-samrat-orange hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-samrat-orange hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-500 dark:text-slate-400 text-sm">
                © 2026 Samrat Supermarket. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
                <a href="#" className="hover:text-samrat-orange transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-samrat-orange transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Google Analytics Script */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      `}</script>

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Samrat Supermarket",
          "image": "/samrat-logo.png",
          "description": "The King of Supermarkets in Nyeri - Fresh groceries, household goods, and bakery",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kimathi Way",
            "addressLocality": "Nyeri",
            "addressCountry": "KE"
          },
          "telephone": "+254700000000",
          "email": "info@samratnyeri.co.ke",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "07:00",
              "closes": "20:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "07:00",
              "closes": "21:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "08:00",
              "closes": "19:00"
            }
          ]
        }
      `}</script>
    </div>
  );
}
