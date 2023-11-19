import { ReactiveButton } from "@/components/button";
import { InputField } from "@/components/input_field";
import { Avatar, Box, Button, FormControlLabel, TextField, Typography } from "@mui/material";

export default function Home() {
  return (<Box display='flex' flexDirection='column' alignItems='center' mt={5}>
    <Avatar sx={{ m: 1, bgcolor: 'blue.light' }}>
    </Avatar>
    <Typography component="h1" variant="h5">
      Login
    </Typography>
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <InputField label="Email Address" name="email" autoComplete="email" />
      <InputField label="Password" name="password" autoComplete="current-password" />

      <ReactiveButton text="Login" />
    </Box>
  </Box>
  )
}
