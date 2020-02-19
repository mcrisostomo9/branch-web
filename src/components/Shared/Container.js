import styled from "styled-components"
import { mq } from "../../utils/styles"

const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  padding: 3rem 1rem;

  @media (min-width: ${mq.m768}) {
    padding: 3rem 2rem;
  }

  @media (min-width: ${mq.m1024}) {
    padding: 3rem;
  }

  @media (min-width: ${mq.m1440}) {
  }
`

export default Container
