import { Box, Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <Box>
          <Header />
        </Box>
      </Container>
    </>
  );
}

export default App;
