//

interface SettingsModal {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PropsModal {
  settings: SettingsModal;
  setShowBanner?: React.Dispatch<React.SetStateAction<boolean>>;
  mode?: string;
  setMode?: React.Dispatch<React.SetStateAction<string>>;
}

export interface PropsNavigation {
  number: Array<string>;
  setNumber?: React.Dispatch<React.SetStateAction<string[]>>;
  checked?: boolean;
  setChecked?: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setFocusBtn: any;
  addNumberFunc: any;
  delNumberFunc: any;
}
