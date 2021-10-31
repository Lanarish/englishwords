import React from "react";
import '../Main/loader.scss'

const Loader = ({ isLoading, error, children }) => {
    if (error) {
        return <p>{error}</p>;
    }
    if (isLoading) {
        return (
            <div class="container">
                <div class="dash uno"></div>
                <div class="dash dos"></div>
                <div class="dash tres"></div>
                <div class="dash cuatro"></div>
            </div>
        )
    }

    return children
}

export default Loader;