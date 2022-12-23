import React from "react";
import styled from "styled-components";

const WrapperPage = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  padding: 80px 40px;
`;

export default WrapperPage;
