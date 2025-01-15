import React, { FC, useRef} from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import CastItem from "../MovieDetails/CastItem";
import {CastType} from "../../@types/CastType";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {buttonNavCarousel} from "../../_styles/carouselStyle";

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
        <Box sx={{width: '98%', margin: "60px auto"}}>
            <Typography variant="h5" sx={{mb: 2, color: "white", marginLeft: "30px", fontWeight: 500,fontFamily: "Chakra Petch, serif" }}>
                {name}
            </Typography>
            <Box sx={{display: "flex", alignItems: "center", backgroundColor: "#1B263B", marginBottom:"50px", borderRadius: '16px'}}>
                <button onClick={() => scroll(allItemsRef, "left")} style={buttonNavCarousel}>
                    <ArrowBackIosIcon sx={{width: "22px", height: "20px", marginLeft: "5px"}}/>
                </button>

                <Box ref={allItemsRef} sx={{display: "flex", overflowX: "hidden", gap: 2, padding: 2, scrollBehavior: "smooth", width: "100%", margin: "auto",}}>
                    {item.map((element, index) => (<CastItem index={index} cast={element}/>))}
                </Box>

                <button onClick={() => scroll(allItemsRef, "right")} style={buttonNavCarousel}>
                    <ArrowForwardIosIcon sx={{width: "22px", height: "20px",}}/>
                </button>
            </Box>
        </Box>
    );
};

export default CarouselDetails;
