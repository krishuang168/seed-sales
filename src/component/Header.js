import React from "react";
import { Col, Row } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../shared/svg/logo.svg";
import shoppingBasket from "../shared/svg/shoppingBasket.svg";

function Header() {
  return (
    <React.Fragment>
      <Row>
        <Col xs={4} md={2}>
          <Link to="/home">
            <img src={logo} alt="Logo" className="logo-big" />
          </Link>
        </Col>
        <Col>
          <Row>
            <Col xs={6} sm={10}>
              <h1 className="title">Cottage Lake Nursery</h1>
            </Col>
            <Row>
              <h2 className="subtitle row-content">
                Established in 2020, we aim to provide <em>quality seeds</em> &
                <em>plantlings</em> in the Pacific Northwest.
              </h2>
            </Row>
            <Col className="navbar mr-5">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/about_us">About Us</NavLink>
              <NavLink to="/contact_us">Contact Us</NavLink>
              <NavLink to="/catalog">Online Purchase</NavLink>
              <NavLink to="/shopping_basket">
                <img
                  src={shoppingBasket}
                  title="Shopping Basket"
                  alt="Shopping Basket"
                  width="25"
                />
              </NavLink>
              <NavLink to="/covid-19" id="covid-19">
                COVID-19
              </NavLink>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Header;