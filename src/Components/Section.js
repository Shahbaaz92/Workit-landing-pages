import founder from "../assets/images/image-founder.webp";
import background3 from "../assets/images/bg-pattern-3.svg";
export default function Section() {
  return (
    <div className="info" id="info">
      <img src={founder} alt="founder" className="founder-img" />
      <div className="info-details">
        <h2>Be the first to test</h2>
        <p>
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>
        <button>Apply for access</button>
        <img
          src={background3}
          alt="background-pattern"
          className="background-3"
        />
      </div>
    </div>
  );
}
