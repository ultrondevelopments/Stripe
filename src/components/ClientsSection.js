import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ClientsSection(props) {
  const items = [
    {
      name: "Hubspot",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg2.pngio.com%2Fhubspot-logopng-automated-insights-hubspot-logo-png-841_315.png&f=1&nofb=1",
      width: "100px",
    },
    {
      name: "Azure",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tekenable.ie%2Fwp-content%2Fuploads%2F2019%2F06%2Fazure_logo_794_new.png&f=1&nofb=1",
      width: "50px",
    },
    {
      name: "Office 365",
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.digicelbusiness.com%2Fcontent%2Fdam%2Fdigicel%2Fmarkets%2FBusiness%2Fproduct-images%2Foffice_365.png&f=1&nofb=1",
      width: "80px",
    },
    {
      name: "React",
      image:
        "https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png",
      width: "60px",
    },
  ];

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        />
        <Row className="justify-content-center">
          {items.map((item, index) => (
            <Col md="auto" className="py-3 px-4" key={index}>
              <div className="align-bottom">
                <img src={item.image} width={item.width} alt={item.name} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default ClientsSection;
