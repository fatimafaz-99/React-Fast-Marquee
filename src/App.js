import Marquee from 'react-fast-marquee'
import img1 from './shoesimages/shoe1.avif'
import img2 from './shoesimages/shoe2.avif'
import img3 from './shoesimages/shoe3.avif'
import img5 from './shoesimages/shoe5.avif'
import img6 from './shoesimages/shoe6.avif'

import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='title' class="titlename">
          <h1>Shoes Design Slider</h1>
      </div>

      <div class="maruqeeElements">
        <Marquee speed={350} >
          <div>
            <img src={img1} alt="" height={580}/>
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          
          <div>
            <img src={img5} alt="" />
          </div>
          
          <div>
            <img src={img6} alt="" />
          </div>
          
          
        </Marquee>
      </div>
    </div>

    
  );
}

export default App;
