import Slider from "react-slick";
import { Image } from 'react-bootstrap';

export default function({ images = [] }) {

    const settings = {
        dots: true,
        nav: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
    };

    if (images.length <= 0) return <div />;

    return (
        <Slider {...settings}>
           {images.map(image => 
                <Image key={image.id} src={image.url} />
            )}
        </Slider>
    )

}