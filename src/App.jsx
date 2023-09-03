import { Box, Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import DescriptionCard from "./components/DescriptionCard";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <Box>
          <Header />
          <DescriptionCard />
          <Form />
          <Footer />
        </Box>
      </Container>
    </>
  );
}

export default App;
