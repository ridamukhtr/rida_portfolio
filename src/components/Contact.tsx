import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  MapPin,
  Download,
} from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, whether
            that's a project, a job opportunity, or just a chat about
            technology. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          {/* Contact Info */}
          <div className="project-card p-8 text-center mb-8">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=ridamukhtar638@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} className="inline-block mr-3" />
                  ridamukhtar638@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={20} className="text-primary" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Social Links & Resume */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/ridamukhtr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-simple flex items-center gap-2 w-full sm:w-auto justify-center hover:text-white  "
              style={{ backgroundColor: "#7de352dd", }}
            >
              <LuGithub size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rida-mukhtar-750511262"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-simple  flex items-center gap-2 w-full sm:w-auto justify-center hover:text-white   "
              style={{ backgroundColor: "#0076b5e2" }}
            >
              <LuLinkedin size={18} />
              LinkedIn
            </a>

            <a
              href="https://wa.me/923036102526"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-simple  flex items-center gap-2 w-full sm:w-auto justify-center hover:text-white   "
              aria-label="WhatsApp"
              style={{ backgroundColor: "#075e54" }}
            >
              <BsWhatsapp size={18} />
              Chat on WhatsApp
            </a>

            <a
              href="../../public/RidaMukhtar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Quick Response Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            I typically respond to messages within 24 hours. For urgent matters,
            feel free to reach out on LinkedIn.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
