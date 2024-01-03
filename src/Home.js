import React from "react";
import Image from "react-bootstrap/Image";

function Home() {
  return (
    <>
      <section className="m-3 .bg-light-subtle">
        <h1 className="fs-2 pt-5 text-center">About Me</h1>
        <Image
          className="rounded mx-auto d-block img-fluid p-3"
          src="./perfil_Bruno_Mota.jpg"
          rounded
        />
        <h2 className="fs-4">Bruno Mota - Web Developer</h2>
        <p>
          Hi there! I'm Bruno Mota, a passionate and detail-oriented front-end
          developer based in Ottawa, ON. With a strong foundation in computer
          programming and a recent graduation from Algonquin College with a
          focus on web development, I am eager to contribute my skills and
          enthusiasm to a dynamic IT team.
        </p>
        <h2 className="fs-4">Education</h2>
        <p>
          I recently completed my Computer Programming program at Algonquin
          College, where I gained expertise in various web development
          technologies such as HTML5, CSS, Bootstrap, JavaScript, PHP, and
          React. Additionally, I have hands-on experience with relational
          databases like MySQL and Oracle DB, as well as non-relational
          databases like MongoDB.
        </p>
        <h2 className="fs-4">Skills & Abilities</h2>
        <p>
          <ul>
            <li>
              Web Development: HTML5, CSS, JavaScript, PHP, Node and React
            </li>
            <li>Relational Database: MySQL, and Oracle DB</li>
            <li>Non-Relational DB: Mongo DB</li>
            <li>Object-Oriented Programing: Java, and Python</li>
            <li>Operation System: Linuxm, and Windows</li>
            <li>Languages: Portuguese (native), and English (Professional)</li>
          </ul>
        </p>
        <h2 className="fs-4">Experience</h2>
        <p>
          Prior to transitioning into IT, I held roles in civil engineering,
          where I honed my project management and problem-solving skills. My
          experience as a Partner Driver at Uber taught me the importance of
          punctuality and customer satisfaction. As a Civil Engineering Trainee,
          I was involved in infrastructure construction projects for the Olympic
          Games Rio 2016, demonstrating my ability to oversee construction
          services and manage project details meticulously.
        </p>
        <p>
          My diverse background also includes roles such as a Sales Assistant at
          Conecval Conexões e Válvulas, where I was responsible for providing
          quotes, coordinating with suppliers, and ensuring timely deliveries.
          Additionally, my administrative assistant role at Partners Consultoria
          e Projetos involved managing internal demands, preparing documents,
          and interacting with clients.
        </p>
        <h2 className="fs-4">Let's Connect!</h2>
        <p>
          I'm excited about the prospect of contributing to innovative IT
          projects. Feel free to reach out to me at bmota1988@gmail.com or
          connect with me on{" "}
          <a href="https://www.linkedin.com/in/brunonmota/">LinkedIn</a>. Let's
          collaborate and bring creative solutions to life!
        </p>
      </section>
    </>
  );
}

export default Home;
