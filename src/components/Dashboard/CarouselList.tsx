import React, {FC, useRef} from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MovieItem from "../explorer/MovieItem";
import {ButtonCarousel} from "../../_styles/CarouselListStyle";

const CarouselList: FC<{ name: string, item: any[] }> = ({name, item}) => {
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
        <Box sx={{width: '98%', margin: "80px auto"}}>
            <Typography variant="h5" sx={{mb: 2, color: "white", marginLeft: "30px", fontWeight: 500, fontFamily: "Chakra Petch, serif", fontSize: '40px', textAlign: "center"}}>
                {name}
            </Typography>

            <Box sx={{display: "flex", alignItems: "center", backgroundColor: "#1B263B", marginBottom: "50px", borderRadius: '16px'}}>
                <button onClick={() => scroll(allItemsRef, "left")} style={ButtonCarousel}>
                    <ArrowBackIosIcon sx={{width: "22px", height: "20px", marginLeft: "5px"}}/>
                </button>

                <Box ref={allItemsRef} sx={{display: "flex", overflowX: "hidden", gap: 2, padding: 1, scrollBehavior: "smooth", width: "100%", margin: "8px 0 0 0",}}>
                    {item.map((element, index) => (<MovieItem movie={element}/>))}
                </Box>

                <button onClick={() => scroll(allItemsRef, "right")} style={ButtonCarousel}>
                    <ArrowForwardIosIcon sx={{width: "22px", height: "20px",}}/>
                </button>
            </Box>
        </Box>
    );
};

export default CarouselList;
