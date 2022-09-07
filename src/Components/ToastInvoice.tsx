import { Cross2Icon } from "@radix-ui/react-icons";
import { Toast, ToastAction, ToastProvider, ToastTitle, ToastViewport } from "./generic/Toast";

type ToastAddProps = {
  open?: boolean,
  setOpen: (isOpen?: boolean) => void | any,
  message: string,
};

const ToastInvoice = ({open, setOpen, message}: ToastAddProps) => {
  return (
    <ToastProvider swipeDirection="right">
      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>{message}</ToastTitle>
        <ToastAction asChild altText="Goto schedule to undo">
          <Cross2Icon />
        </ToastAction>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};

export default ToastInvoice;
