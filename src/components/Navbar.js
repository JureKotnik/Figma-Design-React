import React, {useState} from 'react';
import styled from "styled-components";
import { ReactComponent as LogoIcon } from '../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Container>
            <LogoIcon />
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </Hamburger>
            <Menu isOpen={isOpen}>
              <LinkWrapper>
              <MenuLink href=''>Search</MenuLink>
              <MenuLink href=''>Login</MenuLink>
              <Button>Join Now</Button>
              </LinkWrapper>
            </Menu>
      </Container>
    </Nav>
  )
}

export default Navbar

const Container = styled.div``;
const Nav = styled.div``;
const Menu = styled.div``;
const LinkWrapper = styled.div``;
const MenuLink = styled.a``;
const Button = styled.button``;
const Hamburger = styled.div``;

