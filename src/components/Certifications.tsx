import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import { certifications } from '../data/portfolio';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
              Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Validated expertise in cutting-edge AI, machine learning, and cloud technologies
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -5 }}
              >
                <div className="glass-card h-full p-6 group-hover:shadow-glow transition-all duration-300">
                  <div className="flex flex-col h-full">
                    {/* Header with Icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-xl shrink-0">
                        {cert.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-bold text-foreground mb-1 line-clamp-2">
                          {cert.name}
                        </h3>
                        <p className="text-primary font-semibold text-sm">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                  
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievement Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="glass text-center p-6 rounded-xl">
              <div className="text-3xl font-bold gradient-text mb-2">6+</div>
              <p className="text-muted-foreground">Professional Certifications</p>
            </div>
            
            <div className="glass text-center p-6 rounded-xl">
              <div className="text-3xl font-bold gradient-text mb-2">4</div>
              <p className="text-muted-foreground">Leading Platforms</p>
            </div>
            
            <div className="glass text-center p-6 rounded-xl">
              <div className="text-3xl font-bold gradient-text mb-2">2024</div>
              <p className="text-muted-foreground">Latest Certification</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}