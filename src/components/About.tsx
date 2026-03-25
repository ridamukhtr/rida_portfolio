import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-10">
      <div className="section-container">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src="/rida_pic.jpeg"
            alt="Rida Mukhtar"
            className="w-48 h-48 rounded-full mx-auto border-4 border-primary object-cover shadow-lg"
          />
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Frontend Developer with 3+ years of experience building responsive web and mobile applications using React, Next.js,Vue3 and React Native.
            With a strong foundation and a love for clean code, I strive to build user-friendly interfaces that provide seamless experiences.
            When I'm not coding, you can find me exploring the latest tech trends or contributing to open-source projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
