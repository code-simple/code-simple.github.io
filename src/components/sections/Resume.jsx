import React from "react";

const Resume = () => {
  const resumeDownloadLink =
    "https://drive.google.com/uc?export=download&id=1_DQ4TjSRfUB6WWEPS9iNKl0kHTwOrMFl";
  const resumePreviewLink =
    "https://drive.google.com/file/d/1_DQ4TjSRfUB6WWEPS9iNKl0kHTwOrMFl/preview";

  return (
    <main className="min-h-[calc(100vh-3.5rem)] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8">
          <h2 className="text-3xl font-bold text-fg-white">Resume</h2>
          <a
            href={resumeDownloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-accent-blue text-dark-bg text-sm font-semibold hover:bg-accent-blue/90 transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </a>
        </div>

        <div className="bg-dark-surface border border-dark-border rounded-lg overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-dark-border/50 border-b border-dark-border">
            <span className="w-3 h-3 rounded-full bg-accent-red" />
            <span className="w-3 h-3 rounded-full bg-accent-yellow" />
            <span className="w-3 h-3 rounded-full bg-accent-green" />
            <span className="ml-2 text-xs text-muted">resume.pdf — preview</span>
          </div>

          <div className="p-4">
            <div className="aspect-video bg-dark-bg rounded border border-dark-border overflow-hidden">
              <iframe
                src={resumePreviewLink}
                title="Resume Preview"
                className="w-full h-full"
                style={{ minHeight: "600px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
