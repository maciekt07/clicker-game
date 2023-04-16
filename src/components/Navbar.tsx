import { ReactNode } from "react";
import HoneyJar from "../assets/honey-jar.png";
import styled from "styled-components";
import { colorPalette } from "../styles";
import { Link } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

/* FIXME: Some strange lines appear when hovering on other cards idk why */

export const Navbar = ({ children }: Props) => {
  const hasContent = children !== undefined;
  return (
    <>
      <Nav hasContent={hasContent}>
        <Link to="/">
          <LogoContainer>
            <LogoImage src={HoneyJar} />
            <LogoTxt>Honey Clicker</LogoTxt>
          </LogoContainer>
        </Link>
        <AboutLink to="/about">About</AboutLink>
        {children}
      </Nav>
      <div style={{ paddingTop: "110px" }} />
    </>
  );
};

interface NavProps {
  hasContent: boolean;
}

export const Nav = styled.nav<NavProps>`
  position: fixed;
  top: 0;
  width: 100%;
  background: #ffffffed;
  /* -webkit-backdrop-filter: blur(6px); */
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.hasContent ? "center" : "left")};
  z-index: 2;
  user-select: none;
`;
const LogoContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoImage = styled.img`
  width: 72px;
  height: 72px;
  margin-left: 8vw;
  flex-shrink: 0;
  transition: 0.3s filter;
  @media (max-width: 768px) {
    margin-left: 8px;
  }
  ${LogoContainer}:hover > & {
    filter: drop-shadow(0px 0px 16px #ffd071);
  }
`;

const AboutLink = styled(Link)`
  font-size: 22px;
  margin-left: 30px;
  color: ${colorPalette.orange};
  text-decoration: underline;
  transition: 0.3s text-shadow;
  &:hover {
    text-shadow: 0px 0px 12px ${colorPalette.orange};
  }
`;

const LogoTxt = styled.p`
  font-size: 26px;
  color: ${colorPalette.orange};
  font-weight: bold;
  text-shadow: 0px 0px 4px ${colorPalette.orange};
  transition: 0.3s text-shadow;
  ${LogoContainer}:hover > & {
    text-shadow: 0px 0px 12px ${colorPalette.orange};
  }
`;
