
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeaturedProjectsSectionProps {
  projects: any[];
  setSelectedProject: (index: number) => void;
  fadeInUp: any;
  staggerContainer: any;
  cardVariants: any;
  backgroundVariants: any;
}

export const FeaturedProjectsSection = ({
  projects,
  setSelectedProject,
  fadeInUp,
  staggerContainer,
  cardVariants,
  backgroundVariants
}: FeaturedProjectsSectionProps) => {
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
          <h2 className="text-3xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-muted-foreground">
            Showcase of key projects and developments
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card
                className="p-6 h-full neo-blur hover:bg-white/5 transition-colors duration-300 cursor-pointer"
                onClick={() => setSelectedProject(index)}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.brief}</p>
                <Button variant="outline" className="glass hover:bg-white/10">
                  View Details
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
