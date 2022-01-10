import React from 'react'
import { Carousel } from 'react-carousel-minimal'
import Spacer from '../common/Spacer'

const Galeri = () => {
  const data = [
    {
      image: '/assets/img/galeri/galeri-siir1.png',
      caption: ``,
    },
    {
      image: '/assets/img/galeri/galeri-siir2.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir3.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir4.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir5.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir6.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir7.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir8.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir9.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir10.png',
      caption: ``,
    },
    {
      image: '/assets/img/galeri/galeri-siir11.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir12.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir13.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir14.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir16.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir17.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir18.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir19.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir20.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir21.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir22.png',
      caption: '',
    },
    {
      image: '/assets/img/galeri/galeri-siir23.png',
      caption: '',
    },
  ]

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '0 20px',
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="600px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="fill"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: 'center',
              maxWidth: '850px',
              maxHeight: '700px',
              margin: '20px auto',
            }}
          />
        </div>
      </div>
      <Spacer />
    </div>
  )
}

export default Galeri
