import logoDark from "../assets/images/logo-dark.svg";
import fblogo from "../assets/images/icon-facebook.svg";
import tweetlogo from "../assets/images/icon-twitter.svg";
import instalogo from "../assets/images/icon-instagram.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <img src={logoDark} alt="brand-logo" className="brand-logo" />
      <div className="sns-box">
        <img src={fblogo} alt="facebook" className="sns" />
        <img src={tweetlogo} alt="twitter" className="sns" />
        <img src={instalogo} alt="instagram" className="sns" />
      </div>
    </footer>
  );
}
