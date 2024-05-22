import { CartIcon } from "../../components/cart-icon/cart-icon";
import "./navigation.scss";

export function Navigation() {
  return (
    <>
      <nav className="navigation">
        <div className="logo-container">
          <img src="src\assets\image-removebg-preview.png" alt="Logo do site" />
        </div>
        <div className="nav-links">
          <a className="nav-links__link">Home</a>
          <a className="nav-links__link">Restaurantes</a>
          <a className="nav-links__link">Ofertas</a>
          <a className="nav-links__link">Ajuda</a>
          <CartIcon />
        </div>
      </nav>
    </>
  );
}
