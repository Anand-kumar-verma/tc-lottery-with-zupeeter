import Header from "./component/Header";
import Footer from "./component/Footer";
import { Box, Container } from "@mui/material";

function Layout(props) {
    const { header = true, footer = true, children } = props
    return (
        <Container sx={{ background: '#F5F6FE' }}>
            <Box>
                {header && <Header />}
                <Box>
                    {children}
                </Box>
                <Footer />
            </Box>
        </Container >
    )
}

export default Layout
