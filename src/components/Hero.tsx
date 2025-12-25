import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-glow p-1 glow">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-5xl font-bold text-gradient">
                SS
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Hello, I'm{' '}
            <span className="text-gradient">Soufi Sara</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-primary mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Junior Full-Stack Web Developer
          </h2>

          {/* Bio */}
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            I design and develop front-end and back-end websites and applications. 
            I focus on creating modern, responsive, and user-friendly digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://github.com/sarasoufi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sara-soufi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sarasoufi047@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
