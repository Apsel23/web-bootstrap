import React, { useState } from 'react'
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
import SecondLevelSlideShow from '../commonComponents/SecondLevelSlideShow'
import { FinalComponent } from '../commonComponents/try'
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
    bottomText: 'See more',
  },
  {
    title: 'Top picks for your home',
    image: [5, 6, 7, 8],
    bottomText: 'End of season sale',
  },
  {
    title: 'Redefine your living room',
    image: [9, 10, 11, 12],
    bottomText: 'See all offers',
  },
  {
    title: 'Car & bike essentials | Up to 60% off',
    image: [13, 14, 15, 16],
    bottomText: 'Explore all',
  },
  {
    title: 'Shop by Category',
    image: [17, 18, 19, 20],
    bottomText: 'Shop now',
  },
  {
    title: 'Sign in for your best experience',
    image: [],
    signInButtonText: 'Sign in Securely',
  },
  {
    title: 'Pay your credit card bills on Amazon',
    image: 'CreditCard',
    bottomText: 'Pay now',
  },
  {
    title: 'Revamp your home in style',
    image: [9, 10, 11, 12],
    bottomText: 'Explore all',
  },
  {
    title: 'Up to 60% off | Styles for Women',
    image: [13, 14, 15, 16],
    bottomText: 'See more',
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
          {headerItems.map((item,index) => (
            <div className='d-flex' key={index}>
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
      <Row style={{ position: 'relative' }}>
        <CorouselForAmazon />
      </Row>

      <div
        style={{ position: 'absolute', top: '65%', backgroundColor: '#EAEDED' }}
      >
        <Row className='justify-content-center'>
          {items.map(({ signInButtonText, title, image, bottomText }) => (
            <Col
            key={title}
              className={
                signInButtonText
                  ? ' col-6 col-lg-4 col-md-6  row px-4 h-50 align-self-end'
                  : 'col-6 col-lg-4 col-md-6 gy-3 row px-4'
              }
            >
              <div className=' bg-white  p-3'>
                <p className='text-dark fs-5 fw-bolder text-justify p-1'>
                  {title}
                </p>
                {signInButtonText ? (
                  <div className='pb-3'>
                    <p
                      className='text-dark text-center p-1 rounded'
                      style={{
                        backgroundColor: '#FFD811',
                        fontSize: 13,
                        fontWeight: '500',
                      }}
                    >
                      {signInButtonText}
                    </p>
                  </div>
                ) : (
                  <Row className='gx-3'>
                    {Array.isArray(image) ? (
                      image.map((item,index) => (
                        <Col key={index} className='col-12 col-sm-12 col-xs-12 col-md-6 col-lg-6 pt-2'>
                          <Image
                            src={require(`../assets/images/amazonObject${item}.jpg`)}
                            style={{ width: '100%', height: '100px' }}
                          />
                        </Col>
                      ))
                    ) : (
                      <Image
                        src={require(`../assets/images/amazonObject${image}.jpg`)}
                        style={{ width: '100%', height: '100%' }}
                      />
                    )}
                  </Row>
                )}
                <p
                  className=''
                  style={{
                    fontSize: 13,
                    fontWeight: '500',
                    color: '#007185',
                    paddingTop: 15,
                  }}
                >
                  {bottomText}
                </p>
              </div>
            </Col>
          ))}
        </Row>
        <Row className=''>
        {/* <SecondLevelSlideShow /> */}
        <FinalComponent />
        </Row>
      </div>
     
      
    </Container>
  )
}

export default Amazon
