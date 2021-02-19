import React, { useState, useEffect, useContext } from "react";

import { PeopleContext } from "../context/people";

const Filter = () => {
    const [query, setQuery] = useState("");
    const [people, setPeople] = useContext(PeopleContext);

    const [copy] = useState(people);

    useEffect(() => {
        const results = copy.filter(({ name }) =>
            name.toLowerCase().includes(query.toLowerCase())
        );
        setPeople(results);
    }, [query]);

    return (
        <div className="App-box">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
};

export default Filter;
