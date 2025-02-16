
import { useState } from "react";
import { motion } from "framer-motion";
import { Chip, Circuit, Cog, Github, Linkedin, Mail, Robot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);

  const handleContactClick = () => {
    toast({
      title: "Contact info copied!",
      description: "My email has been copied to your clipboard.",
    });
    navigator.clipboard.writeText("your.email@example.com");
  };

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="container px-4 mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center space-x-2 bg-secondary/80 px-3 py-1 rounded-full mb-4">
              <Robot className="w-4 h-4" />
              <span className="text-sm font-medium">Robotics Engineer</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Creating the Future of
              <br />
              <span className="text-primary">Robotics Engineering</span>
            </h1>
            <p className="text-muted-foreground max-w-[600px] mx-auto text-lg">
              Transforming complex engineering challenges into elegant robotic solutions
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Button
                onClick={handleContactClick}
                className="rounded-full"
                size="lg"
              >
                Get in Touch
              </Button>
              <Button variant="outline" className="rounded-full" size="lg">
                View Projects
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-background/5" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground">
              As a Robotics Engineer, I specialize in designing and implementing cutting-edge robotic systems 
              that bridge the gap between mechanical engineering and artificial intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Robot,
                title: "Robotics Design",
                description: "Creating innovative robotic solutions for complex challenges",
              },
              {
                icon: Circuit,
                title: "Control Systems",
                description: "Developing precise control mechanisms for optimal performance",
              },
              {
                icon: Chip,
                title: "AI Integration",
                description: "Implementing machine learning for intelligent automation",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="mb-4 inline-flex p-3 bg-secondary rounded-lg">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              Explore some of my recent work in robotics and automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-muted" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                    <p className="text-muted-foreground mb-4">
                      Brief description of the project and its impact
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-8">
              Interested in collaboration? Let's discuss your project
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                onClick={() => window.open("https://github.com", "_blank")}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                onClick={() => window.open("https://linkedin.com", "_blank")}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                onClick={handleContactClick}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
