import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./SectionFrequentlyAskedQuestion.css";

const SectionFrequentlyAskedQuestion = () => {
  return (
    <section id="faq" className="">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="fs-1 fw-bold mb-4 text-start sectionTitle">Frequently Asked Question</h2>
            <p className="fs-5 fw-bold mb-5 text-start sectionSubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="col-lg-6">
            <div id="faqAccordion">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="accordionHead">Apa saja syarat yang dibutuhkan?</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="accordionHead">Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="accordionHead">Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className="accordionHead">Apakah Ada biaya antar-jemput?</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className="accordionHead">Bagaimana jika terjadi kecelakaan</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFrequentlyAskedQuestion;
