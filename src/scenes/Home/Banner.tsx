import React from 'react';
import { PropsForm } from './types';

const Banner: React.FC<PropsForm> = React.memo((props: PropsForm) => {
  //
  const { setShow, setModal } = props;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModal(true);
    setShow(false);
  };

  return (
    <>
      <form id="banner-form" className="bannerForm" onSubmit={handleSubmit}>
        <p className="title">
          ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
          <br />
          ПОДАРИТЕ ЕМУ СОБАКУ!
        </p>

        <img src="/images/home/qr.png" alt="qr-code" className="image" />

        <p className="text">Сканируйте QR-код или нажмите ОК</p>

        <button className="btnSubmit mainBtn" type="submit">
          OK
        </button>
      </form>
    </>
  );
});

export default Banner;
