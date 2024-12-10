import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'



const SignUp = () => {

    return (
        <Stack spacing={1} alignItems={'center'}>
            <Box><h2>Sign Up</h2></Box>
            <Divider />
            <TextField 
                sx={{ width: "80%", margin: "1em 0" }} 
                placeholder='Username'
            /> 
            <Stack
                sx={{ margin: "1em 0", width: "80%" }} 
                direction={'horizontal'}
                justifyContent={'space-between'}
            >
                <TextField 
                    sx={{ width: '49%' }}
                    placeholder='First Name'
                />
                <TextField 
                    sx={{ width: '49%' }}
                    placeholder='Surname'
                />
            </Stack>
            <TextField 
                sx={{ width: "80%", margin: "1em 0" }} 
                placeholder='Email'
            />
            <TextField 
                sx={{ width: "80%", margin: "1em 0" }} 
                type='password'
                placeholder='Password'
            />     
            <Button
                sx={{ width: "80%", margin: "1em 0" }}  
                variant='contained' >
                Sign Up
            </Button>
            <Stack style={{ margin: '1em' }} alignItems={'center'} spacing={2} direction='row'>
                <p>Already signed up?</p>
                <Link>Login</Link>
            </Stack>
        </Stack>
    )

}

export default SignUp