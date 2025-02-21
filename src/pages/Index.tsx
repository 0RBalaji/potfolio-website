import { useState } from "react";
import { motion } from "framer-motion";
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
  GitFork, Wrench as Tools, Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { IntroSection } from "@/components/sections/IntroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectDialog } from "@/components/sections/ProjectDialog";
import { TechnicalSkillsSection } from "@/components/sections/TechnicalSkillsSection";
import { SoftwareToolsSection } from "@/components/sections/SoftwareToolsSection";
import { IndustryCollaborationsSection } from "@/components/sections/IndustryCollaborationsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";

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
      <IntroSection 
        handleContactClick={handleContactClick}
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
      />
      
      <AboutSection 
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
      />
      
      <ExperienceSection 
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
      />

      <TechnicalSkillsSection
        skillCategories={skillCategories}
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        cardVariants={cardVariants}
        backgroundVariants={backgroundVariants}
      />

      <SoftwareToolsSection
        softwareTools={softwareTools}
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        cardVariants={cardVariants}
        backgroundVariants={backgroundVariants}
      />

      <IndustryCollaborationsSection
        collaborationProjects={collaborationProjects}
        setSelectedProject={setSelectedProject}
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        cardVariants={cardVariants}
        backgroundVariants={backgroundVariants}
      />

      <AchievementsSection
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
      />

      <FeaturedProjectsSection
        projects={projects}
        setSelectedProject={setSelectedProject}
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        cardVariants={cardVariants}
        backgroundVariants={backgroundVariants}
      />

      <ProjectDialog 
        selectedProject={selectedProject}
        onOpenChange={(open) => setSelectedProject(open ? selectedProject : null)}
        projects={projects}
      />
    </div>
  );
};

export default Index;
