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
    tasks: ['Versionamento', 'Back-end', 'Meios de Comunicação', 'Definição de Papéis', 'Missão, Visão e Valores', 'Carta do Projeto'],
  },
  {
    id: 'andressa',
    name: 'Andressa',
    role: 'Líder Técnica / Especialista de Execução',
    subRoles: ['Desenvolvedora Front-end'],
    tasks: ['Identidade Visual (Fontes, Cores, Logo)', 'Design do Site', 'Front-end'],
  },
  {
    id: 'jordana',
    name: 'Jordana',
    role: 'Analista de Qualidade (QA) e Normas',
    subRoles: ['Desenvolvedora Back-end'],
    tasks: ['Versionamento', 'Back-end', 'Meios de Comunicação', 'Definição de Papéis', 'Missão, Visão e Valores'],
  },
  {
    id: 'lais',
    name: 'Laís',
    role: 'Analista de Documentação e Compliance',
    subRoles: ['Desenvolvedora Front-end'],
    tasks: ['Identidade Visual (Fontes, Cores, Logo)', 'Design do Site', 'Front-end', 'Carta do Projeto'],
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
        <span class="logo-symbol" aria-hidden="true">✦</span>
        <div class="logo-text"><span class="brand-name">SPELL</span><span class="brand-sub">SOLUTIONS</span></div>
      </div>
      <nav class="nav-links" aria-label="Navegação principal">
        <a href="#inicio">Início</a><a href="#sobre">Sobre</a><a href="#valores">M.V.M.</a>
        <a href="#solucoes">Soluções</a><a href="#equipe">Equipe</a><a href="#contato" class="btn-nav">Fale conosco</a>
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

      <section id="solucoes" class="cta-banner-section">
        <div class="cta-banner">
          <div class="cta-text-content">
            <span class="cta-tag">NOSSAS SOLUÇÕES</span>
            <h2>Soluções digitais para o seu próximo grande passo.</h2>
            <p>Oferecemos uma experiência digital simples, acessível e profissional focada nos objetivos do seu negócio:</p>
            <ul class="solutions-list"><li>✓ Facilitar compras e vendas online</li><li>✓ Organizar informações de forma clara</li><li>✓ Melhorar a comunicação com seus clientes</li><li>✓ Processos rápidos e eficientes</li></ul>
            <a href="#contato" class="btn-banner">Solicitar orçamento ➔</a>
          </div>
        </div>
      </section>

      <section id="equipe" class="team-section">
        <div class="section-header center"><span class="subtitle">NOSSO TIME</span><h2>Conheça os profissionais por trás da Spell Solutions</h2></div>
        <div class="team-grid">${teamCards}</div>
      </section>

      <section id="contato" class="contact-section">
        <div class="contact-container">
          <span class="subtitle">FALE COM A NOSSA EQUIPE</span><h2>Vamos transformar sua próxima ideia?</h2><p>Conte-nos o que você precisa e nossa equipe retornará em breve.</p>
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
    const form = event.target
    const success = document.createElement('div')
    success.className = 'form-success'
    success.setAttribute('role', 'status')

    const icon = document.createElement('span')
    icon.setAttribute('aria-hidden', 'true')
    icon.textContent = '✓'

    const message = document.createElement('p')
    const title = document.createElement('strong')
    title.textContent = 'Mensagem enviada! '
    message.append(title, document.createTextNode(`Obrigado, ${name}. Em breve, nossa equipe responderá.`))
    success.append(icon, message)
    form.replaceWith(success)
  })
}
