import React, { useContext } from "react";

import { PeopleContext } from "../context/people";

const displayContext = (array) =>
    array.map(({ id, name }) => {
        return (
            <div key={id} className="App-box">
                {name}
            </div>
        );
    });

const People = () => {
    const [people] = useContext(PeopleContext);
    return displayContext(people);
};

export default People;
