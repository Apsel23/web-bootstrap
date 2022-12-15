import './App.css';
import { Alert, Breadcrumb, Button, Card, Form, FormGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <FormGroup>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Example@gmail.com'/>
            <Form.Text>We won't share your password, trust us!</Form.Text>
          </FormGroup>
          <FormGroup>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password'/>
          </FormGroup>
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
      </header>
    </div>
  );
}

export default App;
