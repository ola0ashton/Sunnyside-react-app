import React from 'react';
import image6 from '../images/desktop/image-gallery-milkbottles.jpg'
import image7 from '../images/desktop/image-gallery-orange.jpg'
import image8 from '../images/desktop/image-gallery-cone.jpg'
import image9 from '../images/desktop/image-gallery-sugarcubes.jpg'

const Pictures = () => {
  return (
    <section className= "beforefooter">
       <img src= {image6} alt="Milkbottles" />
       <img src= {image7} alt="Orange" />
       <img src= {image8} alt="Cone" />
      <img src= {image9} alt="Sugarcubes" />
    </section>
  );
}

export default Pictures;