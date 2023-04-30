import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './MySlider.scss';

const MySlider = () => {
  return (
    <div className="mySlider">
      <div className="hello">
        <Carousel>
          <div>
            <img src="images/products/p1.png" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="images/products/p1.png" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="images/products/p1.png" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="images/products/p1.png" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="images/products/p1.png" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="images/products/p1.png" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="images/products/p1.png" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="images/products/p1.png" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="images/products/p1.png" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default MySlider;
