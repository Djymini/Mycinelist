import React, {FC, useEffect} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/AuthentificationContext";
import {SubmitHandler, useForm} from "react-hook-form";
import axios from 'axios';
import {deleteCineDb, postCineDb, putCineDb} from "../../api/api";

interface SubscribeFormInput {
    email: string
    password: string
    passwordConfirm: string
}

const SubscribeForm: FC<{}> = ({}) => {
    const navigate = useNavigate()

    const registerSubcribe = (registerInput: SubscribeFormInput) => {
        const data = {
            mail: registerInput.email,
            password: registerInput.password,
        }

        postCineDb('/user', data)
    }

    const updateSubcribe = (registerInput: SubscribeFormInput) => {
        const data = {
            mail: registerInput.email,
            password: registerInput.password,
        }

        let test = putCineDb('/user/103', data)
        console.log(test)
    }

    const deleteSubcribe = (registerInput: SubscribeFormInput) => {
        let test = deleteCineDb('/user/103')
        console.log(test)
    }

    const onSubmit: SubmitHandler<SubscribeFormInput> = (data) => {
        console.log(data)
        registerSubcribe(data);
    };

    const {register, handleSubmit, formState: {errors}, watch } = useForm({
        defaultValues: {
            email: "",
            password: "",
            passwordConfirm: "",
        },
        criteriaMode: "all",
    })


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
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField
                id="email" label="Entrez votre adresse mail" variant="outlined"
                sx={{marginBottom: 8, width: '100%', fontFamily: 'Chakra Petch, serif', fontSize: '16px', color: '#1B263B'}}
                {...register("email", {required: "L'email est requis",
                    pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "L'adresse e-mail n'est pas valide"}})}
                error={!!errors.email}
                helperText={errors.email?.message}
            />
            <TextField
                id="password" label="Entrez votre mot de passe" variant="outlined" type="password"
                sx={{marginBottom: 1, width: '100%', fontFamily: 'Chakra Petch, serif', fontSize: '16px', color: '#1B263B'}}
                {...register("password", {required: "Un mot de passe est requis"})}
                error={!!errors.password}
                helperText={errors.password?.message}
            />
            <TextField
                id="password" label="Entrez à nouveau votre du mot de passe" variant="outlined" type="password"
                sx={{marginBottom: 1, width: '100%', fontFamily: 'Chakra Petch, serif', fontSize: '16px', color: '#1B263B'}}
                {...register("passwordConfirm", {required: "Veuillez confirmer le mot de passe",
                    validate: value => value === watch("password") || "Les mots de passe ne correspondent pas" })}
                error={!!errors.passwordConfirm}
                helperText={errors.passwordConfirm?.message}
            />
            <Button
                variant="contained"
                sx={{marginBottom: 3, width: '100%', padding: '10px', fontFamily: 'Chakra Petch, serif', fontSize: '16px'}} type="submit">
                Valider Inscription
            </Button>
        </Box>
    );
};

export default SubscribeForm;
