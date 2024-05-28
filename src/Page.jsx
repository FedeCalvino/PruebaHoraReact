import React, { useEffect, useState } from 'react'

export const Page = () => {
  const [hora, setHora] = useState("");
  const Url = "http://localhost:8083/Hora";

  // Define FetchHora before useEffect
  const FetchHora = async () => {
    try {
      console.log("comenzo fetch");
      const res = await fetch(Url);
      const data = await res.json();
      setHora(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchHora();
  }, []);

  return (
    <h3>Hora: {hora}</h3>
  );
};
