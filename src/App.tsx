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

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = `Contato pelo site Spell Solutions - ${formData.nome.trim()}`
    const body = `Nome: ${formData.nome.trim()}\nE-mail: ${formData.email.trim()}\n\nMensagem:\n${formData.mensagem.trim()}`
    window.location.href = `mailto:spellsolutions.co@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const team: TeamMember[] = [
    {
      id: 'gabriel',
      name: 'Gabriel Freitas',
      role: 'Gerente de Projetos / Scrum Master',
      subRoles: ['Desenvolvedor Back-end'],
      tasks: ['Versionamento', 'Back-end', 'Meios de Comunicação']
    },
    {
      id: 'marcello',
      name: 'Marcello Henrique',
      role: 'Gerente de Projetos / Scrum Master',
      subRoles: ['Desenvolvedor Front-end'],
      tasks: ['Designer gráfico', 'Front-end', 'Gerente de marketing']
    },
    {
      id: 'andressa',
      name: 'Andressa Souza',
      role: 'Líder Técnica / Especialista de Execução',
      subRoles: ['Desenvolvedora Front-end'],
      tasks: ['Designer gráfica', 'Front-end']
    },
    {
      id: 'jordana',
      name: 'Jordana Fernandes',
      role: 'Analista de Qualidade (QA) e Normas',
      subRoles: ['Desenvolvedora Back-end'],
      tasks: ['Versionamento', 'Back-end', 'Meios de Comunicação']
    },
    {
      id: 'lais',
      name: 'Laís Rodrigues',
      role: 'Analista de Documentação e Compliance',
      subRoles: ['Desenvolvedora Front-end'],
      tasks: ['Designer gráfica', 'Front-end']
    }
  ]

  return (
    <div className="landing-page">
      {/* HEADER / NAVIGATION */}
      <header className="navbar">
        <div className="logo-area">
          <span className="logo-mark-frame">
            <img src="/spell-solutions-logo.png" alt="Símbolo da Spell Solutions" width="76" height="50" decoding="async" />
          </span>
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
          <a href="#portfolio">Portfólio</a>
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
      <section id="solucoes" className="services-section">
        <div className="cta-banner">
          <div className="section-header center services-header">
            <span className="subtitle">CONTEÚDO TÉCNICO · CATÁLOGO DE SERVIÇOS</span>
            <h2>Serviços oferecidos</h2>
          </div>
          <div className="grid-cards">
            <article className="info-card">
              <div className="card-icon" aria-hidden="true">01</div>
              <h3>Desenvolvimento e análise de websites</h3>
              <p>
                Desenvolvemos, corrigimos e analisamos websites para empresas de diversos segmentos.
                Criamos sites modernos, funcionais e alinhados à identidade de cada empresa, além de
                corrigir falhas e analisar o desempenho de páginas já existentes. Nosso objetivo é
                garantir uma presença online eficiente, rápida e que gere resultados reais para o negócio.
              </p>
            </article>
            <article className="info-card">
              <div className="card-icon" aria-hidden="true">02</div>
              <h3>Marketing digital e design para redes sociais</h3>
              <p>
                Atuamos com marketing digital e design para redes sociais. Desenvolvemos estratégias
                de marketing e criamos artes e conteúdos visuais que fortalecem a imagem da marca.
                Com planejamento e identidade visual consistente, ajudamos a ampliar o alcance, atrair
                o público certo e aumentar o engajamento nas redes.
              </p>
            </article>
            <article className="info-card">
              <div className="card-icon" aria-hidden="true">03</div>
              <h3>Gerenciamento de projetos</h3>
              <p>
                Realizamos o gerenciamento de projetos para empresas em crescimento ou já consolidadas
                no mercado. Acompanhamos projetos organizando prazos, equipes e entregas. Com uma
                gestão estruturada, buscamos garantir eficiência, qualidade e o cumprimento dos objetivos estabelecidos.
              </p>
            </article>
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

      <section id="portfolio" className="portfolio-section">
        <div className="cta-banner portfolio-banner">
          <div className="section-header center services-header">
            <span className="subtitle">CONTEÚDO TÉCNICO · PORTFÓLIO</span>
            <h2>Nossos projetos</h2>
          </div>
          <div className="portfolio-grid">
            <article className="portfolio-card">
              <span className="portfolio-number">01</span>
              <img
                className="portfolio-image"
                src="/GrãoEspecial.png"
                alt="Painel do sistema GrãoEspecial com indicadores de estoque, metas e lotes de café"
                width="1600"
                height="783"
                loading="lazy"
                decoding="async"
              />
              <h3>GrãoEspecial</h3>
              <p>Sistema de operações e torrefação com indicadores de estoque, metas por variedade e acompanhamento de lotes.</p>
            </article>
            <article className="portfolio-card">
              <span className="portfolio-number">02</span>
              <img
                className="portfolio-image"
                src="/Studio%20Pilates.png"
                alt="Painel do sistema de gestão Studio Pilates"
                loading="lazy"
                decoding="async"
              />
              <h3>Studio Pilates</h3>
              <p>Sistema de gestão para estúdio de pilates, com controle de tarefas, equipe, presença em aulas e planos.</p>
            </article>
            <article className="portfolio-card">
              <span className="portfolio-number">03</span>
              <img
                className="portfolio-image"
                src="/Zenvet.png"
                alt="Painel do sistema veterinário Zenvet"
                loading="lazy"
                decoding="async"
              />
              <h3>Zenvet</h3>
              <p>Sistema de gestão veterinária com agendamentos, controle de estoque, vacinação e histórico de receitas.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="contact-section">
        <div className="contact-container">
          <span className="subtitle">FALE COM A NOSSA EQUIPE</span>
          <h2>Vamos transformar sua próxima ideia?</h2>
          <p>Ao enviar, seu aplicativo de e-mail será aberto com os dados preenchidos para spellsolutions.co@gmail.com. Revise e confirme o envio por lá.</p>
          <a className="repo-link" href="mailto:spellsolutions.co@gmail.com">
            spellsolutions.co@gmail.com
          </a>
          <a
            className="repo-link"
            href="https://github.com/spell-solutions/Landing-Page"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar repositório da Spell Solutions <span aria-hidden="true">↗</span>
          </a>
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