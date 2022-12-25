import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Footer = () => {
  let location = useLocation();

  return <FooterWrapper>Footer</FooterWrapper>;
};

const FooterWrapper = styled.div`
  min-height: 70px;
  background-color: #fff;
  color: #000;
`;

export default Footer;
