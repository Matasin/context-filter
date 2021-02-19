import React, { useState, createContext } from "react";

const data = [
    { id: 1, name: "Jeffrey Perkins" },
    { id: 2, name: "Lorna Williamson" },
    { id: 3, name: "Rowena Pumphrey" },
    { id: 4, name: "Mark Skinner" },
    { id: 5, name: "Paul Clair" },
    { id: 6, name: "Gene Bowker" },
    { id: 7, name: "Markus Olsen" },
    { id: 8, name: "Dennis Gilbert" },
    { id: 9, name: "David Ortiz" },
    { id: 10, name: "Lazaro Franklin" },
    { id: 11, name: "Mindy Obrien" },
    { id: 12, name: "Donald Jones" },
    { id: 13, name: "Timothy Brashears" },
    { id: 14, name: "Lorretta Lyon" },
    { id: 15, name: "Tanisha Norman" },
    { id: 16, name: "Cynthia Sapp" },
    { id: 17, name: "Penny Laurent" },
];

export const PeopleContext = createContext({});

export const PeopleProvider = ({children}) => {
    const [people, setPeople] = useState(data);

    const { Provider } = PeopleContext;
    return <Provider value={[people, setPeople]}>{children}</Provider>;
};