export default interface ModalConfirmationProps {
  title: string;
  message: string;
  anchor: {
    text: string;
    href: string;
  };
}

export interface ModalConfirmationRef {
  show: () => void;
}
