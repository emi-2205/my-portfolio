import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/mail.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <div className="social-icon">
            <span><strong> You can contact me here </strong></span>
              <a href="http://www.linkedin.com/in/emilio-joseph-grieco-8b0a53138/"><img src={navIcon1} alt="Icon" /></a>
              <a href="mailto:grieco.emiliojoseph@email.com?subject=Oggetto%20del%20messaggio&body=Ciao Emilio, ti scrivo perché..."><img src={navIcon2} alt="Icon" /></a>
              {/* <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            
            <img src={logo} alt="Logo" />
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
