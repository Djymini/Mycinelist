import React, { useState, FC, useContext } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { GenreData } from "../../_data/GenreData";
import Box from "@mui/material/Box";
import { ExpContext } from "../../contexts/ExplorerContext";

const DrawerCheckBoxList: FC<{}> = ({}) => {
    const expContext = useContext(ExpContext);

    // Utilisation d'un état pour suivre les genres sélectionnés
    const [selectedGenres, setSelectedGenres] = useState<number[]>([]); // Liste des genres sélectionnés (par ID)
    const [open, setOpen] = useState(true);
    const [checkedGenres, setCheckedGenres] = useState<boolean[]>(new Array(GenreData.length).fill(false));

    const handleClick = () => {
        setOpen(!open);
    };

    const handleCheckboxChange = (index: number, genreId: number) => {
        // Créer une copie de l'état des cases à cocher pour les mettre à jour
        const newCheckedGenres = [...checkedGenres];
        newCheckedGenres[index] = !newCheckedGenres[index];  // Inverse l'état de la case à cocher
        setCheckedGenres(newCheckedGenres);

        // Mettre à jour la liste des genres sélectionnés
        if (newCheckedGenres[index]) {
            setSelectedGenres(prev => [...prev, genreId]);  // Ajouter l'ID du genre si la case est cochée
        } else {
            setSelectedGenres(prev => prev.filter(id => id !== genreId));  // Retirer l'ID si la case est décochée
        }
    };

    // Mettre à jour le contexte chaque fois que la liste des genres sélectionnés change
    React.useEffect(() => {
        expContext?.setGenre(selectedGenres.toString());
    }, [selectedGenres, expContext]);

    return (
        <Box>
            <ListItemButton onClick={handleClick} sx={{ padding: '0' }}>
                <h4>Genres</h4>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <FormGroup sx={{ marginLeft: '24px' }}>
                    {GenreData.map((genre, index) => (
                        <FormControlLabel
                            key={genre.id}
                            control={
                                <Checkbox
                                    checked={checkedGenres[index]} // Utilisation de l'état pour déterminer si la case est cochée
                                    onChange={() => handleCheckboxChange(index, genre.id)}
                                    sx={{ color: '#E0E1DD' }}
                                />
                            }
                            label={genre.name}
                        />
                    ))}
                </FormGroup>
            </Collapse>
        </Box>
    );
};

export default DrawerCheckBoxList;
