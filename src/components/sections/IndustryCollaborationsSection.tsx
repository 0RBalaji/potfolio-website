
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface IndustryCollaborationsSectionProps {
  collaborationProjects: any[];
  setSelectedProject: (index: number) => void;
  fadeInUp: any;
  staggerContainer: any;
  cardVariants: any;
  backgroundVariants: any;
}

export const IndustryCollaborationsSection = ({
  collaborationProjects,
  setSelectedProject,
  fadeInUp,
  staggerContainer,
  cardVariants,
  backgroundVariants
}: IndustryCollaborationsSectionProps) => {
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
          <h2 className="text-3xl font-bold mb-4 text-gradient">Industry Collaborations</h2>
          <p className="text-muted-foreground">
            Working with leading companies to develop innovative solutions
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {collaborationProjects.map((project, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="p-6 h-full neo-blur hover:bg-white/5 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.brief}</p>
                <div className="flex flex-wrap gap-4">
                  {project.links.map((link: any, idx: number) => (
                    <Button
                      key={idx}
                      variant="outline"
                      className="glass hover:bg-white/10"
                      onClick={() => window.open(link.url, "_blank")}
                    >
                      {link.title}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
