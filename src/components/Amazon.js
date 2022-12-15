import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Form, Image, Row } from 'react-bootstrap'
import mapIcon from '../assets/images/location_pin_002.jpg'
import shopping from '../assets/images/shopping.png'
import flag from '../assets/images/flag.png'
import dropdown from '../assets/images/dropdown.png'
import search from '../assets/images/search.png'
import menu from '../assets/images/menu.png'
import Amazon1 from '../assets/images/amazon1.jpg'
import '../App.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import CorouselForAmazon from '../commonComponents/CorouselForAmazon'
const headerItems = [
  { text: 'All', icon: 'menu' },
  { text: 'Amazon Mini Tv' },
  { text: 'Best Sellers' },
  { text: 'Mobiles' },
  { text: "Today's deals" },
  { text: 'Customer service' },
  { text: 'Electronics' },
  { text: 'Prime', icon: 'dropdown' },
  { text: 'Home & Kitchen' },
  { text: 'Fashion' },
  { text: 'New releases' },
  { text: 'Books' },
]
const items = [
  {
    title: 'Upgrade your home | Amazon Brands & more',
    image: [1, 2, 3, 4],
  },
  {
    title: 'Top picks for your home',
    image: [1, 2, 3, 4],
  },
  {
    title: 'Redefine your living room',
    image: [1, 2, 3, 4],
  },
  {
    title: 'Car & bike essentials | Up to 60% off',
    image: [1, 2, 3, 4],
  },
  {
    title: 'Shop by Category',
    image: [1, 2, 3, 4],
  },
  {
    title: 'Sign in for your best experience',
    image: [1, 2, 3, 4],
  },
  {
    title: 'Exclusive offers on travel tickets',
    image: [1, 2, 3, 4],
  },
  {
    title: 'Revamp your home in style',
    image: [1, 2, 3, 4],
  },
  {
    title: 'Up to 60% off | Styles for Women',
    image: [1, 2, 3, 4],
  },
]
function Amazon() {
  return (
    <Container fluid className='mt-2 text-white'>
      <Row>
        <Col>
          <Image
            src='https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578'
            rounded
            height={50}
            width={100}
          />
        </Col>
        <Col className='align-self-center'>
          <div
            className='helloText'
            style={{ marginLeft: '20px', marginBottom: '-5px' }}
          >
            Hello
          </div>
          <div className='d-flex align-items-start'>
            <Image src={mapIcon} height={20} width={20} />
            <p
              className='selectYourAddresstext fw-bolder'
              style={{ whiteSpace: 'nowrap' }}
            >
              Select your address
            </p>
          </div>
        </Col>
        <Col className='mt-2'>
          <Form>
            <Form.Group
              className='d-flex border'
              style={{ backgroundColor: '#FEBD69', width: '450px' }}
            >
              <div
                style={{ backgroundColor: '#F3F3F3' }}
                className='p2 d-flex justify-content-center align-items-center'
              >
                <div className='helloText' style={{ margin: '5px' }}>
                  All
                </div>
                <Image
                  src={dropdown}
                  height={7}
                  width={7}
                  style={{ margin: '5px' }}
                />
              </div>
              <Form.Control size='sm' style={{ height: '22px' }} />
              <Image src={search} height={15} width={15} className='m-2' />
            </Form.Group>
          </Form>
        </Col>
        <Col className='mt-3 d-flex'>
          <Image src={flag} height={20} width={20} />
          <p
            className='selectYourAddresstext fw-bolder'
            style={{ margin: '2px' }}
          >
            EN
          </p>
          <Image src={dropdown} height={7} width={7} className='mt-2' />
        </Col>
        <Col>
          <div className='helloText'>Hello,sign in</div>
          <div className='d-flex'>
            <p className='selectYourAddresstext fw-bolder'>Accounts & lists</p>
            <Image src={dropdown} height={7} width={7} className='mt-2' />
          </div>
        </Col>
        <Col>
          <div className='helloText'>Returns</div>
          <p className='selectYourAddresstext fw-bolder'>& Orders</p>
        </Col>
        <Col className='d-flex'>
          <Image src={shopping} height={25} width={25} />
          <p className='selectYourAddresstext mt-2'> Cart</p>
        </Col>
      </Row>
      <Row>
        <div className='d-flex justify-content-evenly'>
          {headerItems.map((item) => (
            <div className='d-flex'>
              {item.icon === 'menu' && (
                <Image src={menu} height={10} width={10} className='m-2' />
              )}
              <p style={{}}>{item.text}</p>
              {item.icon === 'dropdown' && (
                <Image src={dropdown} height={10} width={10} className='mt-2' />
              )}
            </div>
          ))}
        </div>
      </Row>
      <Row style={{position:'relative'}}>
        <CorouselForAmazon />
      </Row>
      <Row> 
      <Col className='d-flex positioning flex-wrap bg-primary justify-content-between'>
        {items.map((item) => (
          <Col className='col-3 bg-white m-2'>
            <p className='text-dark fs-5 fw-bolder text-justify m-2'> {item.title}</p>
            <Col className='d-inline-flex p-2 flex-wrap justify-content-between'>
              {item.image.map((item) => (
                <Image
                  src={Amazon1}
                  height={130}
                  width={130}
                  style={{ margin: 10 }}
                />
              ))}
            </Col>
          </Col>
        ))}
      </Col>
      </Row>
   
    </Container>
  )
}

export default Amazon
