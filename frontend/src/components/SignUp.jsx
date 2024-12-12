import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import ErrorAlert from './Alerts/ErrorAlert';
import { useState } from 'react';
import Link from './Link';



const SignUp = () => {

    const [ signUpData, setSignUpData ] = useState({
        username: "", 
        email: "", 
        firstName: "",
        lastName: "",
        password: ""
    })
    const [ error, setError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState("")
 
    const handleChangeField = (e) => {

        setSignUpData(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async () => {        
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signUpData)
            })

            const response_data = await response.json()

            if(!response.ok) {
                console.log(response.statusText)
                setError(true)
                setErrorMessage(response_data.error.message)
                return
            }
            
            console.log(response_data.msg)
        } catch (error) {
            setError(true)
            setErrorMessage(error.error.message)
            console.log(error)
        }
    }

    return (
        <Stack spacing={1} alignItems={'center'}>
            <Box><h2>Sign Up</h2></Box>
            <Divider />
            { error 
                &&
                <Box style={{ width: "80%", margin: "1em 0" }}>
                    <ErrorAlert message={errorMessage} onError={setError}/>
                </Box> 
            }
            <TextField 
                sx={{ width: "80%", margin: "1em 0" }} 
                placeholder='Username'
                name='username'
                onChange={handleChangeField}
            /> 
            <Stack
                sx={{ margin: "1em 0", width: "80%" }} 
                direction={'horizontal'}
                justifyContent={'space-between'}
            >
                <TextField 
                    sx={{ width: '49%' }}
                    placeholder='First Name'
                    name="firstName"
                    onChange={handleChangeField}
                />
                <TextField 
                    sx={{ width: '49%' }}
                    placeholder='Surname'
                    name='lastName'
                    onChange={handleChangeField}
                />
            </Stack>
            <TextField 
                sx={{ width: "80%", margin: "1em 0" }} 
                placeholder='Email'
                name='email'
                onChange={handleChangeField}
            />
            <TextField 
                sx={{ width: "80%", margin: "1em 0" }} 
                type='password'
                placeholder='Password'
                name='password'
                onChange={handleChangeField}
            />     
            <Button
                sx={{ width: "80%", margin: "1em 0" }}  
                variant='contained'
                onClick={handleSubmit}
            >
                Sign Up
            </Button>
            <Stack style={{ margin: '1em' }} alignItems={'center'} spacing={2} direction='row'>
                <p>Already signed up?</p>
                <Link toPath={'login'}>Login</Link>
            </Stack>
        </Stack>
    )

}

export default SignUp