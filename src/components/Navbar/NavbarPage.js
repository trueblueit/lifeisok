import React, { Component } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";

import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";

import DropdownButton from "react-bootstrap/DropdownButton";

import Dropdown from "react-bootstrap/Dropdown";

function mydirection(num) {
  if (num == 2) {
    return "/index3";
  } else if (num == 3) {
    return "/index4";
  } else if (num == 4) {
    return "/index3";
  }
}
class Navbar_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2, idnm: "features", navheading: "Features" },
        { id: 3, idnm: "services", navheading: "Services" },
        { id: 4, idnm: "about", navheading: "About" },
        { id: 5, idnm: "accomodation", navheading: "Accomodation" },
        { id: 6, idnm: "blog", navheading: "Blog" },
        { id: 7, idnm: "get-started", navheading: "Blog" },
      ],
      isNavSticky: false,
      isOpenMenu: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { isNavSticky } = this.state;
    const scrollY = window.scrollY;

    if (scrollY >= 50 && !isNavSticky) {
      this.setState({ isNavSticky: true });
    } else if (scrollY < 50 && isNavSticky) {
      this.setState({ isNavSticky: false });
    }
  };

  toggle = () => {
    this.setState((prevState) => ({ isOpenMenu: !prevState.isOpenMenu }));
  };

  render() {
    const { isNavSticky, isOpenMenu, navItems } = this.state;

    return (
      <React.Fragment>
        <Container>
          <div
            className={`navbar navbar-expand-lg fixed-top navbar-custom sticky ${
              isNavSticky ? "nav-sticky  sticky-dark" : ""
            }`}
          >
            <NavbarBrand
              className="logo order-1 order-lg-0 me-lg-0 me-2"
              href="/"
            >
              <img
                src="assets/lifeisok/favicon.png"
                height={50}
                width={50}
                className="d-inline-block align-text-top"
                alt="Life is ok Logo"
              />
              <span className="d-none d-lg-inline">Life is ok</span>
            </NavbarBrand>

            <NavbarToggler className="" onClick={this.toggle}>
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>

            <Collapse id="navbarCollapse" isOpen={isOpenMenu} navbar>
              <Nav className="navbar-nav navbar-center ms-auto" id="mySidenav">
                {navItems.map((item, key) => (
                  <NavItem
                    key={key}
                    className={item.idnm === "Home" ? "active" : ""}
                  >
                    <NavLink
                      href={key >= 2 ? mydirection(key) : `/#${item.idnm}`}
                    >
                      {key < 5 ? item.navheading : null}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
              <Nav className="me-3" navbar>
                <NavItem>
                  <DropdownButton
                    id="dropdown-basic-button"
                    className="home-desc"
                    title="Contact Us"
                    data-bs-theme="dark"
                  >
                    {/* Animation for the first item */}
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Dropdown.Item href="/index5">Referal</Dropdown.Item>
                    </motion.div>
                    {/* Animation for the second item, with a slight delay */}
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <Dropdown.Item href="/index1">Enquire</Dropdown.Item>
                    </motion.div>
                    {/* Animation for the third item, with a further delay */}
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <Dropdown.Item href="/#get-started">Career</Dropdown.Item>
                    </motion.div>
                    {/* Animation for the fourth item, with the longest delay */}
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <Dropdown.Item href="/#blog">Feedback</Dropdown.Item>
                    </motion.div>
                  </DropdownButton>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Navbar_Page;
