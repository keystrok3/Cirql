import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from '@mui/material/Stack'
import TextField from "@mui/material/TextField"
import Link from "./Link"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import ErrorAlert from "./Alerts/ErrorAlert"

const Login = () => {
    const { login, error, setError, errorMessage } = useContext(AuthContext)

    const [ loginData, setLoginData ] = useState({
        username_or_email: "", 
        password: ""
    })

    const handleChange = (e) => {
        setLoginData(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }

    const handleSubmitLogin = async () => {
        await login(loginData)
    }

    return (
        <Stack
            direction={'column'} 
            spacing={2}
            alignItems={'center'}
            marginTop={'1em'}
        >
            { error 
                &&
                <Box style={{ width: "80%", margin: "1em 0" }}>
                    <ErrorAlert message={errorMessage} onError={setError}/>
                </Box> 
            }
            <TextField 
                placeholder="Email or Username"
                name="username_or_email"
                sx={{ width: "80%", margin: "1em 0" }}
                onChange={handleChange}
            />
            <TextField 
                type="password" 
                placeholder="password"
                name="password"
                sx={{ width: "80%", margin: "1em 0" }}
                onChange={handleChange}
            />
            <Button 
                sx={{ width: "80%", margin: "1em 0" }}
                variant="contained"
                onClick={handleSubmitLogin}
            >
                Login
            </Button>

            <Stack style={{ margin: '1em' }} alignItems={'center'} spacing={2} direction='row'>
                <p>Not signed up?</p>
                <Link toPath={'signup'}>SignUp</Link>
            </Stack>
        </Stack>
    )
}

export default Login