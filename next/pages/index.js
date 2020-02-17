import { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import Slider from "react-slick";

import Products from './components/ProductCategories/Products';
import NextArrow from './components/ProductCategories/components/NextArrow';
import PrevArrow from './components/ProductCategories/components/PrevArrow';
import { get } from '../services/http';

import './styles.scss';

function Home(props) {
    const [categoryActive, setCategoryActive] = useState({});

    const { categories } = props;

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                nav: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                nav: false,
              }
            }
          ]
    };

    useEffect(() => {
        if (categories && !categoryActive.id) {
            categories[0].category_selected = true;
            setCategoryActive(categories[0]);
        }
    }, []);

    function selectCategory(category) {
        if (category.products.length <= 0) return;
        categories.map(cat => cat.category_selected = false);
        category.category_selected = true;
        setCategoryActive(category);
    }

    return (
        <>
            <div className="navCategories mt-1 pt-4 pb-4">
                <Container>
                    <h6 className="question">O que deseja pedir hoje?</h6>

                    <Slider {...settings}>
                        {categories.map(category =>
                            <Card key={category.id} 
                                className={
                                    `card text-center ${category.category_selected === true ? ' selected ' : ''} 
                                    ${category.__meta__.products_count <= 0 ? 'inactive' : 'active' }`}
                                onClick={() => selectCategory(category)}
                            >
                                <Card.Img variant="top" src={category.image_url} />
                                <Card.Body>
                                    <Card.Title>{category.name} {} ({category.__meta__.products_count})</Card.Title>
                                </Card.Body>
                            </Card>
                        )}
                    </Slider>
                </Container>
            </div>

            <Container>
                {categoryActive && <Products products={categoryActive.products} {...props} />}
            </Container>
        </>
    );

}

Home.getInitialProps = async ctx => {
    const categories = await get('/category')
    return { categories: categories }
}

export default Home;