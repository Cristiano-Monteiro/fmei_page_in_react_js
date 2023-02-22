import styled from "styled-components";

export const KeyIndicatorsContainer = styled.section`
    width: 100%;
    height: auto;
    padding: 2rem 2rem 21rem;
    background-color: var(--light-gray);
    display: flex;
    flex-direction: column;
    gap: 2rem;

    section{
        border: 2px solid;
        padding: 3.5rem 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: var(--white);
        border-radius: 20px;
        text-align: left;
        line-height: 3rem;

        div{
            width: 7rem;
            height: 7rem;
            padding: 1rem;
            border-radius: 50%;
            background-color: #efefef;
        }
    }
`;