import React from 'react';
import LazyLoadImage  from 'react-lazy-load-image-component';

const LazyImage = (props) => (
    <div>
        <LazyLoadImage
            alt={props.alt}
            height={props.height}
            src={props.src} // use normal <img> attributes as props
            width={props.width} />
        <span>{props.caption}</span>
    </div>
);

export default LazyImage;