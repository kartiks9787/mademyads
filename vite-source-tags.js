import { motion } from 'framer-motion';
import { CheckCircle2, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export const Process = () => {
  const steps = [
    { title: "Discovery Call", desc: "We dive deep into your business goals, target audience, and current bottlenecks.", icon: "01" },
    { title: "Strategy Plan", desc: "Our experts craft a customized AI and marketing roadmap tailored to your needs.", icon: "02" },
    { title: "Build & Launch", desc: "We develop your systems, design your assets, and go live with precision.", icon: "03" },
    { title: "Scale Results", desc: "Continuous monitoring and optimization to ensure consistent growth and ROI.", icon: "04" },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -translate-y-1/2 hidden lg:block" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Our Process</h2>
          <p className="text-gray-400">A proven 4-step framework to take your business from where it is to where it needs to be.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative text-center group"
            >
              <div className="mb-8 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-2xl font-bold text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const metrics = [
    { label: "Leads Growth", value: "3X", desc: "Average increase for our clients" },
    { label: "Cost Per Lead", value: "40%", desc: "Lowered through AI optimization" },
    { label: "Projects Done", value: "150+", desc: "Successful digital deliveries" },
    { label: "Client ROI", value: "500%", desc: "Average return on ad spend" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white/5 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">Real Results for Real Businesses</h2>
            <p className="text-gray-400 mb-10 text-lg">
              We don't just build websites; we build revenue engines. Our portfolio spans across various industries, 
              all united by one thing: massive growth through intelligent automation.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {metrics.map((metric, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-1">{metric.label}</div>
                  <div className="text-xs text-gray-500">{metric.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
             <div className="group relative overflow-hidden rounded-3xl aspect-video bg-gray-900 border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Result 1" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="text-white font-bold text-xl mb-1">E-commerce Automation</div>
                  <div className="text-purple-400 text-sm font-medium">300% Revenue Increase</div>
                </div>
             </div>
             <div className="group relative overflow-hidden rounded-3xl aspect-video bg-gray-900 border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Result 2" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="text-white font-bold text-xl mb-1">SaaS Lead Generation</div>
                  <div className="text-blue-400 text-sm font-medium">40% Lower CPL</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const reviews = [
    { name: "Sarah Johnson", role: "CEO, TechFlow", text: "MadeMyAds transformed our sales process. The AI chatbot they built handles 80% of our inquiries, allowing our team to focus on high-value deals.", stars: 5 },
    { name: "Mark Peterson", role: "Marketing Director, LuxStay", text: "The website design is absolutely stunning. We've seen a 50% increase in conversion rate since the launch. Truly premium service.", stars: 5 },
    { name: "Elena Rodriguez", role: "Founder, Bloomly", text: "Their Meta ads strategy is on another level. We're getting higher quality leads for a fraction of what we used to spend.", stars: 5 },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">What Our Clients Say</h2>
          <p className="text-gray-400">Don't just take our word for it. Here's what industry leaders think of our work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <div className="font-bold text-white">{review.name}</div>
                <div className="text-sm text-purple-400">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQ = () => {
  const faqs = [
    { q: "How long does it take to see results?", a: "Most clients see a significant uptick in lead quality and engagement within the first 30 days of launching our AI systems and ad campaigns." },
    { q: "Do I need technical knowledge to use your systems?", a: "Not at all. We build everything to be fully automated and user-friendly. We also provide full training and support." },
    { q: "Which industries do you specialize in?", a: "We work with a wide range of industries including Real Estate, E-commerce, SaaS, Professional Services, and more." },
    { q: "What makes MadeMyAds different from other agencies?", a: "We focus on AI-driven automation and high-end design. We don't just run ads; we build entire systems that handle the customer journey from first click to final sale." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about working with us.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-white">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="text-purple-400" /> : <ChevronDown className="text-gray-500" />}
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-6 pb-6 text-gray-400"
                >
                  {faq.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CTA = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-white/10 p-12 md:p-24 text-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.2),transparent_70%)]" />
          
          <h2 className="mb-8 text-4xl font-extrabold text-white sm:text-6xl">
            Ready to Scale Your <br /> Business?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-300">
            Join the elite businesses using AI to automate their growth. Let's build your future today.
          </p>
          
          <a
            href="https://wa.me/1234567890?text=Hi, I want to grow my business with MadeMyAds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-xl font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
