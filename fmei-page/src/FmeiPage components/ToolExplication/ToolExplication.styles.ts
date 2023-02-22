import styled from "styled-components";

export const ToolExplicationContainer = styled.section`
    background-color: var(--light-gray);
    width: 100%;
    height: auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    section{
        background-color: var(--white);
        border-radius: var(--border-radius);
    }
`;

export const LogoAndText = styled.div`
    padding: 1rem;
    text-align: left;

    line-height: 3.5rem;

    img{
        width: 7rem;
        background-color: #efefef;
        border-radius: 50%;
        padding: 1rem;
    }

    h2{
        margin-bottom: 1rem;
    }
`;