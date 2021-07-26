import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
const Gallery = () => {
  return (
    <>
        <h1>Gallery</h1>
        <div className="gallery-arrow">
            <FaChevronLeft />
            <span className="item-away">Go Away</span>
        </div>
        <div className="gallery-item">
            <div className="img-container">
                <img src='https://picsum.photos/400' alt="random" />
            </div>
            <div className="notes-container">
                <h2>Title</h2>
                <span className="item-desc">desdkld daskjdsldsa ,hjdasdsa  sadkljdlmdsa, mdjdlaksjdsalkudsal daskhjdsalkjdssad</span>
                <span className="item-price">$123.45</span>
            </div>
        </div>
        <div className="gallery-arrow">
            <span className="item-keep">Keep</span>
            <FaChevronRight />
        </div>
    </>
  );
};
export default Gallery;