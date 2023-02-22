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