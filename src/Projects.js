import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import "./Project.css";

function Projects() {
  // Define an array of project data
  const projects = [
    {
      title: "Landing Page - Coffee Shop",
      description: "Landing Page created with React and Bootstrap.",
      techStack: "HTML, CSS, JavaScript, React, and Bootstrap",
      demoLink: "https://landingpage-coffee-shop.netlify.app/",
      codeLink: "https://github.com/bmota1988/coffee-landing-page",
      image: "./thumbnail-coffee-shop.png",
    },
    {
      title: "Gym Survey Form",
      description: "Survey Form created with React and Bootstrap.",
      techStack: "HTML, CSS, JS, React, and Bootstrap",
      demoLink: "https://gym-form-react.netlify.app/",
      codeLink: "https://github.com/bmota1988/gym-form-react",
      image: "./Survey_Form.png",
    },
    {
      title: "Generic Survey Form",
      description: "Survey Form created with React and React Bootstrap.",
      techStack: "React, React Bootstrap",
      demoLink: "https://generic-form-survey.netlify.app/",
      codeLink: "https://github.com/bmota1988/Generic-Survey-Form",
      image: "./Form.png",
    },
    {
      title: "Technical Documentation",
      description: "Technical Documentation created with HTML, and CSS.",
      techStack: "HTML, CSS",
      demoLink: "https://codepen.io/bruno-mota/full/OJQPGbK",
      codeLink: "https://github.com/bmota1988/Technical_Documentation",
      image: "./Documentation.png",
    },
    {
      title: "Portfolio Page",
      description: "Portfolio Page created with HTML, CSS, and JavaScript.",
      techStack: "HTML, CSS, JavaScript",
      demoLink: "https://codepen.io/bruno-mota/full/mdLVjBb",
      codeLink: "https://github.com/bmota1988/Portfolio_Page",
      image: "./Portfolio.png",
    },
    {
      title: "Tribute Page",
      description: "Tribute Page created with HTML, and CSS.",
      techStack: "HTML, CSS",
      demoLink: "https://codepen.io/bruno-mota/full/yLvyQzB",
      codeLink: "https://github.com/bmota1988/Tribute_Page",
      image: "./Tribute_Page.png",
    },
  ];

  return (
    <section className="pt-3 bg-light-subtle">
      <h1 className="pt-5 fs-2 text-center">Projects</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {projects.map((project, index) => (
          <Card
            className="m-3 shadow p-3 mb-5 rounded"
            style={{ width: "20rem" }}
            key={index}
          >
            <Card.Img
              variant="top"
              src={project.image}
              alt={project.title}
              width={100}
            />
            <Card.Body>
              <Card.Title className="text-center">{project.title}</Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="fw-light">
                  {project.description}
                </ListGroup.Item>
                <ListGroup.Item className="d-block mx-auto">
                  <Button
                    variant="success"
                    href={project.demoLink}
                    target="_blank"
                  >
                    Demo
                  </Button>{" "}
                  <Button
                    variant="success"
                    href={project.codeLink}
                    target="_blank"
                  >
                    Code
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
