import React from 'react'
import InfoSectionMobailClient from '../InfoSectionMobailClient/InfoSectionMobailClient';

const InfoSectionMobail = ({
  burgerMenu,
  setBurgerMenu,
  changeLang,
  setChangeLang,
  changeLanguage,
}: {
  burgerMenu: boolean;
  setBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
  changeLang: boolean;
  setChangeLang: React.Dispatch<React.SetStateAction<boolean>>;
  changeLanguage: (str: string) => void;
}) => {
  return (
    <InfoSectionMobailClient
      burgerMenu={burgerMenu}
      setBurgerMenu={setBurgerMenu}
      changeLang={changeLang}
      setChangeLang={setChangeLang}
      changeLanguage={changeLanguage}
    />
  );
};

export default InfoSectionMobail;


