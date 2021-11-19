import React from "react";

import creator from '../images/creator.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'

class AboutCreator extends React.Component {

    render() {
        return (
          <div className="about-creator">
            <div>
              <img src={creator} alt="" />
            </div>
            <div>
              <h2>Hello!</h2>
              <p>My name is Dominika and I'm happy to see you here :)</p>
              <p>
                I hope you like the idea of the website and the website itself.
              </p>
              <p>
                If you have any suggestions, don't hesitate to contact me on
                LinkedIn:
              </p>

              <a
                className="about-creator-logo"
                target="_blank"
                href="https://www.linkedin.com/in/dominika-lipka/"
              >
                <p>Click here</p>

                <img className="logo" src={linkedin} alt="" />
              </a>
              <p>
                You can also find me on Github and check out my other projects:
              </p>
              <a
                className="about-creator-logo"
                target="_blank"
                href="https://github.com/dominikalipka"
              >
                <p>Click here</p>

                <img className="logo" src={github} alt="" />
              </a>
            </div>
          </div>
        );
    }
}

export default AboutCreator