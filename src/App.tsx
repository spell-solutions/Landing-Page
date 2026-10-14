import React, { useState } from 'react'
import './App.css'

interface TeamMember {
  id: string
  name: string
  role: string
  subRoles: string[]
  tasks: string[]
}

function App() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' })
  const [expandedMember, setExpandedMember] = useState<string | null>(null)
  const [submittedName, setSubmittedName] = useState('')

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmittedName(formData.nome.trim())
    setFormData({ nome: '', email: '', mensagem: '' })
  }

  const team: TeamMember[] = [
    {
      id: 'gabriel',
      name: 'Gabriel',
      role: 'Gerente de Projetos / Scrum Master',
      subRoles: ['Desenvolvedor Back-end'],
      tasks: ['Versionamento', 'Back-end', 'Meios de Comunicação', 'Definição de Papéis', 'Missão, Visão e Valores', 'Carta do Projeto']
    },
    {
      id: 'andressa',
      name: 'Andressa',
      role: 'Líder Técnica / Especialista de Execução',
      subRoles: ['Desenvolvedora Front-end'],
      tasks: ['Identidade Visual (Fontes, Cores, Logo)', 'Design do Site', 'Front-end']
    },
    {
      id: 'jordana',
      name: 'Jordana',
      role: 'Analista de Qualidade (QA) e Normas',
      subRoles: ['Desenvolvedora Back-end'],
      tasks: ['Versionamento', 'Back-end', 'Meios de Comunicação', 'Definição de Papéis', 'Missão, Visão e Valores']
    },
    {
      id: 'lais',
      name: 'Laís',
      role: 'Analista de Documentação e Compliance',
      subRoles: ['Desenvolvedora Front-end'],
      tasks: ['Identidade Visual (Fontes, Cores, Logo)', 'Design do Site', 'Front-end', 'Carta do Projeto']
    }
  ]

  return (
    <div className="landing-page">
      {/* HEADER / NAVIGATION */}
      <header className="navbar">
        <div className="logo-area">
          <span className="logo-symbol animate-pulse">✦</span>
          <div className="logo-text">
            <span className="brand-name">SPELL</span>
            <span className="brand-sub">SOLUTIONS</span>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#valores">M.V.V.</a>
          <a href="#solucoes">Soluções</a>
          <a href="#equipe">Equipe</a>
          <a href="#contato" className="btn-nav">Fale conosco</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="hero-section">
        <div className="hero-content">
          <p className="hero-tagline">SOLUÇÕES DIGITAIS & TECNOLOGIA</p>
          <h1>Transformamos ideias em experiências digitais que encantam.</h1>
          <p className="hero-description">
            Criamos sites para empresas com o objetivo de facilitar compras, organizar informações, melhorar a comunicação com os clientes e tornar os processos mais rápidos e eficientes.
          </p>
          <div className="hero-actions">
            <a href="#solucoes" className="btn-primary">Conheça nossas soluções ➔</a>
            <a href="#sobre" className="btn-secondary">Nossa essência</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="abstract-card floating-card">
            <span className="sparkle-icon">✦</span>
            <h3>Grandes ideias também precisam de um pouco de magia.</h3>
            <p className="card-subtext">Conectando inovação, estratégia e funcionalidade.</p>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="about-section">
        <div className="section-header center">
          <span className="subtitle">NOSSA ESSÊNCIA</span>
          <h2>A Magia por trás do nome Spell Solutions</h2>
        </div>
        <div className="about-cards-grid">
          <div className="about-card">
            <div className="about-card-icon">✦</div>
            <h3>O Conceito "Spell"</h3>
            <p>
              "Spell" significa feitiço ou encantamento, remetendo à ideia de transformar algo simples em algo extraordinário.
            </p>
          </div>
          <div className="about-card">
            <div className="about-card-icon">&lt;/&gt;</div>
            <h3>Combinando Elementos</h3>
            <p>
              Assim como um feitiço combina diferentes elementos para alcançar um resultado, nós combinamos conhecimento e inovação para criar nossas soluções.
            </p>
          </div>
          <div className="about-card">
            <div className="about-card-icon">✉</div>
            <h3>Proposta de Valor</h3>
            <p>
              Simboliza nossa proposta de transformar desafios em projetos digitais criativos, funcionais, acessíveis e únicos.
            </p>
          </div>
        </div>
      </section>

      {/* MISSÃO, VISÃO E VALORES */}
      <section id="valores" className="metrics-section">
        <div className="section-header">
          <span className="subtitle">QUEM SOMOS</span>
          <h2>Mais que tecnologia, somos pessoas que acreditam no poder das boas ideias.</h2>
        </div>
        <div className="grid-cards">
          <div className="info-card">
            <div className="card-icon">✦</div>
            <h3>Missão</h3>
            <p>
              Transformar ideias em experiências digitais que encantam. Criamos sites que unem beleza, estratégia e funcionalidade para dar vida ao negócio de nossos clientes.
            </p>
          </div>
          <div className="info-card">
            <div className="card-icon">&lt;/&gt;</div>
            <h3>Visão</h3>
            <p>
              Ser uma referência em soluções digitais criativas e marcantes. Queremos transformar a presença online de empresas diversas e deixar um toque de magia em cada projeto.
            </p>
          </div>
          <div className="info-card">
            <div className="card-icon">✉</div>
            <h3>Valores</h3>
            <p>
              <strong>Criatividade:</strong> Para transformar o comum em extraordinário.<br />
              <strong>Excelência:</strong> Para cuidar de cada detalhe do trabalho.<br />
              <strong>Autenticidade:</strong> Para criar soluções únicas.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section id="solucoes" className="cta-banner-section">
        <div className="cta-banner">
          <div className="cta-text-content">
            <span className="cta-tag">NOSSAS SOLUÇÕES</span>
            <h2>Soluções digitais para o seu próximo grande passo.</h2>
            <p>
              Oferecemos uma experiência digital simples, acessível e profissional focada nos objetivos do seu negócio:
            </p>
            <ul className="solutions-list">
              <li>✓ Facilitar compras e vendas online</li>
              <li>✓ Organizar informações de forma clara</li>
              <li>✓ Melhorar a comunicação com seus clientes</li>
              <li>✓ Processos rápidos e eficientes</li>
            </ul>
            <a href="#contato" className="btn-banner">Solicitar orçamento ➔</a>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="team-section">
        <div className="section-header center">
          <span className="subtitle">NOSSO TIME</span>
          <h2>Conheça os profissionais por trás da Spell Solutions</h2>
        </div>
        <div className="team-grid">
          {team.map((member) => {
            const isExpanded = expandedMember === member.id

            return (
              <article key={member.id} className={`team-card${isExpanded ? ' is-expanded' : ''}`}>
                <div className="team-card-summary">
                  <div className="team-avatar" aria-hidden="true">
                    {member.name.charAt(0)}
                  </div>
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <button
                    type="button"
                    className="team-toggle"
                    aria-expanded={isExpanded}
                    aria-controls={`member-details-${member.id}`}
                    onClick={() => setExpandedMember(isExpanded ? null : member.id)}
                  >
                    <span>{isExpanded ? 'Fechar detalhes' : 'Ler detalhes'}</span>
                    <span className="team-toggle-icon" aria-hidden="true">{isExpanded ? '−' : '+'}</span>
                  </button>
                </div>
                <div
                  id={`member-details-${member.id}`}
                  className="team-details"
                  aria-hidden={!isExpanded}
                >
                  <div className="subroles">
                    {member.subRoles.map((subRole) => (
                      <span className="subrole-tag" key={subRole}>{subRole}</span>
                    ))}
                  </div>
                  <div className="team-tasks">
                    <p className="team-tasks-title">Contribuições</p>
                    <ul>
                      {member.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="contact-section">
        <div className="contact-container">
          <span className="subtitle">FALE COM A NOSSA EQUIPE</span>
          <h2>Vamos transformar sua próxima ideia?</h2>
          <p>Conte-nos o que você precisa e nossa equipe retornará em breve.</p>
          {submittedName ? (
            <div className="form-success" role="status">
              <span aria-hidden="true">✓</span>
              <p><strong>Mensagem enviada!</strong> Obrigado, {submittedName}. Em breve, nossa equipe responderá.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleContactSubmit}>
            <label>
              Nome
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={(event) => setFormData((current) => ({ ...current, nome: event.target.value }))}
                placeholder="Seu nome"
                required
              />
            </label>
            <label>
              E-mail
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                placeholder="seu@email.com"
                required
              />
            </label>
            <label>
              Mensagem
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={(event) => setFormData((current) => ({ ...current, mensagem: event.target.value }))}
                placeholder="Descreva seu projeto"
                rows={5}
                required
              />
            </label>
            <button type="submit" className="btn-primary">Enviar mensagem</button>
          </form>
          )}
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="main-footer">
        <div className="footer-top">
          <div className="logo-area">
            <span className="logo-symbol animate-pulse">✦</span>
            <div className="logo-text">
              <span className="brand-name white-text">SPELL</span>
              <span className="brand-sub">SOLUTIONS</span>
            </div>
          </div>
          <p>Solucões digitais com magia, estratégia e excelência.</p>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Spell Solutions</span>
        </div>
      </footer>
    </div>
  )
}

export default App