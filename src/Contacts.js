import React from "react";
import { Button, Card } from "react-bootstrap";

function Contacts() {
  const contact_card = [
    {
      socialMedia: "LinkedIn",
      socialUrl: "https://www.linkedin.com/in/brunonmota/",
      socialImg: "./LI-In-Bug.png",
    },
    {
      socialMedia: "GitHub",
      socialUrl: "https://github.com/bmota1988",
      socialImg: "./github-mark.png",
    },
    {
      socialMedia: "Gmail",
      socialUrl: "https://mailto:bmota1988@gmail.com",
      socialImg: "Gmail_Logo_512px.png",
    },
  ];

  return (
    <section className="m-3 .bg-light-subtle">
      <h1 className="fs-2 pt-5 text-center">Contacts</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {contact_card.map((contact_cards, index) => (
          <Card
            className="p-3 m-4 d-flex flex-xxl-column shadow"
            style={{ width: "18rem" }}
          >
            <Card.Img
              variant="top"
              width={100}
              src={contact_cards.socialImg}
              alt={contact_cards.socialMedia}
            />
            <Card.Body className="d-flex flex-column justify-content-end">
              <Card.Title>{contact_cards.socialMedia}</Card.Title>
              <Card.Text className="fs-6 fw-lighter">
                {contact_cards.socialUrl}
              </Card.Text>
              <Button
                href={contact_cards.socialUrl}
                target="_blank"
                variant="outline-success"
                size="lg"
              >
                Access {contact_cards.socialMedia}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Contacts;
