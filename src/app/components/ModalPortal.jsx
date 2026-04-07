// components/ModalPortal.jsx
"use client";
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ModalPortal = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Only render the portal on the client side after the component has mounted
    return mounted
        ? createPortal(children, document.body)
        : null;
};

export default ModalPortal;