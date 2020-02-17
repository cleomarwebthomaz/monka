import { Carousel, Image } from "react-bootstrap";

export default function({ images, imageDefault }) {
    return (
        <Carousel indicators={false} interval={2000}>
            <Carousel.Item>
                <Image src={imageDefault} />
            </Carousel.Item>

            {images.map(image => 
                <Carousel.Item key={image.id}>
                    <Image
                        className="d-block w-100"
                        src={image.url}
                        alt={image.url}
                    />
                </Carousel.Item>
            )}
           
        </Carousel>        
    );
}