import React from 'react';

import image from '../images/maac.jpg';
import image1 from '../companies/image.png';
import image2 from '../companies/image1.png';
import image3 from '../companies/image2.png';
import image4 from '../companies/image3.png';
import image5 from '../companies/image4.png';
import image6 from '../companies/image5.png';
import image7 from '../companies/image6.png';
import image8 from '../companies/image7.png';
import image9 from '../companies/image8.png';
import image10 from '../companies/image9.png';
import image11 from '../companies/image10.png';
import image12 from '../companies/image11.png';
import image13 from '../companies/image12.png';
import image14 from '../companies/image13.png';
import image15 from '../companies/image14.png';
import image16 from '../companies/image15.jpg';
import image17 from '../companies/image16.jpg';
import image18 from '../companies/image17.png';
import image19 from '../companies/image18.png';
import image20 from '../companies/image19.png';
import image21 from '../companies/image20.png';
import image22 from '../companies/image21.png';


import '../styles/PlacementPage.css'; 

// Array of logo paths
const logoPaths = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
];

const PlacementPage = () => {
//   const svgMarkup = `
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);">
//     <defs>
//       <clipPath id="__lottie_element_2">
//         <rect width="500" height="500" x="0" y="0"></rect>
//       </clipPath>
//       <clipPath id="__lottie_element_5">
//         <path d="M0,0 L1080,0 L1080,1080 L0,1080z"></path>
//       </clipPath>
//       <clipPath id="__lottie_element_10">
//         <path fill="#ffffff" clip-rule="nonzero" d=" M-185,-80.5 C-196.75,-46.25 -188.57899475097656,-45.13199996948242 -186.5,-42.5 C-176.78500366210938,-30.20400047302246 -136.5050048828125,-16.417999267578125 -129.99000549316406,-14.460000038146973 C-125.70700073242188,-13.17300033569336 -128.5,-22.5 -128.5,-22.5 C-128.5,-22.5 -150.5,-47 -157.5,-56.5 C-164.21099853515625,-65.60800170898438 -181.25399780273438,-91.41899871826172 -185,-80.5" fill-opacity="1"></path>
//       </clipPath>
//     </defs>
//     <!-- You can add more SVG elements here to see the clipping paths in action -->
//     <rect x="50" y="50" width="400" height="400" fill="blue" clip-path="url(#__lottie_element_2)" />
//   </svg>
// `;
  return (
    <div className="placement-page">
      <div className="main-content-placement">
        <h1 className="page-heading">Placement</h1>
        <div className="content-container">
          <div className="left-section">
            <h2 className="why-maac-heading">Why MAAC?</h2>
            <p className="why-maac-paragraph">
              MAAC provides job-oriented graphics, animation, VFX, gaming, and digital design courses to students.
              It also offers career development training to prepare students for different job roles in the media
              and entertainment industry globally. Animation studios, gaming studios, publishing houses,
              TV channels, production houses, and advertising agencies are continuously looking out for
              photographers, UI designers, gaming experts, animators, filmmakers, website developers, VFX artists,
              photographers, and graphic designers to work with them. MAAC helps such organizations to find
              skilled and talented individuals who knows the demand of the industry and work as professionals in
              their respective fields.
            </p>
          </div>
          <div className="right-section">
      <div className="image-or-svg">
        <img src={image} alt='maac logo'/>
      </div>
    </div>
        </div>
        <div className="company-logos-grid">
          {logoPaths.map((logoPath, index) => (
            <div 
              key={index}
              className={`company-logo-container ${index >= 24 ? 'last-row' : ''}`}
            >
              <img 
                src={logoPath} 
                alt={`Company logo ${index + 1}`} 
                className="company-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementPage;
