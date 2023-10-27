//
export interface PropsForm {
  show?: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  modal?: boolean;
  setModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SettingsModal {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  mode?: string;
  setMode?: React.Dispatch<React.SetStateAction<string>>;
  signup?: boolean;
  login?: boolean;
}

export interface PropsModal {
  settings: SettingsModal;
}
