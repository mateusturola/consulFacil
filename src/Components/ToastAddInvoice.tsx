import { Cross2Icon } from "@radix-ui/react-icons";
import { Toast, ToastAction, ToastProvider, ToastTitle, ToastViewport } from "./generic/Toast";

type ToastAddProps = {
  open?: boolean,
  setOpen: (isOpen?: boolean) => void | any,
};

const ToastAddInvoice = ({open, setOpen}: ToastAddProps) => {
  return (
    <ToastProvider swipeDirection="right">
      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>Cobrança adicionada com Sucesso!</ToastTitle>
        <ToastAction asChild altText="Goto schedule to undo">
          <Cross2Icon />
        </ToastAction>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};

export default ToastAddInvoice;
