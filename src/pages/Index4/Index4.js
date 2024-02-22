import React, { Component } from 'react';
import NavbarPage from "../../components/Navbar/NavbarPage";
import Section from "./section";
import Clients from '../../components/Clients/clients';
import Features from '../../components/Features/features';
import Services from '../../components/Services/services';
import WebsiteDescription from '../../components/Website Description/website-description';
import AboutUs from '../../components/About Us/about-us';
import Pricing from '../../components/Pricing/pricing';
import Testimonials from '../../components/Testimonials/testimonials';
import GetStarted from '../../components/Get Started/get-started';
import Blog from '../../components/Blog/blog';
import ContactUs from '../../components/Contact Us/contact-us';
import Footer from '../../components/Footer/footer';

class Index4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          navClass : ""
        };
    }
    componentDidMount()
    {
        document.getElementById("colorTheme").href="assets/colors/pink.css";
    }


    render() {
        return (
            <React.Fragment>

                                {/* Importing Get Footer */}
                <Footer/>

            </React.Fragment>
        );
    }
}

export default Index4;