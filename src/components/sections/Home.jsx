import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-[calc(100vh-3.5rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <p className="text-xs text-accent-blue font-medium tracking-wider">
                <span className="text-accent-purple">import</span>{" "}
                <span className="text-fg">&#123; Developer &#125;</span>{" "}
                <span className="text-accent-purple">from</span>{" "}
                <span className="text-accent-green">'pakistan'</span>
                <span className="text-fg">;</span>
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-accent-blue">Imran</span>{" "}
                <span className="text-fg-white">Khan</span>
              </h1>

              <h2 className="text-lg sm:text-xl text-muted-light font-medium">
                <span className="text-accent-yellow">Full Stack Developer</span>
                <span className="text-muted"> — </span>
                <span className="text-fg">
                  turning ideas into powerful web solutions
                </span>
              </h2>
            </div>

            <div className="text-sm text-muted border-l-2 border-dark-selection pl-5 space-y-1">
              <p>
                <span className="text-accent-purple">const</span>{" "}
                <span className="text-accent-red">stack</span>{" "}
                <span className="text-fg">=</span>{" "}
                <span className="text-fg">[</span>
              </p>
              <p className="pl-4">
                <span className="text-accent-green">'React'</span>
                <span className="text-fg">,</span>{" "}
                <span className="text-accent-green">'Next.js'</span>
                <span className="text-fg">,</span>{" "}
                <span className="text-accent-green">'Node.js'</span>
                <span className="text-fg">,</span>{" "}
                <span className="text-accent-green">'NestJS'</span>
                <span className="text-fg">,</span>
              </p>
              <p className="pl-4">
                <span className="text-accent-green">'GraphQL'</span>
                <span className="text-fg">,</span>{" "}
                <span className="text-accent-green">'PostgreSQL'</span>
                <span className="text-fg">,</span>{" "}
                <span className="text-accent-green">'MongoDB'</span>
                <span className="text-fg">,</span>{" "}
                <span className="text-accent-green">'AWS'</span>
                <span className="text-fg">,</span>
              </p>
              <p>
                <span className="text-fg">];</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:imran1102@gmail.com"
                className="px-5 py-2.5 bg-accent-blue text-dark-bg text-sm font-semibold hover:bg-accent-blue/90 transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-dark-bg">Contact Me</span>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-dark-surface border border-dark-border rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-dark-border/50 border-b border-dark-border">
                <span className="w-3 h-3 rounded-full bg-accent-red" />
                <span className="w-3 h-3 rounded-full bg-accent-yellow" />
                <span className="w-3 h-3 rounded-full bg-accent-green" />
                <span className="ml-2 text-xs text-muted">portfolio.tsx</span>
              </div>
              <div className="p-5 text-xs leading-relaxed font-mono overflow-x-auto">
                <p>
                  <span className="text-accent-purple">import</span>{" "}
                  <span className="text-fg">&#123; </span>
                  <span className="text-accent-red">Passion</span>
                  <span className="text-fg">, </span>
                  <span className="text-accent-red">Code</span>
                  <span className="text-fg">, </span>
                  <span className="text-accent-red">Coffee</span>
                  <span className="text-fg"> &#125; </span>
                  <span className="text-accent-purple">from</span>{" "}
                  <span className="text-accent-green">'life'</span>
                  <span className="text-fg">;</span>
                </p>
                <p>&nbsp;</p>
                <p>
                  <span className="text-accent-purple">interface</span>{" "}
                  <span className="text-accent-yellow">Developer</span>{" "}
                  <span className="text-fg">&#123;</span>
                </p>
                <p className="pl-4">
                  <span className="text-accent-blue">name</span>
                  <span className="text-fg">: </span>
                  <span className="text-accent-green">"Imran Khan"</span>
                  <span className="text-fg">;</span>
                </p>
                <p className="pl-4">
                  <span className="text-accent-blue">role</span>
                  <span className="text-fg">: </span>
                  <span className="text-accent-green">
                    "Full Stack Developer"
                  </span>
                  <span className="text-fg">;</span>
                </p>
                <p className="pl-4">
                  <span className="text-accent-blue">experience</span>
                  <span className="text-fg">: </span>
                  <span className="text-accent-yellow">6</span>
                  <span className="text-fg">+ </span>
                  <span className="text-accent-green">"years"</span>
                  <span className="text-fg">;</span>
                </p>
                <p className="pl-4">
                  <span className="text-accent-blue">specialties</span>
                  <span className="text-fg">: </span>
                  <span className="text-accent-yellow">string</span>
                  <span className="text-fg">[] = [</span>
                </p>
                <p className="pl-8">
                  <span className="text-accent-green">"React"</span>
                  <span className="text-fg">, </span>
                  <span className="text-accent-green">"Node.js"</span>
                  <span className="text-fg">, </span>
                  <span className="text-accent-green">"GraphQL"</span>
                  <span className="text-fg">,</span>
                </p>
                <p className="pl-8">
                  <span className="text-accent-green">"NestJS"</span>
                  <span className="text-fg">, </span>
                  <span className="text-accent-green">"PostgreSQL"</span>
                  <span className="text-fg">, </span>
                  <span className="text-accent-green">"AWS"</span>
                </p>
                <p className="pl-4">
                  <span className="text-fg">];</span>
                </p>
                <p className="pl-4">
                  <span className="text-accent-blue">available</span>
                  <span className="text-fg">: </span>
                  <span className="text-accent-purple">true</span>
                  <span className="text-fg">;</span>
                </p>
                <p>
                  <span className="text-fg">&#125;</span>
                </p>
                <p>&nbsp;</p>
                <p>
                  <span className="text-accent-purple">export</span>{" "}
                  <span className="text-accent-purple">default</span>{" "}
                  <span className="text-accent-yellow">Developer</span>
                  <span className="text-fg">;</span>
                </p>
                <p className="mt-3">
                  <span className="inline-block w-2 h-4 bg-accent-blue animate-pulse" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
