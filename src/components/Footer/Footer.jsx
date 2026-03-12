import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">
              LP<span className="footer__logo-dot">.</span>
            </span>
            <p className="footer__tagline">
              Jornalismo com propósito, verdade e humanidade.
            </p>
          </div>
          <div className="footer__links">
            <h4 className="footer__links-title">Navegação</h4>
            <ul>
              <li><a href="#hero">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#portfolio">Trabalhos</a></li>
              <li><a href="#experience">Experiência</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
          <div className="footer__links">
            <h4 className="footer__links-title">Redes</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/marciijunior/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/marciijunior" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/marciijunior" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Lucas Picollo. Todos os direitos reservados.</p>
          <p className="footer__credit">Desenvolvido por Marcio Junior</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
