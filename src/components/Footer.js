import React from "react";

import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
          <div className='about-me'>
            <Link to='/about-creator'>About the creator</Link>
          </div>
        );
    }
}

export default Footer