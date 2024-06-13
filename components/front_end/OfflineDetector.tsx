// app/components/OfflineDetector.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const OfflineDetector = () => {
    const router = useRouter();

    useEffect(() => {
        const handleOnlineStatus = () => {
            if (!navigator.onLine) {
                router.push('/offline');
            }
        };

        window.addEventListener('online', handleOnlineStatus);
        window.addEventListener('offline', handleOnlineStatus);

        // Initial check
        handleOnlineStatus();

        return () => {
            window.removeEventListener('online', handleOnlineStatus);
            window.removeEventListener('offline', handleOnlineStatus);
        };
    }, [router]);

    return null;
};

export default OfflineDetector;
