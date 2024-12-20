import {FC, useContext} from 'react';
import {Box, Button, Card, Stack, TextField, useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";
import {SubmitHandler, useForm} from "react-hook-form";

interface LoginFormInput {
    email: string
    password: string
}

const LoginForm: FC<{}> = ({}) => {
    const theme = useTheme()
    const navigate = useNavigate()
    const authContext = useContext(AuthContext)
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
        console.log(data)
        console.log(errors);
        authContext?.setIsLogged(true)
        navigate('/Home');
    }

    return (
        <Card sx={{
            bgcolor: theme.palette.background.paper,
            p: 2,
            width: 300,
        }}>
            <Box
                color="white"
                component="form"
                sx={{'& > :not(style)': {m: 1, width: '25ch'}}}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    <TextField label="Email" variant="outlined" {...register("email")}/>
                    <TextField label="Mot de passe" variant="outlined" {...register("password")} />
                    <Button variant="contained" type="submit">Connexion</Button>
                </Stack>
            </Box>
        </Card>
    );
};

export default LoginForm;