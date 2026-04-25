import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/19bbde39-7aee-401c-a615-828b0f5fca50/files/3132e4e6-23b2-44c1-ae9f-c738ac9489be.jpg"
          alt="Sergei Zhoydik Photography"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] mb-6 opacity-70 font-light">
          Photography
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          SERGEY<br />ZHOYDIK
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto px-6 opacity-80 font-light">
          Каждый кадр — это история. Портрет, пейзаж, момент — живые и настоящие.
        </p>
      </div>
    </div>
  );
}