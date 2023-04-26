import React, { createContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

export const NetworkContext = createContext<any>(null);

const NetworkProvider = ({ children }) => {
    const [provider, setProvider] = useState<any>(null);
    con
}

export default NetworkProvider;
