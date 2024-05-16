import { useEffect, useState } from "react"



const useFetch=(url)=>{
    const[data,setdata]=useState("")

    useEffect(()=>{
      fetch(url).then(result=>{
        result.json().then(result=>{
            setdata(result.products)
        })
      })

    },[url])

    return data
}

export default useFetch