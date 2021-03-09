import './style.css'

const Header = () => {
  return (
    <section className="header">
      <h1 className="header__title">HEADER</h1>
      <nav className="header__nav">
        <a href="/" className="header__nav__item">Início</a>
        <a href="/sobre" className="header__nav__item">Sobre</a>
        <a href="/produtos" className="header__nav__item">Produtos</a>
        <a href="/contato" disabled className="header__nav__item--disabled">Contato</a>
      </nav>
    </section>
  )
}

export default Header

