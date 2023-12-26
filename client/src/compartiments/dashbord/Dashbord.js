import React from 'react'
import './Dashbord.css'

const Dashbord = () => {
  return (
        <div id="content-block">
    <div className="content-push">
      <div className="parallax-slide">
        <div className="parallax-clip">
          <div
            className="fixed-parallax"
            style={{
              backgroundImage: "url(https://picsum.photos/1920/1080/?image=967)"
            }}
          ></div>
        </div>
      </div>
      <div className="parallax-slide">
        <div className="parallax-clip">
          <div
            className="fixed-parallax"
            style={{
              backgroundImage: "url(https://picsum.photos/1920/1080/?image=569)"
            }}
          ></div>
        </div>
      </div>
      <div className="parallax-slide">
        <div className="parallax-clip">
          <div
            className="fixed-parallax"
            style={{
              backgroundImage: "url(https://picsum.photos/1920/1080/?image=119)"
            }}
          ></div>
        </div>
      </div>
      <div className="parallax-slide">
        <div className="parallax-clip">
          <div
            className="fixed-parallax"
            style={{
              backgroundImage: "url(https://picsum.photos/1920/1080/?image=507)"
            }}
          ></div>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default Dashbord
