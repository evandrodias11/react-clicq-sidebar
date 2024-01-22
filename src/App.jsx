import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ListarAplicacoes from "./pages/aplicacao-questionario/ListarAplicacoes";
import Home from "./pages/Home";
import ConfiguracaoListagem from "./pages/aplicacao-questionario/ConfiguracaoListagem";
import ExportarAplicacoes from "./pages/aplicacao-questionario/ExportarAplicacoes";
import ImportarAplicacoes from "./pages/aplicacao-questionario/ImportarAplicacoes";
import NovaAplicacao from "./pages/aplicacao-questionario/NovaAplicacao";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content-wrapper">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listarAplicacoes" element={<ListarAplicacoes />} />
            <Route path="/novaAplicacao" element={<NovaAplicacao />} />
            <Route
              path="/importarAplicacoes"
              element={<ImportarAplicacoes />}
            />
            <Route
              path="/exportarAplicacoes"
              element={<ExportarAplicacoes />}
            />
            <Route
              path="/configuracaoListagem"
              element={<ConfiguracaoListagem />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
