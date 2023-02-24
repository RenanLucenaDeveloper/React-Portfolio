import React from 'react';

interface MobileContextInterface {
  isMobile : boolean
}

export const MobileContext = React.createContext({} as MobileContextInterface);

export default MobileContext;
