import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import IconeUsuario from "../assets/icon-user.png";
import IconeCasa from "../assets/icon-casa.png";
import IconeBusca from "../assets/icon-busca.png";

function Sidebar() {
  const [isExtended, setIsExtended] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleIconClick = () => {
    setIsExtended(!isExtended);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const handleSubItemClick = (e, path) => {
    e.stopPropagation();
    navigate(path);
  };

  return (
    <div className="sidebar">
      <div className="icons-section">
        <img src={IconeUsuario} alt="icone-usuario" width={50} />
        <img
          className="home-icon"
          src={IconeCasa}
          alt="icone-casa"
          onClick={(e) => handleSubItemClick(e, "/")}
          width={50}
        />
        <img
          className="search-icon"
          src={IconeBusca}
          alt="icone-busca"
          onClick={handleIconClick}
          width={50}
        />
      </div>
      <div className={`extended-section ${isExtended ? "extended" : ""}`}>
        <div className="titulo-modulo" onClick={handleIconClick}>
          <h1>
            Módulo Geral
            <span className="arrow">
              {isExtended ? (
                <FontAwesomeIcon icon={faChevronLeft} />
              ) : (
                <FontAwesomeIcon icon={faChevronRight} />
              )}
            </span>
          </h1>
        </div>
        <div className="menu-item" onClick={toggleSubmenu}>
          <div className="box-titulo-item">
            <p className="titulo-item">Aplicação de questionários</p>
            <span className="arrow">
              {isSubmenuOpen ? (
                <FontAwesomeIcon icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon icon={faChevronUp} />
              )}
            </span>
          </div>
          {isSubmenuOpen && ( // Renderizar o submenu condicionalmente
            <div className="submenu">
              <div
                className="submenu-item"
                onClick={(e) => handleSubItemClick(e, "/listarAplicacoes")}
              >
                <p className="titulo-subitem">
                  Listar aplicações de questionários
                </p>
              </div>
              <div
                className="submenu-item"
                onClick={(e) => handleSubItemClick(e, "/novaAplicacao")}
              >
                <p className="titulo-subitem">
                  Nova aplicação de questionários
                </p>
              </div>
              <div
                className="submenu-item"
                onClick={(e) => handleSubItemClick(e, "/configuracaoListagem")}
              >
                <p className="titulo-subitem">Configurações de listagem</p>
              </div>
              <div
                className="submenu-item"
                onClick={(e) => handleSubItemClick(e, "/importarAplicacoes")}
              >
                <p className="titulo-subitem">
                  Importar aplicações de questionários
                </p>
              </div>
              <div
                className="submenu-item"
                onClick={(e) => handleSubItemClick(e, "/exportarAplicacoes")}
              >
                <p className="titulo-subitem">
                  Exportar aplicações de questionários
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
