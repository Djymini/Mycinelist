import React, {FC} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/AuthentificationContext";
import {SubmitHandler, useForm} from "react-hook-form";

interface LoginFormInput {
    email: string
    password: string
}

const LoginForm: FC<{}> = ({}) => {
    const navigate = useNavigate()
    const {dispatch} = useAuth()

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
        console.log(data)
        console.log(errors);
        // Simulation d'une requête d'authentification
        const fakeToken = '12345'; // Normalement obtenu depuis l'API
        dispatch({type: 'LOGIN', payload: {token: fakeToken}})
        setTimeout(() => {
            navigate('/');
        }, 50);
    };


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
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                sx={{marginBottom: 8, width: '100%', fontFamily: 'Chakra Petch, serif', fontSize: '16px', color: '#1B263B'}}
                {...register("email")}
            />
            <TextField
                id="password"
                label="Mot de passe"
                variant="outlined"
                type="password"
                sx={{marginBottom: 1, width: '100%', fontFamily: 'Chakra Petch, serif', fontSize: '16px', color: '#1B263B'}}
                {...register("password")}
            />
            <a id="form-link-mdp" href="">Mot de passe oublié ?</a>
            <Button
                variant="contained"
                sx={{marginBottom: 3, width: '100%', padding: '10px', fontFamily: 'Chakra Petch, serif', fontSize: '16px'}}
                type="submit"
            >
                Se connecter
            </Button>
            <a id="form-link-sign" href="">S'inscrire</a>
        </Box>
    );
};

export default LoginForm;
