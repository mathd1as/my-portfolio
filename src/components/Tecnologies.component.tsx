import aws from "../assets/aws.svg";
import react2 from "../assets/react2.svg";
import nodejs from "../assets/nodejs.svg";
import angular from "../assets/angular.svg";
import Nest from "../assets/Nest.svg";

import { Component } from "react";

export class Tecnologies extends Component {
  render() {
    return (
      <div className="py-8 px-4 text-center lg:py-16 lg:px-12">
        <div className="px-4 mx-auto mb-8 text-center lg:max-w-screen-xl">
          <div className="font-semibold text-gray-400 mb-8 uppercase text-xl">
            TECNOLOGIAS
          </div>
          <div className="mb-8 font-light text-gray-500 lg:mb-6 lg:text-3xl dark:text-gray-400">
            Posso te auxiliar com soluçoes práticas e criativas para sua negócio
            com soluções especializadas em Node.js, Angular, React e Amazon Web
            Services.
          </div>
          <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
            <a href="https://aws.amazon.com/pt/free/?gclid=CjwKCAjwgdayBhBQEiwAXhMxtjmvpaNhXTy92d-kmvhsJ4DXBmvFVMXGwzXMVjWaEcB6UhqlaJdDvhoCLa8QAvD_BwE&trk=e4d1a24a-13d1-4019-b365-e284fded1202&sc_channel=ps&ef_id=CjwKCAjwgdayBhBQEiwAXhMxtjmvpaNhXTy92d-kmvhsJ4DXBmvFVMXGwzXMVjWaEcB6UhqlaJdDvhoCLa8QAvD_BwE:G:s&s_kwcid=AL!4422!3!454435137069!e!!g!!aws!10758390150!106168762236&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all">
              <img
                src={aws}
                alt="aws"
                className="cursor-pointer w-14 h-14 mr-4 container-links"
              />
            </a>
            <a href="https://react.dev/">
              <img
                src={react2}
                alt="react"
                className="cursor-pointer w-14 h-14 mr-4 container-links"
              />
            </a>
            <a href="https://angular.dev/">
              <img
                src={angular}
                alt="angular"
                className="cursor-pointer w-14 h-14 mr-4 container-links"
              />
            </a>
            <a href="https://nodejs.org/en">
              <img
                src={nodejs}
                alt="nodejs"
                className="cursor-pointer w-14 h-14 mr-4 container-links"
              />
            </a>
            <a href="https://nestjs.com/">
              <img
                src={Nest}
                alt="Nestjs"
                className="cursor-pointer w-14 h-14 mr-4 container-links"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
