import React, { Component } from 'react';
import Section from "./section";
import Contactus from './contact-us';
import Footer from '../../components/Footer/footer';

class Index1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navClass: "navbar-white"
        };
    }

    render() {
        return (
            <React.Fragment>

                {/* Importing Section */}
                <Section />

                {/* Importing Contact Us */}
                <Contactus />

                {/* Importing Get Footer */}
                <Footer />

            </React.Fragment>
        );
    }
}

export default Index1;