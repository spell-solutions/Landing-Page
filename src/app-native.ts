import './App.css'

interface TeamMember {
  id: string
  name: string
  role: string
  subRoles: string[]
  tasks: string[]
}

const team: TeamMember[] = [
  {
    id: 'gabriel',
    name: 'Gabriel',
    role: 'Gerente de Projetos / Scrum Master',
    subRoles: ['Desenvolvedor Back-end'],
    tasks: ['Versionamento', 'Back-end', 'Meios de Comunicação'],
  },
  {
    id: 'marcello',
    name: 'Marcello',
    role: 'Gerente de Projetos / Scrum Master',
    subRoles: ['Desenvolvedor Front-end'],
    tasks: ['Designer gráfico', 'Front-end', 'Gerente de marketing'],
  },
  {
    id: 'andressa',
    name: 'Andressa',
    role: 'Líder Técnica / Especialista de Execução',
    subRoles: ['Desenvolvedora Front-end'],
    tasks: ['Designer gráfica', 'Front-end'],
  },
  {
    id: 'jordana',
    name: 'Jordana',
    role: 'Analista de Qualidade (QA) e Normas',
    subRoles: ['Desenvolvedora Back-end'],
    tasks: ['Versionamento', 'Back-end', 'Meios de Comunicação'],
  },
  {
    id: 'lais',
    name: 'Laís',
    role: 'Analista de Documentação e Compliance',
    subRoles: ['Desenvolvedora Front-end'],
    tasks: ['Designer gráfica', 'Front-end'],
  },
]

const teamCards = team.map((member) => `
  <article class="team-card" data-member-id="${member.id}">
    <div class="team-card-summary">
      <div class="team-avatar" aria-hidden="true">${member.name.charAt(0)}</div>
      <h3>${member.name}</h3>
      <span class="team-role">${member.role}</span>
      <button
        type="button"
        class="team-toggle"
        aria-expanded="false"
        aria-controls="member-details-${member.id}"
        data-team-toggle="${member.id}"
      >
        <span>Ler detalhes</span>
        <span class="team-toggle-icon" aria-hidden="true">+</span>
      </button>
    </div>
    <div id="member-details-${member.id}" class="team-details" aria-hidden="true">
      <div class="subroles">${member.subRoles.map((role) => `<span class="subrole-tag">${role}</span>`).join('')}</div>
      <div class="team-tasks">
        <p class="team-tasks-title">Contribuições</p>
        <ul>${member.tasks.map((task) => `<li>${task}</li>`).join('')}</ul>
      </div>
    </div>
  </article>
`).join('')

const markup = `
  <div class="landing-page">
    <header class="navbar">
      <div class="logo-area">
        <span class="logo-mark-frame"><img src="/spell-solutions-logo.png" alt="Símbolo da Spell Solutions"></span>
        <div class="logo-text"><span class="brand-name">SPELL</span><span class="brand-sub">SOLUTIONS</span></div>
      </div>
      <nav class="nav-links" aria-label="Navegação principal">
        <a href="#inicio">Início</a><a href="#sobre">Sobre</a><a href="#valores">Quem somos</a>
        <a href="#solucoes">Soluções</a><a href="#equipe">Equipe</a><a href="#portfolio">Portfólio</a><a href="#contato" class="btn-nav">Fale conosco</a>
      </nav>
    </header>

    <main>
      <section id="inicio" class="hero-section">
        <div class="hero-content">
          <p class="hero-tagline">SOLUÇÕES DIGITAIS &amp; TECNOLOGIA</p>
          <h1>Transformamos ideias em experiências digitais que encantam.</h1>
          <p class="hero-description">Criamos sites para empresas com o objetivo de facilitar compras, organizar informações, melhorar a comunicação com os clientes e tornar os processos mais rápidos e eficientes.</p>
          <div class="hero-actions">
            <a href="#solucoes" class="btn-primary">Conheça nossas soluções ➔</a>
            <a href="#sobre" class="btn-secondary">Nossa essência</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="abstract-card">
            <span class="sparkle-icon" aria-hidden="true">✦</span>
            <h3>Grandes ideias também precisam de um pouco de magia.</h3>
            <p class="card-subtext">Conectando inovação, estratégia e funcionalidade.</p>
          </div>
        </div>
      </section>

      <section id="sobre" class="about-section">
        <div class="section-header center"><span class="subtitle">NOSSA ESSÊNCIA</span><h2>A Magia por trás do nome Spell Solutions</h2></div>
        <div class="about-cards-grid">
          <article class="about-card"><div class="about-card-icon" aria-hidden="true">✦</div><h3>O Conceito "Spell"</h3><p>"Spell" significa feitiço ou encantamento, remetendo à ideia de transformar algo simples em algo extraordinário.</p></article>
          <article class="about-card"><div class="about-card-icon" aria-hidden="true">&lt;/&gt;</div><h3>Combinando Elementos</h3><p>Assim como um feitiço combina diferentes elementos para alcançar um resultado, nós combinamos conhecimento e inovação para criar nossas soluções.</p></article>
          <article class="about-card"><div class="about-card-icon" aria-hidden="true">✉</div><h3>Proposta de Valor</h3><p>Simboliza nossa proposta de transformar desafios em projetos digitais criativos, funcionais, acessíveis e únicos.</p></article>
        </div>
      </section>

      <section id="valores" class="metrics-section">
        <div class="section-header"><span class="subtitle">QUEM SOMOS</span><h2>Mais que tecnologia, somos pessoas que acreditam no poder das boas ideias.</h2></div>
        <div class="grid-cards">
          <article class="info-card"><div class="card-icon" aria-hidden="true">✦</div><h3>Missão</h3><p>Transformar ideias em experiências digitais que encantam. Criamos sites que unem beleza, estratégia e funcionalidade para dar vida ao negócio de nossos clientes.</p></article>
          <article class="info-card"><div class="card-icon" aria-hidden="true">&lt;/&gt;</div><h3>Visão</h3><p>Ser uma referência em soluções digitais criativas e marcantes. Queremos transformar a presença online de empresas diversas e deixar um toque de magia em cada projeto.</p></article>
          <article class="info-card"><div class="card-icon" aria-hidden="true">✉</div><h3>Valores</h3><p><strong>Criatividade:</strong> Para transformar o comum em extraordinário.<br><strong>Excelência:</strong> Para cuidar de cada detalhe do trabalho.<br><strong>Autenticidade:</strong> Para criar soluções únicas.</p></article>
        </div>
      </section>

      <section id="solucoes" class="services-section">
        <div class="cta-banner">
          <div class="section-header center services-header">
            <span class="subtitle">CONTEÚDO TÉCNICO · CATÁLOGO DE SERVIÇOS</span>
            <h2>Serviços oferecidos</h2>
          </div>
          <div class="grid-cards">
            <article class="info-card">
              <div class="card-icon" aria-hidden="true">01</div>
              <h3>Desenvolvimento e análise de websites</h3>
              <p>Desenvolvemos, corrigimos e analisamos websites para empresas de diversos segmentos. Criamos sites modernos, funcionais e alinhados à identidade de cada empresa, além de corrigir falhas e analisar o desempenho de páginas já existentes. Nosso objetivo é garantir uma presença online eficiente, rápida e que gere resultados reais para o negócio.</p>
            </article>
            <article class="info-card">
              <div class="card-icon" aria-hidden="true">02</div>
              <h3>Marketing digital e design para redes sociais</h3>
              <p>Atuamos com marketing digital e design para redes sociais. Desenvolvemos estratégias de marketing e criamos artes e conteúdos visuais que fortalecem a imagem da marca. Com planejamento e identidade visual consistente, ajudamos a ampliar o alcance, atrair o público certo e aumentar o engajamento nas redes.</p>
            </article>
            <article class="info-card">
              <div class="card-icon" aria-hidden="true">03</div>
              <h3>Gerenciamento de projetos</h3>
              <p>Realizamos o gerenciamento de projetos para empresas em crescimento ou já consolidadas no mercado. Acompanhamos projetos organizando prazos, equipes e entregas. Com uma gestão estruturada, buscamos garantir eficiência, qualidade e o cumprimento dos objetivos estabelecidos.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="equipe" class="team-section">
        <div class="section-header center"><span class="subtitle">NOSSO TIME</span><h2>Conheça os profissionais por trás da Spell Solutions</h2></div>
        <div class="team-grid">${teamCards}</div>
      </section>

      <section id="portfolio" class="portfolio-section">
        <div class="cta-banner portfolio-banner">
          <div class="section-header center services-header">
            <span class="subtitle">CONTEÚDO TÉCNICO · PORTFÓLIO</span>
            <h2>Nossos projetos</h2>
          </div>
          <div class="portfolio-grid">
            <article class="portfolio-card">
              <span class="portfolio-number">01</span>
              <h3>Projeto em breve</h3>
              <p>Este espaço está reservado para uma próxima entrega da Spell Solutions.</p>
            </article>
            <article class="portfolio-card">
              <span class="portfolio-number">02</span>
              <h3>Projeto em breve</h3>
              <p>Este espaço está reservado para uma próxima entrega da Spell Solutions.</p>
            </article>
            <article class="portfolio-card">
              <span class="portfolio-number">03</span>
              <h3>Projeto em breve</h3>
              <p>Este espaço está reservado para uma próxima entrega da Spell Solutions.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="contato" class="contact-section">
        <div class="contact-container">
          <span class="subtitle">FALE COM A NOSSA EQUIPE</span><h2>Vamos transformar sua próxima ideia?</h2><p>Ao enviar, seu aplicativo de e-mail será aberto com os dados preenchidos para spellsolutions.co@gmail.com. Revise e confirme o envio por lá.</p>
          <a class="repo-link" href="mailto:spellsolutions.co@gmail.com">spellsolutions.co@gmail.com</a>
          <a class="repo-link" href="https://github.com/spell-solutions/Landing-Page" target="_blank" rel="noopener noreferrer">
            Visitar repositório da Spell Solutions <span aria-hidden="true">↗</span>
          </a>
          <form class="contact-form" id="contact-form">
            <label>Nome<input type="text" name="nome" placeholder="Seu nome" required></label>
            <label>E-mail<input type="email" name="email" placeholder="seu@email.com" required></label>
            <label>Mensagem<textarea name="mensagem" placeholder="Descreva seu projeto" rows="5" required></textarea></label>
            <button type="submit" class="btn-primary">Enviar mensagem</button>
          </form>
        </div>
      </section>
    </main>

    <footer class="main-footer">
      <div class="footer-top">
        <div class="logo-area"><span class="logo-symbol" aria-hidden="true">✦</span><div class="logo-text"><span class="brand-name white-text">SPELL</span><span class="brand-sub">SOLUTIONS</span></div></div>
        <p>Solucões digitais com magia, estratégia e excelência.</p>
      </div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} Spell Solutions</span></div>
    </footer>
  </div>
`

export function initApp(root: HTMLElement): void {
  root.innerHTML = markup

  root.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLElement>('[data-team-toggle]')
    if (!button) return

    const card = button.closest<HTMLElement>('[data-member-id]')
    const details = card?.querySelector<HTMLElement>('.team-details')
    const toggleIcon = button.querySelector<HTMLElement>('.team-toggle-icon')
    const isExpanded = button.getAttribute('aria-expanded') === 'true'

    if (!card || !details || !toggleIcon) return

    button.setAttribute('aria-expanded', String(!isExpanded))
    details.setAttribute('aria-hidden', String(isExpanded))
    card.classList.toggle('is-expanded', !isExpanded)
    button.querySelector('span')!.textContent = isExpanded ? 'Ler detalhes' : 'Fechar detalhes'
    toggleIcon.textContent = isExpanded ? '+' : '−'
  })

  root.addEventListener('submit', (event) => {
    if (!(event.target instanceof HTMLFormElement)) return
    if (event.target.id !== 'contact-form') return

    event.preventDefault()
    const formData = new FormData(event.target)
    const name = String(formData.get('nome') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('mensagem') ?? '').trim()
    const subject = `Contato pelo site Spell Solutions - ${name}`
    const body = `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`
    window.location.href = `mailto:spellsolutions.co@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  })
}
