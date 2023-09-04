import { Box, Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import DescriptionCard from "./components/DescriptionCard";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [formSumitted, setFormSumitted] = useState(false);
  return (
    <>
      <Container maxWidth="md">
        <Box>
          <Header />
          <DescriptionCard
            formSumitted={formSumitted}
            setFormSumitted={setFormSumitted}
          />
          {!formSumitted && <Form setFormSumitted={setFormSumitted} />}
          <Footer />
        </Box>
      </Container>
    </>
  );
}

export default App;
