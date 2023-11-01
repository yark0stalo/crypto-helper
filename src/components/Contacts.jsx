import "./Contacts.css";
import gitLogo from "/github.svg";
import instLogo from "/linkedIn.svg";
import twitterLogo from "/twitter.svg";

function Contacts() {
  return (
    <ul className="contacts-list">
      <li>
        <li>
          <a href="https://github.com/yark0stalo">
            <img src={gitLogo} alt="github" />
          </a>
          <a href="https://www.instagram.com/yark0.stalo/">
            <img src={instLogo} alt="instagram" />
          </a>
          <a href="https://twitter.com/yark0stalo">
            <img src={twitterLogo} alt="twitter" />
          </a>
        </li>
      </li>
    </ul>
  );
}

export default Contacts;
