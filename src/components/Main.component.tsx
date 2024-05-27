import myPicture from '../images/my-picture.jpg'

import { Component } from 'react';

export class Main extends Component {

  render() {
    return(
      <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
        <div className='mr-auto place-self-center lg:col-span-7 order-2 lg:order-1'>
          <h2 className='max-w-2xl mb-4 text-xl font-extrabold tracking-tight dark:text-white'>Matheus de Lara Dias da Silva</h2>
          <h3 className='max-w-2xl mb-4 text-xl font-extrabold tracking-tight dark:text-white'>Especialista em desenvolvimento de sistemas</h3>
          <p className='max-w-2xl mb-8 font-light text-gray-500 lg:mb-6 md:text-lg lg:text-xl dark:text-gray-400'>Trabalhei em projetos de pequeno, médio e grande porte. Te ajudo a pensar e sua soluçao personalizada end to end.</p>
          <a className='border-2 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-gray-900 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'>
            Entre em contato comigo 
          </a>
        </div>
        <div className='lg:mt-0 lg:col-span-5 lg:flex mx-auto order-1 lg:order-2'>
          <img src={ myPicture } alt='imagem' className='rounded-full w-96 h-96' />
        </div>
      </div> 
    )
  }
}