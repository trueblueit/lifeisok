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

import DropdownButton from "react-bootstrap/DropdownButton";

import Dropdown from "react-bootstrap/Dropdown";

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
              className="logo text-uppercase order-1 order-lg-0 me-lg-0 me-2"
              href="/"
            >
              <img
                src="assets/lifeisok/favicon.png"
                height={50}
                width={50}
                className="d-inline-block align-text-top"
                alt="Life is ok Logo"
              />{" "}
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
                    <NavLink href={key == 3 ? "/index4" : `/#${item.idnm}`}>
                      {key < 5 ? item.navheading : null}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
              <Nav className="navbar-right nav text-primary" navbar>
                <NavItem>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Contact Us"
                    data-bs-theme="dark"
                  >
                    <Dropdown.Item href="/index5">Referal</Dropdown.Item>
                    <Dropdown.Item href="/index1">Enquire</Dropdown.Item>
                    <Dropdown.Item href="/#get-started">Carreer</Dropdown.Item>
                    <Dropdown.Item href="/#blog">Feedback</Dropdown.Item>
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
