import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      company: "RoonStudio",
      location: "Freelance, Peshawar, Pakistan",
      period: "January 2019 - Present",
      roles: [
        {
          title: "Full Stack Developer",
          project: "Bracket Boss",
          description:
            "Built Bracket Boss, a league and tournament management platform for pickleball. Worked on scheduling systems, tournament brackets, payments, messaging, and real-time standings. Developed a comprehensive admin panel and deployed the application on AWS with a focus on scalability and performance.",
          techStack: [
            "Next.js",
            "Tailwind CSS",
            "NestJS",
            "GraphQL",
            "PostgreSQL",
            "AWS",
          ],
          achievements: [
            "Worked on scheduling systems and tournament brackets",
            "Integrated payments and real-time messaging",
            "Developed comprehensive admin panel",
            "Deployed on AWS with focus on scalability and performance",
          ],
        },
        {
          title: "Backend Developer",
          project: "LivelyPencil",
          description:
            "Worked on the backend of a real-time creative community platform. Developed REST APIs and a custom reels-style content system. Implemented real-time features such as live streaming and instant user interactions using Socket.io. Containerized services using Docker.",
          techStack: [
            "Node.js",
            "Express.js",
            "Socket.io",
            "MongoDB",
            "Docker",
          ],
          achievements: [
            "Developed REST APIs and custom reels-style content system",
            "Implemented live streaming and instant user interactions using Socket.io",
            "Containerized services using Docker",
          ],
        },
      ],
    },
    {
      company: "OneFlow",
      location: "Freelance",
      period: "Freelance Project",
      roles: [
        {
          title: "Full Stack Developer",
          project: "Business Automation Platform",
          description:
            "Developed a business automation platform supporting background jobs, email workflows, and document generation. Built APIs and frontend features using GraphQL and React Query. Deployed the system on AWS EC2 with Nginx and handled automated tasks using Agenda.js.",
          techStack: [
            "Next.js",
            "Node.js",
            "GraphQL",
            "MongoDB",
            "Tailwind CSS",
            "Agenda.js",
            "SendGrid",
          ],
          achievements: [
            "Built APIs and frontend features using GraphQL and React Query",
            "Implemented background jobs and email workflows using Agenda.js and SendGrid",
            "Deployed on AWS EC2 with Nginx",
            "Handled document generation workflows",
          ],
        },
      ],
    },
    {
      company: "FCE",
      location: "Freelance",
      period: "Freelance Project",
      roles: [
        {
          title: "Backend Developer",
          project: "IT, Automotive & Logistics Solutions",
          description:
            "Contributed to backend development for a company working in IT, automotive quality, and logistics solutions. Focused on API development, system performance, and data integration using TypeScript and MongoDB.",
          techStack: [
            "TypeScript",
            "Express.js",
            "Next.js",
            "MongoDB",
            "Docker",
          ],
          achievements: [
            "Focused on API development and system performance",
            "Implemented data integration solutions",
            "Built robust backend systems using TypeScript",
          ],
        },
      ],
    },
    {
      company: "BroodBox",
      location: "Freelance",
      period: "Freelance Project",
      roles: [
        {
          title: "Full Stack Developer",
          project: "Farm Management Web Application",
          description:
            "Developed a multi-tenant farm management web application. Implemented role-based access control, Google Maps integration, and features for pollination tracking and yield estimation.",
          techStack: [
            "JavaScript",
            "React",
            "Node.js",
            "Tailwind CSS",
            "MongoDB",
            "GraphQL",
            "Google Maps API",
          ],
          achievements: [
            "Implemented role-based access control",
            "Integrated Google Maps for location tracking",
            "Built pollination tracking and yield estimation features",
          ],
        },
      ],
    },
  ];

  const certifications = [
    { name: "Responsive Web Design", issuer: "FreeCodeCamp", date: "April 2023" },
    { name: "Learn Node.js From Scratch", issuer: "Codedamn", date: "May 2023" },
    { name: "Git Masterclass", issuer: "Codedamn", date: "April 2023" },
    { name: "Relational Databases including PostgreSQL, Bash, and Git", issuer: "FreeCodeCamp" },
    { name: "Back End Development and APIs", issuer: "FreeCodeCamp" },
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" },
    { name: "Urdu", level: "Native" },
  ];

  return (
    <main className="min-h-[calc(100vh-3.5rem)] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-fg-white">
            Work <span className="text-accent-blue">Experience</span>
          </h2>
        </div>

        <div className="space-y-6 mb-20">
          {experiences.map((company, index) => (
            <div
              key={index}
              className="bg-dark-surface border border-dark-border rounded-lg overflow-hidden hover:border-muted transition-colors"
            >
              <div className="border-b border-dark-border px-5 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <span className="text-fg-white font-semibold text-sm">
                    {company.company}
                  </span>
                  <span className="text-muted text-xs ml-2">
                    {company.location}
                  </span>
                </div>
                <span className="text-xs text-accent-blue">{company.period}</span>
              </div>

              <div className="p-5 space-y-6">
                {company.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="terminal-line">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                      <h3 className="text-fg-white font-semibold text-sm">
                        {role.title}
                      </h3>
                      <span className="text-accent-blue text-xs font-medium">
                        {role.project}
                      </span>
                    </div>
                    <p className="text-muted-light text-xs leading-relaxed mb-4">
                      {role.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs text-muted mb-2">
                        <span className="code-comment">{'// tech stack'}</span>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {role.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-dark-bg text-xs text-accent-green rounded border border-dark-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-muted mb-2">
                        <span className="code-comment">{'// achievements'}</span>
                      </p>
                      <ul className="space-y-1.5">
                        {role.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-xs">
                            <span className="text-accent-green mr-2 mt-0.5">✓</span>
                            <span className="text-fg">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-dark-surface border border-dark-border rounded-lg p-5">
            <h2 className="text-sm font-semibold text-fg-white mb-4 pb-3 border-b border-dark-border">
              <span className="text-accent-blue">Certifications</span>
            </h2>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div key={i} className="pb-3 border-b border-dark-border last:border-b-0 last:pb-0">
                  <p className="text-xs text-fg">{cert.name}</p>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-accent-blue">{cert.issuer}</span>
                    {cert.date && (
                      <span className="text-xs text-muted">{cert.date}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-dark-surface border border-dark-border rounded-lg p-5">
            <h2 className="text-sm font-semibold text-fg-white mb-4 pb-3 border-b border-dark-border">
              <span className="text-accent-blue">Languages</span>
            </h2>
            <div className="space-y-3">
              {languages.map((lang, i) => (
                <div key={i} className="flex justify-between items-center pb-3 border-b border-dark-border last:border-b-0 last:pb-0">
                  <span className="text-xs text-fg">{lang.name}</span>
                  <span className="px-2 py-0.5 bg-dark-bg text-xs text-accent-green rounded border border-dark-border">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkExperience;
