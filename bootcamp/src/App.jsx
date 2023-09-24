import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import dev from "./assets/dev.svg";
import html from "./assets/html.svg";
import git from "./assets/git.svg";
import react from "./assets/react.svg";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='header'>
        <nav className='navbar py-3 navbar-expand-md bg-dark navbar-dark'>
          <div className='container'>
            <a href='/' className='navbar-brand'>
              Coding Bootcamp
            </a>
            <Button
              className='navbar-toggler'
              variant='outline-secondary'
              onClick={() => setOpen(!open)}
              aria-controls='collapse-text'
              aria-expanded={open}
            >
              <span className='navbar-toggler-icon'></span>
            </Button>
            <Collapse in={open}>
              <div className='collapse navbar-collapse' id='collapse-text'>
                <ul className='navbar-nav ms-auto'>
                  <li className='nav-item'>
                    <a href='/courses' className='nav-link'>
                      Our Courses
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='/mentors' className='nav-link'>
                      Our Mentors
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='/learn' className='nav-link'>
                      Learn More
                    </a>
                  </li>
                </ul>
              </div>
            </Collapse>
          </div>
        </nav>
      </div>
      <div className='showcase'>
        <section class='bg-dark text-light p-5 p-lg-0 text-center text-md-start'>
          <div className='container'>
            <div className='d-sm-flex p-lg-4 align-items-center justify-content-between'>
              <div>
                <h1>
                  Do you want to become a
                  <span className='text-success'> Software Developer</span> ?
                </h1>
                <p className='lead sm-small '>
                  Choosing our coding bootcamp as a step towards great career.
                  We have experienced instructors, a comprehensive curriculum,
                  and a track record of success in helping students land tech
                  jobs.{" "}
                  <span className='text-success fw-bold fs-4 '>Join us </span>,
                  and let's code your future together!
                </p>
                <Button className='btn-success btn-lg my-2'>
                  Begin Your Journey
                </Button>
              </div>
              <img
                className='img-fluid  w-100 m-3 d-none d-lg-block '
                src={dev}
                alt=''
              />
            </div>
          </div>
        </section>
      </div>
      <div className='contact'>
        <section className='bg-success text-light p-4'>
          <div className='container '>
            <div className='d-md-flex justify-content-md-evenly align-items-center'>
              <h4 className='mb-3 mb-md-0 text-center'>
                Sign Up For Our Free Course
              </h4>
              <InputGroup className='w-auto'>
                <Form.Control
                  className=''
                  placeholder='Enter Your Email'
                  aria-label='email'
                  aria-describedby='basic-addon2'
                />
                <Button variant='outline-warning'>Submit</Button>
              </InputGroup>
            </div>
          </div>
        </section>
      </div>
      <div className='cards'>
        <section className='bg-success-subtle'>
          <div className='container p-5 '>
            <div className='row gap-4 gap-lg-5 p-xxs-5 p-lg-5  '>
              <Card className='col-md border-warning-subtle border-2 '>
                <Card.Img class='img-fluid  h-100' variant='top' src={html} />
                <Card.Body className='position-relative '>
                  <Card.Title>Learn HTML/CSS</Card.Title>
                  <Card.Text>
                    Learn fundamentals of web development that will help you to
                    build your first website
                  </Card.Text>
                  <Button variant='warning'>Watch Now</Button>
                </Card.Body>
              </Card>
              <Card className='col-md border-warning-subtle border-2'>
                <Card.Img class='img-fluid p-1 h-100' variant='top' src={git} />
                <Card.Body>
                  <Card.Title>Introduction to GIT</Card.Title>
                  <Card.Text>
                    Learn basics of version control system that will help you to
                    maintain and simplify your workflow
                  </Card.Text>
                  <Button variant='warning'>Watch Now</Button>
                </Card.Body>
              </Card>
              <Card className='col-md border-warning-subtle border-2'>
                <Card.Img
                  class='img-fluid p-2  h-100'
                  variant='top'
                  src={react}
                />
                <Card.Body>
                  <Card.Title>How to pick a Framework</Card.Title>
                  <Card.Text>
                    With this guide you can determine what framework is best
                    suited for you and can help you build your dream project
                    sooner
                  </Card.Text>
                  <Button variant='warning'>Watch Now</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
