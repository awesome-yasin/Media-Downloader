import NavigationMenu from "./NavigationMenu";

import { useState } from "react";
import styled from "styled-components";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <Container >
<Nav>
      <Logo href="">
        Igvio<span style={{fontSize:'12px'}}>&nbsp;&nbsp;&nbsp;-By Yasin</span><span style={{fontSize:'8px'}}>&nbsp;(Instait V2)</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
       
        <MenuLink href="https://fbit.herokuapp.com/">Facebook Downloader</MenuLink>
        <MenuLink href="https://utit.herokuapp.com/">Youtube Downloader</MenuLink>
        <MenuLink href="https://downitt.herokuapp.com/">DailyMotion/Adult site Downloader</MenuLink>
        <MenuLink href="https://scdit.herokuapp.com/">Soundcloud Downloader</MenuLink>
    
      </Menu>
    </Nav>

</Container>
            <header className="main-header">
                <article className="web-header">
                    <section className="logo-section">
                       
                    </section>
                    <h1 className="web-name"> Instagram Downloader </h1>
                </article>
                <nav className="nav-section">
                    <NavigationMenu />
                </nav>
            </header>
        </>
    );
};

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;




const Container = styled.div`
background-color:#0d1117;

display:grid;
place-items:center;

  
`;
export default Header;
