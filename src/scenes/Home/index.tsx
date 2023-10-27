import React, { useEffect, useRef, useState } from 'react';
import Banner from './Banner';
import PromoModal from '@/components/PromoModal';
import './style.scss';

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isShowBanner, setIsShowBanner] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    //
    setTimeout(() => {
      setIsShowBanner(true);
    }, 5000);
  }, []);

  useEffect(() => {
    if (isOpenModal) videoRef.current.pause();
    if (!isOpenModal) videoRef.current.play();
  }, [isOpenModal]);

  return (
    <div className="home container">
      <video ref={videoRef} src="/videos/video1.mp4" playsInline autoPlay muted loop></video>

      {isShowBanner && (
        <div className="home__banner mainAnim">
          <Banner setShow={setIsShowBanner} setModal={setIsOpenModal} />
        </div>
      )}

      {isOpenModal && (
        <PromoModal
          settings={{
            openModal: isOpenModal,
            setOpenModal: setIsOpenModal,
          }}
          setShowBanner={setIsShowBanner}
        />
      )}
    </div>
  );
};

export default Home;
