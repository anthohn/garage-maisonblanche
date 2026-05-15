/** @type {import('next').NextConfig} */
const nextConfig = {
    // Activer le mode strict de React pour détecter les problèmes potentiels
    reactStrictMode: true,

    // Configuration des images si nécessaire (domaines autorisés, etc.)
    images: {
        // domains: ['example.com'],
        formats: ['image/avif', 'image/webp'],
    },

    // et quand est-ce que je pourrais renlenvé ces lignes ?
    //C'est une bonne question. En théorie, une redirection 301 (permanente) devrait rester en place "pour toujours" (ou au moins quelques années) pour garantir qu'aucun lien mort ne subsiste sur le web.
    //Mais si tu veux vraiment faire le ménage, voici les indicateurs :
    // Attends au moins 6 mois à 1 an : C'est le temps qu'il faut généralement à Google pour être certain que la nouvelle adresse a remplacé l'ancienne partout dans son index.
    // Vérifie ta Search Console : Une fois que tu auras validé la correction, surveille le rapport "Pages". Quand ces URLs n'apparaîtront plus du tout (même pas en vert ou en succès), c'est que Google les a "oubliées".
    // Zéro trafic : Si tu utilises un outil comme Google Analytics et que tu vois que plus personne n'arrive sur ton site via ces anciennes adresses depuis plusieurs mois, tu peux les supprimer sans risque.
    // Mon conseil : Ces lignes ne ralentissent pas du tout ton site et ne pèsent rien. Je te suggère de les laisser au moins 6 mois. C'est le prix de la tranquillité pour ton référencement !

    async redirects() {
        return [
            {
                source: '/index.html',
                destination: '/',
                permanent: true,
            },
            {
                source: '/garage',
                destination: '/services',
                permanent: true,
            },
            {
                source: '/garage.html',
                destination: '/services',
                permanent: true,
            },
            {
                source: '/station',
                destination: '/services',
                permanent: true,
            },
            {
                source: '/station.html',
                destination: '/services',
                permanent: true,
            },
            {
                source: '/shop',
                destination: '/vehicules',
                permanent: true,
            },
            {
                source: '/shop.html',
                destination: '/vehicules',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
