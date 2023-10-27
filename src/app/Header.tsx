import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { menuLinks } from '@/utils/constants';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [errorSlicer, setErrorSlicer] = useState('');

  // useEffect(() => {
  //   //
  // }, []);

  useEffect(() => {
    //
    menuLinks.forEach(link => {
      document.title = link.title;
    });
  }, [pathname, navigate]);

  return <header></header>;
};

export default Header;
