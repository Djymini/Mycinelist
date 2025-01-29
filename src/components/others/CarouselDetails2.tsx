import React, {FC, useEffect, useRef, useState} from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import CastItem from "../MovieDetails/CastItem";
import {CastType} from "../../@types/CastType";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {buttonNavCarousel} from "../../_styles/carouselStyle";
import {ButtonCarousel} from "../../_styles/CarouselListStyle";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

const CarouselDetails: FC<{name: string, item: any[]}> = ({name, item}) => {
    const allItemsRef = useRef<HTMLDivElement | null>(null);
    const [category, setCategory] = useState('Directing');
    const [crew, setCrew] = useState<any[]>([]);

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
    };

    useEffect(() => {
        setCrew(item.filter((item) => item.known_for_department === category));
    }, [category]);

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
        <Box sx={{width: '100%',color: "white"}}>
            <FormControl sx={{m: 1, minWidth: '392px'}} size="small">
                <InputLabel id="demo-select-small-label" sx={{color: 'white'}}>{name}</InputLabel>
                <Select labelId="demo-select-small-label" id="demo-select-small" value={category} label="Age" onChange={handleChange} sx={{
                    fontStyle: 'italic',
                    fontFamily: 'inherit',
                    fontWeight: 600,
                    fontSize: '30px',
                    color: 'inherit',
                }}>
                    <MenuItem value={"Directing"}>Réalisation</MenuItem>
                    <MenuItem value={"Production"}>Production</MenuItem>
                    <MenuItem value={"Camera"}>Image</MenuItem>
                    <MenuItem value={"Sound"}>Son</MenuItem>
                    <MenuItem value={"Art"}>Artistique</MenuItem>
                    <MenuItem value={"Editing"}>Edition</MenuItem>
                    <MenuItem value={"Writing"}>Ecriture</MenuItem>
                    <MenuItem value={"Crew"}>Equipe technique</MenuItem>
                    <MenuItem value={"Costume & Make-Up"}>Costume & Maquillage</MenuItem>
                </Select>
            </FormControl>

            <Box sx={{display: "flex", alignItems: "center", justifyItems: 'center'}}>
                <button onClick={() => scroll(allItemsRef, "left")} style={ButtonCarousel}>
                    <ArrowBackIosIcon sx={{width: "22px", height: "20px", marginLeft: "5px"}}/>
                </button>

                <Box ref={allItemsRef} sx={{display: "flex", overflowX: "hidden", gap: 2, scrollBehavior: "smooth", width: "100%", paddingTop: '16px'}}>
                    {crew.map((element, index) => (<CastItem index={index} title={element.name} subTitle={element.job} img={element.profile_path}/>))}`
                </Box>

                <button onClick={() => scroll(allItemsRef, "right")} style={ButtonCarousel}>
                    <ArrowForwardIosIcon sx={{width: "22px", height: "20px",}}/>
                </button>
            </Box>
        </Box>
    );
};

export default CarouselDetails;
