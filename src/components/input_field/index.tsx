"use client";

import { styled, TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
    label: string,
    autoComplete: string,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const TextFieldBox = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-root.MuiOutlinedInput-root:hover": {
        "& fieldset": {
            borderColor: theme.palette.blue.light,
        },
    },
    "& fieldset": {
        border: `1.5px solid ${theme.palette.blue.light}`,
        borderRadius: "40px",
    }
}))



export const InputField = ({ label, autoComplete, value, onChange }: Props) => {
    return (
        <TextFieldBox
            margin="normal"
            required
            fullWidth
            label={label}
            autoComplete={autoComplete}
            autoFocus={false}
            value={value}
            onChange={onChange}
        />
    )
}
