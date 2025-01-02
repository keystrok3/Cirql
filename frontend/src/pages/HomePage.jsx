import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Navbar from '../components/Navbar'


const HomePage = () => {

    return (
        <Stack style={{
            border: '1px solid #000',
        }}>
            <Box component={'header'}>
                <h1>Cq</h1>
            </Box>

            <Box component={'main'} display='flex' flexDirection='row' width='100%' border='1px solid blue'>
                <Box flexGrow={0} flexShrink={0} flexBasis="14%" border='1px solid green'>
                    <Navbar />
                </Box>

                <Box flexGrow={1} flexShrink={1} flexBasis="86%" border={'1px solid red'}>
                    <h1>Timeline</h1>
                </Box>
            </Box>
            <Box>

            </Box>
        </Stack>
    )
}

export default HomePage