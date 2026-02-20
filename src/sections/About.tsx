import { motion } from "framer-motion";
import avatar from "../assets/avatar2.png";

const About: React.FC = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/4 -z-10 h-64 w-64 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[100px]" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-bold md:text-4xl"
      >
        About <span className="text-fuchsia-400">Me</span>
      </motion.h2>

      <div className="mt-12 grid items-center gap-10 md:grid-cols-2 md:gap-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative group flex justify-center md:justify-end"
        >
          <div
            className="absolute bottom-0 h-4/5 w-4/5 rounded-2xl bg-linear-to-b
           from-app-fg/5 to-transparent border border-app-fg/10 -z-10"
            aria-hidden="true"
          ></div>

          <img
            alt="Your Name"
            className="relative z-10 w-full max-w-4/5 object-contain 
                       drop-shadow-2xl bottom-px
                       transition-transform duration-500 origin-bottom group-hover:scale-105
                       saturate-110 contrast-105 dark:brightness-75 dark:contrast-110"
            src={avatar}
          />

          <div
            className="absolute bottom-0 h-24 w-4/5 rounded-2xl bg-linear-to-t
           from-muted-bg to-transparent z-20"
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col justify-center"
        >
          <div
            className="space-y-4 text-base leading-relaxed md:text-lg
          text-gray-400 [--text-full:var(--color-app-fg)] text-justify"
          >
            <p>
              With over a decade of experience, I've designed and delivered{" "}
              <span className="text-(--text-full) font-medium">
                industrial-grade systems
              </span>
              , architected{" "}
              <span className="text-(--text-full) font-medium">
                scalable ERP platforms
              </span>
              , and engineered{" "}
              <span className="text-(--text-full) font-medium">
                embedded & backend infrastructures
              </span>{" "}
              that power real-world operations.
            </p>

            <p>
              My expertise bridges{" "}
              <span className="text-(--text-full) font-medium">
                low-level embedded engineering
              </span>{" "}
              with{" "}
              <span className="text-(--text-full) font-medium">
                modern enterprise back-end architecture
              </span>
              , using technologies like C#, ASP.NET Core, Angular, and
              distributed microservices.
            </p>

            <p>
              I specialize in building{" "}
              <span className="text-(--text-full) font-medium">
                product serialization systems
              </span>
              ,{" "}
              <span className="text-(--text-full) font-medium">
                industrial automation platforms
              </span>
              , and{" "}
              <span className="text-(--text-full) font-medium">
                identity & authentication infrastructures
              </span>
              . Every system is designed with a strong focus on{" "}
              <span className="text-fuchsia-300">
                scalability, reliability, and long-term maintainability
              </span>
              .
            </p>

            <p>
              Beyond writing code, I think in{" "}
              <span className="text-(--text-full) font-medium">
                system architecture and process design
              </span>
              — ensuring that technology not only works, but creates measurable
              impact for organizations. Continuous learning remains central to
              my growth as both an engineer and architect.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="#contact"
              className="secondary bg-app-fg/5 border-app-fg/10 font-medium px-6 text-sm"
            >
              Let's build something together →
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
