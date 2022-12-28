// import React, { Component } from 'react'
// import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
// import { Carousel } from 'react-responsive-carousel'
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
// import { Col, Container, Form, Image, Row } from 'react-bootstrap'
// import Amazon1 from '../assets/images/amazon1.jpg'
// import Amazon2 from '../assets/images/Amazon2.jpg'
// import Amazon3 from '../assets/images/Amazon3.jpg'
// import Amazon4 from '../assets/images/Amazon4.jpg'
// import Amazon5 from '../assets/images/Amazon5.jpg'
// import Amazon6 from '../assets/images/Amazon6.jpg'
// import Amazon7 from '../assets/images/Amazon7.jpg'
// import rightArrow from '../assets/images/right-arrow.png'
// import leftArrow from '../assets/images/left-arrow.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import channelCard from '../css/channelCard.css'
// import { Button, Card } from '@mui/material'

// import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons'
// const tooglesGroupId = 'Toggles'
// const valuesGroupId = 'Values'
// const mainGroupId = 'Main'
// const getConfigurableProps = () => ({
//   showArrows: Boolean('showArrows', true, tooglesGroupId),
//   showStatus: Boolean('showStatus', true, tooglesGroupId),
//   showIndicators: Boolean('showIndicators', true, tooglesGroupId),
//   infiniteLoop: Boolean('infiniteLoop', true, tooglesGroupId),
//   showThumbs: Boolean('showThumbs', true, tooglesGroupId),
//   useKeyboardArrows: Boolean('useKeyboardArrows', true, tooglesGroupId),
//   autoPlay: Boolean('autoPlay', true, tooglesGroupId),
//   stopOnHover: Boolean('stopOnHover', true, tooglesGroupId),
//   swipeable: Boolean('swipeable', true, tooglesGroupId),
//   // dynamicHeight: Boolean('dynamicHeight', true, tooglesGroupId),
//   emulateTouch: Boolean('emulateTouch', true, tooglesGroupId),
//   autoFocus: Boolean('autoFocus', false, tooglesGroupId),
//   thumbWidth: Number('thumbWidth', 100, {}, valuesGroupId),
//   selectedItem: Number('selectedItem', 0, {}, valuesGroupId),
//   interval: Number('interval', 2000, {}, valuesGroupId),
//   transitionTime: Number('transitionTime', 500, {}, valuesGroupId),
//   swipeScrollTolerance: Number('swipeScrollTolerance', 5, {}, valuesGroupId),
//   ariaLabel: Text('ariaLabel', undefined),
// })

// const couroselImages = [1, 2, 3, 4]
// const items = [
//   {
//     title: 'Upgrade your home | Amazon Brands & more',
//     image: [1, 2, 3, 4],
//     bottomText: 'See more',
//   },
//   {
//     title: 'Top picks for your home',
//     image: [5, 6, 7, 8],
//     bottomText: 'End of season sale',
//   },
//   {
//     title: 'Redefine your living room',
//     image: [9, 10, 11, 12],
//     bottomText: 'See all offers',
//   },
//   {
//     title: 'Car & bike essentials | Up to 60% off',
//     image: [13, 14, 15, 16],
//     bottomText: 'Explore all',
//   },
//   {
//     title: 'Shop by Category',
//     image: [17, 18, 19, 20],
//     bottomText: 'Shop now',
//   },
//   {
//     title: 'Sign in for your best experience',
//     image: [],
//     signInButtonText: 'Sign in Securely',
//   },
//   {
//     title: 'Pay your credit card bills on Amazon',
//     image: 'CreditCard',
//     bottomText: 'Pay now',
//   },
//   {
//     title: 'Revamp your home in style',
//     image: [9, 10, 11, 12],
//     bottomText: 'Explore all',
//   },
//   {
//     title: 'Up to 60% off | Styles for Women',
//     image: [13, 14, 15, 16],
//     bottomText: 'See more',
//   },
// ]
// export default class SecondLevelSlideShow extends Component {
//   constructor() {
//     super()
//     this.state = {
//       channels: [
//         { name: 'TED-Ed', subscribers: '7,120,514' },
//         { name: 'The Infographics Show', subscribers: '2,679,421' },
//         { name: 'GaryVee', subscribers: '1,514,441' },
//         { name: 'Jabrils', subscribers: '115,130' },
//         { name: 'George Sinanos', subscribers: '67' },
//         { name: 'George Sinanos', subscribers: '67' },
//         { name: 'George Sinanos', subscribers: '67' },
//         { name: 'George Sinanos', subscribers: '67' },
//         { name: 'George Sinanos', subscribers: '67' },
//         { name: 'George Sinanos', subscribers: '67' },
//         { name: 'George Sinanos', subscribers: '67' },
//         { name: 'George Sinanos', subscribers: '67' },
//         { name: 'George Sinanos', subscribers: '67' },
//         { name: 'George Sinanos', subscribers: '67' },
//       ],
//     }
//     this.scrollDiv = React.createRef();
//   }
//   channelCards = (event) => {
//     var channel_cards = []
//     console.log('wkndmkwnd', this.state.channels)
//     for (var i = 0; i < items.length; i++) {
//       console.log('first')
//       channel_cards.push(
//         <Card key={i} className='channelCard'>
//           <span className='channelCardCenter'>{items[i].title}</span>
//           <span className='channelCardBottom'>8909 subscribers</span>
//           {/* <Image
//                         src={require(`../assets/images/amazonObject1.jpg`)}
//                         style={{ width: '50%', height: '50%' }}
//                       /> */}
//         </Card>
//       )
//     }
//     return channel_cards
//   }

//   leftScroll = (event) => {
//     console.log('leftScroll',event)
//     this.scrollDiv.scrollLeft -= 200
//   }
//   rightScroll = (event) => {
//     console.log('rightScroll',event)
//     this.scrollDiv.scrollLeft += 200
//   }
//   render() {
//     console.log('channelCards', this.channelCards)
//     return (
//       <div className='d-flex'>
//         <Button
//           variant='fab'
//           aria-label='Add'
//           className='buttonScroll'
//           onClick={this.leftScroll}
//         >
//           <ArrowLeft color='royalblue' />
//         </Button>
//         <div className='d-flex' ref={this.scrollDiv}>
//           {this.channelCards()}
//         </div>
//         <Button
//           variant='fab'
//           aria-label='Add'
//           className='buttonScroll'
//           onClick={this.rightScroll}
//         >
//           <ArrowRight color='royalblue' />
//         </Button>
//       </div>
//     )
//   }
// }



import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons'
import { Col } from 'react-bootstrap';
const getItems = () =>
  Array(50)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

    function Card({ onClick, selected, title, itemId }) {
      const visibility = React.useContext(VisibilityContext);
    
      return (
        <Col
          // onClick={() => onClick(visibility)}
          style={{
            width: '500px',
          }}
          tabIndex={0}
        >
          <div className="card">
            <div>{title}</div>
            {/* <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div> */}
            {/* <div>selected: {JSON.stringify(!!selected)}</div> */}
          </div>
          <div
            style={{
              // height: '200px',
            }}
          />
        </Col>
      );
    }
    
function SecondLevelSlideShow() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    <Col className='d-flex col-12 text-black flex-wrap'>
      {items.map(({ id }) => (
       <Card
       itemId={id} // NOTE: itemId is required for track items
       title={id}
       key={id}
       onClick={handleClick(id)}
       selected={isItemSelected(id)}
     />
      ))}
      </Col>
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    // <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
    //   Left
    // </Arrow>
    <ArrowLeft color='royalblue' disabled={isFirstItemVisible} onClick={() => scrollPrev()}/>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    // <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
    //   Right
    // </Arrow>
     <ArrowRight color='royalblue' disabled={isLastItemVisible} onClick={() => scrollNext()} />
  );
}


export default SecondLevelSlideShow


{/* <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
<Col className='d-flex col-12 text-black flex-wrap'>
  {items.map(({ id }) => (
    <p className='text-black'>Apsel</p>
  ))}
  </Col>
</ScrollMenu> */}