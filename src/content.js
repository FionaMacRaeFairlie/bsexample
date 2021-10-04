import React from "react";
const Content = () => {
    return ( <article> 
<div className='card mx-auto  m-4' style={{width: '30%'}} >
        <div className='card-body' >
        <h5 className="card-title" >Sass info</h5>
        <div className='card-text' >
        <p>To use Bootstrap 5 with React JS, we need to install it via npm by running the command below on our terminal.</p> 
        <p>npm i bootstrap@5.0.0-alpha3</p>
        <p>npm i node-sass</p>
        <p>This will install the Bootstrap 5 node module in our React JS app but we need to src/index.js file, we need to include an import statement.</p>
        <p></p>
        </div>
        </div>
        </div>
        </article>
    );
};
export default Content;


