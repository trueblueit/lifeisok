import React, { Component } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import Container from "react-bootstrap/Container";
// Importing icons from react-icons/fa
import {
  FaHome,
  FaStar,
  FaUser,
  FaEnvelope,
  FaCog,
  FaBed,
} from "react-icons/fa";

class NavbarPage extends Component {
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
          link: "/index3",
          idnm: "services",
          navheading: "Services",
          icon: FaCog,
          dropdown: [
            {
              id: 5,
              link: "/service1",
              idnm: "service1",
              navheading: "Daily Activities & Improved Living Choice",
            },
            {
              id: 6,
              link: "/service2",
              idnm: "service2",
              navheading: "Assistance With Social And Community Participation",
            },
            {
              id: 7,
              link: "/service3",
              idnm: "service3",
              navheading: "Accommodation Support",
            },
            {
              id: 8,
              link: "/service4",
              idnm: "service4",
              navheading: "Supports in Employment",
            },
            {
              id: 9,
              link: "/service5",
              idnm: "service5",
              navheading: "Supported Independent Living (SIL)",
            },
            {
              id: 10,
              link: "/service6",
              idnm: "service6",
              navheading: "School Leaver Employment Supports (SLES)",
            },
          ],
          isOpen: false,
        },
        {
          id: 4,
          link: "/index4",
          idnm: "about",
          navheading: "About",
          icon: FaUser,
        },
        {
          id: 11,
          link: "/service3",
          idnm: "accommodation",
          navheading: "Accommodation",
          icon: FaBed, // Just as an example, choose an appropriate icon
        },
      ],
      contactUsOpen: false,
      isNavSticky: false,
      isOpenMenu: false,
    };
  }

  toggleNavbar = () => {
    this.setState((prevState) => ({
      isOpenMenu: !prevState.isOpenMenu,
    }));
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
    const { isNavSticky, isOpenMenu, navItems, contactUsOpen } = this.state;

    return (
      <React.Fragment>
        <Container>
          <div
            className={`navbar navbar-expand-lg fixed-top navbar-custom sticky ${
              isNavSticky ? "nav-sticky" : ""
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
                alt="Life is ok Logo"
              />
            </NavbarBrand>

            <NavbarToggler
              onClick={this.toggleNavbar}
              className="mdi mdi-menu"
            />

            <Collapse isOpen={isOpenMenu} navbar>
              <Nav className="navbar-nav navbar-center ms-auto" id="mySidenav">
                {navItems.map((item, key) =>
                  item.dropdown ? (
                    <Dropdown
                      nav
                      inNavbar
                      isOpen={item.isOpen}
                      key={item.id}
                      onMouseOver={() => this.toggleDropdown(item.id, true)}
                      onMouseLeave={() => this.toggleDropdown(item.id, false)}
                      toggle={() => {}} // No-op function
                    >
                      <DropdownToggle nav caret style={{ color: "orange" }}>
                        {React.createElement(item.icon, {
                          style: { marginRight: "5px" },
                        })}
                        {item.navheading}
                      </DropdownToggle>
                      <DropdownMenu>
                        {item.dropdown.map((subItem) => (
                          <DropdownItem
                            key={subItem.id}
                            href={subItem.link}
                            style={{ color: "orange" }}
                          >
                            {subItem.navheading}
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <NavItem
                      key={key}
                      className={item.idnm === "home" ? "active" : ""}
                    >
                      <NavLink href={item.link}>
                        {React.createElement(item.icon, {
                          style: { marginRight: "5px" },
                        })}
                        {item.navheading}
                      </NavLink>
                    </NavItem>
                  )
                )}
                <Dropdown
                  isOpen={contactUsOpen}
                  onMouseOver={() => this.toggleDropdown("contactUs", true)}
                  onMouseLeave={() => this.toggleDropdown("contactUs", false)}
                  toggle={() => {}}
                >
                  <DropdownToggle nav caret style={{ color: "orange" }}>
                    <FaEnvelope style={{ marginRight: "5px" }} /> Contact Us
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/index5" style={{ color: "orange" }}>
                      Referral
                    </DropdownItem>
                    <DropdownItem href="/index1" style={{ color: "orange" }}>
                      Enquire
                    </DropdownItem>
                    <DropdownItem href="/#career" style={{ color: "orange" }}>
                      Career
                    </DropdownItem>
                    <DropdownItem href="/#feedback" style={{ color: "orange" }}>
                      Feedback
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Nav>
            </Collapse>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default NavbarPage;
