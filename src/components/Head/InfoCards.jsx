import InfoCard from "./InfoCard";
import styled from "styled-components";
import Education from "./Education";
import Contact from "./Contact";
import Tech from "./Tech";
import Introduction from "./Introduction";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const InfoCards = () => {
  return (
    <CardsContainer>
      <InfoCard title="Introduction">
        <Introduction />
      </InfoCard>
      <InfoCard title="Skills">
        <Tech />
      </InfoCard>
      <InfoCard title="More Info">
        <div>
          <Education />
          <br />
          <Contact />
        </div>
      </InfoCard>
    </CardsContainer>
  );
};

export default InfoCards;
