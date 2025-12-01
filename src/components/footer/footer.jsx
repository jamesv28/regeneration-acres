import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="container-fluid pb-5 pt-2 bg-custom-black text-white">
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <h4 className="pb-2">Contact</h4>
          <p>
            <FontAwesomeIcon icon={faMapPin} />
            177 Gore Rd , Onalaska, WA, 98570
          </p>
          <p className="text-white">
            <FontAwesomeIcon icon={faPhone} />{" "}
            <a className="text-white" href="tel:+3609785189">
              (360) 978-5189
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a className="text-white" href="mailto:regenacres@gmail.com">
              {" "}
              regenacres@gmail.com
            </a>
          </p>
        </div>
        <div className="text-center pb-4">
          <p>Copyright &copy; 2025 Regeneration Acres</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
