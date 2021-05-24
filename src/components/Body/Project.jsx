import H2 from "../Common/H2";
import P from "../Common/P";
const Project = ({ title, desc }) => {
  return (
    <div>
      <H2>{title}</H2>
      <P>{desc}</P>
    </div>
  );
};

export default Project;
