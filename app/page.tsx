"use client"
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components'
import { fuels, yearsOfProduction } from '@/constants'
import { HomeProps } from '@/types'
import { fetchCar } from '@/utils'

export default async function Home({searchParams}: HomeProps) {
  const allCars = await fetchCar({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || ''
  })

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
              <CustomFilter title="fuel" options={fuels}/>
              <CustomFilter title="year" options={yearsOfProduction}/>
            </div>
          </div>
          {
            !isDataEmpty ?
              <section>
                <div className='home__cars-wrapper'>
                  {
                    allCars.map((car ) => (
                      <CarCard car={car}></CarCard>
                    ))
                  }
                </div>
                <ShowMore
                  pageNumber={(searchParams.limit || 10)/10 }
                  isNextPage={(searchParams.limit || 10) > allCars.length}>
                  
                </ShowMore>
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
