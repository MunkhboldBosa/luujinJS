import React, {useState, createContext} from 'react';

const ProviderContext = createContext();

const Provider = props => {
  const [buttonStatus, setButtonStatus] = useState(false);
  const [starCount, setStarCount] = useState([]);
  const [pin, setPin] = useState([]);
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    profession: '',
    maritalStatus: '',
    childNumber: '',
    memberNumber: '',
    income: '',
    state: '',
    district: '',
    committee: '',
    isApps: false,
    townName: '',
  });
  return (
    <ProviderContext.Provider
      value={{
        userInfo,
        setUserInfo,
        buttonStatus,
        setButtonStatus,
        pin,
        setPin,
        starCount,
        setStarCount,
      }}>
      {props.children}
    </ProviderContext.Provider>
  );
};

export {Provider, ProviderContext};
