import { Link } from "@mui/material"
import Button from "@mui/material/Button"
import Stack from '@mui/material/Stack'
import TextField from "@mui/material/TextField"


const Login = () => {


    return (
        <Stack
            direction={'column'} 
            spacing={2}
            alignItems={'center'}
            marginTop={'1em'}
        >
            <TextField 
                type="email" 
                placeholder="Email or Username"
                name="email"
                sx={{ width: "80%", margin: "1em 0" }}
            />
            <TextField 
                type="password" 
                placeholder="password"
                name="password"
                sx={{ width: "80%", margin: "1em 0" }}
            />
            <Button 
                sx={{ width: "80%", margin: "1em 0" }}
                variant="contained"
            >Login</Button>
            <Stack style={{ margin: '1em' }} alignItems={'center'} spacing={2} direction='row'>
                <p>Not signed up?</p>
                <Link>SignUp</Link>
            </Stack>
        </Stack>
    )
}

export default Login