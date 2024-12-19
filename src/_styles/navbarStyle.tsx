import {styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button, {ButtonProps} from "@mui/material/Button";

const yinMinBlue = '#415A77';
const sylverLakeBlue = '#8296B0';
const richBlack = '#0D1B2A';

export const Search = styled('div')(({theme}) => ({
    color: richBlack,
    fontFamily: '"Kanit", serif',
    position: 'relative',
    height: '72px',
    borderRadius: 64,
    backgroundColor: yinMinBlue,
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)',
    '&:hover': {
        backgroundColor: sylverLakeBlue,
    },
    marginLeft: 0,
    marginRight: '1.5vw',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    fontSize: '20px',
    marginLeft: '16px',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(0, 1, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '214px',
            '&:focus': {
                width: '300px',
            },
        },
    },
}));

export const LogButton = styled(Button)<ButtonProps>(({theme}) => ({
    color: richBlack,
    fontFamily: '"Kanit", serif',
    textTransform: 'none',
    height: '72px',
    fontSize: '20px',
    borderRadius: '64px',
    backgroundColor: yinMinBlue,
    '&:hover': {
        backgroundColor: sylverLakeBlue,
    },
}));