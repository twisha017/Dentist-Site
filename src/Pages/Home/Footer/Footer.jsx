import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg">
            <Container>
                <Row className="text-white">
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Our pages</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">For Patients</NavLink>
                                <NavLink className="footer-link">FAQ's</NavLink>
                                <NavLink className="footer-link">About</NavLink>
                                <NavLink className="footer-link">Contact Us</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Resources</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">New Patients</NavLink>
                                <NavLink className="footer-link">Patient Form</NavLink>
                                <NavLink className="footer-link">Insurance</NavLink>
                                <NavLink className="footer-link">Account Login</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Services</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Dental Dictionary</NavLink>
                                <NavLink className="footer-link">Dental Sealands</NavLink>
                                <NavLink className="footer-link">Dental Implants</NavLink>
                                <NavLink className="footer-link">Sedation Dentistry</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Our Address</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Dentist's site</NavLink>
                                <NavLink className="footer-link">Surat,Gujrat</NavLink>
                                <NavLink className="footer-link">Phone:+91 74851 85962</NavLink>
                                <NavLink className="footer-link">Email:21se02ce001@ppsu.ac.in</NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;