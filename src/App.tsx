import { motion } from "motion/react";
import { 
  ArrowRight, 
  Menu, 
  X, 
  Star, 
  Quote, 
  User, 
  Users, 
  BookOpen, 
  Mail, 
  Clock, 
  Send,
  ChevronLeft,
  ChevronRight,
  Twitter,
  Instagram
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif italic text-primary">
          Sarah Mitchell Coaching
        </a>
        
        <div className="hidden md:flex items-center gap-8 font-serif font-medium">
          <a href="#about" className="text-on-surface-variant hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-on-surface-variant hover:text-primary transition-colors">Services</a>
          <a href="#testimonials" className="text-on-surface-variant hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="text-on-surface-variant hover:text-primary transition-colors">Contact</a>
          <button className="bg-tertiary-container text-on-tertiary-container px-6 py-2.5 rounded-lg font-sans font-semibold hover:opacity-90 transition-all">
            Book a Free Call
          </button>
        </div>

        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-b border-outline-variant/10 px-6 py-8 flex flex-col gap-6"
        >
          <a href="#about" onClick={() => setIsOpen(false)} className="text-xl font-serif">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-xl font-serif">Services</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-xl font-serif">Testimonials</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-xl font-serif">Contact</a>
          <button className="bg-primary text-on-primary px-6 py-4 rounded-xl font-semibold">
            Book a Free Call
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#e8f1ff_0%,_transparent_50%)] opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_#dae5df_0%,_transparent_40%)] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest rounded-full">
            Elevate Your Path
          </span>
          <h1 className="text-5xl md:text-7xl leading-[1.1] text-on-surface">
            Transform Your Life, <br />
            <span className="italic text-primary">Unlock Your Potential</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
            Certified Life Coach helping ambitious women break through limitations and build the life they deserve.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-semibold shadow-lg hover:translate-y-[-2px] transition-all">
              Start Your Journey
            </button>
            <button className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface px-8 py-4 rounded-xl font-semibold hover:bg-surface-container-low transition-all">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
              alt="Professional life coach Sarah Mitchell"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-soft border border-outline-variant/10 max-w-[240px]">
            <div className="flex gap-1 text-tertiary mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-sm font-medium italic text-on-surface-variant">
              "The clarity Sarah helped me find was life-changing."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const QuoteSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 my-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-surface-container-low p-12 md:p-20 text-center rounded-3xl relative overflow-hidden"
      >
        <Quote className="text-tertiary-fixed-dim w-16 h-16 absolute top-8 left-8 opacity-20" />
        <p className="text-3xl md:text-4xl text-on-surface-variant font-serif italic leading-relaxed">
          "The most beautiful journey is the one where you discover the strength that was already within you."
        </p>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-5/12 relative">
          <div className="absolute inset-0 border-[12px] border-tertiary-container translate-x-4 translate-y-4 rounded-2xl -z-10"></div>
          <div className="rounded-2xl overflow-hidden aspect-square shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" 
              alt="Sarah Mitchell smiling"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="w-full md:w-7/12 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl text-on-surface">Hi, I'm Sarah Mitchell</h2>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              With over a decade of experience in personal development, I specialize in helping women navigate the complex transitions of life and career. My approach blends evidence-based psychological principles with intuitive coaching to create lasting transformation.
            </p>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              Whether you're feeling stuck, facing a major pivot, or simply know there's "more" out there for you, I'm here to provide the space and strategy you need to thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            {[
              { label: "Clients", value: "500+" },
              { label: "Experience", value: "10 Yrs" },
              { label: "Certified", value: "ICF" }
            ].map((stat, i) => (
              <div key={i} className="bg-surface-container-lowest p-6 rounded-2xl shadow-soft border border-outline-variant/10 text-center hover:shadow-md transition-all">
                <span className="text-3xl font-serif text-primary block mb-1">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "1:1 Coaching",
      desc: "Personalized deep-dive sessions focusing on your specific goals, obstacles, and breakthrough strategies.",
      icon: <User className="w-8 h-8" />,
      color: "bg-primary-container text-primary",
      linkText: "Explore Plan"
    },
    {
      title: "Group Programs",
      desc: "Connect with like-minded women in a supportive environment while working through high-impact curriculum.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-secondary-container text-secondary",
      linkText: "Join Community"
    },
    {
      title: "Online Courses",
      desc: "Self-paced masterclasses designed to give you practical tools for confidence, boundaries, and career growth.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-tertiary-container text-on-tertiary-container",
      linkText: "View Courses"
    }
  ];

  return (
    <section id="services" className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl text-on-surface">How I Can Help You</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Tailored coaching pathways designed to meet you exactly where you are in your personal growth journey.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="bg-surface-container-lowest p-10 rounded-3xl shadow-soft border border-outline-variant/5 group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl mb-4 text-on-surface">{service.title}</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">{service.desc}</p>
              <a href="#" className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                {service.linkText} <ArrowRight size={20} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Elena Rodriguez",
      role: "Marketing Director",
      text: "Sarah helped me find the courage to leave a job that was draining me. Today, I'm running my own agency and I've never been happier.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Jessica Chen",
      role: "Tech Lead",
      text: "The group program was exactly what I needed. Knowing I wasn't alone in my struggles changed everything for my perspective.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Samantha Miller",
      role: "Non-profit Founder",
      text: "Sarah's coaching style is a perfect mix of empathy and accountability. She doesn't just listen; she gives you the tools to move.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-4xl md:text-5xl text-on-surface">What My Clients Say</h2>
            <p className="text-on-surface-variant text-lg">Real stories of transformation from women who chose to invest in themselves.</p>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
              <ChevronLeft />
            </button>
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-surface-container-low p-8 rounded-3xl space-y-6 relative">
              <div className="flex gap-0.5 text-tertiary">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-on-surface-variant italic leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-on-surface">{t.name}</p>
                  <p className="text-sm text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary opacity-[0.03] -z-10"></div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl text-on-surface">Ready to Start Your Journey?</h2>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Book a free 30-minute discovery call today. No pressure, just a conversation to see if we're a good fit for your goals.
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                <Mail size={24} />
              </div>
              <p className="font-medium text-lg text-on-surface">hello@sarahmitchell.com</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                <Clock size={24} />
              </div>
              <p className="font-medium text-lg text-on-surface">Available Mon-Fri, 9am - 5pm</p>
            </div>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container-lowest p-10 md:p-14 rounded-3xl shadow-2xl border border-outline-variant/5"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Full Name</label>
              <input 
                className="w-full px-6 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none" 
                placeholder="Jane Doe" 
                type="text" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Email Address</label>
              <input 
                className="w-full px-6 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none" 
                placeholder="jane@example.com" 
                type="email" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Your Message</label>
              <textarea 
                className="w-full px-6 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none resize-none" 
                placeholder="Tell me a bit about what you're looking for..." 
                rows={4}
              ></textarea>
            </div>
            <button className="w-full bg-primary text-on-primary py-5 rounded-xl font-bold shadow-lg hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2">
              Send Message <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 border-t border-outline-variant/10 bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-xl font-serif italic text-primary">Sarah Mitchell Coaching</h3>
          <p className="text-on-surface-variant text-sm tracking-wide max-w-xs text-center md:text-left">
            Empowering ambitious women to lead lives of purpose and joy through professional life coaching.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-on-surface-variant font-sans text-sm tracking-wide">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">FAQ</a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low hover:bg-primary-container transition-all text-primary">
            <Twitter size={20} />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low hover:bg-primary-container transition-all text-primary">
            <Instagram size={20} />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 text-center text-on-surface-variant/50 text-xs tracking-widest uppercase">
        © 2024 Sarah Mitchell Coaching. All rights reserved.
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <QuoteSection />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
