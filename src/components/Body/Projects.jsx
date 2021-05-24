import H2 from "../Common/H2";
import Project from "./Project";

const pjects = [
  {
    title: "sonicremedies.net",
    desc: "Sonic Remedies is an interactive survey",
  },
];

const Projects = () => {
  return (
    <div>
      <H2
        style={{
          borderBottom: "solid white 2px",
          marginTop: "1rem",
        }}
      >
        Projects
      </H2>
      {pjects.map((pject) => (
        <Project {...pject} />
      ))}
    </div>
  );
};

export default Projects;
