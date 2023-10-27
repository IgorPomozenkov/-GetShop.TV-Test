import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox } from '@mui/material';
import { sendTelNumber } from '@/store/auth/slicer';
import { Checked, Check } from '@/assets/images/Icons';
import { PropsNavigation } from './types';
import { checkNumberEmpty, checkNumberAll, formatTelNumber } from '@/utils/methods';

const btnList = [
  { id: 'btn-1', value: '1' },
  { id: 'btn-2', value: '2' },
  { id: 'btn-3', value: '3' },
  { id: 'btn-4', value: '4' },
  { id: 'btn-5', value: '5' },
  { id: 'btn-6', value: '6' },
  { id: 'btn-7', value: '7' },
  { id: 'btn-8', value: '8' },
  { id: 'btn-9', value: '9' },
  { id: 'btn-clear', value: 'стереть' },
  { id: 'btn-0', value: '0' },
];

const returnClassNameEl = (condition: boolean, trueClassName: string, falseClassName: string) => {
  //
  return condition ? trueClassName : falseClassName;
};

const NumberNavigation: React.FC<PropsNavigation> = React.memo((props: PropsNavigation) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const { number, error, setError, setFocusBtn, addNumberFunc, delNumberFunc } = props;

  const isActiveBtn = checkNumberEmpty(number) || !isChecked;

  useEffect(() => {
    if (!isActiveBtn) setFocusBtn('submit');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActiveBtn]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const regNumber = checkNumberAll(number);

    if (regNumber) {
      setError(true);
      setFocusBtn('clear');
      return;
    }

    if (!regNumber && !!number && !!isChecked) {
      const telNumber = formatTelNumber('+7', number);

      dispatch(sendTelNumber(telNumber));
    }
  };

  return (
    <div className="navigation">
      <h2 className="navigation__heading">Введите ваш номер мобильного телефона</h2>

      <form id="navigation-form" className="navigation__form" onSubmit={handleSubmit}>
        <p className={returnClassNameEl(error, 'number number_error', 'number')}>
          +7({number[0]}
          {number[1]}
          {number[2]}){number[3]}
          {number[4]}
          {number[5]}-{number[6]}
          {number[7]}-{number[8]}
          {number[9]}
        </p>

        <p className="text">и с Вами свяжется наш менеждер для дальнейшей консультации</p>

        <div className="numberBtns">
          {btnList.map(btn => (
            <button
              id={btn.id}
              key={btn.id}
              className={returnClassNameEl(
                btn.id === 'btn-clear',
                'btn btnClear mainBtn',
                'btn mainBtn',
              )}
              type="button"
              onClick={btn.id === 'btn-clear' ? delNumberFunc() : addNumberFunc(btn.value)}
            >
              {btn.value}
            </button>
          ))}
        </div>

        {!error && (
          <div className="consent">
            <Checkbox
              className="checkbox"
              id="btn-checked"
              required
              //defaultChecked
              size="medium"
              checkedIcon={Checked}
              icon={Check}
              checked={isChecked}
              onChange={e => setIsChecked(e.target.checked)}
              sx={{ color: '#000', '&.Mui-checked': { color: '#000' } }}
            />
            <label className="label" htmlFor="btn-checked">
              Согласие на обработку персональных данных
            </label>
          </div>
        )}

        {error && (
          <div className="numberError">
            <span>Неверно введён номер</span>
          </div>
        )}

        <button
          id="btn-submit"
          className={returnClassNameEl(
            isActiveBtn,
            'btnSubmit btnSubmit_disabled mainBtn',
            'btnSubmit mainBtn',
          )}
          type="submit"
          disabled={isActiveBtn}
        >
          Подтвердить номер
        </button>
      </form>
    </div>
  );
});

export default NumberNavigation;
