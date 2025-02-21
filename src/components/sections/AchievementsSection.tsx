
import { motion } from "framer-motion";
import { Trophy, Award, BadgeCheck } from "lucide-react";

interface AchievementsSectionProps {
  fadeInUp: any;
  staggerContainer: any;
}

export const AchievementsSection = ({ fadeInUp, staggerContainer }: AchievementsSectionProps) => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Best Project Award",
      description: "Awarded for innovative robotics solution at university showcase"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Research Excellence",
      description: "Recognition for contributions to automation research"
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-primary" />,
      title: "Certifications",
      description: "Multiple certifications in robotics and automation"
    }
  ];

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
          <h2 className="text-3xl font-bold mb-4 text-gradient">Achievements</h2>
          <p className="text-muted-foreground">
            Recognition and accomplishments in the field
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass p-6 rounded-xl text-center hover:bg-white/5 transition-duration-300"
            >
              <div className="flex justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
