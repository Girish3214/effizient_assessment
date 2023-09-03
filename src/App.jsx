import { Box, Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import DescriptionCard from "./components/DescriptionCard";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <Box>
          <Header />
          <DescriptionCard />
        </Box>
      </Container>
    </>
  );
}

export default App;
