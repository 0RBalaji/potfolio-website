
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectDialogProps {
  selectedProject: number | null;
  onOpenChange: (open: boolean) => void;
  projects: any[];
}

export const ProjectDialog = ({ selectedProject, onOpenChange, projects }: ProjectDialogProps) => {
  return (
    <Dialog open={selectedProject !== null} onOpenChange={onOpenChange}>
      {selectedProject !== null && (
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">
              {projects[selectedProject].title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {projects[selectedProject].images.map((image: string, idx: number) => (
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
                {projects[selectedProject].links.map((link: { title: string; url: string }, idx: number) => (
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
  );
};
