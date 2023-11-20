"use client";

import { Button, styled } from "@mui/material"
import { toast } from "react-toastify";

interface Props {
    text: string,
    isMark?: boolean
}

const ButtonBox = styled(Button)(({ theme }) => ({
    borderRadius: '20px',
    background: `linear-gradient(43deg,${theme.palette.blue.light},${theme.palette.blue.main})`,
    fontWeight: 'bold',
    transition: '0.5s',
    textAlign: 'center',
}))
export const ReactiveButton = ({ text, isMark }: Props) => {

    const notify = () => {
        if (isMark === false) {
            toast.warn('username and password are incorrect! try again', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else return
    }

    return (
        <ButtonBox
            type="submit"
            fullWidth
            variant="contained"
            onClick={notify}
            sx={{ mt: 3, mb: 2 }}>{text}</ButtonBox>
    )
}
