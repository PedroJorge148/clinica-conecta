import React, { useState } from 'react';
import {
  Link as LinkIcon,
  Home,
  Calendar,
  FlaskConical,
  Send,
  FileText,
  CalendarCheck,
  Users,
  User,
  Settings,
  LogOut,
  Search,
  Bell,
  ChevronDown,
  Check
} 

const especialidades = [
  'Cardiologia', 'Dermatologia', 'Ortopedia', 'Neurologia',
  'Ginecologia', 'Pediatria', 'Psiquiatria', 'Endocrinologia',
  'Ginecologia', 'Pediatria', 'Psiquiatria', 'Endocrinologia',
  'Ginecologia', 'Pediatria', 'Psiquiatria', 'Endocrinologia'
];

export default function AgendarConsulta1() {
  const [selecionada, setSelecionada] = useState<string>('Cardiologia');

  return (
    <div className="d-flex vh-100 overflow-hidden" style={{ backgroundColor: '#f1f4f9' }}>
      {/* Sidebar */}
      <aside 
        className="d-flex flex-column justify-content-between p-3 text-white flex-shrink-0"
        style={{ width: '260px', backgroundColor: '#0a1128' }}
      >
        <div>
          {/* Logo */}
          <div className="d-flex align-items-center gap-2 mb-4 px-2 pt-2">
            <div className="bg-primary p-2 rounded-3 text-white d-flex align-items-center justify-content-center">
              <LinkIcon size={20} />
            </div>
            <span className="fw-bold fs-5 tracking-wider text-white">CONECTA</span>
          </div>

          <div className="text-uppercase text-secondary fw-semibold mb-2 px-2" style={{ fontSize: '11px', letterSpacing: '1px' }}>
            Menu
          </div>

          {/* Items do Menu */}
          <nav className="nav nav-pills flex-column gap-1">
            <a href="#" className="nav-link text-white-50 d-flex align-items-center gap-3 px-3 py-2 rounded-3">
              <Home size={18} />
              <span>Início</span>
            </a>
            <a href="#" className="nav-link active bg-primary text-white d-flex align-items-center gap-3 px-3 py-2 rounded-3">
              <Calendar size={18} />
              <span>Agendar consulta</span>
            </a>
            <a href="#" className="nav-link text-white-50 d-flex align-items-center gap-3 px-3 py-2 rounded-3">
              <FlaskConical size={18} />
              <span>Agendar exames</span>
            </a>
            <a href="#" className="nav-link text-white-50 d-flex align-items-center gap-3 px-3 py-2 rounded-3">
              <Send size={18} />
              <span>Meus encaminhamentos</span>
            </a>
            <a href="#" className="nav-link text-white-50 d-flex align-items-center gap-3 px-3 py-2 rounded-3">
              <FileText size={18} />
              <span>Resultados de exames</span>
            </a>
            <a href="#" className="nav-link text-white-50 d-flex align-items-center gap-3 px-3 py-2 rounded-3">
              <CalendarCheck size={18} />
              <span>Meus agendamentos</span>
            </a>
            <a href="#" className="nav-link text-white-50 d-flex align-items-center gap-3 px-3 py-2 rounded-3">
              <Users size={18} />
              <span>Fila online</span>
            </a>
            <a href="#" className="nav-link text-white-50 d-flex align-items-center gap-3 px-3 py-2 rounded-3">
              <User size={18} />
              <span>Meu perfil</span>
            </a>
            <a href="#" className="nav-link text-white-50 d-flex align-items-center gap-3 px-3 py-2 rounded-3">
              <Settings size={18} />
              <span>Configurações</span>
            </a>
          </nav>
        </div>

        {/* Botão Sair */}
        <div className="pb-2">
          <button className="btn btn-link text-danger text-decoration-none d-flex align-items-center gap-3 px-3 py-2 w-100 font-medium">
            <LogOut size={18} />
            <span>Sair</span>
          </button>
        </div>
      </aside>

      {/* Área Principal */}
      <div className="flex-grow-1 d-flex flex-column overflow-auto">
        {/* Header */}
        <header className="px-4 py-3 d-flex align-items-center justify-content-between flex-shrink-0" style={{ backgroundColor: '#f1f4f9' }}>
          <div className="small text-secondary">
            <span>Portal do paciente / </span>
            <strong className="text-dark">Agendar consulta</strong>
          </div>

          <div className="d-flex align-items-center gap-3">
            {/* Campo de Pesquisa */}
            <div className="position-relative" style={{ width: '320px' }}>
              <Search size={16} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
              <input
                type="text"
                placeholder="Buscar consultas, exames..."
                className="form-control form-control-sm border-0 ps-5 rounded-3"
                style={{ backgroundColor: '#e8edf5', fontSize: '13px' }}
              />
            </div>

            {/* Notificação */}
            <button className="btn border-0 p-2 rounded-3" style={{ backgroundColor: '#e8edf5' }}>
              <Bell size={18} className="text-secondary" />
            </button>

            {/* Perfil do Utilizador */}
            <div className="d-flex align-items-center gap-2 px-3 py-1 rounded-3" style={{ backgroundColor: '#e8edf5', cursor: 'pointer' }}>
              <div 
                className="rounded-2 bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
                style={{ width: '28px', height: '28px', fontSize: '11px' }}
              >
                MM
              </div>
              <div className="d-flex flex-column text-start leading-tight">
                <span className="fw-semibold text-dark" style={{ fontSize: '12px' }}>Milena Mattos</span>
                <span className="text-secondary" style={{ fontSize: '10px' }}>Paciente</span>
              </div>
              <ChevronDown size={14} className="text-secondary ms-1" />
            </div>
          </div>
        </header>

        {/* Conteúdo Principal */}
        <main className="px-4 pb-4 flex-grow-1 d-flex flex-column">
          {/* Título */}
          <div className="mb-4">
            <h1 className="h4 fw-bold mb-1" style={{ color: '#0a1128' }}>Agendar consulta</h1>
            <p className="text-secondary small mb-0">
              Escolha especialidade, médico e horário disponível.
            </p>
          </div>

          {/* Stepper (Etapas) */}
          <div className="bg-white rounded-3 p-2 mb-4 shadow-sm border d-flex align-items-center small">
            <div className="flex-fill rounded-3 py-2 px-3 d-flex align-items-center gap-2 fw-semibold text-primary" style={{ backgroundColor: '#f1f4f9' }}>
              <span className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '20px', height: '20px' }}>
                <Check size={12} strokeWidth={3} />
              </span>
              <span>Especialidade</span>
            </div>

            <div className="flex-fill py-2 px-3 d-flex align-items-center justify-content-center gap-2 fw-semibold text-secondary">
              <span className="rounded-circle bg-light text-secondary d-flex align-items-center justify-content-center" style={{ width: '20px', height: '20px', fontSize: '11px' }}>
                2
              </span>
              <span>Médico</span>
            </div>

            <div className="flex-fill py-2 px-3 d-flex align-items-center justify-content-center gap-2 fw-semibold text-secondary">
              <span className="rounded-circle bg-light text-secondary d-flex align-items-center justify-content-center" style={{ width: '20px', height: '20px', fontSize: '11px' }}>
                3
              </span>
              <span>Horário</span>
            </div>

            <div className="flex-fill py-2 px-3 d-flex align-items-center justify-content-center gap-2 fw-semibold text-secondary">
              <span className="rounded-circle bg-light text-secondary d-flex align-items-center justify-content-center" style={{ width: '20px', height: '20px', fontSize: '11px' }}>
                4
              </span>
              <span>Confirmação</span>
            </div>
          </div>

          {/* Painel das Especialidades */}
          <div className="bg-white rounded-4 p-4 shadow-sm border flex-grow-1 d-flex flex-column justify-content-between">
            <div>
              <h2 className="h6 fw-bold mb-4" style={{ color: '#0a1128' }}>
                Selecione a Especialidade
              </h2>

              {/* Grid usando as classes de Row/Col do Bootstrap */}
              <div className="row g-3">
                {especialidades.map((esp, idx) => {
                  const isSelected = selecionada === esp && idx === 0;
                  return (
                    <div key={idx} className="col-12 col-sm-6 col-md-3">
                      <button
                        type="button"
                        onClick={() => setSelecionada(esp)}
                        className="btn w-100 py-2 border-0 rounded-3 text-center transition-all"
                        style={{
                          backgroundColor: isSelected ? '#7dd3fc' : '#eef4fb',
                          color: isSelected ? '#0f172a' : '#475569',
                          fontWeight: isSelected ? '600' : '500',
                          fontSize: '13px'
                        }}
                      >
                        {esp}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Botão Próximo */}
            <div className="mt-4">
              <button
                type="button"
                className="btn border-0 text-dark fw-semibold px-4 py-2 rounded-3 shadow-sm"
                style={{ backgroundColor: '#7dd3fc', fontSize: '13px' }}
              >
                Próximo
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function agendarConsulta1() {
    return(
        <div></div>
    )
}