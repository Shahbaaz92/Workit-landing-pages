import logo from "../assets/images/logo-light.svg";
import phoneImg from "../assets/images/image-hero.webp";
import background1 from "../assets/images/bg-pattern-1.svg";
import background2 from "../assets/images/bg-pattern-2.svg";
export default function Header() {
  return (
    <header className="hero">
      <nav>
        <img src={logo} alt="Work it" className="brand-logo" />
        <a href="#info">Apply for access</a>
      </nav>
      <section>
        <h1>
          Data <span>tailored</span> to <br /> your needs.
        </h1>
        <button>Learn more</button>
      </section>
      <img src={phoneImg} className="phone-img" alt="phone" />
      <img
        src={background1}
        alt="background-pattern"
        className="background-1"
      />
      <img
        src={background2}
        alt="background-pattern"
        className="background-2"
      />
    </header>
  );
}
