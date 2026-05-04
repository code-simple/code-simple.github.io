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
                <span className="text-accent-yellow">Fullstack Developer</span>
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
              <Link
                to="/experience"
                className="px-5 py-2.5 bg-accent-blue text-dark-bg text-sm font-semibold hover:bg-accent-blue/90 transition-colors"
              >
                <span className="text-dark-bg">View Work Experience</span>
              </Link>
              <a
                href="https://github.com/code-simple"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-muted text-fg text-sm font-medium hover:border-accent-blue hover:text-accent-blue transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
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
                  <span className="text-accent-green">"Fullstack Developer"</span>
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
