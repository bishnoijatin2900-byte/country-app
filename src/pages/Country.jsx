import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi'
import Loader from '../components/ui/Loader'
import  {CountryCard} from '../components/layouts/CountryCard'
import { SearchFilter } from '../components/ui/SearchFilter'

const Country = () => {
  const [isPending, setTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setTransition(async () => {
      const res = await getCountryData()
      setCountries(res.data || [])
          //  console.log(res.data)  
    })
  }, [])

  if (isPending) return <Loader />

  console.log(search)

  const searchCountry = (country)=>{
     if(search){
     return country.name.common.toLowerCase().includes(search.toLowerCase())
     }
     return country;
  }
 
  const filterRegion =(country) =>{
  if(filter === "all")  return country;
  return country.region === filter;
}

 const filterCountries = countries.filter((country)=> searchCountry(country) 
   && filterRegion(country))



  return (
    <section className="country-section container">
      <SearchFilter 
      search={search}
      setSearch={setSearch}
      filter={filter}
      setFilter={setFilter}
      countries={countries} setCountries={setCountries}
      />
      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index)=>{
          return <CountryCard country={curCountry} key={index}/>;
        })}
      </ul>
    </section>
  )
}

export default Country;