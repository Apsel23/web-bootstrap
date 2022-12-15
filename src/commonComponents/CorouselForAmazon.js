import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Col, Container, Form, Image, Row } from 'react-bootstrap'
import Amazon1 from '../assets/images/amazon1.jpg'
import Amazon2 from '../assets/images/Amazon2.jpg'
import Amazon3 from '../assets/images/Amazon3.jpg'
import Amazon4 from '../assets/images/Amazon4.jpg'
import Amazon5 from '../assets/images/Amazon5.jpg'
import Amazon6 from '../assets/images/Amazon6.jpg'
import Amazon7 from '../assets/images/Amazon7.jpg'
import rightArrow from '../assets/images/right-arrow.png'
import leftArrow from '../assets/images/left-arrow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'
const tooglesGroupId = 'Toggles'
const valuesGroupId = 'Values'
const mainGroupId = 'Main'

const getConfigurableProps = () => ({
  showArrows: Boolean('showArrows', true, tooglesGroupId),
  showStatus: Boolean('showStatus', true, tooglesGroupId),
  showIndicators: Boolean('showIndicators', true, tooglesGroupId),
  infiniteLoop: Boolean('infiniteLoop', true, tooglesGroupId),
  showThumbs: Boolean('showThumbs', true, tooglesGroupId),
  useKeyboardArrows: Boolean('useKeyboardArrows', true, tooglesGroupId),
  autoPlay: Boolean('autoPlay', true, tooglesGroupId),
  stopOnHover: Boolean('stopOnHover', true, tooglesGroupId),
  swipeable: Boolean('swipeable', true, tooglesGroupId),
  // dynamicHeight: Boolean('dynamicHeight', true, tooglesGroupId),
  emulateTouch: Boolean('emulateTouch', true, tooglesGroupId),
  autoFocus: Boolean('autoFocus', false, tooglesGroupId),
  thumbWidth: Number('thumbWidth', 100, {}, valuesGroupId),
  selectedItem: Number('selectedItem', 0, {}, valuesGroupId),
  interval: Number('interval', 2000, {}, valuesGroupId),
  transitionTime: Number('transitionTime', 500, {}, valuesGroupId),
  swipeScrollTolerance: Number('swipeScrollTolerance', 5, {}, valuesGroupId),
  ariaLabel: Text('ariaLabel', undefined),
})

const  couroselImages= [1, 2, 3, 4]
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
export default class CorouselForAmazon extends Component {
  render() {
    return (
      <Carousel
        infiniteLoop
        autoPlay
        showIndicators={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type='button'
              onClick={onClickHandler}
              title={label}
              style={{
                position: 'absolute',
                zIndex: 2,
                top: 'calc(50% - 15px)',
                width: 30,
                height: 30,
                cursor: 'pointer',
                left: 15,
              }}
            >
              <FontAwesomeIcon icon="fa-regular fa-chevron-right"  style={{color:'red'}} inverse/>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type='button'
              onClick={onClickHandler}
              title={label}
              style={{
                position: 'absolute',
                zIndex: 2,
                top: 'calc(50% - 15px)',
                width: 30,
                height: 30,
                cursor: 'pointer',
                right: 15,
              }}
            >
             <FontAwesomeIcon icon="fa-regular fa-chevron-right" />
            </button>
          )
        }
      >
        {/* {couroselImages.map(item=>
          <div id="container" class="col">
          <div class="img-container">
              <div class="positioning">
                  Some Text
              </div>
              <Image src={Amazon1} />
          </div>
      </div>
          )} */}
      

        <div>
          <Image src={Amazon1} />
        </div>
        <div>
          <Image src={Amazon2} />
        </div>
        <div>
          <Image src={Amazon3} />
        </div>
        <div>
          <Image src={Amazon4} />
        </div>
        <div>
          <Image src={Amazon5} />
        </div>
        <div>
          <Image src={Amazon6} />
        </div>
        <div>
          <Image src={Amazon7} />
        </div>
      </Carousel>
    )
  }
}
