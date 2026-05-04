import React from "react";

const Skills = () => {
  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS"],
    Backend: [
      "Node.js",
      "Express.js",
      "NestJS",
      "GraphQL",
      "REST APIs",
      "Socket.io",
    ],
    Mobile: ["React Native"],
    Databases: ["PostgreSQL", "MongoDB", "TypeORM", "Mongoose", "Redis"],
    "Cloud & DevOps": [
      "AWS (EC2, S3, RDS)",
      "Docker",
      "Nginx",
      "GitHub Actions",
    ],
    Integrations: [
      "Stripe",
      "SendGrid",
      "Webhooks",
      "API Integrations",
      "PDF & CSV Generation",
    ],
    Testing: ["Jest (Unit Testing)"],
  };

  return (
    <main className="min-h-[calc(100vh-3.5rem)] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-fg-white">
            <span className="text-accent-blue">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="bg-dark-surface border border-dark-border rounded-lg p-5 hover:border-muted transition-colors group"
            >
              <h3 className="text-sm font-semibold text-accent-blue mb-4 pb-3 border-b border-dark-border">
                <span className="text-muted">./</span>
                {category.toLowerCase().replace(/\s+/g, "-")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-dark-line text-fg text-xs rounded border border-dark-border group-hover:border-muted/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Skills;
