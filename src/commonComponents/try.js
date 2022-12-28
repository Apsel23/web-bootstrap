import React, { useEffect, useRef, useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { ArrowLeft, ArrowRight, CaretLeft, CaretLeftFill, CaretRight, CaretRightFill } from 'react-bootstrap-icons'
import data from '../constants/fruits.json'
import '../css/tryComponent.scss'
import amazonObjectSlideShow from '../assets/images/amazonObjectSlideShow.jpg'

export const Tag = ({ data }) => {
  return (
    <Col className='col-2 d-flex flex-column justify-space-around p-2'>
      <Image src={amazonObjectSlideShow} height={'140%'} width={'110%'} />
      <p className='text-black'>{data}</p>
    </Col>
  )
}

//The Element.scrollLeft property gets or sets the number of pixels that an element's content is scrolled from its left edge.
//The HTMLElement.offsetWidth read-only property returns the layout width of an element as an integer.
//The Element.scrollWidth read-only property is a measurement of the width of an element's content, including content not visible on the screen due to overflow.

export function FinalComponent() {
  const [scrollX, setscrollX] = useState(0) // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false) // For detecting end of scrolling
  const scrl = useRef(null)
  useEffect(() => {
    //Check width of the scollings
    if (
      scrl.current &&
      scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
    ) {
      setscrolEnd(true)
    } else {
      setscrolEnd(false)
    }
    return () => {}
  }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth])

  const slide = (shift) => {
    console.log('Slide', shift, scrl.current.scrollLeft)
    scrl.current.scrollLeft += shift
    setscrollX(scrollX + shift) // Updates the latest scrolled postion

    //For checking if the scroll has ended
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true)
    } else {
      setscrolEnd(false)
    }
  }
  console.log('OutsideScril', scrl?.current?.scrollLeft)
  console.log('OutsieScrollWidth', scrl?.current?.scrollWidth)

  //This will check scroll event and checks for scroll end
  const scrollCheck = () => {
    console.log('scrollCheck', scrl.current.scrollLeft)
    console.log('scrloffsetWidth', scrl.current.offsetWidth)
    setscrollX(scrl.current.scrollLeft)
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true)
    } else {
      setscrolEnd(false)
    }
  }

  return (
    <Row className='d-flex flex-row' style={{}}>
      {/* {scrollX !== 0 && ( */}
      {/* <Col className=''> */}
       
      {/* </Col> */}
      {/* )} */}
      <div className='d-flex flex-column'>
      <p className='text-black'>Apsel</p>
      <div className='shadow py-3 px-1 bg-body rounded d-inline-flex justify-content-center' style={{position:'relative', top:'35%', width:50}}   >
      <CaretLeft color='black' size={60}  onClick={() => slide(-490)}/>
      </div>
      <Col
        ref={scrl}
        onScroll={scrollCheck}
        className='d-flex overflow-scroll list'
        style={{ width:'100vw'}}
      >
        {/* <div className=' d-flex gx-4'> */}
       
        {data.fruits.map((d, i) => (
          <Tag data={d} />
        ))}
        {/* </div> */}
      
      </Col>
      <div className='shadow py-4 px-1 bg-body rounded d-inline-flex justify-content-center'style={{position:'relative',right:5,top:'-40%',alignSelf:'end',justifySelf:'center'}}   >
      <CaretRight color='black' size={40}   onClick={() => slide(+490)}/>
      </div>
      </div>
      {/* {!scrolEnd && ( */}
      {/* <Col className='col-1'> */}
      
      {/* </Col> */}
      {/* )} */}
    </Row>
  )
}
