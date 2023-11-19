"use client";

import { styled, TextField } from "@mui/material";

interface Props {
    label: string,
    name: string,
    autoComplete: string,
}

const TextFieldBox = styled(TextField)(({ theme }) => ({
    "& fieldset": {
        border: `1.5px solid ${theme.palette.blue.light}`,
        borderRadius: "40px",
    }
}))



export const InputField = ({ label, name, autoComplete }: Props) => {
    return (
        <TextFieldBox
            margin="normal"
            required
            fullWidth
            id={label}
            label={label}
            name={name}
            autoComplete={autoComplete}
            autoFocus={false}
        />
    )
}
