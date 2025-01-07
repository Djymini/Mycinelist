import React, {FC} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const LoginForm: FC<{}> = ({}) => {
    return (
        <Box
            component="form"
            sx={{
                margin: '150px auto',
                height: 'auto',
                width: '25vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#8296B0',
                borderRadius: 2,
                boxShadow: 2,
                padding: '96px 32px 96px 32px',
                '& a': {
                    color: '#1B263B',
                    width: '100%',
                    fontSize: '20px',
                    marginTop: '10px',
                }
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                sx={{marginBottom: 8, width: '100%', fontFamily: 'Chakra Petch, serif', fontSize: '16px', color: '#1B263B'}}
            />
            <TextField
                id="password"
                label="Mot de passe"
                variant="outlined"
                type="password"
                sx={{marginBottom: 1, width: '100%', fontFamily: 'Chakra Petch, serif', fontSize: '16px', color: '#1B263B'}}
            />
            <a id="form-link-mdp" href="">Mot de passe oublié ?</a>
            <Button
                variant="contained"
                sx={{marginBottom: 3, width: '100%', padding: '10px', fontFamily: 'Chakra Petch, serif', fontSize: '16px'}}
            >
                Se connecter
            </Button>
            <a id="form-link-sign" href="">S'inscrire</a>
        </Box>
    );
};

export default LoginForm;
