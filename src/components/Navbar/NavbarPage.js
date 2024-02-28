import React, { Component } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap";

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
        <div
          className={`navbar navbar-expand-lg fixed-top navbar-custom sticky ${
            isNavSticky ? "nav-sticky  sticky-dark" : ""
          }`}
        >
          <Container>
            <NavbarBrand className="logo text-uppercase" href="/">
              <img src="assets/lifeisok/favicon.png" height={50} width={50} />{" "}
              Life is ok
            </NavbarBrand>

            <NavbarToggler
              className=""
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              onClick={this.toggle}
            >
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>

            <Collapse id="navbarCollapse" isOpen={isOpenMenu} navbar>
              <Nav className="navbar-nav navbar-center" id="mySidenav">
                {navItems.map((item, key) => (
                  <NavItem
                    key={key}
                    className={item.idnm === "Home" ? "active" : ""}
                  >
                    <NavLink href={`/#${item.idnm}`}>
                      {" "}
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
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar_Page;
