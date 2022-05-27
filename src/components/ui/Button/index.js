// import styled 
import styled from "styled-components";
import { css } from "styled-components";
// membuat component Button
const Button = styled.button`
padding: 0.8rem 2rem;
border: none;
border-radius: 10px;
color: #fff;
cursor: pointer;


//akses props variant
background-color: ${({ variant, theme })=> theme.colors[variant]  || theme.colors.primary};

// props full
${(props) => props.full && css`
    display :block;
    width : 100%;
`}
`;
// export Button
export default Button