import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Footer = () => {
  let location = useLocation();

  return (
    <FooterWrapper>
      <FooterImg>
        <img src="/images/logo.svg" alt="" />
      </FooterImg>
      <About>
        <li>
          <a href="#">About Disney</a>
        </li>
        <li>
          <a href="#">Disney Help</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Advertise With Us</a>
        </li>
        <li>
          <a href="#">Disney® Premier Visa® Card</a>
        </li>
      </About>
      <Legal>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Additional Content Information</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Your US State Privacy Rights</a>
        </li>
        <li>
          <a href="#">Children's Online Privacy Policy</a>
        </li>
        <li>
          <a href="#">Do Not Sell or Share My Personal Information</a>
        </li>
        <li>
          <a href="#">Interest-Based Ads</a>
        </li>
      </Legal>
      <Copyright>© Disney, All Rights Reserved, Disney Entertainment</Copyright>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 70px;
  background-color: #000;
  color: #fff;
  padding: 30px 25px 32px 25px;
`;

const FooterImg = styled.div`
  img {
    width: 84px;
  }
`;
const About = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  font-size: 12px;
  font-weight: 400;
  padding: 12px 25px 0;

  li {
    padding: 0 12px 4px 8px;
  }
`;
const Legal = styled(About)`
  font-weight: 700;
  flex-wrap: wrap;
`;
const Copyright = styled(About)``;

export default Footer;
