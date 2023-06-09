export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: any;
  width: string;
  padding: string;
  btnClose: number
  bottom?: string;
  height?: string;
  subTitle?: string;
  overflowY?: string;
  overflowX?: string;
}