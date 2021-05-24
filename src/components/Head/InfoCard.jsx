import H2 from "../Common/H2";
import P from "../Common/P";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 25rem;
  text-align: center;
`;

const InfoCard = ({ title, children }) => {
  return (
    <StyledCard>
      <H2>{title}</H2>
      <P>{children}</P>
    </StyledCard>
  );
};

export default InfoCard;
