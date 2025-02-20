import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, Cpu, Github, Linkedin, Mail, CircuitBoard, GraduationCap, 
  Briefcase, Home, Trophy, Award, BadgeCheck, Star, Code, 
  Settings, Terminal, Database, Brain, Cog, ExternalLink,
  Navigation, Eye, GitBranch, Search, Map, Router, 
  FileCode, Binary, Coffee, Box, Database as DbIcon,
  Shapes, Ruler, Pencil, Boxes, Wrench,
  Microchip, Radio, Laptop, Component, Workflow,
  BarChart, LineChart, PieChart, Sigma, ChartBar, ArrowUpDown,
  Play, Timer, Factory, Network, Wifi, SlidersHorizontal,
  GitFork, Wrench as Tools
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { toast } = useToast();

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

  const skillCategories = [
    {
      title: "Robotics",
      icon: <Bot className="w-10 h-10" />,
      skills: [
        { name: "ROS2", icon: <Terminal className="w-4 h-4 mr-2" />, image: "/ros.png" },
        { name: "SLAM", icon: <Map className="w-4 h-4 mr-2" />, image: "/slam.png" },
        { name: "Path Planning", icon: <Navigation className="w-4 h-4 mr-2" />, image: "/path.png" },
        { name: "Computer Vision", icon: <Eye className="w-4 h-4 mr-2" />, image: "/cv.png" },
        { name: "Motion Control", icon: <Router className="w-4 h-4 mr-2" />, image: "/motion.png" },
        { name: "Kinematics", icon: <GitBranch className="w-4 h-4 mr-2" />, image: "/kinematics.png" }
      ],
      bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    },
    {
      title: "Programming",
      icon: <Code className="w-10 h-10" />,
      skills: [
        { name: "Python", icon: <FileCode className="w-4 h-4 mr-2" />, image: "/python.png" },
        { name: "C++", icon: <Binary className="w-4 h-4 mr-2" />, image: "/cpp.png" },
        { name: "JavaScript", icon: <Code className="w-4 h-4 mr-2" />, image: "/javascript.png" },
        { name: "MATLAB", icon: <Coffee className="w-4 h-4 mr-2" />, image: "/matlab.png" },
        { name: "Git", icon: <GitFork className="w-4 h-4 mr-2" />, image: "/git.png" },
        { name: "SQL", icon: <DbIcon className="w-4 h-4 mr-2" />, image: "/sql.png" }
      ],
      bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Modelling",
      icon: <CircuitBoard className="w-10 h-10" />,
      skills: [
        { name: "SolidWorks", icon: <Box className="w-4 h-4 mr-2" />, image: "/solidworks.png" },
        { name: "Fusion 360", icon: <Shapes className="w-4 h-4 mr-2" />, image: "/fusion360.png" },
        { name: "3D Modeling", icon: <Boxes className="w-4 h-4 mr-2" />, image: "/3d.png" },
        { name: "FEA", icon: <Ruler className="w-4 h-4 mr-2" />, image: "/fea.png" },
        { name: "CAD/CAM", icon: <Pencil className="w-4 h-4 mr-2" />, image: "/cadcam.png" },
        { name: "Technical Drawing", icon: <Wrench className="w-4 h-4 mr-2" />, image: "/technical.png" }
      ],
      bgImage: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
    },
    {
      title: "Electronics",
      icon: <Cpu className="w-10 h-10" />,
      skills: [
        { name: "Arduino", icon: <Microchip className="w-4 h-4 mr-2" />, image: "/arduino.png" },
        { name: "Raspberry Pi", icon: <CircuitBoard className="w-4 h-4 mr-2" />, image: "/raspberry.png" },
        { name: "PCB Design", icon: <Component className="w-4 h-4 mr-2" />, image: "/pcb.png" },
        { name: "Sensors", icon: <Radio className="w-4 h-4 mr-2" />, image: "/sensors.png" },
        { name: "Circuits", icon: <CircuitBoard className="w-4 h-4 mr-2" />, image: "/circuits.png" },
        { name: "Embedded Systems", icon: <Workflow className="w-4 h-4 mr-2" />, image: "/embedded.png" }
      ],
      bgImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Analysis",
      icon: <Brain className="w-10 h-10" />,
      skills: [
        { name: "Data Analysis", icon: <BarChart className="w-4 h-4 mr-2" />, image: "/data.png" },
        { name: "Optimization", icon: <ArrowUpDown className="w-4 h-4 mr-2" />, image: "/optimization.png" },
        { name: "Quality Control", icon: <ChartBar className="w-4 h-4 mr-2" />, image: "/quality.png" },
        { name: "Process Analysis", icon: <LineChart className="w-4 h-4 mr-2" />, image: "/process.png" },
        { name: "Statistics", icon: <PieChart className="w-4 h-4 mr-2" />, image: "/statistics.png" },
        { name: "Metrics", icon: <Sigma className="w-4 h-4 mr-2" />, image: "/metrics.png" }
      ],
      bgImage: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
    },
    {
      title: "Automation",
      icon: <Cog className="w-10 h-10" />,
      skills: [
        { name: "PLC", icon: <Play className="w-4 h-4 mr-2" />, image: "/plc.png" },
        { name: "Industrial", icon: <Factory className="w-4 h-4 mr-2" />, image: "/industrial.png" },
        { name: "SCADA", icon: <SlidersHorizontal className="w-4 h-4 mr-2" />, image: "/scada.png" },
        { name: "Industry 4.0", icon: <Network className="w-4 h-4 mr-4" />, image: "/industry40.png" },
        { name: "IoT", icon: <Wifi className="w-4 h-4 mr-2" />, image: "/iot.png" },
        { name: "Process Control", icon: <Timer className="w-4 h-4 mr-2" />, image: "/process-control.png" }
      ],
      bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    }
  ];

  const softwareTools = [
    {
      category: "Development",
      tools: [
        { image: "/vscode.png", name: "Visual Studio Code" },
        { image: "/github.png", name: "GitHub" },
        { image: "/jupyter.png", name: "Jupyter Notebook" },
        { image: "/pycharm.png", name: "PyCharm" },
        { image: "/ros.png", name: "ROS" },
        { image: "/gazebo.png", name: "Gazebo" }
      ]
    },
    {
      category: "Design & Modeling",
      tools: [
        { image: "/solidworks.png", name: "SolidWorks" },
        { image: "/fusion360.png", name: "Fusion 360" },
        { image: "/kicad.png", name: "KiCad" },
        { image: "/blender.png", name: "Blender" },
        { image: "/autocad.png", name: "AutoCAD" },
        { image: "/ansys.png", name: "ANSYS" }
      ]
    },
    {
      category: "Industrial & Control",
      tools: [
        { image: "/labview.png", name: "LabVIEW" },
        { image: "/matlab.png", name: "MATLAB" },
        { image: "/plc.png", name: "PLC Programming" },
        { image: "/codesys.png", name: "CODESYS" },
        { image: "/twincat.png", name: "TwinCAT" },
        { image: "/siemens.png", name: "Siemens TIA Portal" }
      ]
    }
  ];

  const projects = [
    {
      title: "Project 1",
      brief: "Brief description of project 1",
      fullDescription: "Full description of project 1 with details about the challenges, solutions, and outcomes.",
      images: ["/path.png", "/slam.png"],
      tools: "List of tools and technologies used in project 1",
      links: [{ title: "GitHub Repo", url: "https://github.com" }]
    },
    {
      title: "Project 2",
      brief: "Brief description of project 2",
      fullDescription: "Full description of project 2 with details about the challenges, solutions, and outcomes.",
      images: ["/path.png", "/slam.png"],
      tools: "List of tools and technologies used in project 2",
      links: [{ title: "Live Demo", url: "https://example.com" }]
    }
  ];

  const collaborationProjects = [
    {
      title: "Industrial Automation System",
      brief: "Collaborative project with leading manufacturing company to implement smart factory solutions",
      fullDescription: "Worked closely with industry partners to develop and implement an advanced automation system that improved production efficiency by 40%. The project involved integrating IoT sensors, developing real-time monitoring systems, and implementing predictive maintenance algorithms.",
      images: [
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
      ],
      tools: "ROS2, Python, C++, PLC Programming, SCADA, Industrial IoT",
      partner: "Manufacturing Solutions Corp.",
      links: [{ title: "Case Study", url: "https://example.com/case-study" }]
    },
    {
      title: "Robotics Process Optimization",
      brief: "Joint research project focusing on optimizing industrial robot movements",
      fullDescription: "Collaborated with robotics industry leaders to develop innovative solutions for optimizing industrial robot movements, resulting in 25% improved efficiency. The project combined advanced path planning algorithms with real-time sensor feedback.",
      images: [
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
      ],
      tools: "ROS2, Machine Learning, Computer Vision, Motion Planning",
      partner: "RoboTech Industries",
      links: [{ title: "Project Overview", url: "https://example.com/overview" }]
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90">
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

          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-16"
            >
              <div className="relative mb-6 p-4 rounded-xl overflow-hidden">
                <div className="absolute inset-0">
                  <img 
                    src={category.bgImage} 
                    alt={category.title} 
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />
                </div>
                <div className="absolute inset-0 z-10 flex items-center gap-4">
                  <div className="p-3 glass rounded-xl">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gradient">{category.title}</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      animate: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: skillIndex * 0.1 }
                      }
                    }}
                    className="glass px-4 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <img 
                        src={skill.image} 
                        alt={skill.name}
                        className="w-8 h-8 object-contain mb-2"
                      />
                      <div className="flex items-center">
                        {skill.icon}
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
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

      <section className="py-20 neo-blur">
        <div className="container px-4 mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{
          once: true
        }} variants={fadeInUp} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Industry Collaborations</h2>
            <p className="text-muted-foreground">
              Partnerships and projects with leading industry organizations
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={staggerContainer}>
            {collaborationProjects.map((project, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants} 
                initial="initial" 
                whileInView="animate" 
                whileHover="hover" 
                viewport={{
                  once: true
                }} 
                className="relative h-full"
              >
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
              </motion.div>
            ))}
          </motion.div>

          <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
            {selectedProject !== null && (
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-4">
                    {projects[selectedProject].title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {projects[selectedProject].images.map((image, idx) => (
                      <motion.div key={idx} initial={{
                        opacity: 0,
                        y: 20
                      }} animate={{
                        opacity: 1,
                        y: 0
                      }} transition={{
                        delay: idx * 0.2
                      }} className="relative aspect-video rounded-lg overflow-hidden glass">
                        <img src={image} alt={`Project image ${idx + 1}`} className="object-cover w-full h-full" />
                      </motion.div>
                    ))}
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
                      {projects[selectedProject].links.map((link, idx) => (
                        <Button key={idx} variant="outline" className="glass hover:bg-white/10" onClick={() => window.open(link.url, "_blank")}>
                          {link.title}
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </DialogContent>
            )}
          </Dialog>
        </div>
      </section>

      <section className="py-20 neo-blur">
        <div className="container px-4 mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{
          once: true
        }} variants={fadeInUp} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Achievements & Certifications</h2>
            <p className="text-muted-foreground">
              Recognition and accomplishments in robotics and automation
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" variants={staggerContainer}>
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
          }].map((achievement, index) => (
                <motion.div key={index} variants={fadeInUp} transition={{
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
                </motion.div>
              ))}
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

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={staggerContainer}>
            {projects.map((project, index) => (
              <motion.div key={index} variants={cardVariants} initial="initial" whileInView="animate" whileHover="hover" viewport={{
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
              </motion.div>
            ))}
          </motion.div>

          <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
            {selectedProject !== null && (
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-4">
                    {projects[selectedProject].title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {projects[selectedProject].images.map((image, idx) => (
                      <motion.div key={idx} initial={{
                        opacity: 0,
                        y: 20
                      }} animate={{
                        opacity: 1,
                        y: 0
                      }} transition={{
                        delay: idx * 0.2
                      }} className="relative aspect-video rounded-lg overflow-hidden glass">
                        <img src={image} alt={`Project image ${idx + 1}`} className="object-cover w-full h-full" />
                      </motion.div>
                    ))}
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
                      {projects[selectedProject].links.map((link, idx) => (
                        <Button key={idx} variant="outline" className="glass hover:bg-white/10" onClick={() => window.open(link.url, "_blank")}>
                          {link.title}
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </DialogContent>
            )}
          </Dialog>
        </div>
      </section>

      <section className="py-20 neo-blur">
        <div className="container px-4 mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{
          once: true
        }} variants={fadeInUp} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Software & Tools</h2>
            <p className="text-muted-foreground">
              Proficient in industry-standard software and development tools
            </p>
          </motion.div>

          <div className="space-y-12">
            {softwareTools.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <Tools className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-gradient">{section.category}</h3>
                </div>
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
                  variants={{
                    animate: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {section.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={toolIndex}
                      variants={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="glass p-4 rounded-xl flex flex-col items-center justify-center aspect-square hover:bg-white/10 transition-colors duration-300"
                    >
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-12 h-12 object-contain mb-2"
                        title={tool.name}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{
          once: true
        }} variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can work together
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                onClick={handleContactClick}
                className="rounded-full glass hover:bg-white/10 transition-colors duration-300"
                size="lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
              <Button
                variant="outline"
                className="rounded-full glass hover:bg-white/10 transition-colors duration-300"
                size="lg"
                onClick={() => window.open("https://linkedin.com/in/your-profile", "_blank")}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                className="rounded-full glass hover:bg-white/10 transition-colors duration-300"
                size="lg"
                onClick={() => window.open("https://github.com/0RBalaji", "_blank")}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
