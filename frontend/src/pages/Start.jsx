import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import SignUp from '../components/SignUp';

const Start = () => {


    return (
        <Container>
            <Box>
                <Box><h1>Cirql</h1></Box>
            </Box>
            
            <Paper style={{ width: "50%", margin: "2em auto"}}>
                <SignUp />
            </Paper>
        </Container>
    )
}


export default Start
