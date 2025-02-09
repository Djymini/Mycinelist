import React, {FC, useRef} from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MovieItem from "../explorer/MovieItem";
import {ButtonCarousel} from "../../_styles/CarouselListStyle";
import {palletteColor} from "../../_styles/palletteColor";

const CarouselList: FC<{ name: string, item: any[] }> = ({name, item}) => {
    const allItemsRef = useRef<HTMLDivElement | null>(null);


    const scroll = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
        if (ref.current) {
            const scrollAmount = 272;
            ref.current.scrollBy({
                left: direction === "right" ? scrollAmount : -scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <Box sx={{width: '100%', margin: "0 auto 128px auto", borderTop: `2px solid ${palletteColor.borderColor}`, paddingTop: '18px'}}>
            <Typography variant="h5" sx={{mb: 2, color: "white", marginLeft: "30px", fontWeight: 500, fontFamily: "Chakra Petch, serif", fontSize: '40px', textAlign: "center"}}>
                {name}
            </Typography>

            <Box sx={{display: "flex", alignItems: "center", marginBottom: "50px", width: "100%"}}>
                <button onClick={() => scroll(allItemsRef, "left")} style={ButtonCarousel}>
                    <ArrowBackIosIcon sx={{width: "20px", height: "20px", margin: 'auto 0 auto 8px'}}/>
                </button>

                <Box ref={allItemsRef} sx={{display: "flex", overflowX: "hidden", gap: '20px', scrollBehavior: "smooth", width: "auto", margin: "0", padding: '16px 0'}}>
                    {item.map((element, index) => (<MovieItem movie={element} key={index} />))}
                </Box>

                <button onClick={() => scroll(allItemsRef, "right")} style={ButtonCarousel}>
                    <ArrowForwardIosIcon sx={{width: "20px", height: "20px", margin: 'auto'}}/>
                </button>
            </Box>
        </Box>
    );
};

export default CarouselList;
