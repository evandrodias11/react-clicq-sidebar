import "./Header.css";
import Logo from "../assets/logo-clicq.png";
import IconModulos from "../assets/icon-modulos.png";
import IconConfigs from "../assets/icon-configs.png";

function Header() {
  return (
    <header className="header">
      <div className="logo-institucional">
        <img src={Logo} alt="logo-empresa" width={125} height={30} />
      </div>
      <div className="infos-user">
        <span>EVANDRO CORREIA DIAS</span>
        <br />
        <span>evandro.dias@paripassu.com.br</span>
      </div>
      <div className="modulos">
        <img src={IconModulos} alt="icone-módulos" width={25} height={25} />
        <p>Módulos</p>
      </div>
      <div className="configuracao">
        <div className="icone-configuracao">
          <img src={IconConfigs} alt="icone-configuração" />
          <span>Configurações</span>
        </div>
        <h3>versão dev-1.234.5</h3>
      </div>
    </header>
  );
}

export default Header;
