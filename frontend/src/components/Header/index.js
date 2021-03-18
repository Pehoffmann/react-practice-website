import { NavLink } from "react-router-dom";
import { ToggleButton } from "../Button";
import "./style.css";

const Header = ({ ...props }) => {
  const { themeClick } = props;
  return (
    <section className="header">
      <h1 className="header__title">HEADER</h1>
      <nav className="header__nav">
        <NavLink
          exact
          to="/"
          activeClassName="selected"
          className="header__nav__item"
        >
          Início
        </NavLink>
        <NavLink
          to="/sobre"
          activeClassName="selected"
          className="header__nav__item"
        >
          Sobre
        </NavLink>
        <NavLink
          to="/categorias"
          activeClassName="selected"
          className="header__nav__item"
        >
          Categorias
        </NavLink>
        <NavLink
          to="/promocoes"
          activeClassName="selected"
          className="header__nav__item--disabled"
          disabled
        >
          Promoções
        </NavLink>
        <NavLink
          to="/contato"
          activeClassName="selected"
          className="header__nav__item"
        >
          Contato
        </NavLink>
        <ToggleButton className="header__nav__item" themeClick={themeClick} />
      </nav>
    </section>
  );
};

export default Header;
