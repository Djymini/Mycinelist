import {createTheme} from '@mui/material/styles';

const mycinelistTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 480,
            md: 768,
            lg: 1004,
            xl: 1440,
        },
    },
});

export default mycinelistTheme;