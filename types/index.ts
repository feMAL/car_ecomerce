import {
MouseEventHandler
} from 'react'

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit";
    textStyles?: string
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface OptionsProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionsProps[]
}

export interface SearchManufacturerProps{
    manufacturer:string;
    setManufacturer: (manufacture: string) => void
}

export interface CarProps {
    city_mpg: number
    class: string
    combination_mpg:number
    cylinders: number
    displacement: number
    drive: string
    fuel_type: string
    highway_mpg: number
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface CardDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps
}

export interface FilterProps {
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNextPage: boolean
}