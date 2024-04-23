import React, { Component } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import Container from "react-bootstrap/Container";
import { navItems } from "../../data";

class Navbar_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: navItems,
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
  toggleDropdown = (dropdownId, isOpen) => {
    this.setState((prevState) => ({
      navItems: prevState.navItems.map((item) => {
        if (item.id === dropdownId) {
          return { ...item, isOpen: isOpen };
        }
        return item;
      }),
      contactUsOpen:
        dropdownId === "contactUs" ? isOpen : prevState.contactUsOpen,
    }));
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
                src="assets/lifeisok/logo.png"
                height={50}
                width={250}
                className="d-inline-block align-text-top img-fluid ms-4"
                alt="Life is ok Logo"
              />
            </NavbarBrand>

            <NavbarToggler onClick={this.toggle}>
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>

            <Collapse
              id="navbarCollapse"
              isOpen={isOpenMenu}
              navbar
              className={`me-5 mt-4 mt-lg-0 ${isOpenMenu ? "" : "text-center"}`}
            >
              <Nav className="navbar-nav navbar-center mx-auto" id="mySidenav">
                {navItems.map((item, key) => (
                  <NavItem
                    key={key}
                    className={item.idnm === "Home" ? "active " : ""}
                  >
                    {item.submenu ? (
                      <Dropdown
                        nav
                        isOpen={item.isOpen}
                        toggle={() =>
                          this.toggleDropdown(item.id, !item.isOpen)
                        }
                        onMouseOver={() => this.toggleDropdown(item.id, true)}
                        onMouseLeave={() => this.toggleDropdown(item.id, false)}
                      >
                        <DropdownToggle nav caret>
                          {item.navheading}
                        </DropdownToggle>
                        <DropdownMenu
                          style={{
                            backgroundColor: "ivory",
                            color: "black",
                          }}
                        >
                          {item.submenu.map((subItem, subKey) => (
                            <DropdownItem key={subKey} href={subItem.link}>
                              {subItem.navheading}
                            </DropdownItem>
                          ))}
                        </DropdownMenu>
                      </Dropdown>
                    ) : (
                      <NavLink href={item.link}>{item.navheading}</NavLink>
                    )}
                  </NavItem>
                ))}
              </Nav>
            </Collapse>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Navbar_Page;
