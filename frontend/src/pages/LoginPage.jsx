import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Divider from "@mui/material/Divider"
import Paper from '@mui/material/Paper';
import Login from '../components/Login';

const LoginPage = () => {


    return (
        <Container>
            <Box>
                <Box><h1>Cirql</h1></Box>
            </Box>
            <Paper style={{ width: "50%", margin: "2em auto"}}>
                <Box display={'flex'} justifyContent={'center'}><h2>Login</h2></Box>
                <Divider />
                <Login />
            </Paper>
        </Container>
    )
}


export default LoginPage
