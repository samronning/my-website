import styled from "styled-components";

const StyledLink = styled.a`
  color: white;
  margin: 0.5rem;
`;

const Link = ({ lnk, children }) => {
  return <StyledLink href={lnk}>{children}</StyledLink>;
};

export default Link;
