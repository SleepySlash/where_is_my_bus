import withPWA from 'next-pwa';

export default withPWA({
    pwa: {
        dest: 'public',
        fallbacks: {
            document: '/offline.html', // This will be used when offline
        },
    },
    async exportPathMap(defaultPathMap) {
        return {
            ...defaultPathMap,
            '/offline': { page: '/offline' },
        };
    },
});