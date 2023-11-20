"use client";

import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useAuthStore } from "@/store/zustand";
import { Avatar, Box, styled, Typography } from "@mui/material";
import { ToastContainer } from 'react-toastify';

import { ReactiveButton } from "@/components/button";
import { InputField } from "@/components/input_field";

import "react-toastify/dist/ReactToastify.css";

const ToastContainerBox = styled(ToastContainer)(() => ({
    top: '0!important',
    right: '0!important',
    maxWidth: '50%!important',
    width: 'auto!important',
    "& .Toastify__toast-body": {
        color: "#000",
    }
}))

export const Login = () => {

    const router = useRouter()
    const { uname, pass, setCredentials } = useAuthStore();
    const [isMark, setIsMark] = useState(true)

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://shserver.top:8080/test/users/login', {
                uname: uname,
                pass: pass,
            });
            if (response.data) {
                console.log('Login successful!');
                console.log(response.data);
                router.push('/successfulLogin')
            }
        } catch (error) {
            setIsMark(false)
            console.error('An error occurred during login:', error);
        }
    };

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCredentials(e.target.value, pass);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCredentials(uname, e.target.value);
    };

    return <>
        <ToastContainerBox style={{ position: 'absolute' }} />
        <Box display='flex' flexDirection='column' alignItems='center' mt={5}>
            <Avatar sx={{ m: 1, bgcolor: 'blue.light' }}>
            </Avatar>
            <Typography component="h1" variant="h5">
                Login
            </Typography>

            <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                <InputField label="UserName" autoComplete="username" value={uname} onChange={handleUsernameChange} />
                <InputField label="Password" autoComplete="current-password" value={pass} onChange={handlePasswordChange} />

                <ReactiveButton text="Login" isMark={isMark} />
            </Box>
        </Box>
    </>
}
