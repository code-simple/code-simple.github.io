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
    <main className="py-20 px-4 bg-gradient-to-br from-gray-800 to-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-white">SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow hover:border-primary-500"
            >
              <h3 className="text-xl font-bold text-white mb-4 pb-3 border-b-2 border-primary-500">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 bg-gray-700 text-gray-100 rounded-md text-sm font-medium hover:bg-primary-600 transition-colors"
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
