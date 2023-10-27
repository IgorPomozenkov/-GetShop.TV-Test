/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

//
export function formatTelNumber(code: string, number: Array<string>) {
  return code + number.toString().replaceAll(',', '');
}

// Функции проверки регулярыными выражениями

export function checkNumberEmpty(arr: Array<string>) {
  const regEmpty = arr.filter(val => val.match(/\_/));
  if (!!regEmpty.length) return true;
}

export function checkNumberAll(arr: Array<string>) {
  const regZero = arr.filter(val => val.match(/0/));
  if (regZero.length === 10) return true;
}

export function checkKeyboardDigit(value: string) {
  const regDigit = value.toString().match(/[1234567890]/);
  if (!!regDigit) return true;
}

// Функции переключения кнопок

const setBtnDigit1 = (key: string, setFocusBtn) => {
  if (key === 'ArrowUp') return;
  if (key === 'ArrowLeft') return;
  if (key === 'ArrowRight') setFocusBtn(2);
  if (key === 'ArrowDown') setFocusBtn(4);
};

const setBtnDigit2 = (key: string, setFocusBtn) => {
  if (key === 'ArrowUp') return;
  if (key === 'ArrowLeft') setFocusBtn(1);
  if (key === 'ArrowRight') setFocusBtn(3);
  if (key === 'ArrowDown') setFocusBtn(5);
};

const setBtnDigit3 = (key: string, setFocusBtn) => {
  if (key === 'ArrowUp') return;
  if (key === 'ArrowLeft') setFocusBtn(2);
  if (key === 'ArrowRight') setFocusBtn('close');
  if (key === 'ArrowDown') setFocusBtn(6);
};

const setBtnDigit4 = (key: string, setFocusBtn) => {
  if (key === 'ArrowUp') setFocusBtn(1);
  if (key === 'ArrowLeft') return;
  if (key === 'ArrowRight') setFocusBtn(5);
  if (key === 'ArrowDown') setFocusBtn(7);
};

const setBtnDigit5 = (key: string, setFocusBtn) => {
  if (key === 'ArrowUp') setFocusBtn(2);
  if (key === 'ArrowLeft') setFocusBtn(4);
  if (key === 'ArrowRight') setFocusBtn(6);
  if (key === 'ArrowDown') setFocusBtn(8);
};

const setBtnDigit6 = (key: string, setFocusBtn) => {
  if (key === 'ArrowUp') setFocusBtn(3);
  if (key === 'ArrowLeft') setFocusBtn(5);
  if (key === 'ArrowRight') setFocusBtn('close');
  if (key === 'ArrowDown') setFocusBtn(9);
};

const setBtnDigit7 = (key: string, setFocusBtn) => {
  if (key === 'ArrowUp') setFocusBtn(4);
  if (key === 'ArrowLeft') return;
  if (key === 'ArrowRight') setFocusBtn(8);
  if (key === 'ArrowDown') setFocusBtn('clear');
};

const setBtnDigit8 = (key: string, setFocusBtn) => {
  if (key === 'ArrowUp') setFocusBtn(5);
  if (key === 'ArrowLeft') setFocusBtn(7);
  if (key === 'ArrowRight') setFocusBtn(9);
  if (key === 'ArrowDown') setFocusBtn('clear');
};

const setBtnDigit9 = (key: string, setFocusBtn) => {
  if (key === 'ArrowUp') setFocusBtn(6);
  if (key === 'ArrowLeft') setFocusBtn(8);
  if (key === 'ArrowRight') setFocusBtn('close');
  if (key === 'ArrowDown') setFocusBtn(0);
};

const setBtnDigit0 = (key: string, setFocusBtn) => {
  if (key === 'ArrowUp') setFocusBtn(9);
  if (key === 'ArrowLeft') setFocusBtn('clear');
  if (key === 'ArrowRight') setFocusBtn('close');
  if (key === 'ArrowDown') setFocusBtn('checked');
};

const setBtnClear = (key: string, setFocusBtn) => {
  if (key === 'ArrowUp') setFocusBtn(7);
  if (key === 'ArrowLeft') return;
  if (key === 'ArrowRight') setFocusBtn(0);
  if (key === 'ArrowDown') setFocusBtn('checked');
};

const setBtnChecked = (key: string, setFocusBtn) => {
  if (key === 'ArrowUp') setFocusBtn('clear');
  if (key === 'ArrowLeft') return;
  if (key === 'ArrowRight') setFocusBtn('close');
  if (key === 'ArrowDown') setFocusBtn('submit');
};

const setBtnSubmit = (key: string, setFocusBtn) => {
  if (key === 'ArrowUp') setFocusBtn('checked');
  if (key === 'ArrowLeft') return;
  if (key === 'ArrowRight') setFocusBtn('close');
  if (key === 'ArrowDown') return;
};

const setBtnClose = (key: string, setFocusBtn) => {
  if (key === 'ArrowUp') return;
  if (key === 'ArrowLeft') setFocusBtn(1);
  if (key === 'ArrowRight') return;
  if (key === 'ArrowDown') return;
};

export const setBtnsNavigation = (key: string, activeBtn: any, setActiveBtn: any) => {
  //console.log(key);
  const setFocusBtn = (id: number) => {
    setActiveBtn(id);
    document.getElementById('btn-' + id)?.focus();
  };

  if (activeBtn === 1) setBtnDigit1(key, setFocusBtn);
  if (activeBtn === 2) setBtnDigit2(key, setFocusBtn);
  if (activeBtn === 3) setBtnDigit3(key, setFocusBtn);
  if (activeBtn === 4) setBtnDigit4(key, setFocusBtn);
  if (activeBtn === 5) setBtnDigit5(key, setFocusBtn);
  if (activeBtn === 6) setBtnDigit6(key, setFocusBtn);
  if (activeBtn === 7) setBtnDigit7(key, setFocusBtn);
  if (activeBtn === 8) setBtnDigit8(key, setFocusBtn);
  if (activeBtn === 9) setBtnDigit9(key, setFocusBtn);
  if (activeBtn === 0) setBtnDigit0(key, setFocusBtn);
  if (activeBtn === 'clear') setBtnClear(key, setFocusBtn);
  if (activeBtn === 'checked') setBtnChecked(key, setFocusBtn);
  if (activeBtn === 'submit') setBtnSubmit(key, setFocusBtn);
  if (activeBtn === 'close') setBtnClose(key, setFocusBtn);
};
