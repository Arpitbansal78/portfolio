import './App.css';

function App() {
  return (
    <section className="app">
      {/* <div class="wave">
          <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
            <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: "none", fill:"black"}}></path>
          </svg>
        </div> */}
      <div className="head-image">
        <img src={process.env.PUBLIC_URL+'main.jpeg'}/>
      </div>
      <div className='main'>
        <div className="marquee marquee10">
          <div className="marquee__group">
            Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence
          </div>
          <div aria-hidden="true" class="marquee__group">
            Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence
          </div>
        </div>
        <div className="marquee marquee20">
          <div className="marquee__group">
            Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence
          </div>
          <div aria-hidden="true" class="marquee__group">
            Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence
          </div>
        </div>
        <div className="marquee marquee30">
          <div className="marquee__group">
            Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence
          </div>
          <div aria-hidden="true" class="marquee__group">
            Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence
          </div>
        </div>
        <div className="marquee marquee40">
          <div className="marquee__group">
            Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence
          </div>
          <div aria-hidden="true" class="marquee__group">
            Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence
          </div>
        </div>
        <div className="marquee marquee50">
          <div className="marquee__group">
            Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence
          </div>
          <div aria-hidden="true" class="marquee__group">
            Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default App;
