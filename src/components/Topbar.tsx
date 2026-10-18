export function Topbar() {
  return (
    <header className="w-full bg-white px-6 py-3 flex items-center justify-between border-b border-slate-100 gap-4">
      
      {/* 1. LADO ESQUERDO: Breadcrumbs */}
      <div className="flex flex-col text-sm">
        <span className="text-slate-400 text-xs font-medium">
          Portal do paciente /
        </span>
        <span className="text-slate-800 font-bold">
          Agendar consulta
        </span>
      </div>

      {/* 2. CENTRO: Barra de Pesquisa */}
      <div className="flex-1 max-w-2xl mx-4">
        <div className="relative flex items-center">
          <span className="absolute left-3 text-slate-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Buscar consultas, exames..."
            className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white text-slate-700 text-sm pl-9 pr-4 py-2.5 rounded-xl border border-transparent focus:border-blue-300 focus:outline-none transition"
          />
        </div>
      </div>

      {/* 3. LADO DIREITO: Notificações e Perfil */}
      <div className="flex items-center gap-3">
        
        {/* Botão de Notificação */}
        <button className="p-2.5 bg-slate-50 hover:bg-slate-100 rounded-xl text-slate-600 border border-slate-100 transition">
          🔔
        </button>

        {/* Cartão do Utilizador */}
        <div className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 border border-slate-100 px-3 py-1.5 rounded-xl cursor-pointer transition">
          {/* Avatar com Iniciais */}
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
            MM
          </div>
          
          {/* Nome e Tipo de Conta */}
          <div className="flex flex-col text-left">
            <span className="text-sm font-semibold text-slate-800 leading-tight">
              Milena Mattos
            </span>
            <span className="text-xs text-slate-400">
              Paciente
            </span>
          </div>

          {/* Seta Dropdown */}
          <span className="text-xs text-slate-400 ml-1">
            ▼
          </span>
        </div>

      </div>

    </header>
  );
}

export default Topbar;