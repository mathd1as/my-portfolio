
import aws  from '../assets/aws.svg'
import react2  from '../assets/react2.svg'
import nodejs  from '../assets/nodejs.svg'
import angular  from '../assets/angular.svg'
import Nest  from '../assets/Nest.svg'

import React, { Component } from 'react';

export class Tecnologies extends Component {

  render() {
    return(
      <div className='py-8 px-4 text-center lg:py-16 lg:px-12'>
        <div className="px-4 mx-auto mb-8 text-center lg:max-w-screen-xl">
          <div className='font-semibold text-gray-400 mb-8 uppercase'>TECNOLOGIAS</div>
          <div className='mb-8 font-light text-gray-500 lg:mb-6 lg:text-3xl dark:text-gray-400'>
            Posso te auxiliar com soluçoes práticas e criativas para sua startup com soluções especializadas em Java, Angular e Amazon Web Services.
          </div>
          <div className='flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between'>
            <img src={ aws } alt='aws' className='cursor-pointer w-14 h-14 mr-4 container-links' />
            <img src={ react2 } alt='react' className='cursor-pointer w-14 h-14 mr-4 container-links' />
            <img src={ angular } alt='angular' className='cursor-pointer w-14 h-14 mr-4 container-links' />
            <img src={ nodejs } alt='nodejs' className='cursor-pointer w-14 h-14 mr-4 container-links' />
            <img src={ Nest } alt='Nestjs' className='cursor-pointer w-14 h-14 mr-4 container-links' />
          </div>
        </div>
      </div>
    )
  }
}