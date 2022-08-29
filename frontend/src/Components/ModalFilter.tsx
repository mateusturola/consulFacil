import { Cross2Icon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { styled } from "@stitches/react";
import { useState } from "react";
import { Button } from "./form/Button";
import DateInput from "./form/DateRange";
import Input from "./form/Input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./generic/Modal";

const ButtonOpen = styled("button", {
  backgroundColor: "#5A8392",
  color: "#f1f1f1",
  padding: "20px 0",
  borderRadius: 4,
  fontSize: "15px",
  fontWeight: 600,
  border: "0",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "11px",
  cursor: "pointer",
  width: '100%',
});

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#04161E",
  position: "absolute",
  top: 10,
  right: 10,

  "&:hover": { backgroundColor: "#f6f6f6" },
  "&:focus": { boxShadow: `0 0 0 2px #303030` },
});

const Form = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

const ModalFilter = () => {
  const sendForm = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <ButtonOpen>
          Filtrar Faturas
        </ButtonOpen>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Filtrar Faturas</DialogTitle>
        <DialogDescription>
          Preencha os campos que deseja filtrar.
        </DialogDescription>
        <Form>
          <Input
            type="text"
            id="patientName"
            name="patientName"
            placeholder="Nome do paciente"
          />
          <DateInput />
          <DialogClose asChild>
            <Button OnClick={sendForm}>
              Enviar
            </Button>
          </DialogClose>
        </Form>
        <DialogClose asChild>
          <IconButton aria-label="Close">
            <Cross2Icon />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ModalFilter;

