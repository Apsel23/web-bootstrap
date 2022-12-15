import '../App.css';
import { Alert, Breadcrumb, Button, Card, Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Learning() {
  return (
    <div className="App">
      <header className="App-header">
      {/* You can set breakpoints for the fluid prop. Setting it to a breakpoint (xs, sm, md, lg, xl, xxl) will set the Container as fluid until the specified breakpoint. */}
        <Container fluid ="sm">
        <Form>
          <Row md="8" >
            {/* applying specifc size for an column */}   {/*  md={{ span: 4, offset: 2 }} You can read span4 offset2 as "extend this block over 4 columns, leave two columns empty to the left". */}
            <Col sm={10}  xs="10" md={{ span: 4, offset: 2 }}>   {/* Just md means at md size is auto */}
            {/* Basically starts applying from specified screen size */}
            {/*  If we specify something here it works only for that size and above size view ports */}
            <FormGroup controlId='FormEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Example@gmail.com'/>
            <Form.Text>We won't share your password, trust us!</Form.Text>
          </FormGroup>
            </Col>
            <Col md >
            <FormGroup controlId='FormPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password'/>
          </FormGroup>
            </Col>
          </Row>
          <Button variant='secondary' type='submit' className='mb-3'>Login</Button>
        </Form>
        <Card className='mb-3' style={{color:'#000'}}>
          <Card.Img style={{height:'220px'}} src='https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg'/>
          <Card.Body>
          <Card.Title>Bootstrap</Card.Title>
          <Card.Text>This is an example of bootstrap text</Card.Text>
          <Button variant='secondary'>Read more</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
        <Breadcrumb.Item>Item 1</Breadcrumb.Item>
        <Breadcrumb.Item>Item 2</Breadcrumb.Item>
        <Breadcrumb.Item active>Item 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant='primary' className='mb-3'>This is a Button</Alert>
        <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default Learning;
