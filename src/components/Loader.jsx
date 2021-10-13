import React from "react";

const Loader = ({ isLoading, error, children }) => {
    if (error) {
        return <p>{error}</p>;
    }
    if (isLoading) {
        return <p>PLEASE WAIT!</p>;
    }

    return children
}

export default Loader;