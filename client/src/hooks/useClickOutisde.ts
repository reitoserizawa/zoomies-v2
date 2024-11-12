import React, { useEffect } from 'react';

type Handler = () => void;

const useClickOutside = (handler: Handler, ref: React.RefObject<HTMLElement>) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
                handler();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handler, ref]);

    return ref;
};

export default useClickOutside;
