import styled from "styled-components"
import { mq } from "../../utils/styles"

const ViewCaseStudyButton = styled.button`
  background: none;
  border: none;
  align-self: baseline;
  display: inline-block;
  font-weight: 700;
  padding: 0.5rem 0.25rem 0;
  cursor: pointer;
  line-height: 0.6;
  border-bottom: 3px solid var(--pink-theme);
  font-size: 1.25rem;
  margin-top: 1rem;

  @media (min-width: ${mq.m768}) {
    margin-top: 0;
    font-size: 1rem;
  }

  @media (min-width: ${mq.m1280}) {
    font-size: 1.25rem;
  }
`

export default ViewCaseStudyButton
