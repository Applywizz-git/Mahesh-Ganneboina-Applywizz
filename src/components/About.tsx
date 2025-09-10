import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo, stats } from '../data/portfolio';
import CountUp from 'react-countup';

function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  return (
    <CountUp
      end={end}
      duration={duration}
      separator=","
      suffix={suffix}
      preserveValue
    />
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const skills = [
    { name: "Generative AI", level: 95 },
    { name: "Cloud Architecture", level: 90 },
    { name: "Data Engineering", level: 85 },
    { name: "Machine Learning", level: 90 },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "Constantly exploring cutting-edge AI technologies to solve complex business challenges",
      icon: "🚀"
    },
    {
      title: "Scalable Solutions",
      description: "Building enterprise-grade systems that grow with your business needs",
      icon: "⚡"
    },
    {
      title: "Data-Driven",
      description: "Making informed decisions backed by comprehensive analytics and insights",
      icon: "📊"
    },
    {
      title: "Continuous Learning",
      description: "Staying ahead with the latest advancements in AI and cloud technologies",
      icon: "🎓"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
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
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming businesses through intelligent automation and cutting-edge AI solutions
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card text-center group hover:scale-105 transition-transform duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {isInView && (
                    <AnimatedCounter 
                      end={parseInt(stat.value)} 
                      suffix={stat.suffix}
                      duration={2 + index * 0.2}
                    />
                  )}
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-display font-semibold mb-4">
                Generative AI Engineer & Cloud Architect
              </h3>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p className="leading-relaxed">
                  With over 5 years of experience in developing LLM-powered applications and enterprise-scale data platforms, 
                  I specialize in building intelligent systems that drive real business value. My expertise spans across 
                  finance, technology, and consulting domains, where I've successfully delivered AI-driven platforms that 
                  reduce costs and optimize decision-making processes.
                </p>
                
                <p className="leading-relaxed">
                  I'm passionate about retrieval-augmented generation (RAG), agentic AI frameworks, and vector databases, 
                  creating solutions that deliver real-time insights, personalization, and conversational analytics. 
                  My work focuses on making AI accessible and practical for enterprise adoption.
                </p>
                
                <p className="leading-relaxed">
                  Currently pursuing a Doctor of Business Administration to strengthen my leadership and strategic 
                  decision-making expertise, complementing my technical skills with business acumen.
                </p>
              </div>

              {/* Skills Progress Bars */}
              <div className="space-y-4 mt-8">
                <h4 className="text-lg font-semibold mb-4">Core Expertise</h4>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.5 + index * 0.1 }}
                  >
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 1.5 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Values & Principles */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-display font-semibold mb-6">
                Values & Approach
              </h3>
              
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="glass border border-border/50 rounded-xl p-6 hover:shadow-elevated transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{value.icon}</div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}