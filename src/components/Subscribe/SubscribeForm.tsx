import React, {FC, useEffect, useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {deleteCineDb, postCineDb} from "../../api/api";
import {useAuth} from "../../contexts/AuthentificationContext";

interface SubscribeFormInput {
    username: string;
    email: string
    password: string
    passwordConfirm: string
}

const SubscribeForm: FC<{}> = ({}) => {
    const {dispatch} = useAuth()
    const [dataConnection, setDataConnection] = useState<object>({})
    const navigate = useNavigate()
    const [userIsSubscribe, setUserIsSubscribe] = useState<boolean>(false);

    const registerSubcribe = async (registerInput: SubscribeFormInput) => {
        const data = {
            email: registerInput.email,
            password: registerInput.password,
            username: registerInput.username,
        }
        setDataConnection({email: registerInput.email, password: registerInput.password})

        let response: any;
        let isPending = true;

        try {
            response = await postCineDb('/auth/register', data);
            console.log(response);
            if (response.status === 200) {
                setUserIsSubscribe(true);
            }
            else {
                if((response.response === "Error: Email is already in use!")){
                    console.log("erreur");
                    setError("email", {
                        type: "manual",
                        message: "L'email est déjà utilisé",
                    });
                } else if (response.response.password === "Mot de passe invalide") {
                    console.log("erreur2");
                    setError("password", {
                        type: "manual",
                        message: "Mot de passe non conforme il doit avoir : minimum 8 caractères, une majuscule, une miniscule, un chiffre et un caractère spécial",
                    });
                    setError("passwordConfirm", {
                        type: "manual",
                        message: "Mot de passe non conforme il doit avoir : minimum 8 caractères, une majuscule, une miniscule, un chiffre et un caractère spécial",
                    });
                }
            }
        } catch (error) {
            isPending = false;
            console.error('Erreur lors de la connexion:', error);
        }

        return {response, isPending};
    }

    const onSubmit: SubmitHandler<SubscribeFormInput> = (data) => {
        registerSubcribe(data);
    };

    const {register, handleSubmit, formState: {errors},setError, watch } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
            passwordConfirm: "",
        },
        criteriaMode: "all",
    })

    const goToHome = () => {
        navigate('/Home');
    };

    const connection = async () => {
        try {
            const response = await postCineDb('/auth/login', dataConnection);
            console.log(response);
            if (response.status === 200) {
                dispatch({type: 'LOGIN', payload: {token: response.data}})
                setTimeout(() => {
                    navigate('/');
                }, 50);
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }
    };


    return (
        <Box
            component="form"
            sx={{margin: '150px auto', height: 'auto', width: '25vw', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', backgroundColor: '#8296B0', borderRadius: 2, boxShadow: 2,
                padding: '96px 32px 96px 32px',}}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            {!userIsSubscribe ? (
                <>
                    <TextField
                        id="email" label="Entrez votre nom d'utilisateur" variant="outlined"
                        sx={{
                            marginBottom: 8,
                            width: '100%',
                            fontFamily: 'Chakra Petch, serif',
                            fontSize: '16px',
                            color: '#1B263B'
                        }}
                        {...register("username", {
                            required: "Nom d'utilisateur requis",
                            min: {value: 2, message: "nom trop court le doit comporter minimum 2 caractères"},
                            max: {value: 20, message: "nom trop long le doit comporter maximum 20 caractères"}
                        })}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />
                    <TextField
                        id="email" label="Entrez votre adresse mail" variant="outlined"
                        sx={{
                            marginBottom: 8,
                            width: '100%',
                            fontFamily: 'Chakra Petch, serif',
                            fontSize: '16px',
                            color: '#1B263B'
                        }}
                        {...register("email", {
                            required: "L'email est requis",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "L'adresse e-mail n'est pas valide"
                            }
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    <TextField
                        id="password" label="Entrez votre mot de passe" variant="outlined" type="password"
                        sx={{
                            marginBottom: 1,
                            width: '100%',
                            fontFamily: 'Chakra Petch, serif',
                            fontSize: '16px',
                            color: '#1B263B'
                        }}
                        {...register("password", {required: "Un mot de passe est requis"})}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    <TextField
                        id="password" label="Entrez à nouveau votre du mot de passe" variant="outlined" type="password"
                        sx={{
                            marginBottom: 1,
                            width: '100%',
                            fontFamily: 'Chakra Petch, serif',
                            fontSize: '16px',
                            color: '#1B263B'
                        }}
                        {...register("passwordConfirm", {
                            required: "Veuillez confirmer le mot de passe",
                            validate: value => value === watch("password") || "Les mots de passe ne correspondent pas"
                        })}
                        error={!!errors.passwordConfirm}
                        helperText={errors.passwordConfirm?.message}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            marginBottom: 3,
                            width: '100%',
                            padding: '10px',
                            fontFamily: 'Chakra Petch, serif',
                            fontSize: '16px'
                        }} type="submit">
                        Valider Inscription
                    </Button>
                </>
            )
                :
                (
                    <>
                        <h2>Votre inscription est faites ! Bienvenue</h2>
                        <Button
                            variant="contained"
                            sx={{
                                marginBottom: 3,
                                width: '100%',
                                padding: '10px',
                                fontFamily: 'Chakra Petch, serif',
                                fontSize: '16px'
                            }}
                            onClick={connection}
                        >
                            Se connecter
                        </Button>

                        <Button
                            variant="contained"
                            sx={{
                                marginBottom: 3,
                                width: '100%',
                                padding: '10px',
                                fontFamily: 'Chakra Petch, serif',
                                fontSize: '16px'
                            }} onClick={goToHome}>
                            Retour à l'accueil
                        </Button>
                    </>
                )}

        </Box>
    );
};

export default SubscribeForm;
