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

import {
  FaHome,
  FaStar,
  FaUser,
  FaEnvelope,
  FaCog,
  FaBed,
} from "react-icons/fa";

import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";

class Navbar_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {
          id: 1,
          link: "/#home",
          idnm: "home",
          navheading: "Home",
          icon: FaHome,
        },
        {
          id: 2,
          link: "/#features",
          idnm: "features",
          navheading: "Features",
          icon: FaStar,
        },
        {
          id: 3,
          link: "/#services",
          idnm: "services",
          navheading: "Services",
          icon: FaCog,
          submenu: [
            {
              id: 7,
              link: "/service1",
              idnm: "service1",
              navheading: "Daily Activities & Improved Living Choice",
            },
            {
              id: 8,
              link: "/service2",
              idnm: "service2",
              navheading: "Assistance With Social And Community Participation",
            },
            {
              id: 9,
              link: "/service3",
              idnm: "service3",
              navheading: "Accommodation Support",
            },
            {
              id: 10,
              link: "/service4",
              idnm: "service4",
              navheading: "Supports in Employment",
            },
            {
              id: 11,
              link: "/service5",
              idnm: "service5",
              navheading: "Supported Independent Living (SIL)",
            },
            {
              id: 12,
              link: "/service6",
              idnm: "service6",
              navheading: "School Leaver Employment Supports (SLES)",
            },
          ],
          isOpen: false,
        },
        {
          id: 4,
          link: "/#about",
          idnm: "about",
          navheading: "About",
          icon: FaUser,
        },
        {
          id: 5,
          link: "/#accomodation",
          idnm: "accomodation",
          navheading: "Accomodation",
          icon: FaBed,
        },
        {
          id: 6,
          navheading: "Contact Us",
          icon: FaEnvelope,
          submenu: [
            { id: 14, navheading: "Referals", link: "/index5" },
            { id: 15, navheading: "Enquiry", link: "/index1" },
            { id: 16, navheading: "Career", link: "/#career" },
            { id: 17, navheading: "Feedback", link: "/#feedback" },
          ],
          isOpen: false,
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
                className="d-inline-block align-text-top img-fluid"
                alt="Life is ok Logo"
              />
            </NavbarBrand>

            <NavbarToggler className="" onClick={this.toggle}>
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>

            <Collapse
              id="navbarCollapse"
              isOpen={isOpenMenu}
              navbar
              className="me-5 mt-4 mt-lg-0"
            >
              <Nav className="navbar-nav navbar-center ms-auto" id="mySidenav">
                {navItems.map((item, key) => (
                  <NavItem
                    key={key}
                    className={item.idnm === "Home" ? "active" : ""}
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
                          {React.createElement(item.icon, {
                            style: { marginRight: "5px" },
                          })}
                          {item.navheading}
                        </DropdownToggle>
                        <DropdownMenu>
                          {item.submenu.map((subItem, subKey) => (
                            <DropdownItem
                              key={subKey}
                              href={subItem.link}
                              style={{ color: "#ff6900" }}
                            >
                              {subItem.navheading}
                            </DropdownItem>
                          ))}
                        </DropdownMenu>
                      </Dropdown>
                    ) : (
                      <NavLink href={item.link}>
                        {React.createElement(item.icon, {
                          style: { marginRight: "5px" },
                        })}
                        {item.navheading}
                      </NavLink>
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
