import React from 'react';

export const Topbar: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-slate-100 px-6 py-3 flex items-center justify-between gap-4">
      {/* Esquerda: Breadcrumb e Título */}
      <div className="flex flex-col min-w-max">
        <span className="text-xs text-slate-400 font-normal">
          Portal do paciente /
        </span>
        <h1 className="text-sm font-bold text-slate-900 leading-tight">
          Agendar consulta
        </h1>
      </div>

      {/* Centro: Campo de Pesquisa */}
      <div className="flex-1 max-w-3xl mx-4">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Buscar consultas, exames..."
            className="w-full bg-[#f0f4f9] text-sm text-slate-800 placeholder-slate-400 pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>
      </div>

      {/* Direita: Notificação e Perfil */}
      <div className="flex items-center gap-3 min-w-max">
        {/* Botão de Notificação */}
        <button 
          aria-label="Notificações"
          className="p-2.5 bg-[#f0f4f9] hover:bg-slate-200/70 text-slate-700 rounded-xl transition-colors"
        >

        </button>

        {/* Menu do Perfil */}
        <div className="flex items-center gap-3 bg-[#f0f4f9] hover:bg-slate-200/70 px-3 py-1.5 rounded-xl cursor-pointer transition-colors">
          <div className="w-8 h-8 rounded-xl bg-blue-700 text-white flex items-center justify-center font-semibold text-xs">
            MM
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-slate-900 leading-tight">
              Milena Mattos
            </span>
            <span className="text-[11px] text-slate-400 font-normal leading-tight">
              Paciente
            </span>
          </div>

        </div>
      </div>
    </header>
  );
};