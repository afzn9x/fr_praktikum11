import styled from 'styled-components';
import { css } from 'styled-components';

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: #4361ee;
    cursor: pointer;

    ${(props) => props.full && css`
        display: block;
    `}

    background-color: ${({ variant, theme }) => theme.colors[variant] || theme.colors.primary };
`;



export default Button;