import React, { FC, useRef} from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import CastItem from "../MovieDetails/CastItem";
import {CastType} from "../../@types/CastType";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {buttonNavCarousel} from "../../_styles/carouselStyle";
import {ButtonCarousel} from "../../_styles/CarouselListStyle";

const CarouselDetails: FC<{name: string, item: any[]}> = ({name, item}) => {
    const allItemsRef = useRef<HTMLDivElement | null>(null);

    const scroll = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
        if (ref.current) {
            const scrollAmount = 300;
            ref.current.scrollBy({
                left: direction === "right" ? scrollAmount : -scrollAmount,
                behavior: "smooth",
            });
        }
    };
    return (
        <Box sx={{width: '100%'}}>
            <Typography variant="h5" sx={{color: "white", marginLeft: "30px", fontWeight: 800,fontFamily: "Chakra Petch, serif", fontSize: '30px', fontStyle: 'italic'}}>
                {name}
            </Typography>
            <Box sx={{display: "flex", alignItems: "center", justifyItems: 'center'}}>
                <button onClick={() => scroll(allItemsRef, "left")} style={ButtonCarousel}>
                    <ArrowBackIosIcon sx={{width: "22px", height: "20px", marginLeft: "5px"}}/>
                </button>

                <Box ref={allItemsRef} sx={{display: "flex", overflowX: "hidden", gap: 2, scrollBehavior: "smooth", width: "100%", paddingTop: '16px'}}>
                    {item.map((element, index) => (<CastItem index={index} title={element.name} subTitle={element.character} img={element.profile_path}/>))}`
                </Box>

                <button onClick={() => scroll(allItemsRef, "right")} style={ButtonCarousel}>
                    <ArrowForwardIosIcon sx={{width: "22px", height: "20px",}}/>
                </button>
            </Box>
        </Box>
    );
};

export default CarouselDetails;
