import React from "react";
import { Container, Row, Col, Button, FormFeedback, Form, Input } from "reactstrap";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Section Title
import SectionTitle from "../common/section-title";

const ContactUs = () => {
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
        name: '',
        email: '',
        subject: '',
    },
    validationSchema: Yup.object({
        name: Yup.string().required("Please Enter Your Name"),
        email: Yup.string().required("Please Enter Your Email"),
        subject: Yup.string().required("Please Enter Your Subject"),
    }),
    onSubmit: (values) => {
        console.log("values",values);
    }
});
    return (
      <React.Fragment>
        <section className="section " id="contact">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="Get In Touch"
              description="We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with faucibus sapien odio measurable results."
            />
            <div className="">
            <Col lg="4" className="mt-4">
                    <div className="services-box text-center hover-effect " >
                      <div className="d-flex">
                        <i className="pe-7s-mail text primary"></i>
                        <div className="ms-4">
                          <h4>Message Us At</h4>
                          <p className="pt-2 text-muted">Email: admin@lifeisok.info </p>
                        </div>
                      </div>
                    </div>
                    
                  </Col>
                  <Col lg="4" className="mt-4">
                    <div className="services-box text-center hover-effect " >
                      <div className="d-flex">
                        <i className="pe-7s-map text primary"></i>
                        <div className="ms-4">
                          <h4>Location</h4>
                          <p className="pt-2 text-muted">Address: Shop 16 (Rapid Creek Shopping Village) 48 Trower Road, Milner, NT 0810
                          Phone number: 0414787572
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>

            </div>

          
          </Container>
        </section>
      </React.Fragment>
    );
}

export default ContactUs;
