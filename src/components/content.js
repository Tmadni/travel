import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./contents.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "./Contact";
import { FaComments, FaInfoCircle } from "react-icons/fa";

export default function Contents_2() {
  useEffect(() => {
    Aos.init({
      duration: 500,

    });
    Aos.refresh();
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col data-aos="fade-right">
            <img className="content-img" src="/images/img1.jpg" alt="random" />
            <div className="link">
              <FaInfoCircle /><a href="/">  Healthy diet</a><br />
              <FaComments /><a href="/">  Leave a comment</a>
            </div>

          </Col>
          <Col className="content-main" data-aos="fade-left">
            <h3>What food varieties help in increasing immunity?</h3>
            <h6>April 27, 2021 by <a href="/">riteshverma357</a></h6>
            <p>
              Your invulnerability is an impression of your wellbeing. In spite of the fact that our body has a characteristic guard framework, at whatever point we fall wiped out, our white platelets act promptly for recuperation. …<a href="/">Read More</a>
            </p>

          </Col>
        </Row>
        <Row>
          <Col className="content-main" data-aos="fade-right">
            <h3>benefits of eating curd daily</h3>
            <h6>April 23, 2021 by <a href="/">riteshverma357</a></h6>
            <p>
              Curd is a matured dairy item, generally utilized in dominant part of Indian dinners and strict ethos since ages. Ayurveda has referenced its sorts, properties, benefits, eating strategies, contraindications in detail. …<a href="/">Read More</a>
            </p>
          </Col>
          <Col data-aos="fade-left">
            <img className="content-img" src="/images/img2.jpg" alt="random" />
            <div className="link">
              <FaInfoCircle /><a href="/">  Curd</a><br />
              <FaComments /><a href="/">  Leave a comment</a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col data-aos="fade-right">
            <img className="content-img" src="/images/img3.jpg" alt="food" />
            <div className="link">
              <FaInfoCircle /><a href="/">  Healthy diet</a><br />
              <FaComments /><a href="/">  Leave a comment</a>
            </div>
          </Col>
          <Col className="content-main" data-aos="fade-left">
            <h3>Food which is best for Bones</h3>
            <h6>April 27, 2021 by <a href="/">riteshverma357</a></h6>
            <p>With respect to building strong bones, there are two key enhancements: calcium and nutrient D. Calcium supports your bones and teeth structure, while nutrient D upgrades calcium ingestion and bone turn of events. …
            <a href="/">Read More</a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="content-main" data-aos="fade-right">
            <h3>Loss wieght by proper diet</h3>
            <h6>April 27, 2021 by <a href="/">riteshverma357</a></h6>
            <p>
              These are 3 basic advances dependent on science that can assist you with losing fast as could really be expected. There are numerous approaches to lose a ton of weight quick. All things considered, many eating  … <a href="/">Read More</a>
            </p>
          </Col>
          <Col data-aos="fade-left">
            <img className="content-img" src="/images/img4.jpg" alt="gaming" />
            <div className="link">
              <FaInfoCircle /><a href="/">  weight losss</a><br />
              <FaComments /><a href="/">  Leave a comment</a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col data-aos="fade-right">
            <img className="content-img" src="/images/img5.jpg" alt="food" />
            <div className="link">
              <FaInfoCircle /><a href="/">  Cheese</a><br />
              <FaComments /><a href="/">  Leave a comment</a>
            </div>
          </Col>
          <Col className="content-main" data-aos="fade-left">
            <h3>Which cheese protects our body?</h3>
            <h6>April 27, 2021 by <a href="/">riteshverma357</a></h6>
            <p>There is solid cheddar. also, each pound of cheddar needs about a gallon of milk. As we as a whole know the in milk, we have protein two sorts casein and whey protein and afterward we have immersed fats …
                     <a href="/">Read More</a>
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="content-main" data-aos="fade-right">
            <h3>Make a balanced food regimen sheet What meals do you consume on a one day</h3>
            <h6>April 9, 2021 by <a href="/">riteshverma357</a></h6>
            <p>
              If we communicate approximately the balanced food regimen that our frame desires. There are numerous foremost meals businesses carbohydrates, proteins, fat, minerals, vitamins, fibers, and water. These businesses … <a href="/">Read More</a>
            </p>
          </Col>
          <Col data-aos="fade-left">
            <img className="content-img" src="/images/img6.jpg" alt="gaming" />
            <div className="link">
              <FaInfoCircle /><a href="/">  Healthy Diet</a><br />
              <FaComments /><a href="/">  Leave a comment</a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col data-aos="fade-right">
            <img className="content-img" src="/images/img7.jpg" alt="food" />
            <div className="link">
              <FaInfoCircle /><a href="/">  Healthy Diet</a><br />
              <FaComments /><a href="/">  Leave a comment</a>
            </div>
          </Col>
          <Col className="content-main" data-aos="fade-left">
            <h3>What will we inform cow milk is a great weight loss plan for children?</h3>
            <h6>April 27, 2021 by <a href="/">riteshverma357</a></h6>
            <p>Most human beings are involved to present cow milk to their kids. The purpose at the back of human beings are asking that is due to the fact in us a few professionals or docs accomplice a few dairy merchandise …
                     <a href="/">Read More</a>
            </p>
          </Col>
        </Row>
      </Container>


      <Contact />

    </>
  );
}
