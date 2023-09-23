import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import dev from "./assets/dev.svg"

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
        <section>
          <div className='container'>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant='top' src='holder.js/100px180' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant='top' src='holder.js/100px180' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant='top' src='holder.js/100px180' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
