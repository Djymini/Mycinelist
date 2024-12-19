import React, {useState} from 'react';
import {FC} from 'react';
import ElementCarousel from "./ElementCarousel";
import ButtonNavigateRight from "./ButtonNavigateRight";
import ButtonNavigateLeft from "./ButtonNavigateLeft";



const CarouselHomePage: FC<{}> = ({}) => {
    const [indexCarousel, setIndexCarousel] = useState(0);

    function handleNavigateLeft() {
        if(indexCarousel === 0){
            setIndexCarousel(2);
        }
        else {
            setIndexCarousel(indexCarousel - 1)
        }
    }

    function handleNavigateRight() {
        if (indexCarousel === 2) {
            setIndexCarousel(0);
        } else {
            setIndexCarousel(indexCarousel + 1)
        }
    }
    return (
        <section className="section-carousel" >
            <ButtonNavigateLeft changeCarousel={handleNavigateLeft} />
            <ElementCarousel indexNavigation={indexCarousel} />
            <ButtonNavigateRight changeCarousel={handleNavigateRight} />
        </section>
    );
};

export default CarouselHomePage;
