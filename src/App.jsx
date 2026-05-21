import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { ChevronRight, ArrowRight, Menu, X, Plus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference text-white">
      <div className="text-2xl font-black tracking-tighter uppercase">
        CLUB ITALIA
      </div>

      <div className="hidden md:flex space-x-8 text-[10px] uppercase tracking-[0.3em] font-bold">
        {['Categories', 'Portfolio', 'Experience', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-50 transition-all hover:tracking-[0.4em]">
            {item}
          </a>
        ))}
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center space-y-8 text-4xl font-black uppercase tracking-tighter z-40"
          >
            {['Categories', 'Portfolio', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="hover:italic transition-all">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden bg-[#0a0a0a]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl z-10"
      >
        <h1 className="text-6xl md:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase mb-20 kinetic-text">
          LE RESPECT <br />
          <span className="italic font-serif text-white/20 hover:text-white transition-colors duration-700">EST LE VRAI</span> <br />
          LUXE
        </h1>

        <div className="grid md:grid-cols-2 gap-12 border-t border-white/10 pt-12 items-center">
          <div className="space-y-8">
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">The CLUB ITALIA CARD</div>
            <div className="max-w-xl text-lg md:text-xl text-white/70 leading-relaxed font-light space-y-4">
              <p>
                Crafted in cold metal, designed for the elite, A passport to privilege where value and luxury meet.
                It begins at just two-nine-nine, but it will not wait, For like a rising stock, the market dictates our rate.
              </p>
              <p>
                As our network widens and exclusive doors unlock, The price climbs higher, ticking just like a clock.
                Vendors gain champions; you gain the throne, Priority access in a league of your own.
              </p>
              <p>
                An asset, not a fee, resting in your hand, Connecting the finest stores across the land.
                Invest in your lifestyle before the surge takes flight, Own the card that grows in worth, starting tonight.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <motion.img
              src="/club_italia_card.png"
              alt="Club Italia Elite Card"
              className="w-full rounded-2xl shadow-[0_20px_50px_rgba(255,255,255,0.05)] border border-white/10"
              whileHover={{ scale: 1.05, rotateY: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Dynamic Background Element */}
      <div className="absolute top-0 right-0 w-full h-full -z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      </div>
    </section>
  );
};

const categories = [
  {
    id: "01",
    title: "ESSENTIALS",
    subPoints: ["Kids care", "Grocery", "Education", "Household"]
  },
  {
    id: "02",
    title: "FUN & NIGHTLIFE",
    subPoints: ["Cafes", "Bars and pubs", "Movie theatre", "Gaming arcades"]
  },
  {
    id: "03",
    title: "WELLNESS",
    subPoints: ["Gyms", "Salons", "Sports centre", "Health centres"]
  },
  {
    id: "04",
    title: "LIFESTYLE",
    subPoints: ["Apparels", "Cosmetics", "Jewelery", "Travel"]
  },
  {
    id: "05",
    title: "UTILITIES",
    subPoints: ["Automotive service", "Electronics", "Automobile showrooms", "Automobile accessories"]
  }
];

const MasterCategories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="categories" className="relative min-h-[90vh] bg-[#f9f8f4] text-[#0a0a0a] py-32 px-6 md:px-12 flex flex-col justify-between overflow-hidden">
      {/* Header Info */}
      <div className="flex justify-between items-start w-full relative z-10">
        <div className="flex flex-col">
          <Plus className="mb-2" size={24} />
          <span className="text-[10px] uppercase tracking-[0.3em] font-black">MASTER CATEGORIES</span>
        </div>

        <div className="flex space-x-6 text-2xl font-bold opacity-30">
          {categories.map((cat, i) => (
            <span key={cat.id} className={`transition-all duration-500 cursor-pointer ${i === activeIndex ? 'opacity-100 scale-125 font-black' : 'hover:opacity-50'}`}>
              {cat.id}.
            </span>
          ))}
        </div>
      </div>

      {/* Main Title Center */}
      <div className="flex-1 flex items-center justify-start py-20 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <h2 className="text-7xl md:text-[12vw] font-black leading-none tracking-tighter uppercase whitespace-nowrap">
              {categories[activeIndex].title}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subpoints Grid Bottom */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-black/10 pt-12 relative z-10">
        <AnimatePresence mode="wait">
          {categories[activeIndex].subPoints.map((point, idx) => (
            <motion.div
              key={`${activeIndex}-${idx}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col"
            >
              <span className="text-black/30 mb-2">—</span>
              <span className="text-sm md:text-lg font-medium">{point}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Background Accent Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f4f2eb] -z-0" />
    </section>
  );
};

const ProjectItem = ({ title, category, location, image, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0, scale: 0.95 }}
      animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-video overflow-hidden bg-white/5 border border-white/10"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
      />
      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent opacity-100 group-hover:from-black/80 transition-all">
        <div className="flex justify-between items-end">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] font-black text-white/50 group-hover:text-white mb-2 transition-colors">
              {category} // {location}
            </div>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">{title}</h3>
          </div>
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all font-black text-xs">
            VIEW
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "TONI AND GUY",
      category: "SALONS",
      location: "NAVA INDIA",
      image: "/toni_guy_salon_luxury_1766414946044.png"
    },
    {
      title: "ZERO GRAVITY",
      category: "GYMS",
      location: "SAIBABA COLONY",
      image: "/zero_gravity_gym_luxury_1766414967673.png"
    },
    {
      title: "NUTRA PHARM",
      category: "HEALTH CENTRES",
      location: "SAIBABA COLONY",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "URBAN LADDER",
      category: "FURNITURE",
      location: "NAVA INDIA",
      image: "/modern_furniture_showroom_luxury_1766414991352.png"
    },
    {
      title: "VOGUE 360",
      category: "SALON",
      location: "KAVUNDAMPALAYAM",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <div className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40 mb-4">LATEST PROJECTS</div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Crafting exclusive sales - <br />Our exclusive collaborations
          </h2>
        </div>
        <div className="max-w-sm text-right">
          <p className="text-white/40 mb-8 leading-relaxed font-light italic text-sm">
            "Elevated experiences through precision and design. Our portfolio spans across elite fitness, healthcare, and high-fashion hair couture."
          </p>
          <div className="text-[10px] uppercase tracking-[0.4em] font-black border-b border-white/20 pb-2 inline-block">SCROLL TO EXPLORE</div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:gap-24">
        {projects.map((project, index) => (
          <ProjectItem key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};

const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    phNo: '',
    email: '',
    referralCode: '',
    address: '',
    area: '',
    landmark: '',
    pincode: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("New CLUB ITALIA Card Registration");
    const body = encodeURIComponent(`
Name: ${formData.name}
DOB: ${formData.dob}
Phone: ${formData.phNo}
Email: ${formData.email}
Referral Code: ${formData.referralCode}
Address: ${formData.address}
Area: ${formData.area}
Landmark: ${formData.landmark}
Pincode: ${formData.pincode}
    `);

    window.location.href = `mailto:pranavguruvayurappan@gmail.com?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="w-full max-w-2xl bg-[#111] border border-white/10 p-8 md:p-12 overflow-y-auto max-h-[90vh]"
          >
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <h2 className="text-2xl font-black uppercase tracking-tighter">ELITE CARD REGISTRATION</h2>
              <button onClick={onClose} className="hover:rotate-90 transition-transform">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Name', name: 'name', type: 'text' },
                { label: 'DOB', name: 'dob', type: 'date' },
                { label: 'Ph no', name: 'phNo', type: 'tel' },
                { label: 'E-mail', name: 'email', type: 'email' },
                { label: 'Referral code', name: 'referralCode', type: 'text' },
                { label: 'Address', name: 'address', type: 'text', span: true },
                { label: 'Area', name: 'area', type: 'text' },
                { label: 'Landmark', name: 'landmark', type: 'text' },
                { label: 'Pincode', name: 'pincode', type: 'text' },
              ].map((field) => (
                <div key={field.name} className={field.span ? 'md:col-span-2' : ''}>
                  <label className="text-[10px] uppercase tracking-widest font-black text-white/40 mb-2 block">
                    {field.label}
                  </label>
                  <input
                    required
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 p-4 focus:border-white outline-none transition-colors text-white"
                  />
                </div>
              ))}
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full bg-white text-black font-black uppercase py-4 tracking-widest hover:bg-white/90 transition-all"
                >
                  Confirm Registration
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 border-t border-white/10 bg-[#0a0a0a]">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <div className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40 mb-8">THE BRAND</div>
          <h2 className="text-5xl md:text-[7vw] font-black leading-[0.85] tracking-tighter uppercase">
            A 360° APPROACH <br />
            <span className="italic font-serif text-white/60">TO YOUR VISION.</span>
          </h2>
        </div>
        <div className="flex flex-col justify-end space-y-12">
          <p className="text-2xl text-white/70 leading-relaxed font-light italic">
            "We don't just provide a card; we provide a gateway. A passport to a league of your own, where every interaction is curated for the elite."
          </p>
          <div className="grid grid-cols-2 gap-8 text-[10px] uppercase tracking-[0.4em] font-black">
            <div className="flex flex-col py-4 border-t border-white/10">
              <span className="text-white/30 mb-2">FOUNDED</span>
              <span>CHBEBA — 2025</span>
            </div>
            <div className="flex flex-col py-4 border-t border-white/10">
              <span className="text-white/30 mb-2">LOCATION</span>
              <span>GLOBAL ACCESS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className="py-40 px-6 md:px-12 flex flex-col items-center text-center bg-[#0a0a0a]">
      <div className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-12">CONNECT WITH THE ELITE</div>
      <h2 className="text-6xl md:text-[15vw] font-black mb-12 uppercase tracking-tighter leading-[0.8]">
        OWN THE <br />THRONE
      </h2>
      <motion.button
        onClick={() => setModalOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex flex-col items-center gap-6"
      >
        <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-all duration-700">
          <ArrowRight size={48} className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-700" />
        </div>
        <span className="text-[12px] uppercase tracking-[0.5em] font-black">Get the Card Now</span>
      </motion.button>

      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

const Footer = () => (
  <footer className="py-24 px-6 md:px-12 border-t border-white/10 bg-[#0a0a0a]">
    <div className="flex flex-col md:flex-row justify-between items-start gap-12">
      <div className="space-y-6">
        <div className="text-[10px] tracking-[0.3em] uppercase font-black">© 2025 CLUB ITALIA — ELITE NETWORK</div>
        <div className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-black">
          LONDON — PARIS — COIMBATORE — NEW YORK
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="text-[10px] tracking-[0.3em] uppercase font-black text-white/30 mb-2">CONTACT US</div>
        <div className="flex flex-col space-y-2 text-sm font-medium tracking-tight">
          <a href="tel:+919578775169" className="hover:text-white/60 transition-colors">95787 75169</a>
          <a href="tel:+917094657101" className="hover:text-white/60 transition-colors">70946 57101</a>
          <a href="tel:+919500609858" className="hover:text-white/60 transition-colors">95006 09858</a>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="text-[10px] tracking-[0.3em] uppercase font-black text-white/30 mb-2">SOCIAL</div>
        <div className="flex space-x-12 text-[10px] tracking-[0.3em] uppercase font-black opacity-50">
          <a href="https://www.instagram.com/the.club.italia?igsh=MWFibzA4MG5ucWpqdw==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://www.linkedin.com/in/club-italia-507934386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <main className="bg-[#0a0a0a] text-white selection:bg-white selection:text-black font-sans">
      <Navbar />
      <Hero />
      <MasterCategories />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
