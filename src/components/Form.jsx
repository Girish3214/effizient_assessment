import React, { useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { doc, setDoc } from "firebase/firestore";

import NewTextField from "./NewTextField";
import RadioGroupInput from "./RadioGroupInput";
import DropDown from "./DropDown";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "./Modal";

import db from "../firebase/firebase";

const INITIAL_STATE = {
  email: "",
  fullName: "",
  age: "",
  education: "",
  intituteOfEducation: "",
  courseOfEducation: "",
  experience: "",
  intitute: "",
  program: "",
  countyOfApplication: "",
  futureGoals: "",
  scoreEnglishListening: "",
  scoreEnglishReading: "",
  scoreEnglishSpeaking: "",
  scoreEnglishWriting: "",
  payTutionFee: "yes",
  tutionFee: "",
  gic: "yes",
  payGIC: "",
};
function Form({ setFormSumitted }) {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [modalOpen, setModalOpen] = useState(false);

  const formRef = useRef();

  const inputsOrder = useMemo(() => {
    return [
      {
        name: "email",
        title: "Email",
        placeholder: "Your email",
      },
      {
        name: "fullName",
        title: "Full Name",
      },
      {
        name: "age",
        title: "Age",
      },
      {
        name: "education",
        title: "Highest Level of Education",

        type: "select",
        options: [
          { label: "Grade 12", value: "grade12" },
          { label: "Diploma", value: "diploma" },
          { label: "Bachelors Degree", value: "bachelorsDegree" },
          { label: "Masters Degree", value: "mastersDegree" },
          { label: "PhD", value: "phd" },
        ],
      },
      {
        name: "intituteOfEducation",
        title: "Institute where you completed your highest level of education",
      },
      {
        name: "courseOfEducation",
        title: "What did you study",
      },
      {
        name: "experience",
        title: "Do you have any relevant work experience?",
      },
      {
        name: "intitute",
        title: "What institute did you get admitted to in Canada?",
      },

      {
        name: "program",
        title: "What is your program of study in Canada?",
      },

      {
        name: "countyOfApplication",
        title: "Which country are you applying from?",
      },

      {
        name: "futureGoals",
        title: "What are your future goals?",
      },

      {
        name: "scoreEnglishListening",
        title: "English Scores - Listening",
      },

      {
        name: "scoreEnglishReading",
        title: "English Scores - Reading",
      },

      {
        name: "scoreEnglishSpeaking",
        title: "English Scores - Speaking",
      },

      {
        name: "scoreEnglishWriting",
        title: "English Scores - Writing",
      },

      {
        name: "payTutionFee",
        title: "Did you pay your first year tuition?",
        value: "yes",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },

      {
        name: "tutionFee",
        title: "How much tuition fee did you pay?",
      },

      {
        name: "gic",
        title: "Did you do a GIC?",
        value: "yes",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },

      {
        name: "payGIC",
        title: "How much tuition fee did you pay?",
      },
    ];
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (!formData[key]) {
        const errorElement = document.getElementById(key);
        errorElement?.scrollIntoView({ behavior: "smooth", block: "center" });
        errorElement.classList.add("container__error");
        return;
      }
    }

    setDoc(doc(db, "SOP", formData.email), formData).then((res) => {
      emailjs
        .sendForm(
          "service_tta5tli",
          "template_ou2gs3d",
          formRef.current,
          "wEywtjo9HIaU5G7Ta"
        )
        .then(
          (result) => {
            console.log("Email sent successfully");
            setFormSumitted(true);
          },
          (error) => {
            setFormSumitted(true);

            console.log("Something went wrong try again later", error.text);
          }
        );
    });
  };

  const handleReset = () => {
    setModalOpen(true);
  };

  const handleModalClose = (type) => {
    if (type === "clear") {
      setFormData(INITIAL_STATE);
    }
    setModalOpen(false);
  };
  return (
    <form ref={formRef}>
      <Modal
        open={modalOpen}
        handleClose={(e, type) => handleModalClose(type)}
      />
      {inputsOrder.map((item) => (
        <div key={item.name}>
          {item.type === "radio" ? (
            <RadioGroupInput
              options={item.options}
              item={item}
              onChange={handleInputChange}
              name={item.name}
              value={formData[item.name]}
            />
          ) : item.type === "select" ? (
            <DropDown
              options={item.options}
              item={item}
              onChange={handleInputChange}
              name={item.name}
              value={formData[item.name]}
            />
          ) : (
            <NewTextField
              name={item.name}
              item={item}
              value={formData[item.name]}
              onChange={handleInputChange}
              placeholder={item.placeholder ? "Your email" : "Your answer"}
            />
          )}
        </div>
      ))}
      <div className="button__container">
        <Box component="div" className="buttons">
          <Button
            variant="contained"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </Button>
          <Box component="div" className="pagination">
            <div className="progress__container">
              <div className="progress" style={{ width: "100%" }} />
            </div>
            <div>Page 1 of 1</div>
          </Box>
          <Button variant="text" type="submit" onClick={() => handleReset()}>
            Clear form
          </Button>
        </Box>
      </div>
      <div className="warning__container">
        <div className="password__warning">
          <div>Never submit passwords through Google Forms.</div>
        </div>
      </div>
    </form>
  );
}

export default Form;
