import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'About',
      methodology: 'Methodology',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },
    // Hero
    hero: {
      greeting: "Hello, I'm",
      name: 'Sara',
      lastName: 'Soufi',
      roles: ['Full-Stack Developer', 'React Specialist', 'UI/UX Enthusiast'],
      bio: 'I design and develop modern, responsive web applications with a focus on clean code, exceptional user experiences, and cutting-edge technologies.',
      viewWork: 'View My Work',
      contactMe: 'Contact Me',
      scroll: 'Scroll',
    },
    // About
    about: {
      subtitle: 'Who Am I',
      title: 'About',
      description: "Currently pursuing my Master 1 in STIC, I am progressively developing skills in designing and developing web applications. My approach is based on clear methodology, a good understanding of user needs, and the application of modern web standards.",
      highlights: ['Web Development', 'UX/UI Design', 'Academic Projects', 'Continuous Learning'],
    },
    // Methodology
    methodology: {
      subtitle: 'How I Work',
      title: 'Professional Workflow',
      description: 'A disciplined and results-driven workflow designed to transform complex ideas into reliable, high-quality digital solutions.',
      steps: [
        {
          number: '01',
          title: 'Concept Framing',
          description: 'Clarifying the vision by translating initial ideas into well-defined objectives.',
          details: 'This stage establishes project boundaries, success criteria, and strategic priorities.',
        },
        {
          number: '02',
          title: 'Strategic Exploration',
          description: 'Evaluating existing ecosystems, identifying opportunities, and assessing constraints.',
          details: 'Decisions are guided by data, feasibility, and long-term sustainability.',
        },
        {
          number: '03',
          title: 'Experience Architecture',
          description: 'Structuring user journeys and visual systems with precision.',
          details: 'Interfaces are crafted to balance functionality, clarity, and aesthetic coherence using professional design tools.',
        },
        {
          number: '04',
          title: 'Technical Execution',
          description: 'Engineering robust and maintainable solutions through clean architecture and thoughtful implementation.',
          details: 'Focus is placed on reliability, scalability, and code quality.',
        },
        {
          number: '05',
          title: 'Validation & Deployment',
          description: 'Ensuring readiness through testing, refinement, and controlled delivery.',
          details: 'The solution is optimized, validated, and prepared for real-world usage.',
        },
      ],
    },
    // Projects
    projects: {
      subtitle: 'Portfolio',
      title: 'Academic Projects',
      description: 'Work completed as part of the Web Application Design module. Each project represents a key step in my learning of modern web development.',
      moreDetails: 'More Details',
      viewCode: 'View Code',
      items: [
        {
          title: 'Introduction to Web',
          subtitle: 'Lab 1',
          description: 'Discovery of web development basics through HTML5 and CSS3, with emphasis on semantics, accessibility, and responsive design.',
        },
        {
          title: 'Modern JavaScript',
          subtitle: 'Lab 2',
          description: 'DOM manipulation, event handling, and use of ES6+ features.',
        },
        {
          title: 'Node.js & NPM',
          subtitle: 'Lab 3',
          description: 'Setting up a backend environment with Node.js, dependency management, and introduction to Express.',
        },
      ],
    },
    // Skills
    skills: {
      subtitle: 'Expertise',
      title: 'Skills & Technologies',
      overview: 'Overview of my technical stack: web languages, frameworks and tools.',
      categories: {
        frontend: 'Front-end Web',
        backend: 'Back-end Web',
        mobile: 'Mobile App',
        tools: 'Tools & Technologies',
      },
    },
    // Education
    education: {
      subtitle: 'Academic Path',
      title: 'Education',
      current: 'Current Year',
      degree: 'Master 1 STIC',
      university: 'University',
      focus: 'Focus: Web Application Design & Development',
    },
    // Contact
    contact: {
      subtitle: 'Get In Touch',
      title: 'Contact',
      description: 'Open to internships, academic projects, and learning opportunities.',
      email: 'Email',
      location: 'Location',
      social: 'Social',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
      },
    },
    // Footer
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Made with',
    },
  },
  fr: {
    // Navbar
    nav: {
      home: 'Accueil',
      about: 'À propos',
      methodology: 'Méthodologie',
      projects: 'Projets',
      skills: 'Compétences',
      education: 'Formation',
      contact: 'Contact',
    },
    // Hero
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'Sara',
      lastName: 'Soufi',
      roles: ['Développeuse Full-Stack', 'Spécialiste React', 'Passionnée UX/UI'],
      bio: 'Je conçois et développe des applications web modernes et responsives, en mettant l\'accent sur un code propre, des expériences utilisateur exceptionnelles et des technologies de pointe.',
      viewWork: 'Voir mes travaux',
      contactMe: 'Me contacter',
      scroll: 'Défiler',
    },
    // About
    about: {
      subtitle: 'Qui suis-je',
      title: 'À propos',
      description: "Étudiante en Master 1 STIC, je développe progressivement des compétences en conception et développement d'applications web. Mon approche repose sur une méthodologie claire, une bonne compréhension des besoins utilisateurs et l'application des standards du web moderne.",
      highlights: ['Développement Web', 'Design UX/UI', 'Projets Académiques', 'Apprentissage Continu'],
    },
    // Methodology
    methodology: {
      subtitle: 'Ma méthode',
      title: 'Workflow Professionnel',
      description: 'Un flux de travail discipliné et axé sur les résultats, conçu pour transformer des idées complexes en solutions numériques fiables et de haute qualité.',
      steps: [
        {
          number: '01',
          title: 'Cadrage Conceptuel',
          description: 'Clarifier la vision en traduisant les idées initiales en objectifs bien définis.',
          details: 'Cette étape établit les limites du projet, les critères de succès et les priorités stratégiques.',
        },
        {
          number: '02',
          title: 'Exploration Stratégique',
          description: 'Évaluer les écosystèmes existants, identifier les opportunités et évaluer les contraintes.',
          details: 'Les décisions sont guidées par les données, la faisabilité et la durabilité à long terme.',
        },
        {
          number: '03',
          title: 'Architecture d\'Expérience',
          description: 'Structurer les parcours utilisateurs et les systèmes visuels avec précision.',
          details: 'Les interfaces sont conçues pour équilibrer fonctionnalité, clarté et cohérence esthétique.',
        },
        {
          number: '04',
          title: 'Exécution Technique',
          description: 'Concevoir des solutions robustes et maintenables grâce à une architecture propre.',
          details: 'L\'accent est mis sur la fiabilité, l\'évolutivité et la qualité du code.',
        },
        {
          number: '05',
          title: 'Validation & Déploiement',
          description: 'Assurer la préparation par des tests, des raffinements et une livraison contrôlée.',
          details: 'La solution est optimisée, validée et préparée pour une utilisation réelle.',
        },
      ],
    },
    // Projects
    projects: {
      subtitle: 'Portfolio',
      title: 'Projets Académiques',
      description: 'Travaux réalisés dans le cadre du module Conception d\'Applications Web. Chaque projet représente une étape clé dans mon apprentissage du développement web moderne.',
      moreDetails: 'Plus de détails',
      viewCode: 'Voir le code',
      items: [
        {
          title: 'Introduction au Web',
          subtitle: 'Lab 1',
          description: 'Découverte des bases du développement web à travers HTML5 et CSS3, avec un accent sur la sémantique, l\'accessibilité et le responsive design.',
        },
        {
          title: 'JavaScript Moderne',
          subtitle: 'Lab 2',
          description: 'Manipulation du DOM, gestion des événements et utilisation des fonctionnalités ES6+.',
        },
        {
          title: 'Node.js & NPM',
          subtitle: 'Lab 3',
          description: 'Mise en place d\'un environnement backend avec Node.js, gestion des dépendances et introduction à Express.',
        },
      ],
    },
    // Skills
    skills: {
      subtitle: 'Expertise',
      title: 'Compétences & Technologies',
      overview: 'Aperçu de ma stack technique : langages web, frameworks et outils.',
      categories: {
        frontend: 'Front-end Web',
        backend: 'Back-end Web',
        mobile: 'Application Mobile',
        tools: 'Outils & Technologies',
      },
    },
    // Education
    education: {
      subtitle: 'Parcours Académique',
      title: 'Formation',
      current: 'Année en cours',
      degree: 'Master 1 STIC',
      university: 'Université',
      focus: 'Spécialisation : Conception et Développement d\'Applications Web',
    },
    // Contact
    contact: {
      subtitle: 'Me contacter',
      title: 'Contact',
      description: 'Ouverte aux stages, projets académiques et opportunités d\'apprentissage.',
      email: 'Email',
      location: 'Localisation',
      social: 'Réseaux',
      form: {
        name: 'Nom',
        email: 'Email',
        message: 'Message',
        send: 'Envoyer',
      },
    },
    // Footer
    footer: {
      rights: 'Tous droits réservés.',
      madeWith: 'Fait avec',
    },
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
