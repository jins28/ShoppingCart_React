import React from 'react'
import list from '../data'
import Cards from './Cards'
import '../styles/Amazon.css'
export default function Amazon({handleClick}){
return(
    <section>
{list.map((item)=>(
    <Cards item={item} key={item.id} handleClick={handleClick}/>
))
}
    </section>
)
}