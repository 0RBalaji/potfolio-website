
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ExperienceSectionProps {
  fadeInUp: any;
  staggerContainer: any;
}

export const ExperienceSection = ({ fadeInUp, staggerContainer }: ExperienceSectionProps) => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-gradient">Experience</h2>
          <p className="text-muted-foreground">
            Currently working as a Robotics Intern at VEGAM SOLUTIONS
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto" 
          variants={staggerContainer}
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <Card className="p-6 h-full neo-blur hover:bg-white/5 transition-colors duration-300">
              <div className="mb-4 inline-flex p-3 glass rounded-lg">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">VEGAM SOLUTIONS - ROBOTICS INTERN</h3>
              <p className="text-muted-foreground mb-4">Current Position</p>
              <ul className="text-muted-foreground space-y-2 text-left list-disc list-inside">
                <li>Simulation of AMRs for Industrial Purpose</li>
                <li>Application of SLAM and Navigation Stack</li>
                <li>Development and Integration of Fleet Management System for industrial mobile robot application</li>
              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
