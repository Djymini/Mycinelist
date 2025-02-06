import React, {FC, useEffect} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/AuthentificationContext";
import {SubmitHandler, useForm} from "react-hook-form";
import axios from 'axios';
import {postCineDb} from "../../api/api";


interface LoginFormInput {
    email: string
    password: string
}

const LoginForm: FC<{}> = ({}) => {
    const navigate = useNavigate()
    const {dispatch} = useAuth()


    const {register, handleSubmit, formState: {errors}, setError} = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    })


    const loginSubmit = async (loginInput: LoginFormInput) => {
        const data = {
            email: loginInput.email,
            password: loginInput.password,
        };

       let response:any;
        let token = "";
        let isPending = true;

        try {
            response = await postCineDb('/auth/login', data);
            console.log(response);
            if(response.status === 200) {
                dispatch({type: 'LOGIN', payload: {token: response.data}})
                setTimeout(() => {
                    navigate('/');
                }, 50);
            }
            else {
                setError("email", {
                    type: "manual",
                    message: "mail ou mot de passe incorrect",
                });
                setError("password", {
                    type: "manual",
                    message: "mail ou mot de passe incorrect",
                });
            }
        } catch (error) {
            isPending = false;
            console.error('Erreur lors de la connexion:', error);
        }

        return {response, isPending};
    }

    const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
        const token = loginSubmit(data);
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
                {...register("email", {required: "L'email est requis",
                    pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "L'adresse e-mail n'est pas valide"}})}
                error={!!errors.email}
                helperText={errors.email?.message}
            />
            <TextField
                id="password"
                label="Mot de passe"
                variant="outlined"
                type="password"
                sx={{marginBottom: 1, width: '100%', fontFamily: 'Chakra Petch, serif', fontSize: '16px', color: '#1B263B'}}
                {...register("password", {required: "Un mot de passe est requis"})}
                error={!!errors.password}
                helperText={errors.password?.message}
            />
            <a id="form-link-mdp" href="">Mot de passe oublié ?</a>
            <Button
                variant="contained"
                sx={{marginBottom: 3, width: '100%', padding: '10px', fontFamily: 'Chakra Petch, serif', fontSize: '16px'}}
                type="submit"
            >
                Se connecter
            </Button>
            <a id="form-link-sign" href="/Subscribe">S'inscrire</a>
        </Box>
    );
};

export default LoginForm;
