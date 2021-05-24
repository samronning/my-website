import styled from "styled-components";
const StyledIcon = styled.div`
  padding: 1rem;
`;

const Icon = ({ src, alt }) => {
  return (
    <StyledIcon>
      <img src={src} height={"56px"} alt={alt} />
    </StyledIcon>
  );
};

export default Icon;
