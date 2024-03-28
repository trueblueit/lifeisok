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

// Import custom styles or CSS module here if needed, for example:
// import './NavbarPage.css';

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class Navbar_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, link: "/#home", idnm: "home", navheading: "Home" },
        { id: 2, link: "/#features", idnm: "features", navheading: "Features" },
        { id: 3, link: "/index3", idnm: "services", navheading: "Services" },
        { id: 4, link: "/index4", idnm: "about", navheading: "About" },
        {
          id: 5,
          link: "/service3",
          idnm: "accomodation",
          navheading: "Accomodation",
        },
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
              isNavSticky ? "nav-sticky sticky-dark" : ""
            }`}
          >
            <NavbarBrand
              className="logo order-1 order-lg-0 me-lg-0 me-2"
              href="/"
            >
              <img
                src="assets/lifeisok/logo.png"
                height={50}
                width={250}
                className="d-inline-block align-text-top img-fluid"
                alt="Life is ok Logo"
              />
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
                    <NavLink href={item.link}>{item.navheading}</NavLink>
                  </NavItem>
                ))}
              </Nav>
              <Nav className="me-3" navbar>
                <NavItem>
                  <DropdownButton
                    id="dropdown-basic-button"
                    className=""
                    title="Contact Us"
                    data-bs-theme=""
                    // Custom styling applied here for the dropdown
                  >
                    <Dropdown.Item href="/index5" style={{ color: "orange" }}>
                      Referal
                    </Dropdown.Item>
                    <Dropdown.Item href="/index1" style={{ color: "orange" }}>
                      Enquire
                    </Dropdown.Item>
                    <Dropdown.Item href="/#career" style={{ color: "orange" }}>
                      Career
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/#feedback"
                      style={{ color: "orange" }}
                    >
                      Feedback
                    </Dropdown.Item>
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
