
import { motion } from "framer-motion";
import { Bot, CircuitBoard, Cpu, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface IntroSectionProps {
  handleContactClick: () => void;
  fadeInUp: any;
  staggerContainer: any;
}

export const IntroSection = ({ handleContactClick, fadeInUp, staggerContainer }: IntroSectionProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-primary/20" animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.5, 0.3]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }} />
        <motion.div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full border border-primary/30" animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.5, 0.3, 0.5]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }} />
        <motion.div className="absolute bottom-1/4 left-1/3 w-24 h-24" animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3]
        }} transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}>
          <CircuitBoard className="w-full h-full text-primary/30" />
        </motion.div>
        <motion.div className="absolute top-1/3 left-1/3 w-32 h-32" animate={{
          y: [0, 20, 0],
          opacity: [0.4, 0.6, 0.4]
        }} transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}>
          <Cpu className="w-full h-full text-primary/40" />
        </motion.div>
        <motion.div className="absolute top-1/2 right-1/3 w-40 h-40" animate={{
          rotate: [0, 360],
          opacity: [0.3, 0.5, 0.3]
        }} transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}>
          <Settings className="w-full h-full text-primary/30" />
        </motion.div>
      </div>

      <div className="container px-4 mx-auto text-center z-10">
        <motion.div initial="initial" animate="animate" exit="exit" variants={fadeInUp} transition={{
          duration: 0.8
        }} className="space-y-4">
          <div className="inline-flex items-center space-x-2 glass px-3 py-1 rounded-full mb-4">
            <Bot className="w-4 h-4" />
            <span className="text-sm font-medium">Automation & Robotics Engineer</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gradient">
            R Balaji
          </h1>
          <p className="text-muted-foreground max-w-[600px] mx-auto text-lg">
            Automation & Robotics engineer with practical experience in robotics, process optimization, and embedded systems.
            Skilled in C++, Python, and ROS 2, with a strong focus on developing efficient solutions and contributing to innovative projects.
          </p>
          <motion.div className="flex items-center justify-center gap-4 pt-4" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Button onClick={handleContactClick} className="rounded-full glass hover:bg-white/10 transition-colors duration-300" size="lg">
                Get in Touch
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button variant="outline" className="rounded-full glass hover:bg-white/10 transition-colors duration-300" size="lg" onClick={() => window.open("https://github.com/0RBalaji", "_blank")}>
                View Projects
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/5" />
      </div>
    </section>
  );
};
