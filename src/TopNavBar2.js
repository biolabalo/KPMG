import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  Button
} from "react-bootstrap";
import Modal from "react-responsive-modal";
import SideNav from "./SideNav";

const TopNavBar2 = () => {
  const [opened, updateWidth] = useState(true);
  const [openedModal, updateOpenedModal] = useState(false);

  const update = () => {
    opened ? updateWidth(false) : updateWidth(true);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className="p-0 second_nav_bar"
    >
      <Modal open={openedModal} onClose={() => updateOpenedModal(false)}>
        <div className="pl-5 pr-5">
          <br />
          <p></p>
          <p className="float-left">
            <b>Sign in to continue</b>
          </p>
          <p className="float-right">
            {" "}
            Not a member yet? <span>Register now</span>
          </p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Modal>

      <Navbar.Brand
        className="ml-5"
        style={{ cursor: "pointer" }}
        onClick={update}
      >
        MENU
      </Navbar.Brand>

      <SideNav widthLength={opened} toggle={update} />

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" style={{ height: "100%" }}>
        <Nav className="mr-auto ml-auto">
          <h2>awwwards.</h2>
        </Nav>
        <Nav className="" style={{ height: "100%" }}>
          <Nav.Link
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
              backgroundColor: "white",
              color: "#202121",
              fontSize: "14px",
              fontWeight: "bold"
            }}
            onClick={() => updateOpenedModal(true)}
          >
            REGISTER/LOG IN
          </Nav.Link>

          <Nav.Link
            eventKey={2}
            className="sub"
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
              backgroundColor: "#49c5b6",
              color: "#fff",
              fontSize: "14px"
            }}
          >
            SUBMIT YOUR SITE
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default TopNavBar2;
