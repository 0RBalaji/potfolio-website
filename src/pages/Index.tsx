import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Cpu, Github, Linkedin, Mail, CircuitBoard, GraduationCap, Briefcase, Home, Trophy, Award, BadgeCheck, Star, Code, Settings, Terminal, Database, Brain, Cog, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
const Index = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const {
    toast
  } = useToast();
  const handleContactClick = () => {
    toast({
      title: "Contact info copied!",
      description: "My email has been copied to your clipboard."
    });
    navigator.clipboard.writeText("rajalbandi2balaji@gmail.com");
  };
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -20
    }
  };
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const cardVariants = {
    initial: {
      scale: 0.95,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };
  const backgroundVariants = {
    initial: {
      background: "linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 100%)"
    },
    animate: {
      background: ["linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 100%)", "linear-gradient(225deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 100%)", "linear-gradient(405deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 100%)", "linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 100%)"],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };
  const projects = [{
    title: "SWARM-SLAM: Understanding Unknown Environments",
    brief: "Enhanced flexibility and adaptability of Multi-Robot Systems (MRS) using multiple AMRs for task automation.",
    fullDescription: "Enhanced flexibility and adaptability of Multi-Robot Systems (MRS) on the shop floor by utilizing multiple AMRs for tasks product and raw material transport. The system leverages advanced SLAM techniques and the NAV2 stack for efficient navigation and mapping.",
    tools: "ROS2 Framework, NAV2 stack, AMCL, Process Automation, Robotics, Python, LiDAR",
    images: ["/placeholder.svg", "/placeholder.svg"],
    links: [{
      title: "GitHub Repository",
      url: "https://github.com/yourusername/swarm-slam"
    }, {
      title: "Documentation",
      url: "#"
    }]
  }, {
    title: "Cartesian Robot for Painting Application",
    brief: "Automated painting process using computer vision for work-piece analysis and path planning.",
    fullDescription: "A Cartesian robot designed to automate the painting process, using advanced computer vision algorithms for analyzing work-piece shape and selecting optimal paint paths. The system integrates multiple sensors and precise motion control.",
    tools: "Python, Process Automation, Raspberry Pi, Circuit design, SolidWorks, Motion Study",
    images: ["/placeholder.svg", "/placeholder.svg"],
    links: [{
      title: "Project Demo",
      url: "#"
    }, {
      title: "Technical Paper",
      url: "#"
    }]
  }, {
    title: "Extraterrestrial Rover",
    brief: "Autonomous rover designed for extraterrestrial exploration and mapping missions.",
    fullDescription: "An Extraterrestrial rover designed for autonomous missions, enabling local mapping and traversing techniques. Features advanced sensor fusion and autonomous navigation capabilities for unknown terrain.",
    tools: "Robot system design, Robot programming, Sensor fusion, Circuit design, Jetson Nano",
    images: ["/placeholder.svg", "/placeholder.svg"],
    links: [{
      title: "Project Overview",
      url: "#"
    }, {
      title: "Research Paper",
      url: "#"
    }]
  }, {
    title: "Home Automation - Garden System",
    brief: "Smart garden maintenance system with automated watering based on environmental conditions.",
    fullDescription: "A watering and maintaining garden robot based on soil moisture levels and environmental temperature. Implements IoT connectivity for remote monitoring and control of garden conditions.",
    tools: "MATLAB, Simulink, SolidWorks, Motion study, FEA, Arduino, IoT, process automation",
    images: ["/placeholder.svg", "/placeholder.svg"],
    links: [{
      title: "System Architecture",
      url: "#"
    }, {
      title: "Implementation Guide",
      url: "#"
    }]
  }];
  return <div className="min-h-screen w-full overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90">
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
              <br />
              
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

      <section className="py-20 neo-blur">
        <div className="container px-4 mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{
          once: true
        }} variants={fadeInUp} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Technical Skills</h2>
            <p className="text-muted-foreground">
              Comprehensive expertise in robotics, programming, and automation
            </p>
          </motion.div>

          {[{
          title: "Robotics",
          icon: <Bot className="w-10 h-10" />,
          skills: ["ROS2", "SLAM", "Path Planning", "Computer Vision", "Motion Control", "Kinematics"]
        }, {
          title: "Programming",
          icon: <Code className="w-10 h-10" />,
          skills: ["Python", "C++", "JavaScript", "MATLAB", "Git", "SQL"]
        }, {
          title: "Modelling",
          icon: <CircuitBoard className="w-10 h-10" />,
          skills: ["SolidWorks", "Fusion 360", "3D Modeling", "FEA", "CAD/CAM", "Technical Drawing"]
        }, {
          title: "Electronics",
          icon: <Cpu className="w-10 h-10" />,
          skills: ["Arduino", "Raspberry Pi", "PCB Design", "Sensors", "Circuits", "Embedded Systems"]
        }, {
          title: "Analysis",
          icon: <Brain className="w-10 h-10" />,
          skills: ["Data Analysis", "Optimization", "Quality Control", "Process Analysis", "Statistics", "Metrics"]
        }, {
          title: "Automation",
          icon: <Cog className="w-10 h-10" />,
          skills: ["PLC", "Industrial", "SCADA", "Industry 4.0", "IoT", "Process Control"]
        }].map((category, index) => <motion.div key={index} initial="initial" whileInView="animate" viewport={{
          once: true
        }} variants={fadeInUp} className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 glass rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gradient">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => <motion.div key={skillIndex} variants={{
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: skillIndex * 0.1
                }
              }
            }} className="glass px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-300">
                    <span className="text-sm font-medium">{skill}</span>
                  </motion.div>)}
              </div>
            </motion.div>)}
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{
          once: true
        }} variants={fadeInUp} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Experience</h2>
            <p className="text-muted-foreground">
              Currently working as a Robotics Intern at VEGAM SOLUTIONS
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{
          once: true
        }}>
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

      <section className="py-20 neo-blur">
        <div className="container px-4 mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{
          once: true
        }} variants={fadeInUp} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Certifications & Achievements</h2>
            <p className="text-muted-foreground">
              Recognition and accomplishments in robotics and automation
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{
          once: true
        }}>
            {[{
            title: "Robotics & Industry 4.0",
            issuer: "Coursera",
            date: "2023",
            description: "Advanced certification in modern robotics and Industry 4.0 technologies",
            icon: "trophy"
          }, {
            title: "Best Project Award",
            issuer: "KLE Technological University",
            date: "2023",
            description: "Recognition for outstanding project in robotics and automation",
            icon: "award"
          }, {
            title: "ROS 2 Development",
            issuer: "The Construct",
            date: "2023",
            description: "Professional certification in ROS 2 development and implementation",
            icon: "badge-check"
          }, {
            title: "Technical Excellence",
            issuer: "VEGAM Solutions",
            date: "2023",
            description: "Recognition for technical contributions and innovative solutions",
            icon: "star"
          }].map((achievement, index) => <motion.div key={index} variants={fadeInUp} transition={{
            duration: 0.8
          }}>
                <Card className="p-6 h-full glass hover:bg-white/5 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 glass rounded-lg">
                      {achievement.icon === "trophy" && <Trophy className="w-6 h-6" />}
                      {achievement.icon === "award" && <Award className="w-6 h-6" />}
                      {achievement.icon === "badge-check" && <BadgeCheck className="w-6 h-6" />}
                      {achievement.icon === "star" && <Star className="w-6 h-6" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.issuer} • {achievement.date}</p>
                      <p className="text-muted-foreground text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      <section className="py-20 neo-blur">
        <div className="container px-4 mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{
          once: true
        }} variants={fadeInUp} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Featured Projects</h2>
            <p className="text-muted-foreground">
              Explore my innovative work in robotics and automation
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{
          once: true
        }}>
            {projects.map((project, index) => <motion.div key={index} variants={cardVariants} initial="initial" whileInView="animate" whileHover="hover" viewport={{
            once: true
          }} className="relative h-full">
                <motion.div className="absolute inset-0 rounded-lg opacity-30" variants={backgroundVariants} initial="initial" animate="animate" />
                <Card className="relative overflow-hidden glass hover:bg-white/5 transition-colors duration-300 cursor-pointer backdrop-blur-sm h-full" onClick={() => setSelectedProject(index)}>
                  <motion.div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary" animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.5, 0.3]
              }} transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }} />
                  <div className="p-6 relative z-10">
                    <motion.div initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.2
                }}>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.brief}</p>
                      <Button variant="outline" className="mt-4 relative overflow-hidden group">
                        <span className="relative z-10">View Details</span>
                        <motion.div className="absolute inset-0 bg-primary/10" initial={{
                      x: "-100%"
                    }} whileHover={{
                      x: "100%"
                    }} transition={{
                      duration: 0.5
                    }} />
                        <ExternalLink className="ml-2 w-4 h-4 relative z-10" />
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>)}
          </motion.div>

          <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
            {selectedProject !== null && <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-4">
                    {projects[selectedProject].title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {projects[selectedProject].images.map((image, idx) => <motion.div key={idx} initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: idx * 0.2
                }} className="relative aspect-video rounded-lg overflow-hidden glass">
                        <img src={image} alt={`Project image ${idx + 1}`} className="object-cover w-full h-full" />
                      </motion.div>)}
                  </div>
                  
                  <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} className="space-y-4">
                    <DialogDescription className="text-lg leading-relaxed">
                      {projects[selectedProject].fullDescription}
                    </DialogDescription>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-2">Tools & Technologies</h4>
                      <p className="text-muted-foreground">
                        {projects[selectedProject].tools}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-6">
                      {projects[selectedProject].links.map((link, idx) => <Button key={idx} variant="outline" className="glass hover:bg-white/10" onClick={() => window.open(link.url, "_blank")}>
                          {link.title}
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>)}
                    </div>
                  </motion.div>
                </div>
              </DialogContent>}
          </Dialog>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{
          once: true
        }} variants={fadeInUp} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Education</h2>
          </motion.div>

          <motion.div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{
          once: true
        }}>
            {[{
            school: "KLE TECHNOLOGICAL UNIVERSITY, HUBBALLI",
            degree: "B.E. in Automation & Robotics (GPA: 8.52)",
            period: "12/2021 - PRESENT"
          }, {
            school: "ALVAS PU COLLEGE, VIDYAGIRI",
            degree: "PCME – DISTINCTION – 94.66%",
            period: "04/2020 - 07/2021"
          }, {
            school: "RACE CONCEPT SCHOOL, RAICHUR",
            degree: "DISTINCTION - 85.5%",
            period: "05/2018 - 04/2019"
          }].map((edu, index) => <motion.div key={index} variants={fadeInUp}>
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
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{
          once: true
        }} variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Let's Connect</h2>
            <p className="text-muted-foreground mb-4">
              Raichur, Karnataka, India | +91 - 8147940897
            </p>
            <motion.div className="flex justify-center gap-4 flex-wrap" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <Button variant="outline" size="lg" className="rounded-full glass hover:bg-white/10 transition-colors duration-300" onClick={() => window.open("https://github.com/0RBalaji", "_blank")}>
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Button variant="outline" size="lg" className="rounded-full glass hover:bg-white/10 transition-colors duration-300" onClick={() => window.open("https://linkedin.com/in/rbalaji02", "_blank")}>
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Button variant="outline" size="lg" className="rounded-full glass hover:bg-white/10 transition-colors duration-300" onClick={handleContactClick}>
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Index;