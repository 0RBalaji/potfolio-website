
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Cpu, Github, Linkedin, Mail, CircuitBoard, GraduationCap, Briefcase, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "Contact info copied!",
      description: "My email has been copied to your clipboard.",
    });
    navigator.clipboard.writeText("rajalbandi2balaji@gmail.com");
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="container px-4 mx-auto text-center z-10">
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center space-x-2 glass px-3 py-1 rounded-full mb-4">
              <Bot className="w-4 h-4" />
              <span className="text-sm font-medium">Automation & Robotics Engineer</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gradient">
              R Balaji
              <br />
              <span className="text-primary">Robotics Engineer</span>
            </h1>
            <p className="text-muted-foreground max-w-[600px] mx-auto text-lg">
              Automation & Robotics engineer with practical experience in robotics, process optimization, and embedded systems.
              Skilled in C++, Python, and ROS 2, with a strong focus on developing efficient solutions and contributing to innovative projects.
            </p>
            <motion.div 
              className="flex items-center justify-center gap-4 pt-4"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Button
                  onClick={handleContactClick}
                  className="rounded-full glass hover:bg-white/10 transition-colors duration-300"
                  size="lg"
                >
                  Get in Touch
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Button 
                  variant="outline" 
                  className="rounded-full glass hover:bg-white/10 transition-colors duration-300" 
                  size="lg"
                  onClick={() => window.open("https://github.com/0RBalaji", "_blank")}
                >
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

      {/* Experience Section */}
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

      {/* Projects Section */}
      <section className="py-20 neo-blur">
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
              Explore my innovative work in robotics and automation
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "SWARM-SLAM: Understanding Unknown Environments",
                description: "Enhanced flexibility and adaptability of Multi-Robot Systems (MRS) on the shop floor by utilizing multiple AMRs for tasks product and raw material transport.",
                tools: "ROS2 Framework, NAV2 stack, AMCL, Process Automation, Robotics, Python, LiDAR"
              },
              {
                title: "Cartesian Robot for Painting Application",
                description: "A Cartesian robot to automate the painting process, using computer vision for analyzing work-piece shape and selecting paint paths.",
                tools: "Python, Process Automation, Raspberry Pi, Circuit design, SolidWorks, Motion Study"
              },
              {
                title: "Extraterrestrial Rover",
                description: "An Extraterrestrial rover designed for autonomous missions, enabling local mapping and traversing techniques.",
                tools: "Robot system design, Robot programming, Sensor fusion, Circuit design, Jetson Nano"
              },
              {
                title: "Home Automation - Garden System",
                description: "A watering and maintaining garden robot based on soil moisture levels and environmental temperature.",
                tools: "MATLAB, Simulink, SolidWorks, Motion study, FEA, Arduino, IoT, process automation"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
              >
                <Card className="overflow-hidden glass hover:bg-white/5 transition-colors duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="text-sm text-muted-foreground mt-4">
                      <strong>Tools & Skills:</strong> {project.tools}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gradient">Education</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 gap-8 max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                school: "KLE TECHNOLOGICAL UNIVERSITY, HUBBALI",
                degree: "B.E. in Automation & Robotics (GPA: 8.52)",
                period: "12/2021 - PRESENT"
              },
              {
                school: "ALVAS PU COLLEGE, VIDYAGIRI",
                degree: "PCME – DISTINCTION – 94.66%",
                period: "04/2020 - 07/2021"
              },
              {
                school: "RACE CONCEPT SCHOOL, RAICHUR",
                degree: "DISTINCTION - 85.5%",
                period: "05/2018 - 04/2019"
              }
            ].map((edu, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 glass hover:bg-white/5 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 glass rounded-lg">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{edu.school}</h3>
                      <p className="text-muted-foreground">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-gradient">Let's Connect</h2>
            <p className="text-muted-foreground mb-4">
              Raichur, Karnataka, India | +91 - 8147940897
            </p>
            <motion.div 
              className="flex justify-center gap-4 flex-wrap"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full glass hover:bg-white/10 transition-colors duration-300"
                  onClick={() => window.open("https://github.com/0RBalaji", "_blank")}
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full glass hover:bg-white/10 transition-colors duration-300"
                  onClick={() => window.open("https://linkedin.com/in/rbalaji02", "_blank")}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full glass hover:bg-white/10 transition-colors duration-300"
                  onClick={handleContactClick}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
