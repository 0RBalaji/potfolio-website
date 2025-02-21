
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface TechnicalSkillsSectionProps {
  skillCategories: any[];
  fadeInUp: any;
  staggerContainer: any;
  cardVariants: any;
  backgroundVariants: any;
}

export const TechnicalSkillsSection = ({ 
  skillCategories, 
  fadeInUp, 
  staggerContainer, 
  cardVariants, 
  backgroundVariants 
}: TechnicalSkillsSectionProps) => {
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
          <h2 className="text-3xl font-bold mb-4 text-gradient">Technical Skills</h2>
          <p className="text-muted-foreground">
            Comprehensive expertise in robotics, automation, and software development
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                animate="animate"
              >
                <Card className="p-6 h-full neo-blur hover:bg-white/5 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill: any, idx: number) => (
                      <div key={idx} className="flex items-center">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
