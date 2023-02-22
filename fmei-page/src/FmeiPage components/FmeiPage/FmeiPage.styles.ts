import styled from "styled-components";

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
`;

export const MenuOptions = styled.div`
    border: 2px solid black;
    display: none;
`;

export const Introduction = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: var(--linear-gradient);
    color: var(--white);
    text-align: center;

    .container{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        border: 2px solid black;
        width: 65%;
        max-width: 55rem;
        padding-top: 2rem;
    }

    .headerText{
        line-height: 3rem;
    }

    a{
        border: 2px solid var(--white);
        padding: 2.5rem 4.5rem;
        border-radius: 4rem;
        color: var(--white);
        font-weight: bold;
        transition: .5s ease;
    }

    a:hover{
        background-color: var(--white);
        color: var(--main-color);
    }
`;

export const LogoFmei = styled.div`
    width: 70%;
    max-width: 28rem;
`;

export const ScreenshotDashboardFmei = styled.div`
    border: 2px solid black;
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
        color: var(--white);
        text-align: center;
        text-shadow: 1rem 0.6rem 1.3rem #000;
        line-height: 3.5rem;
    }
`;

export const UpButton = styled.div`
    border-radius: 50%;
    padding: .5rem;
    width: 5rem;
    height: 5rem;
    background-color: var(--secondary-color);
    cursor: pointer;
    opacity: .5;
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    transition: all .5s ease;

    &:hover{
        opacity: 1;
    }
`;