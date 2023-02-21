import LogoKatu from '../../assets/imgs/logo_katu_dv.png';
import LogoFMEI from '../../assets/imgs/logo_facilita_mei.png';

import ScreenshotDashboard from '../../assets/imgs/screenshot_dashboard.png';
import ScreenshotDashboardMobile from '../../assets/imgs/screenshot_dashboard_mobile.png';

import IllustrativeImage1 from '../../assets/imgs/imagem_ilustrativa_1.png';
import IllustrativeImage2 from '../../assets/imgs/imagem_ilustrativa_2.png';

import MenuIcon from '../../assets/icons/icon_menu.svg';
import BarChartIcon from '../../assets/icons/bar_chart_icon.svg';
import MonitoringIcon from '../../assets/icons/monitoring_icon.svg';
import TouchAppIcon from '../../assets/icons/touch_app_icon.svg';
import BalanceIcon from '../../assets/icons/balance_icon.svg';
import TredingUpIcon from '../../assets/icons/trending_up_icon.svg';
import AccountBalanceIcon from '../../assets/icons/account_balance_icon.svg';
import QueryStatsIcon from '../../assets/icons/query_stats_icon.svg';
import LeaderboardIcon from '../../assets/icons/leaderboard_icon.svg';
import UpdateIcon from '../../assets/icons/update_icon.svg';
import IconToUp from '../../assets/icons/icon_to_up.svg';

import TwitterIcon from '../../assets/icons/twitter_icon.png';
import FacebookIcon from '../../assets/icons/facebook_icon.png';

export function FmeiPage(){
    return(
        <div>    
            <nav className="navigation_bar">
                <div className="logo_katu_dv">
                    <a href="https://www.katudv.com/">
                        <img src={LogoKatu} alt="logo da startup Katu D.V" />
                    </a>
                </div>
                <div className="botao_menu" onclick="menu_opcoes_on()">
                    <img src={MenuIcon} alt="botão de menu" />
                </div>
                <div className="opcoes_menu">
                    <a href="https://www.katudv.com/">Página Inicial</a>
                    <a href="https://forms.gle/DkQ4BqauTgTkmpv56">
                        Ter Acesso Antecipado
                    </a>
                </div>
            </nav>
            <header>
                <div className="logo_facilita_mei">
                    <img 
                        src={LogoFMEI} 
                        alt="logo do Facilita MEI"
                    />
                </div>
                <h1>FacilitaMEI</h1>
                <p className="header_text">
                    Visão geral de seu negócio a um clique de distância.
                    Clique abaixo para ter acesso antecipado ao produto.
                </p>
                <a href="https://forms.gle/DkQ4BqauTgTkmpv56">Clique Aqui</a>
                <p>Oferta válida por tempo limitado.</p>
                <div className="screenshot_dashboard_fmei">
                    <img 
                        src={ScreenshotDashboard} 
                        alt="imagem da ferramenta Facilita MEI"
                    />
                </div>
            </header>
            <section className="explicacao_ferramenta_fmei">
                <section className="section_explicacao_1">
                    <div className="logo_e_texto_section_explicacao">
                        <img 
                            src={BarChartIcon} 
                            alt="logo ilustrativa" 
                            className="logo_ilustrativa"
                        />
                        <h2>Muitos dados, poucas informações.</h2>
                        <p>
                            Inúmeros dados acabam se perdendo de vista, o que significam?
                            O que podem inferir? Várias informações são perdidas.
                        </p>
                    </div>
                    <div className="imagem_ilustrativa">
                        <img 
                            src={IllustrativeImage1} 
                            alt="imagens de tabelas de dados e de um funcionario"
                        />
                    </div>
                </section>
                <section className="section_explicacao_2">
                    <div className="logo_e_texto_section_explicacao">
                        <img 
                            src={MonitoringIcon} 
                            alt="logo ilustrativa" 
                            className="logo_ilustrativa"
                        />
                        <h2>Entenda seus dados.</h2>
                        <p>
                            Para evitar se perder em tabelas comumente se recorre a gráficos,
                            através deles podemos observar de maneira pânoramica a situação 
                            para determinarmos a melhor decisão a se tomar, infelizmente esse
                            passo requer estudo, análise de dados, contratação de mão de obra ou 
                            instalação de um software que necessita de treinamento.
                        </p>
                    </div>
                    <div className="imagem_ilustrativa">
                        <img 
                            src={IllustrativeImage2} 
                            alt="imagem de um gráfico ilustrativo e de duas pessoas conversando."
                        />
                    </div>
                </section>
                <section className="section_explicacao_3">
                    <div className="screenshot_versao_mobile_fmei">
                        <img 
                            src={ScreenshotDashboardMobile} 
                            alt="imagem da ferramenta Facilita MEI na versão mobile"
                        />
                    </div>
                    <div className="logo_e_texto_section_explicacao">
                        <img 
                            src={TouchAppIcon} 
                            alt="logo ilustrativa" 
                            className="logo_ilustrativa"
                        />
                        <h2>Resolva tudo isso com um clique.</h2>
                        <p>
                            A ferramenta FacilitaMEI te entrega um Dashboard de fácil entendimento com todas as informações 
                            necessárias para você ter controle total de seu negócio a partir de qualquer tabela que você esteja 
                            utilizando em apenas um clique.
                        </p>
                    </div>
                </section>
            </section>
            <div className="titulo_indicadores_chaves">
                <h2>Tenha indicadores chaves que ajudam a você tomar a melhor decisão para seu negócio.</h2>
            </div>
            <section className="indicadores_chaves">
                <section>
                    <div className="logo_ilustrativa">
                        <img 
                            src={BalanceIcon} 
                            alt="logo ilustrativa"
                        />
                    </div>
                    <h3>Receita e saldo.</h3>
                    <p>
                        Saiba exatamente qual sua maior fonte de receita e a quantidade de seu saldo de maneira
                        categorizada.
                    </p>
                </section>
                <section>
                    <div className="logo_ilustrativa">
                        <img 
                            src={TredingUpIcon} 
                            alt="logo ilustrativa"
                        />
                    </div>
                    <h3>Projeção de lucro.</h3>
                    <p>
                        Tenha a visão do futuro do seu negócio baseada em seus dados históricos.
                    </p>
                </section>
                <section>
                    <div className="logo_ilustrativa">
                        <img 
                            src={AccountBalanceIcon} 
                            alt="logo ilustrativa"
                        />
                    </div>
                    <h3>Despesas.</h3>
                    <p>
                        Tenha a visão de quanto se foi gasto com cada tipo de despesa, taxas e afins.
                    </p>
                </section>
                <section>
                    <div className="logo_ilustrativa">
                        <img 
                            src={QueryStatsIcon} 
                            alt="logo ilustrativa"
                        />
                    </div>
                    <h3>Resultados semestrais e trimestrais.</h3>
                    <p>
                        Tenha a visão temporal de como está seu negócio.
                    </p>
                </section>
                <section>
                    <div className="logo_ilustrativa">
                        <img 
                            src={LeaderboardIcon} 
                            alt="logo ilustrativa"
                        />
                    </div>
                    <h3>Gráficos pensados para seu entendimento.</h3>
                    <p>
                        Gráficos interativos e que melhor representam suas informações.
                    </p>
                </section>
                <section>
                    <div className="logo_ilustrativa">
                        <img 
                            src={UpdateIcon} 
                            alt="logo ilustrativa"
                        />
                    </div>
                    <h3>informações atualizadas com o mercado.</h3>
                    <p>
                        Constantes atualizações no aplicativo deixarão você sempre atualizado aos 
                        melhores indicadores financeiros.
                    </p>
                </section>
            </section>
            <section className="acesso_antecipado_ao_fmei">
                <div>
                    <h2>Comece agora a ter controle sobre seus dados</h2>
                    <p>
                        Faça parte de nosso acesso antecipado e tenha a ferramenta assim que estiver 
                        disponivel.
                    </p>
                    <a href="https://forms.gle/DkQ4BqauTgTkmpv56">Clique Aqui</a>
                </div>
            </section>
            <footer>
                <div className="logo_katu_dv">
                    <a href="https://www.katudv.com/">
                        <img 
                            src={LogoKatu} 
                            alt="Logo da startup Katu D.V"
                        />
                    </a>
                </div>
                <p>Somos uma startup de visualização de dados.</p>
                <div className="redes_sociais_katu_dv">
                    <a href="https://twitter.com/katudv">
                        <img 
                            src={TwitterIcon} 
                            alt="Twitter da Katu D.V"
                        />
                    </a>
                    <a href="https://www.facebook.com/KatuDV">
                        <img 
                            src={FacebookIcon} 
                            alt="Facebook da Katu D.V"
                        />
                    </a>
                </div>
                <p className="copyright">
                    Copyright ©2022 All rights reserved. This template is made by Katu D.V
                </p>
            </footer>
            <div className="botao_voltar_para_topo" onclick="back_to_up()">
                <img 
                    src={IconToUp} 
                    alt="botão de voltar para o topo/início da página"
                />
            </div>
        </div>
    );
};