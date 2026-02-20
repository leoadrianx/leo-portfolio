import { projects } from "../data/projects";

const ProjectsComponent: React.FC = () => {
  return (
    <>
      <h2
        className="text-center text-3xl font-bold md:text-4xl"
        style={{ opacity: 1, transform: "none" }}
      >
        My <span className="text-indigo-400">Projects</span>
      </h2>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-app-fg/10 bg-app-fg/5 p-6 shadow-lg backdrop-blur-md transition hover:scale-[1.02]"
            style={{ opacity: 1, transform: "none" }}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-sm opacity-70 leading-relaxed">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="rounded-lg bg-app-fg/10 px-2 py-1 text-xs opacity-80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsComponent;
