import propTypes from "prop-types";
import { StyledSection, SectionTitle } from "./Section.style";

export default function Section({ title, children }) {
  return (
    <StyledSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </StyledSection>
  );
}

Section.propTypes = {
  title: propTypes.string,
};
