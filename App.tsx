import { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { PixelBlock, PixelStar, PixelArrow } from './components/PixelArt';

export default function App() {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = 'ENGINEER AT HEART. LEADER BY TITLE.';
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  const skillCategories = {
    'DATA STORES': ['POSTGRES', 'BIGQUERY', 'BIGTABLE', 'GCS'],
    'DATA MOVEMENT': ['APACHE BEAM', 'DATAFLOW', 'AIRFLOW', 'PUB/SUB', 'KAFKA'],
    'LANGUAGES': ['JAVA', 'PYTHON', 'SQL'],
    'OBSERVABILITY': ['PROMETHEUS', 'GRAFANA'],
    'INFRASTRUCTURE': ['TERRAFORM', 'KUBERNETES', 'HELM']
  };

  const projects = [
    {
      title: 'DISTRIBUTED TASK QUEUE',
      description: 'HIGH-PERFORMANCE TASK PROCESSING SYSTEM WITH REDIS AND GO',
      tech: ['GO', 'REDIS', 'DOCKER'],
      status: 'LIVE'
    },
    {
      title: 'REALTIME CHAT APP',
      description: 'WEBSOCKET-BASED MESSAGING WITH REACT AND NODE.JS',
      tech: ['REACT', 'NODE.JS', 'WEBSOCKETS'],
      status: 'LIVE'
    },
    {
      title: 'API MONITORING TOOL',
      description: 'AUTOMATED API HEALTH CHECKS AND ALERTING SYSTEM',
      tech: ['PYTHON', 'POSTGRESQL', 'AWS'],
      status: 'LIVE'
    }
  ];

  const blogPosts = [
    {
      title: 'COMING SOON... GOTTA START SOMEWHERE, RIGHT?',
      date: 'JUL 2025',
      readTime: '0 MIN'
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-mono overflow-x-hidden">
      {/* Pixel grid overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-10 opacity-3"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, #000 1px, #000 2px), repeating-linear-gradient(90deg, transparent, transparent 1px, #000 1px, #000 2px)',
          backgroundSize: '4px 4px'
        }}
      />
      
      {/* Header */}
      <header className="relative z-20 border-b-2 border-black bg-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <PixelBlock />
              <span className="font-bold">CHRIS COLLINS</span>
            </div>
            <div className="flex space-x-8">
              <a href="#blog" className="hover:bg-black hover:text-white px-3 py-1 transition-colors border border-transparent hover:border-black">BLOG</a>
              <a href="#skills" className="hover:bg-black hover:text-white px-3 py-1 transition-colors border border-transparent hover:border-black">SKILLS</a>
              <a href="#fun" className="hover:bg-black hover:text-white px-3 py-1 transition-colors border border-transparent hover:border-black">FUN</a>
              <a href="#contact" className="hover:bg-black hover:text-white px-3 py-1 transition-colors border border-transparent hover:border-black">CONTACT</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-20 min-h-screen flex items-center justify-center px-4 bg-white">
        <div className="text-center max-w-4xl">
          <div className="mb-16">
            <div className="text-4xl md:text-6xl font-bold mb-6 tracking-wider">
              CHRIS COLLINS
            </div>
            <div className="text-xl md:text-2xl h-8 flex items-center justify-center tracking-wider">
              {displayText}
              {isTyping && <span className="animate-pulse ml-1">█</span>}
            </div>
          </div>
          
          <div className="flex justify-center items-center gap-8">
            <PixelArrow />
            <div className="flex gap-4">
              {Array(3).fill(0).map((_, i) => (
                <PixelBlock key={i} />
              ))}
            </div>
            <PixelArrow className="rotate-180" />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="relative z-20 py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-4">
            <PixelStar />
            <span>BLOG</span>
            <PixelStar />
          </h2>
          
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Card key={post.title} className="bg-white border-2 border-white text-black p-6 hover:bg-black hover:text-white hover:border-white transition-colors group cursor-pointer">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">{post.title}</h3>
                    <div className="flex gap-4 text-sm">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime} READ</span>
                    </div>
                  </div>
                  <PixelArrow className="group-hover:animate-pulse" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-20 py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-4">
            <PixelBlock />
            <span>SKILLS</span>
            <PixelBlock />
          </h2>
          
          <div className="space-y-8">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category} className="border-2 border-black p-6 bg-white">
                <h3 className="font-bold text-lg mb-4 text-center border-b-2 border-black pb-2">
                  {category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {skills.map((skill) => (
                    <div 
                      key={skill}
                      className="border border-black p-3 bg-white hover:bg-black hover:text-white transition-colors cursor-pointer text-center"
                    >
                      <div className="font-bold text-sm">{skill}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun (Projects) Section */}
      <section id="fun" className="relative z-20 py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-4">
            <PixelStar />
            <span>FUN</span>
            <PixelStar />
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="bg-white border-2 border-white text-black p-6 hover:bg-black hover:text-white hover:border-white transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-black text-white border border-black group-hover:bg-white group-hover:text-black text-xs font-mono">
                    {project.status}
                  </Badge>
                </div>
                
                <h3 className="font-bold mb-4">{project.title}</h3>
                
                <p className="text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="border border-black text-black text-xs group-hover:border-white group-hover:text-white">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button size="sm" variant="outline" className="border border-black text-black hover:bg-black hover:text-white text-xs group-hover:border-white group-hover:text-white">
                  <ExternalLink className="mr-1 h-3 w-3" />
                  VIEW
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-20 py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-4">
            <PixelArrow />
            <span>CONTACT</span>
            <PixelArrow className="rotate-180" />
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="https://github.com/chriscollins" 
              className="flex items-center justify-center gap-4 p-8 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors group"
            >
              <Github className="h-8 w-8" />
              <span className="font-bold text-xl">GITHUB</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/chriscollins" 
              className="flex items-center justify-center gap-4 p-8 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors group"
            >
              <Linkedin className="h-8 w-8" />
              <span className="font-bold text-xl">LINKEDIN</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 border-t-2 border-black py-8 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <div className="text-sm flex items-center justify-center gap-4">
            <PixelBlock />
            <span>© 2025 CHRIS COLLINS</span>
            <PixelBlock />
          </div>
        </div>
      </footer>
    </div>
  );
}