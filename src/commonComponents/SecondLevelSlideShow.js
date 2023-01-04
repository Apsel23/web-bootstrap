import React, { useRef } from 'react'
import { Col, Image } from 'react-bootstrap'
import { CaretLeft, CaretRight } from 'react-bootstrap-icons'
import '../css/SecondLevelSlideShow.scss'

export const DisplayItem = ({ item }) => {
  return (
    <Col className='col-3 d-flex justify-space-between p-2 '>
      <Image
        src={require(`../assets/images/amazonObject${item}.jpg`)}
        height={'100%'}
        width={'100%'}
      />
    </Col>
  )
}

//The Element.scrollLeft property gets or sets the number of pixels that an element's content is scrolled from its left edge.
//The HTMLElement.offsetWidth read-only property returns the layout width of an element as an integer.
//The Element.scrollWidth read-only property is a measurement of the width of an element's content, including content not visible on the screen due to overflow.

export function SecondLevelSlideShow({ data,index }) {
  const scrl = useRef(null)
  const { title, imageList, offersText } = data
  const slide = (shift) => {
    scrl.current.scrollLeft += shift
  }
  return (
    <Col className='bg-white col-11 mx-auto' style={{height:'50vh' }}>
        <div className='d-flex'>
          <p className='text-black fw-bold fs-4'>{title}</p>
          {offersText ? (
            <p className='text-primary' style={{ paddingLeft: '15px',fontSize:'14px', textAlign:'center',paddingTop:'10px' }}>
              See all offers
            </p>
          ) : (
            <></>
          )}
        </div>
        <Col
          ref={scrl}
          className=' col-12 overflow-scroll list'
          style={{ width: '90vw' }}
        >
          {imageList.map((item, i) => (
            <DisplayItem item={item} key={i} />
          ))}
        </Col>
        <div
          className='shadow py-3 px-1 bg-body rounded d-inline-flex justify-content-center'
          style={{ position: 'relative', top: '-40%', width: 50 }}  onClick={() => slide(-750)}
        >
          <CaretLeft color='black' size={60} />
        </div>
        <div
          className='shadow py-4 px-1 bg-body rounded d-inline-flex justify-content-center'
          style={{
            position: 'relative',
            right: 5,
            top: '-42%',
            alignSelf: 'end',
           left:'90%'
          }}
          onClick={() => slide(+750)}
        >
          <CaretRight color='black' size={40} />
        </div>
    </Col>
  )
}
