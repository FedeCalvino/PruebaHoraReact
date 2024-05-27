import React, { useEffect, useState } from 'react'

export const Page = () => {
    const [hora,sethora]=useState("")
    const Url = "http://localhost:8080/Hora"

    useEffect((
        FetchHora()
    ),[])
    
    const FetchHora = async () => {
        try {
            const res = await fetch(Url)
            const data = await res.json()
            sethora(data);
            console.log(data);
          
        }catch(error) {
          console.log(error)
        }
    };

  return (
    <h3>Hora: {hora}</h3>
  )
}
