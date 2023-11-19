"use client";

import { Button, styled } from "@mui/material"

interface Props {
    text: string,
}

const ButtonBox = styled(Button)(({ theme }) => ({
    borderRadius: '20px',
    background: `linear-gradient(43deg,${theme.palette.blue.light},${theme.palette.blue.main})`,
    fontWeight: 'bold',
    transition: '0.5s',
    textAlign: 'center',
}))
export const ReactiveButton = ({ text }: Props) => {
    return (
        <ButtonBox
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>{text}</ButtonBox>
    )
}
