"use client"
import { CarCard, CustomFilter, Hero, SearchBar } from '@/components'
import { fetchCar } from '@/utils'

export default async function Home() {
  const allCars = await fetchCar()

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className="overflow-hidden">
      <Hero></Hero>
      <div className="mt-12 padding-x padding-y max-width"
        id="discover">
          <div className='home__text-container'>
            <h1 className='text-4lx1 font-extrabold'>Car Cataloue</h1>
            <p>Explore the cars you might like</p>
          </div>
          <div className='home__filters'>
            <SearchBar></SearchBar>
            <div className="home__filter-container">
              <CustomFilter title="fuel"/>
              <CustomFilter title="year"/>
            </div>
          </div>
          {
            !isDataEmpty ?
              <section className='home__cars-wrapper'>
                {
                  allCars.map((car ) => (
                    <CarCard car={car}></CarCard>
                  ))
                }
                WE HAVE CARS
              </section> :
              <div className='home__error-container'>
                <h2>Oops, no results</h2>
                <p>  {allCars?.message} </p>
              </div>
          }
      </div>
    </main> 
  )
}
