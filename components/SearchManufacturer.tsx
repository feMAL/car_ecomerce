'use client'
import {Combobox, Transition} from '@headlessui/react';
import { SearchManufacturerProps } from '@/types';
import Image from 'next/image';
import { manufacturers } from '@/constants';
import  {Fragment, useState} from 'react';
function SearchManufacturer({manufacturer, setManufacturer}: SearchManufacturerProps) {
    const [query, setQuery] = useState('')
    const filtredManufacturers = query === "" ? manufacturers : manufacturers.filter((item:string) => ( item.toLowerCase().replace(/\s+/g,"")).includes(query.toLowerCase().replace(/\s+/g,"")))
    return (
        <div className="search-manufacturer">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className='relative w-full'>
                    <Combobox.Button className="absolute top-[14px]">
                        <Image src="/car-logo.svg"
                            width={20}
                            height={20}
                            className='ml-4'
                            alt='CarLogo' />
                    </Combobox.Button>
                    <Combobox.Input 
                        className="search-manufacturer__input"
                        placeholder='Renault'
                        displayValue={(manufacturer:string)=>manufacturer}
                        onChange={(e)=> setQuery(e.target.value)}
                    />
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'>
                            <Combobox.Options>
                                {
                                    filtredManufacturers.length === 0 && query !== ""
                                    ? (
                                        <Combobox.Option value={query}
                                            className="search-manufacture__option">
                                            Create "{query}"
                                        </Combobox.Option>
                                      )
                                    : (
                                        filtredManufacturers.map((item: string) => (
                                            <Combobox.Option
                                                key={item}
                                                className={({active}) => `
                                                    relative search-manufacturer__option ${ active ? 'bg-primary-blue text-white': 'text-gray-900'}`
                                                }
                                                value={item}>
                                                    {
                                                        ({selected,active}) => (
                                                            <>
                                                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                                    {item}
                                                                </span>
                                                                { selected ? 
                                                                    <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${selected ? 'text-white': 'text-teal-60'}`}>
                                                                    </span>
                                                                    : null    
                                                                }
                                                            </>
                                                        )
                                                    }
                                            </Combobox.Option>
                                        ))
                                    )
                                }
                            </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
      )
}

export default SearchManufacturer