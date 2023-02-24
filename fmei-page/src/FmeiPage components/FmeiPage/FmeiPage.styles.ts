import styled, { keyframes } from "styled-components";

export const FmeiPageContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const NavBar = styled.nav`
    width: 100%;
    height: 11rem;
    border-bottom: 1px solid var(--white);
    background-color: var(--main-color);
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoKatuDV = styled.div`
    width: max-content;
`;

export const MenuButton = styled.div`
    width: max-content;
    cursor: pointer;

    @media screen and (min-width: 825px) {
        display: none;
    }
`;

export const MenuOptions = styled.div`
    display: none;
    gap: 1.5rem;

    a{
        border: 1px solid var(--white);
        color: var(--white);
        padding: 2rem 3.5rem;
        border-radius: 4rem;
        font-weight: 900;
        transition: all .5s ease;
    }

    a:hover{
        background-color: var(--white);
        color: var(--main-color);
    }

    @media screen and (min-width: 825px){
        display: flex;
    }
`;

export const Introduction = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: var(--linear-gradient);
    color: var(--white);
    text-align: center;
    position: relative;
    padding: 0 0 20rem;

    .container{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        width: 35rem;
        padding-top: 2rem;
    }

    h1{
        font-size: 4rem;
    }

    .headerText{
        line-height: 3rem;
    }

    a{
        border: 1px solid var(--white);
        padding: 3rem 6rem;
        border-radius: 4rem;
        color: var(--white);
        font-weight: bold;
        transition: .5s ease;
    }

    a:hover{
        background-color: var(--white);
        color: var(--main-color);
    }

    @media screen and (min-width: 825px) {
        .container{
            width: 55rem;
        }

        h1{
            font-size: 5rem;
        }
    }
`;

export const LogoFmei = styled.div`
    width: 70%;
    max-width: 22rem;
`;

export const ScreenshotDashboardFmei = styled.div`
    position: absolute;
    bottom: -12rem;
    width: 46rem;

    @media screen and (min-width: 825px) {
        bottom: -25rem;
        width: 70rem;
    }

    @media screen and (min-width: 1024px) {
        bottom: -35rem;
        width: 85rem;
    }
`;

export const KeyIndicatorsText = styled.div`
    width: 100%;
    height: auto;
    padding: 5rem 2rem;
    background-image: linear-gradient(#0000ff, #2222ff);
    display: flex;
    align-items: center;
    justify-content: center;

    h2{
        width: 45rem;
        color: var(--white);
        text-align: center;
        text-shadow: 1rem 0.6rem 1.3rem #000;
        line-height: 3.5rem;
    }

    @media screen and (min-width: 825px) {
        h2{
            width: 60rem;
            font-size: 4rem;
            line-height: 5rem;
        }
    }
`;

const BttnToTopAnimation = keyframes`
    from{opacity: 0;}
    to{opacity: .5;}
`;

export const BttnToTop = styled.div`
    border-radius: 50%;
    padding: .5rem;
    width: 5rem;
    height: 5rem;
    background-color: var(--secondary-color);
    cursor: pointer;
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    opacity: .5;
    transition: opacity .5s ease;
    animation: ${BttnToTopAnimation} .5s ease-in-out;

    &:hover{
        opacity: 1;
    }
`;