'use client'
import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        })
    };

    return (
      <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className="hero__title">
                Busca, reserva o alquila un auto facil y rapido !
            </h1>
            <p className="hero__subtitle">
                streamline your  rental experience
                 with our effortles book
            </p>
            <CustomButton
                title="Explore Cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
                btnType='button'
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero" fill className='object-contain' />
                <div className='hero__image-overlay'/>
            </div>
        </div>
      </div>
      
    )
  }
export default Hero;
