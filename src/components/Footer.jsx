import "./Footer.css";
import Contacts from "./Contacts.jsx";

function Footer() {
  return (
    <footer className="footer">
      <ul className="donation-list">
        <li className="donation-list-item description">
          <p>If you like this project, you can donate me some crypto:\</p>
        </li>
        <li className="donation-list-item wallet-address">
          <p>BTC: bc1q8w4depa6zrr3vtk4l98jnmxcl9gqjc0pglmtgw</p>
        </li>
        <li className="donation-list-item wallet-address">
          <p>Tether USTD: TXYLtqsETppLnxQhjJcJR62kEPoiwhvRB6</p>
        </li>
      </ul>
      <Contacts />
    </footer>
  );
}

export default Footer;
