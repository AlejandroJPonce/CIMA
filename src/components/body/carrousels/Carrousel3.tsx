import "/public/styles/Carousel3.scss";

export default function Carousel3() {
  return (
    <>
      <div className="cards-main-box">
        <div className="cards-main-section">
          <div className="slider">
            <div className="slides">
              <div id="slide-1">
                <img
                  className="carrousel-image"
                  src="/src/assets/test-images/uno.png"
                  alt=""
                />
              </div>
              <div id="slide-2">
                <img
                  className="carrousel-image"
                  src="/src/assets/test-images/dos.png"
                  alt=""
                />
              </div>
              <div id="slide-3">
                <img
                  className="carrousel-image"
                  src="/src/assets/test-images/tres.png"
                  alt=""
                />
              </div>
              <div id="slide-4">
                <img
                  className="carrousel-image"
                  src="/src/assets/test-images/cuatro.png"
                  alt=""
                />
              </div>
              <div id="slide-5">
                <img
                  className="carrousel-image"
                  src="/src/assets/test-images/cinco.png"
                  alt=""
                />
              </div>
              <div id="slide-6">
                <img
                  className="carrousel-image"
                  src="/src/assets/test-images/seis.png"
                  alt=""
                />
              </div>
            </div>
            {/* <a href="#slide-1">1</a>
          <a href="#slide-2">2</a>
          <a href="#slide-3">3</a>
          <a href="#slide-4">4</a>
          <a href="#slide-5">5</a>
          <a href="#slide-6">6</a>
          <a href="#slide-7">7</a>
          <a href="#slide-8">8</a> */}
          </div>
        </div>
      </div>
    </>
  );
}
