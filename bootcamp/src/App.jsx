import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import dev from "./assets/dev.svg";
import html from "./assets/html.svg";
import git from "./assets/git.svg";
import react from "./assets/react.svg";
import girl from "./assets/girl.svg";
import boy from "./assets/boy.svg";
import avatar0 from "./assets/avatar0.svg";
import avatar1 from "./assets/avatar1.svg";
import avatar2 from "./assets/avatar2.svg";
import avatar3 from "./assets/avatar3.svg";

function App() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='header'>
        <nav className='navbar py-2 navbar-expand-md bg-dark navbar-dark fixed-top'>
          <div className='container'>
            <a href='#' className='navbar-brand'>
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
                    <a href='#courses' className='nav-link'>
                      Our Courses
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='#learn' className='nav-link'>
                      Learn More
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='#questions' className='nav-link'>
                      Questions
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='#mentors' className='nav-link'>
                      Mentors
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
          <div className='py-3'></div>
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
                <Button
                  className='btn-success btn-lg my-2'
                  onClick={handleShow}
                >
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
      <div className='courses'>
        <section id='courses' className='bg-success-subtle'>
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
      <div className='learn'>
        <section id='learn' className='p-5 bg-light'>
          <div className='container  row gap-3'>
            <div className='col-md'>
              <h2 className='py-2'>Why Us?</h2>
              <p className='lead'>
                We strive for everyone to have a personal experience when it
                comes to education. Our mentors make sure that you being taught
                most modern and vital aspects of programming. Everyone is
                different and have to be approach differently. Our mentors will
                be always on contact if you need help with anything.
              </p>
            </div>
            <div className='col-md position-relative'>
              <img className='img-fluid  ' src={girl} alt='' srcset='' />
              <Button
                variant='info'
                className='m-1 position-absolute bottom-0 end-0 '
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section className='bg-secondary text-light  p-5'>
          <div className='container  row gap-3'>
            <div className='col-md position-relative'>
              <img className='img-fluid  ' src={boy} alt='' srcset='' />
              <Button
                variant='danger'
                className='m-1 position-absolute top-0 start-0 '
              >
                Learn More
              </Button>
            </div>
            <div className='col-md'>
              <h2 className='py-2 text-end'>Bootcamp vs Self-taught</h2>
              <p className='lead '>
                With amount of free coding resources you might think it is
                easier to teach yourself all the necessary things, but it is
                also very easy to lose yourself in constant struggle to search
                for a clear path of learning. Our coding bootcamp is adapting to
                every student needs and we set a clear path of information and
                tools to learn quickly and productively.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className='questions'>
        <section id='questions' className='bg-light p-5'>
          <div className='container'>
            <Accordion>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>
                  1. What is a coding bootcamp?
                </Accordion.Header>
                <Accordion.Body>
                  A coding bootcamp is an intensive, short-term program designed
                  to teach you coding and programming skills quickly.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header>
                  2. Do I need prior coding experience?
                </Accordion.Header>
                <Accordion.Body>
                  No, most bootcamps are beginner-friendly and don't require
                  prior coding knowledge.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header>
                  3. How long does a coding bootcamp last?
                </Accordion.Header>
                <Accordion.Body>
                  Typically, bootcamps run for 8 to 16 weeks, but some offer
                  shorter or longer options.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='3'>
                <Accordion.Header>
                  4. What programming languages do you teach?
                </Accordion.Header>
                <Accordion.Body>
                  We cover a range of languages, including JavaScript, Python,
                  HTML/CSS, and more, depending on the program.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='4'>
                <Accordion.Header>
                  5. Can I work while attending the bootcamp?
                </Accordion.Header>
                <Accordion.Body>
                  Many bootcamps offer part-time or flexible schedules to
                  accommodate work or other commitments.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='5'>
                <Accordion.Header>
                  6. What kind of job support is provided?
                </Accordion.Header>
                <Accordion.Body>
                  We offer job placement assistance, resume help, interview
                  coaching, and networking opportunities.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='6'>
                <Accordion.Header>
                  7. Is financial aid available?
                </Accordion.Header>
                <Accordion.Body>
                  Some bootcamps offer scholarships or financing options; check
                  with us for details.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='7'>
                <Accordion.Header>
                  8. What makes your bootcamp different?
                </Accordion.Header>
                <Accordion.Body>
                  Our bootcamp stands out for its experienced instructors,
                  hands-on projects, and a supportive learning community.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='8'>
                <Accordion.Header>
                  9. What's the success rate of your graduates?
                </Accordion.Header>
                <Accordion.Body>
                  Our graduates have a strong track record of landing tech jobs,
                  with many joining top companies.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='9'>
                <Accordion.Header>10. How do I get started?</Accordion.Header>
                <Accordion.Body>
                  Simply apply online, and our admissions team will guide you
                  through the enrollment process.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>
      </div>
      <div className='mentors'>
        <section id='mentors' className='bg-primary p-5'>
          <div className='container text-light text-center'>
            <h2 className='mb-4'>Our Mentors</h2>
            <p className='lead mb-5'>Choose mentor that best suit for you</p>
          </div>
          <div className='row g-4  text-center'>
            <div className='col-sm-6 col-lg-3'>
              <Card className=' border-info border-3 h-100'>
                <Card.Img
                  class=' rounded-circle mb-auto p-5 '
                  variant='top'
                  src={avatar0}
                />
                <Card.Body className='position-relative '>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>
                    5+ experience in web development and bachelor degree in
                    Computer Science
                  </Card.Text>
                  <Button variant='info'>Learn more</Button>
                </Card.Body>
              </Card>
            </div>
            <div className='col-sm-6 col-lg-3'>
              <Card className=' border-info border-3 h-100 '>
                <Card.Img
                  class=' rounded-circle mb-auto p-5 '
                  variant='top'
                  src={avatar1}
                />
                <Card.Body>
                  <Card.Title>Johnana Doer</Card.Title>
                  <Card.Text>
                    Professional in Python and Java, Masters degree in Data
                    Structures and Algorithms
                  </Card.Text>
                  <Button variant='info'>Learn more</Button>
                </Card.Body>
              </Card>
            </div>
            <div className='col-sm-6 col-lg-3 '>
              <Card className=' border-info border-3 h-100 '>
                <Card.Img
                  class=' rounded-circle mb-auto p-5 '
                  variant='top'
                  src={avatar2}
                />
                <Card.Body>
                  <Card.Title>Peter Posh</Card.Title>
                  <Card.Text>
                    3+ experience React/Angular/Vue developer
                  </Card.Text>
                  <Button variant='info'>Learn more</Button>
                </Card.Body>
              </Card>
            </div>
            <div className='col-sm-6 col-lg-3'>
              <Card className=' border-info border-3 h-100 '>
                <Card.Img
                  class=' rounded-circle mb-auto p-5 '
                  variant='top'
                  src={avatar3}
                />
                <Card.Body>
                  <Card.Title>Anita Blackmen</Card.Title>
                  <Card.Text>
                    10+ years in education in Computer Science
                  </Card.Text>
                  <Button variant='info'>Learn more</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <div className='footer'>
        <footer className='bg-dark position-relative p-5 text-light'>
          <div className='container d-flex align-items-center justify-content-between'>
            <h3 className='p-3 '>Contacts</h3>
            <ul>
              <li>9-339-33-92</li>
              <li>@btcmp</li>
              <li>.botcmap</li>
            </ul>
            <p className='lead m-3'>Copyright &copy; 2023 </p>
            <div className='w-200'>
              <a href='#'>GO UP</a>
            </div>
          </div>
        </footer>
      </div>
      <div className='modal'>
        <Modal show={show} onHide={handleClose} className=" ">
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='name@example.com'
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as='textarea' rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='success' onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default App;
