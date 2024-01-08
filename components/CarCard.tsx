"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { CarProps } from '@/types';

export interface CarCardProps {
    car: CarProps;
}

const CarCard = ( {car}: CarCardProps ) => {
  return (
    <div>CarCard</div>
  )
}

export default CarCard