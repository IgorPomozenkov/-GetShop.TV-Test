import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Dialog } from '@mui/material';
import { Close } from '@mui/icons-material';
import { authLoading, authLoaded, authFailure } from '@/store/auth/selectors';
import { PropsModal } from './types';
import { checkKeyboardDigit, setBtnsNavigation } from '@/utils/methods';
import { modalStyle } from '@/utils/constants';
import NumberNavigation from './NumberNavigation';
import Accepted from './Accepted';

const initialNumber = ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'];

const PromoModal: React.FC<PropsModal> = React.memo((props: PropsModal) => {
  const dispatch = useDispatch();
  const loading = useSelector(authLoading, shallowEqual);
  const loaded = useSelector(authLoaded, shallowEqual);
  const authError = useSelector(authFailure, shallowEqual);

  const [number, setNumber] = useState(initialNumber);
  //const [isChecked, setIsChecked] = useState(false);
  const [startIdx, setStartIdx] = useState(0);
  const [isNumberError, setIsNumberError] = useState(false);
  const [activeBtn, setActiveBtn] = useState(null);
  const [isTimer, setIsTimer] = useState(false);
  const [dialogError, setDialogError] = useState('');
  const [mode, setMode] = useState('fill');

  const { settings, setShowBanner } = props;
  const { openModal, setOpenModal } = settings;

  const filledMode = mode === 'filled';
  //console.log(activeBtn);

  const handleClose = () => {
    setOpenModal(false);
    setNumber(initialNumber);
    setStartIdx(0);
    setIsNumberError(false);
    setActiveBtn(null);
    setShowBanner(true);
    setIsTimer(false);
    setMode('fill');
    setDialogError('');
  };

  useEffect(() => {
    if (openModal) setTimeout(() => setIsTimer(true), 10000);
  }, [openModal]);

  useEffect(() => {
    if (isTimer && number.toString() === initialNumber.toString() && activeBtn === null)
      handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimer, activeBtn]);

  const setFocusBtn = (id: number | string) => {
    setActiveBtn(id);
    document.getElementById('btn-' + id)?.focus();
  };

  useEffect(() => {
    if (!!loaded) {
      setMode('filled');
      setFocusBtn('close');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useEffect(() => {
    if (!!authError) setDialogError(authError);
  }, [authError]);

  const handleSetNumber = (value?: string) => () => {
    setIsNumberError(false);

    if (startIdx <= 9) {
      const newNumber = [...number];
      newNumber.splice(startIdx, 1, value);
      setNumber(newNumber);
      setStartIdx(startIdx + 1);
    } else return;
  };

  const handleClearNumber = () => () => {
    setIsNumberError(false);

    if (startIdx >= 1) {
      setStartIdx(startIdx - 1);
      const newNumber = [...number];
      newNumber.splice(startIdx - 1, 1, '_');
      setNumber(newNumber);
    } else return;
  };

  const toggleArrowKey = (key: string) => {
    if (activeBtn === null) setFocusBtn(1);
    else {
      setBtnsNavigation(key, activeBtn, setActiveBtn);
    }
  };

  const pushEnterKey = () => {
    return;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (filledMode) return;

    if (checkKeyboardDigit(e.key)) handleSetNumber(e.key)();
    if (e.key === 'Backspace') handleClearNumber()();

    if (
      e.key === 'ArrowUp' ||
      e.key === 'ArrowDown' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight'
    )
      toggleArrowKey(e.key);
    //
    if (e.key === 'Enter') pushEnterKey();
  };

  return (
    <Dialog
      open={openModal}
      onClose={handleClose}
      PaperProps={{ sx: modalStyle }}
      onKeyDown={handleKeyDown}
    >
      <div className="promoDialog container">
        <button
          id="btn-close"
          className="btnClose mainBtn"
          aria-label="close"
          onClick={handleClose}
        >
          <Close fontSize="large" />
        </button>

        <div className="qrInfo">
          <p className="text">Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
          <img src="/images/home/qr_promo.png" alt="qr-code" className="image" />
        </div>

        {!filledMode && (
          <div className="content">
            <NumberNavigation
              number={number}
              setNumber={setNumber}
              error={isNumberError}
              setError={setIsNumberError}
              setFocusBtn={setFocusBtn}
              addNumberFunc={handleSetNumber}
              delNumberFunc={handleClearNumber}
            />
          </div>
        )}

        {filledMode && (
          <div className="content">
            <Accepted />
          </div>
        )}

        {!!dialogError && <p className="dialogError">{dialogError}</p>}
        {loading && (
          <div className="mainLoading">
            <CircularProgress className="progress" />
          </div>
        )}
      </div>
    </Dialog>
  );
});

export default PromoModal;
