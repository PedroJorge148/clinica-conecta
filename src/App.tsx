import Home from "./pages/Home"

function App() {
    return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App



// 1. Importa o componente indicando o caminho do ficheiro (sem escrever a extensão .tsx)
import { Topbar } from './components/Topbar'; 

// 2. Coloca a tag <Header /> dentro do return
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Topbar />
    </div>
  );
}