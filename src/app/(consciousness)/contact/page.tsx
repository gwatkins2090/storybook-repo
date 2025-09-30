'use client';

import { motion } from 'framer-motion';

export function ContactCTA() {
  const cards = [
    {
      title: 'Want to offer a job opportunity?',
      body: 'Open to meaningful discussions about roles that align with this craft.',
      cta: 'Start a conversation',
      href: '#',
    },
    {
      title: 'Connect?',
      body: 'Let’s network and exchange perspectives across the spirit-tech space.',
      cta: 'Connect now',
      href: '#',
    },
    {
      title: 'Build something?',
      body: 'Let’s co-create an enlightened product experience—fast, elegant, and alive.',
      cta: 'Propose a project',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-transparent to-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-4">
            Lets Collaborate
          </h2>
          <p className="text-[#c9c7d3] max-w-2xl mx-auto">
            Three avenues to start a conversation—choose what resonates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7F39FB]/10 to-[#00FFD4]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-[#c9c7d3] leading-relaxed mb-4">{c.body}</p>
                <span className="inline-flex items-center text-[#9b87f5] group-hover:text-[#00ffd4] transition-colors">
                  {c.cta}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

