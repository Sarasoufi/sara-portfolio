const skillCategories = [
  {
    title: 'Front-end Web',
    skills: [
      { name: 'HTML', type: 'Language' },
      { name: 'CSS', type: 'Language' },
      { name: 'JavaScript', type: 'Language' },
      { name: 'React', type: 'Framework' },
    ],
  },
  {
    title: 'Back-end Web',
    skills: [
      { name: 'PHP', type: 'Language' },
      { name: 'Laravel', type: 'MVC Framework' },
    ],
  },
  {
    title: 'Mobile App',
    skills: [
      { name: 'Flutter', type: 'Framework' },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Vite', type: 'Build Tool' },
      { name: 'Git', type: 'Version Control' },
      { name: 'Jest', type: 'Testing' },
      { name: 'GitHub', type: 'Repository' },
      { name: 'VS Code', type: 'Editor' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Overview of my technical stack: web languages, frameworks and tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="opacity-0 animate-slide-up"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-border">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <span className="font-medium group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded">
                      {skill.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
