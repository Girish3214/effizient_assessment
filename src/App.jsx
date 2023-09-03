import { Box, Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import DescriptionCard from "./components/DescriptionCard";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <Box>
          <Header />
          <DescriptionCard />
          <Form />
        </Box>
      </Container>
    </>
  );
}

export default App;
