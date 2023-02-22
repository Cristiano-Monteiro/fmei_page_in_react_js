import { GlobalStyle } from '../Global';
import { 
    FmeiPageContainer, 
    NavBar, 
    LogoKatuDV,
    MenuButton, 
    MenuOptions,
    Introduction,
    LogoFmei,
    ScreenshotDashboardFmei,
    KeyIndicatorsText,
    UpButton
} from './FmeiPage.styles';

import { ToolExplication } from '../ToolExplication/ToolExplication';
import { KeyIndicators } from '../KeyIndicators/KeyIndicators';
import { PageFooter } from '../PageFooter/PageFooter';

import LogoKatu from '../../assets/imgs/logo_katu_dv.png';
import LogoFMEI from '../../assets/imgs/logo_facilita_mei.png';

import ScreenshotDashboard from '../../assets/imgs/screenshot_dashboard.png';
import MenuIcon from '../../assets/icons/icon_menu.svg';
import IconToUp from '../../assets/icons/icon_to_up.svg';

export function FmeiPage(){
    return(
        <FmeiPageContainer>    
            <NavBar>
                <LogoKatuDV>
                    <a href="https://www.katudv.com/">
                        <img src={LogoKatu} alt="logo da startup Katu D.V" />
                    </a>
                </LogoKatuDV>
                <MenuButton>
                    <img src={MenuIcon} alt="botão de menu" />
                </MenuButton>
                <MenuOptions>
                    <a href="https://www.katudv.com/">Página Inicial</a>
                    <a href="https://forms.gle/DkQ4BqauTgTkmpv56">Ter Acesso Antecipado</a>
                </MenuOptions>
            </NavBar>
            <Introduction>
                <div className='container'>
                    <LogoFmei>
                        <img 
                            src={LogoFMEI} 
                            alt="logo do Facilita MEI"
                        />
                    </LogoFmei>
                    <h1>FacilitaMEI</h1>
                    <p className="headerText">
                        Visão geral de seu negócio a um clique de distância.
                        Clique abaixo para ter acesso antecipado ao produto.
                    </p>
                    <a href="https://forms.gle/DkQ4BqauTgTkmpv56">Clique Aqui</a>
                    <p>Oferta válida por tempo limitado.</p>
                </div>
                <ScreenshotDashboardFmei>
                    <img 
                        src={ScreenshotDashboard} 
                        alt="imagem da ferramenta Facilita MEI"
                    />
                </ScreenshotDashboardFmei>
            </Introduction>
            <ToolExplication/>
            <KeyIndicatorsText>
                <h2>Tenha indicadores chaves que ajudam a você tomar a melhor decisão para seu negócio.</h2>
            </KeyIndicatorsText>
            <KeyIndicators/>
            <PageFooter/>
            <UpButton>
                <img 
                    src={IconToUp} 
                    alt="botão de voltar para o topo/início da página"
                />
            </UpButton>
            <GlobalStyle/>
        </FmeiPageContainer>
    );
};