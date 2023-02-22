import styled from "styled-components";

export const Footer = styled.footer`
    background-color: #01015c;
    padding: 20rem 2rem 3rem;
    color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5rem;
    position: relative;

    .logoKatuDV{
        width: 17rem;

        div{
            width: 12rem;
            margin-bottom: 2rem;
        }
    }

    p{
        text-align: center;
        line-height: 3rem;
    }
`;

export const SocialMedias = styled.div`
    display: flex;
    gap: 1rem;
    
    a{
        width: 5rem;
        height: 5rem;
        padding: 1rem;
        border: 1px solid var(--white);
        border-radius: 50%;
    }
`;

export const EarlyAccess = styled.section`
    width: 90%;
    height: auto;
    padding: 3.5rem 1rem;
    border-radius: 20px;
    text-align: center;
    gap: 3rem;
    line-height: 3.3rem;
    background-image: linear-gradient(#0101a5, #0505f7);
    color: var(--white);
    align-self: center;
    position: absolute;
    top: -18rem;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    a{
        border: 2px solid var(--white);
        padding: 1.5rem 5rem;
        border-radius: 20px;
        color: var(--white);
        font-weight: bold;
        transition: all .5s ease;
    }

    a:hover{
        background-color: var(--white);
        color: var(--main-color);
    }
`;