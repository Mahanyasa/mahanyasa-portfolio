import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import { auth } from "../../firebase";
import styles from "./Storage.css";
import { CgLogIn } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

function Storage() {
    const navigate = useNavigate();
    const clickLogOut = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                auth().signOut();
                navigate("/");
            }
        });
    }
    return (
        <div>
            <Container fluid className="about-section">
                <Container>
                    <Row style={{ justifyContent: "center", padding: "10px" }}>
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Hello Mahanyasa!{" "}
                            <span className="wave" role="img" aria-labelledby="wave">
                                👋🏻
                            </span>
                        </h1>
                    </Row>
                    <Row style={{ justifyContent: "center", padding: "10px" }}>
                        <Button
                            variant="primary"
                            href={"/"}
                            style={{ maxWidth: "250px" }}
                            onClick={clickLogOut}
                        >   <CgLogIn />
                            &nbsp;Log Out
                        </Button>
                    </Row>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}>
                    </Col>
                </Container>
            </Container>
        </div>
    );
}

export default Storage;