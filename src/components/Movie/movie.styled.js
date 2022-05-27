import styled from "styled-components";

const StyledMovie = styled.div`
  margin-bottom: 1rem;
  
  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  h3 {
    color: #4895ef;
    font-size: 1.95rem;
    margin-bottom: 0.275rem;
  }

  p {
    color: #64748b;
  }

  @media screen and (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
  `;

  export default StyledMovie