export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-marinho text-white p-5 flex flex-col justify-between">
      {/* 1. Parte Superior: Logo e Links */}
      <div>
        {/* Logo / Título/ Descrição*/}
        <div className="mb-8">
          <h1 className="text-xl font-extrabold text-bebe">Conecta</h1>
          <p className="mb-8">Menu</p>
        </div>

        {/* Links de Navegação */}
        <nav className="flex flex-col space-y-2">
          <a href="#" className="p-3 rounded-lg bg-bic text-white hover:bg-indigo-700 transition">
            Início
          </a>
          <a href="#" className="p-3 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white transition">
            Projetos
          </a>
          <a href="#" className="p-3 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white transition">
            Configurações
          </a>
        </nav>
      </div>

      {/* 2. Parte Inferior: Perfil do Usuário / Botão de Sair */}
      <div className="border-t border-gray-800 pt-4">
        <p className="text-sm text-gray-400">Logado como:</p>
        <p className="text-sm font-medium text-white">seu@email.com</p>
      </div>
    </aside>
  );
}