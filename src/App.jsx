import React from 'react';
import Navbar from './components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.css';
import logo from './assets/logoss.png';
import ChatWidget from './components/chatwidget';

const Section = ({ title, children, id }) => (
  <section id={id} className="py-16 px-6 max-w-5xl mx-auto scroll-mt-16">
    <h2 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-300">{title}</h2>
    {children}
  </section>
);

export default function App() {
  return (
    <div className="relative font-sans bg-white text-gray-800 dark:bg-gray-900 dark:text-white scroll-smooth">
      {/* Floating glow elements */}
      <div className="pointer-events-none fixed top-0 left-0 w-72 h-72 bg-blue-100 opacity-20 blur-3xl rounded-full -z-10"></div>
      <div className="pointer-events-none fixed bottom-0 right-0 w-72 h-72 bg-cyan-100 opacity-20 blur-3xl rounded-full -z-10"></div>

      <Navbar />

      {/* Hero Section */}
     {/* Hero Section */}
  <header className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center min-h-[95vh] flex items-center justify-center px-4 overflow-hidden">
    <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500 opacity-20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse"></div>
    <div className="absolute top-10 left-4 sm:left-12 text-7xl sm:text-9xl opacity-50 animate-float">💸</div>
    <div className="absolute bottom-10 right-4 sm:right-12 text-7xl sm:text-9xl opacity-50 animate-float animation-delay-2000">🔒</div>

    <div className="relative z-10 flex flex-col items-center px-4 text-center">
      <img
        src={logo}
        alt="SoftSell Logo"
        className="w-24 sm:w-32 h-24 sm:h-32 object-contain mb-6 animate-float rounded-full shadow-[0_12px_32px_rgba(59,130,246,0.4)]"
      />
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg animate-pulse">
        Sell Unused Software Licenses Easily
      </h1>
      <p className="text-lg sm:text-xl mb-6">Turn your unused software into cash in 3 simple steps.</p>
      <a href="#contact">
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition shadow-lg hover:shadow-blue-300">
          Sell My Licenses
        </button>
      </a>
    </div>
  </header>

  {/* How It Works */}
  <Section title="How It Works" id="how">
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      {["⬆️ Upload License", "💰 Get Valuation", "✅ Get Paid"].map((item, i) => {
        const [icon, ...labelParts] = item.split(' ');
        return (
          <SwiperSlide key={i}>
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-8 rounded-lg shadow-md text-center max-w-md mx-auto">
              <div className="text-4xl mb-2">{icon}</div>
              <h3 className="text-xl font-bold">{labelParts.join(' ')}</h3>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </Section>

  {/* Why Choose Us */}
  <section id="why" className="py-20 px-4 bg-[rgba(229,231,235,0.6)] dark:bg-gray-800 shadow-inner">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-300 mb-12">Why Choose Us</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center justify-center">
        {["⚡ Fast Process", "🔒 Secure Transactions", "💸 High Payouts", "⭐ Trusted by Users"].map((item, i) => {
          const [icon, ...rest] = item.split(' ');
          const title = rest.join(' ');
          return (
            <div
              key={i}
              className="bg-white dark:bg-gray-700 rounded-full w-32 h-32 sm:w-40 sm:h-40 flex flex-col items-center justify-center shadow-lg border border-blue-100 hover:shadow-blue-500 transition hover:scale-105 mx-auto"
            >
              <div className="text-4xl sm:text-5xl animate-float-slow mb-1">{icon}</div>
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-xs sm:text-sm px-2 leading-tight">{title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* Contact Section */}
  <Section title="Get in Touch" id="contact">
    <div className="relative overflow-hidden rounded-xl shadow-2xl p-6 ring-1 ring-gray-200 dark:ring-gray-600 z-10 bg-white dark:bg-gray-800">
      <div className="absolute -left-20 top-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-400 opacity-50 rounded-full blur-3xl animate-blob -z-10"></div>

      <form className="grid gap-4 sm:grid-cols-2 relative z-10">
        <input type="text" placeholder="Name" required className="contact-field" />
        <input type="email" placeholder="Email" required className="contact-field" />
        <input type="text" placeholder="Company" className="contact-field" />
        <select required className="contact-field">
          <option value="">Select License Type</option>
          <option>Antivirus</option>
          <option>Design Tool</option>
          <option>Development Tool</option>
          <option>Other</option>
        </select>
        <textarea placeholder="Message" required className="contact-field sm:col-span-2"></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded sm:col-span-2 hover:bg-blue-700 transition shadow-lg hover:shadow-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  </Section>

  {/* CTA */}
  <section className="bg-blue-600 text-white py-12 text-center px-4">
    <h2 className="text-3xl font-bold mb-4">Ready to Get a Quote?</h2>
    <p className="mb-6">Let us evaluate your unused software licenses and offer the best price.</p>
    <a href="#contact">
      <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
        Get Quote
      </button>
    </a>
  </section>

  {/* Footer */}
  <footer className="bg-[#0d1520] dark:bg-black text-white py-12 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="SoftSell Logo" className="h-10 w-10" />
        <span className="text-3xl sm:text-4xl font-bold text-blue-500">SoftSell</span>
      </div>

      <div>
        <h3 className="text-lg font-bold text-blue-400 mb-4">Links</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-8 text-sm">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">About Us</a>
          <a href="#" className="hover:text-blue-400">Careers</a>
          <a href="#" className="hover:text-blue-400">Contact Us</a>
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">Terms & Conditions</a>
          <a href="#" className="hover:text-blue-400">Return & Refund</a>
          <a href="#" className="hover:text-blue-400">Shipping Policy</a>
        </div>
      </div>

          <div></div>
        </div>
        <div className="text-center mt-8 text-sm text-white-300">
          © 2025 All rights reserved by <span className="text-blue-500 font-semibold">SoftSell Services</span>
        </div>
      </footer>

      <ChatWidget /> 
    </div>
  );
}



