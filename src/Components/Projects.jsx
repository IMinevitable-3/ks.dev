import { useEffect } from "react";
import Fallback from "./Fallback";
import { anchorGo } from "../helpers/anchorGo";
import { handleAnchorProjects } from "../helpers/handleAnchorProjects.jsx";
import { projects } from "../helpers/projectContent.js";
import Header from "./Header.jsx";
const PAGE_TITLE = "Komal Sai - My projects";
const PAGE_DESCRIPTION =
  "This page contains information about my projects, their descriptions, technologies, etc.";

const Projects = () => {
  useEffect(() => {
    anchorGo();
  }, []);

  return (
    <div>
      <head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
      </head>

      <div className="no-scrollbar  min-h-dvh bg-gradient-to-br from-[#121212] to-[#0C0E10] text-white">
        <Header />
        {!projects.length ? (
          <Fallback
            title="So silent here..."
            details="More projects will be added soon."
          />
        ) : (
          <div className="mx-auto grid w-full max-w-4xl gap-4 px-1 sm:px-5">
            {projects.map((project, id) => (
              <div
                key={id}
                className="pointer-events-none rounded-md bg-[#1D2123] p-4"
                id={`project-${id}`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <h1 className="text-lg">{project.name}</h1>

                    {project.isClosed && (
                      <p className="box-decorator bg-[#ED4245]">Closed</p>
                    )}
                  </div>

                  <p>
                    {project.description.length
                      ? project.description
                      : "Description will be added soon..."}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((technology, index) => (
                      <div key={index} className="box-decorator bg-[#5862F2]">
                        {technology}
                      </div>
                    ))}
                  </div>

                  <div className="pointer-events-auto flex items-center justify-end gap-2">
                    {project.urls &&
                      project.urls.map((url, i) => (
                        <a
                          key={i}
                          className="duration-500 hover:text-[#ED4245]"
                          target="_blank"
                          rel="noreferrer"
                          href={url}
                        >
                          {`[URL #${i + 1}]`}
                        </a>
                      ))}

                    {project.github && (
                      <a
                        className="duration-500 hover:text-[#ED4245]"
                        target="_blank"
                        rel="noreferrer"
                        href={project.github}
                      >
                        [GitHub]
                      </a>
                    )}

                    <a
                      className="outline-none duration-500 hover:text-[#ED4245]"
                      href={`#project-${id}`}
                      onClick={(event) => handleAnchorProjects(event)}
                    >
                      [Share]
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
