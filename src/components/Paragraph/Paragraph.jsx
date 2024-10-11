import React from "react";
 

 const Paragraph = (props) => {
    const {textContent} = props
    return (
        <>
        <p data-testid={'paragraphElement'}></p>
        </>
    );
} 

export default Paragraph;