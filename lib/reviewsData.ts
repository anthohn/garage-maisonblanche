export interface Review {
    text: string;
    author: string;
    date: string;
    rating: number;
    service: string;
}

export const reviews: Review[] = [
    {
        text: "Client fidèle depuis de nombreuses années, je ne peux que recommander le Garage de Maison Blanche pour la qualité constante de ses services.",
        author: "MamiNova",
        date: "Octobre 2024",
        rating: 5,
        service: "Entretien régulier"
    },
    {
        text: "Garage de confiance pour l'entretien courant de votre voiture. Le patron est à l'écoute des clients et fait le nécessaire pour que tout soit tip top. Je le recommande.",
        author: "Patrick Charollais",
        date: "Décembre 2022",
        rating: 5,
        service: "Entretien courant"
    },
    {
        text: "Très bon garage fiable et compétent. Toute l'équipe est très aimable. Je recommande ce garage !",
        author: "Mangagirl",
        date: "Septembre 2021",
        rating: 5,
        service: "Service général"
    },
    {
        text: "Service rapide, devis correct et j'ai récupéré ma voiture toute propre, à recommander.",
        author: "Santiago Ccasani",
        date: "Mars 2018",
        rating: 5,
        service: "Réparation"
    },
    {
        text: "Garage tenu par Jean-François Hoeune, service impeccable, réparation toutes marques. Prix correctes, et honnêtes.",
        author: "Vincent Chevalley",
        date: "Mai 2018",
        rating: 5,
        service: "Réparation toutes marques"
    },
    {
        text: "L'équipe est très sympathique et compétente.",
        author: "Delyan Tzonev",
        date: "Janvier 2022",
        rating: 5,
        service: "Service client"
    },
    {
        text: "Très bon accueil et travail bien fait !",
        author: "Alexandre",
        date: "Février 2017",
        rating: 5,
        service: "Accueil et service"
    }
];
