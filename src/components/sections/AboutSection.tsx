
import { motion } from "framer-motion";
import { GraduationCap, Star, Target } from "lucide-react";

interface AboutSectionProps {
  fadeInUp: any;
  staggerContainer: any;
}

export const AboutSection = ({ fadeInUp, staggerContainer }: AboutSectionProps) => {
  return (
    <section className="py-20 neo-blur">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-gradient">About Me</h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate Automation & Robotics Engineer with a keen interest in developing innovative solutions 
              for complex industrial challenges. My journey in robotics began with a fascination for how machines 
              could be programmed to perform intricate tasks, and has evolved into a professional pursuit of creating 
              efficient automation systems.
            </p>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="glass p-6 rounded-xl hover:bg-white/5 transition-duration-300">
                <div className="flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">
                  B.Tech in Electronics and Instrumentation Engineering
                  KLE Technological University
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass p-6 rounded-xl hover:bg-white/5 transition-duration-300">
                <div className="flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Focus Areas</h3>
                <p className="text-sm text-muted-foreground">
                  Robotics, Industrial Automation, Computer Vision, ROS 2, 
                  Path Planning, SLAM
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass p-6 rounded-xl hover:bg-white/5 transition-duration-300">
                <div className="flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Goals</h3>
                <p className="text-sm text-muted-foreground">
                  Developing innovative automation solutions and contributing to 
                  the advancement of industrial robotics
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
