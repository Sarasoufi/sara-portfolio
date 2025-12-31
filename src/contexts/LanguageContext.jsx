import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: { home: 'Home', about: 'About', methodology: 'Methodology', projects: 'Projects', skills: 'Skills', blog: 'Blog', personal: 'Personal', education: 'Education', contact: 'Contact' },
    hero: { greeting: "Hello, I'm", name: 'Sara', lastName: 'Soufi', roles: ['Full-Stack Developer', 'React Specialist', 'UI/UX Enthusiast'], bio: 'I design and develop modern, responsive web applications with a focus on clean code, exceptional user experiences, and cutting-edge technologies.', viewWork: 'View My Work', contactMe: 'Contact Me', scroll: 'Scroll' },
    about: { subtitle: 'Who Am I', title: 'About', description: "Currently pursuing my Master 1 in STIC, I am progressively developing skills in designing and developing web applications. My approach is based on clear methodology, a good understanding of user needs, and the application of modern web standards.", highlights: ['Web Development', 'UX/UI Design', 'Academic Projects', 'Continuous Learning'] },
    methodology: { subtitle: 'How I Work', title: 'Professional Workflow', description: 'A disciplined and results-driven workflow designed to transform complex ideas into reliable, high-quality digital solutions.', steps: [{ number: '01', title: 'Concept Framing', description: 'Clarifying the vision by translating initial ideas into well-defined objectives.', details: 'This stage establishes project boundaries, success criteria, and strategic priorities.' }, { number: '02', title: 'Strategic Exploration', description: 'Evaluating existing ecosystems, identifying opportunities, and assessing constraints.', details: 'Decisions are guided by data, feasibility, and long-term sustainability.' }, { number: '03', title: 'Experience Architecture', description: 'Structuring user journeys and visual systems with precision.', details: 'Interfaces are crafted to balance functionality, clarity, and aesthetic coherence.' }, { number: '04', title: 'Technical Execution', description: 'Engineering robust and maintainable solutions through clean architecture.', details: 'Focus is placed on reliability, scalability, and code quality.' }, { number: '05', title: 'Validation & Deployment', description: 'Ensuring readiness through testing, refinement, and controlled delivery.', details: 'The solution is optimized, validated, and prepared for real-world usage.' }] },
    projects: { 
      subtitle: 'Portfolio', 
      title: 'Academic Projects', 
      description: 'Projects completed during this semester, showcasing skills in React, JavaScript, testing, and version control.', 
      moreDetails: 'More Details', 
      viewCode: 'View Code', 
      detailedDescription: 'Detailed Description', 
      objectives: 'Objectives', 
      keyLearnings: 'Key Learnings', 
      technologies: 'Technologies', 
      items: [
        { 
          title: 'Kanban Board', 
          subtitle: 'Lab 7', 
          description: 'A Trello-like task management application built with React. Features task creation, status-based columns, dynamic task movement, and modern component architecture.', 
          details: 'This lab focused on building a complete task management application using React. We implemented drag-and-drop functionality, state management for tasks across different columns (To Do, In Progress, Done), and learned component composition patterns.',
          objectivesList: ['Build a functional Kanban board interface', 'Implement task CRUD operations', 'Manage state across multiple columns', 'Apply CSS Modules for styling'],
          learningsList: ['React component composition', 'State lifting and prop drilling', 'CSS Modules for scoped styles', 'Event handling in React']
        },
        { 
          title: 'React Components & State', 
          subtitle: 'Lab 5', 
          description: 'A React lab demonstrating core concepts including functional components, hooks, events, lists, props, and forms to build interactive and dynamic user interfaces.', 
          details: 'This lab introduced React fundamentals - creating functional components, using useState and useEffect hooks, handling user events, and building forms with controlled inputs.',
          objectivesList: ['Create functional React components', 'Use useState and useEffect hooks', 'Handle user events and forms', 'Render dynamic lists with keys'],
          learningsList: ['Functional components vs class components', 'React hooks (useState, useEffect)', 'Controlled form inputs', 'List rendering with map()']
        },
        { 
          title: 'Unit Testing (Jest)', 
          subtitle: 'Lab 4', 
          description: 'A JavaScript project demonstrating unit testing using Jest. Includes tests for array manipulation functions, string concatenation, and array chunking.', 
          details: 'This lab taught us how to write and run unit tests using Jest. We learned about test organization with describe blocks, assertions with expect, and testing different types of functions.',
          objectivesList: ['Write unit tests with Jest', 'Organize tests with describe blocks', 'Use expect assertions', 'Test array and string functions'],
          learningsList: ['Jest test syntax and structure', 'Common matchers (toBe, toEqual, toContain)', 'Testing async functions', 'Test coverage concepts']
        },
        { 
          title: 'Node.js & NPM', 
          subtitle: 'Lab 3', 
          description: 'A Node.js project focused on server-side JavaScript and package management. Includes reusable modules, file operations, and third-party package integration.', 
          details: 'This lab introduced server-side JavaScript with Node.js. We learned to create HTTP servers, work with the file system, manage packages with NPM, and build simple APIs.',
          objectivesList: ['Set up Node.js development environment', 'Create and export modules', 'Use built-in Node.js modules (fs, http)', 'Manage dependencies with NPM'],
          learningsList: ['Node.js runtime basics', 'CommonJS module system', 'File system operations', 'Package.json configuration']
        },
        { 
          title: 'Git & GitHub', 
          subtitle: 'Lab 2', 
          description: 'Version control project covering Git and GitHub for managing code changes. Includes repositories, commits, branching, and remote collaboration workflows.', 
          details: 'This lab covered essential version control skills using Git and GitHub. We learned the Git workflow, branching strategies, and how to collaborate on code using pull requests.',
          objectivesList: ['Initialize and manage Git repositories', 'Create meaningful commits', 'Work with branches', 'Push code to GitHub'],
          learningsList: ['Git add, commit, push workflow', 'Branch creation and merging', 'Resolving merge conflicts', 'GitHub collaboration features']
        }
      ] 
    },
    skills: { subtitle: 'Expertise', title: 'Skills & Technologies', overview: 'Overview of my technical stack: web languages, frameworks and tools.', categories: { frontend: 'Front-end Web', backend: 'Back-end Web', mobile: 'Mobile App', tools: 'Tools & Technologies' } },
    blog: { subtitle: 'Insights', title: 'Blog & Articles', description: 'Short articles about my learning journey, challenges faced in projects, and solutions found.', readMore: 'Read More', articles: [{ title: 'My First Steps with React', date: 'Dec 2024', readTime: '5 min read', category: 'Learning', excerpt: 'Discovering React was a turning point in my web development journey. Here I share the challenges I faced and how I overcame them.' }, { title: 'Debugging Tips for Beginners', date: 'Nov 2024', readTime: '4 min read', category: 'Tips', excerpt: 'Debugging can be frustrating. Here are some techniques I learned that made my debugging process much more efficient.' }, { title: 'Understanding Responsive Design', date: 'Oct 2024', readTime: '6 min read', category: 'Tutorial', excerpt: 'Responsive design is essential in modern web development. Learn the key concepts and best practices I discovered.' }] },
    personal: { subtitle: 'Beyond Code', title: 'Personal Side', description: 'Discover who I am outside of coding - my hobbies, interests, and creative experiments.', hobbiesTitle: 'Hobbies & Interests', galleryTitle: 'Creative Experiments', funFact: 'Fun Fact', funFactText: 'I love experimenting with AI-generated art and exploring how technology can enhance creativity!', hobbies: [{ name: 'Reading', emoji: '📚', description: 'Tech books & novels' }, { name: 'Photography', emoji: '📷', description: 'Capturing moments' }, { name: 'Music', emoji: '🎵', description: 'Lo-fi & ambient' }, { name: 'Travel', emoji: '✈️', description: 'Exploring new places' }], gallery: [{ title: 'AI Art Exploration', emoji: '🎨', description: 'Experimenting with AI image generation tools' }, { title: 'UI Concepts', emoji: '💡', description: 'Creative interface design experiments' }, { title: 'Side Projects', emoji: '🚀', description: 'Personal coding experiments' }] },
    education: { subtitle: 'Academic Path', title: 'Education', current: 'Current Year', degree: 'Master 1 STIC', university: 'University', focus: 'Focus: Web Application Design & Development' },
    contact: { subtitle: 'Get In Touch', title: 'Contact', description: 'Open to internships, academic projects, and learning opportunities.', email: 'Email', location: 'Location', social: 'Social', form: { name: 'Name', email: 'Email', message: 'Message', send: 'Send Message' } },
    footer: { rights: 'All rights reserved.', madeWith: 'Made with' }
  },
  fr: {
    nav: { home: 'Accueil', about: 'À propos', methodology: 'Méthodologie', projects: 'Projets', skills: 'Compétences', blog: 'Blog', personal: 'Personnel', education: 'Formation', contact: 'Contact' },
    hero: { greeting: 'Bonjour, je suis', name: 'Sara', lastName: 'Soufi', roles: ['Développeuse Full-Stack', 'Spécialiste React', 'Passionnée UX/UI'], bio: "Je conçois et développe des applications web modernes et responsives, en mettant l'accent sur un code propre et des expériences utilisateur exceptionnelles.", viewWork: 'Voir mes travaux', contactMe: 'Me contacter', scroll: 'Défiler' },
    about: { subtitle: 'Qui suis-je', title: 'À propos', description: "Étudiante en Master 1 STIC, je développe progressivement des compétences en conception et développement d'applications web.", highlights: ['Développement Web', 'Design UX/UI', 'Projets Académiques', 'Apprentissage Continu'] },
    methodology: { subtitle: 'Ma méthode', title: 'Workflow Professionnel', description: 'Un flux de travail discipliné conçu pour transformer des idées complexes en solutions numériques fiables.', steps: [{ number: '01', title: 'Cadrage Conceptuel', description: 'Clarifier la vision en traduisant les idées initiales en objectifs bien définis.', details: 'Cette étape établit les limites du projet et les priorités stratégiques.' }, { number: '02', title: 'Exploration Stratégique', description: 'Évaluer les écosystèmes existants et identifier les opportunités.', details: 'Les décisions sont guidées par les données et la faisabilité.' }, { number: '03', title: "Architecture d'Expérience", description: 'Structurer les parcours utilisateurs et les systèmes visuels avec précision.', details: 'Les interfaces équilibrent fonctionnalité, clarté et cohérence esthétique.' }, { number: '04', title: 'Exécution Technique', description: 'Concevoir des solutions robustes grâce à une architecture propre.', details: "L'accent est mis sur la fiabilité et la qualité du code." }, { number: '05', title: 'Validation & Déploiement', description: 'Assurer la préparation par des tests et une livraison contrôlée.', details: 'La solution est optimisée et préparée pour une utilisation réelle.' }] },
    projects: { 
      subtitle: 'Portfolio', 
      title: 'Projets Académiques', 
      description: "Projets réalisés ce semestre, démontrant mes compétences en React, JavaScript, tests et contrôle de version.", 
      moreDetails: 'Plus de détails', 
      viewCode: 'Voir le code', 
      detailedDescription: 'Description détaillée', 
      objectives: 'Objectifs', 
      keyLearnings: 'Apprentissages clés', 
      technologies: 'Technologies', 
      items: [
        { 
          title: 'Tableau Kanban', 
          subtitle: 'Lab 7', 
          description: "Une application de gestion de tâches type Trello construite avec React. Fonctionnalités: création de tâches, colonnes par statut, déplacement dynamique.", 
          details: "Ce lab s'est concentré sur la construction d'une application complète de gestion de tâches avec React. Nous avons implémenté le glisser-déposer, la gestion d'état pour les tâches à travers différentes colonnes.",
          objectivesList: ['Construire une interface Kanban fonctionnelle', 'Implémenter les opérations CRUD sur les tâches', 'Gérer l\'état à travers plusieurs colonnes', 'Appliquer CSS Modules pour le style'],
          learningsList: ['Composition de composants React', 'Remontée d\'état et prop drilling', 'CSS Modules pour styles scopés', 'Gestion des événements React']
        },
        { 
          title: 'Composants React & État', 
          subtitle: 'Lab 5', 
          description: "Un lab React démontrant les concepts fondamentaux: composants fonctionnels, hooks, événements, listes, props et formulaires.", 
          details: "Ce lab a introduit les fondamentaux React - création de composants fonctionnels, utilisation des hooks useState et useEffect, gestion des événements et construction de formulaires.",
          objectivesList: ['Créer des composants fonctionnels React', 'Utiliser les hooks useState et useEffect', 'Gérer les événements et formulaires', 'Rendre des listes dynamiques avec keys'],
          learningsList: ['Composants fonctionnels vs classes', 'Hooks React (useState, useEffect)', 'Inputs de formulaire contrôlés', 'Rendu de listes avec map()']
        },
        { 
          title: 'Tests Unitaires (Jest)', 
          subtitle: 'Lab 4', 
          description: "Un projet JavaScript démontrant les tests unitaires avec Jest. Inclut des tests pour les tableaux, concaténation de chaînes et découpage de tableaux.", 
          details: "Ce lab nous a appris à écrire et exécuter des tests unitaires avec Jest. Organisation des tests avec describe, assertions avec expect, et test de différents types de fonctions.",
          objectivesList: ['Écrire des tests unitaires avec Jest', 'Organiser les tests avec describe', 'Utiliser les assertions expect', 'Tester des fonctions de tableaux et chaînes'],
          learningsList: ['Syntaxe et structure Jest', 'Matchers communs (toBe, toEqual, toContain)', 'Test de fonctions async', 'Concepts de couverture de tests']
        },
        { 
          title: 'Node.js & NPM', 
          subtitle: 'Lab 3', 
          description: "Un projet Node.js focalisé sur JavaScript côté serveur et gestion de packages. Modules réutilisables, opérations fichiers et intégration de packages tiers.", 
          details: "Ce lab a introduit JavaScript côté serveur avec Node.js. Création de serveurs HTTP, travail avec le système de fichiers, gestion des packages avec NPM.",
          objectivesList: ['Configurer l\'environnement Node.js', 'Créer et exporter des modules', 'Utiliser les modules Node.js intégrés (fs, http)', 'Gérer les dépendances avec NPM'],
          learningsList: ['Bases du runtime Node.js', 'Système de modules CommonJS', 'Opérations sur le système de fichiers', 'Configuration package.json']
        },
        { 
          title: 'Git & GitHub', 
          subtitle: 'Lab 2', 
          description: "Projet de contrôle de version couvrant Git et GitHub. Inclut dépôts, commits, branches et workflows de collaboration distante.", 
          details: "Ce lab a couvert les compétences essentielles en contrôle de version avec Git et GitHub. Workflow Git, stratégies de branches et collaboration via pull requests.",
          objectivesList: ['Initialiser et gérer des dépôts Git', 'Créer des commits significatifs', 'Travailler avec les branches', 'Pousser le code sur GitHub'],
          learningsList: ['Workflow git add, commit, push', 'Création et fusion de branches', 'Résolution de conflits de fusion', 'Fonctionnalités de collaboration GitHub']
        }
      ] 
    },
    skills: { subtitle: 'Expertise', title: 'Compétences & Technologies', overview: 'Aperçu de ma stack technique : langages web, frameworks et outils.', categories: { frontend: 'Front-end Web', backend: 'Back-end Web', mobile: 'Application Mobile', tools: 'Outils & Technologies' } },
    blog: { subtitle: 'Insights', title: 'Blog & Articles', description: "Articles courts sur mon parcours d'apprentissage, les défis rencontrés et les solutions trouvées.", readMore: 'Lire plus', articles: [{ title: 'Mes premiers pas avec React', date: 'Déc 2024', readTime: '5 min', category: 'Apprentissage', excerpt: "Découvrir React a été un tournant dans mon parcours. Je partage ici les défis rencontrés et comment je les ai surmontés." }, { title: 'Conseils de débogage pour débutants', date: 'Nov 2024', readTime: '4 min', category: 'Conseils', excerpt: "Le débogage peut être frustrant. Voici des techniques qui ont rendu mon processus plus efficace." }, { title: 'Comprendre le design responsive', date: 'Oct 2024', readTime: '6 min', category: 'Tutoriel', excerpt: "Le design responsive est essentiel. Découvrez les concepts clés et bonnes pratiques." }] },
    personal: { subtitle: 'Au-delà du code', title: 'Côté Personnel', description: 'Découvrez qui je suis en dehors du code - mes hobbies, intérêts et expériences créatives.', hobbiesTitle: 'Hobbies & Intérêts', galleryTitle: 'Expériences Créatives', funFact: 'Fait amusant', funFactText: "J'adore expérimenter avec l'art généré par IA et explorer comment la technologie peut enrichir la créativité!", hobbies: [{ name: 'Lecture', emoji: '📚', description: 'Livres tech & romans' }, { name: 'Photographie', emoji: '📷', description: 'Capturer des moments' }, { name: 'Musique', emoji: '🎵', description: 'Lo-fi & ambient' }, { name: 'Voyage', emoji: '✈️', description: 'Explorer de nouveaux lieux' }], gallery: [{ title: 'Exploration Art IA', emoji: '🎨', description: "Expérimentation avec les outils de génération d'images IA" }, { title: 'Concepts UI', emoji: '💡', description: "Expériences de design d'interface créatif" }, { title: 'Projets Perso', emoji: '🚀', description: 'Expériences de code personnelles' }] },
    education: { subtitle: 'Parcours Académique', title: 'Formation', current: 'Année en cours', degree: 'Master 1 STIC', university: 'Université', focus: "Spécialisation : Conception et Développement d'Applications Web" },
    contact: { subtitle: 'Me contacter', title: 'Contact', description: "Ouverte aux stages, projets académiques et opportunités d'apprentissage.", email: 'Email', location: 'Localisation', social: 'Réseaux', form: { name: 'Nom', email: 'Email', message: 'Message', send: 'Envoyer' } },
    footer: { rights: 'Tous droits réservés.', madeWith: 'Fait avec' }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const t = translations[language];
  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  return <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};