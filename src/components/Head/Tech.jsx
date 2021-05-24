import styled from "styled-components";
import Icon from "../Common/Icon";
import getTechIcons from "../../res/techs/index";

const StyledTech = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 0 1rem;
  border-radius: 1rem;
`;

const Tech = () => {
  return (
    <StyledTech>
      {getTechIcons().map(({ src, alt }) => (
        <Icon src={src} alt={alt} />
      ))}
    </StyledTech>
  );
};

export default Tech;
