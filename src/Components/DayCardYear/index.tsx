import { useEffect, useState } from "react";
import { Days } from "../../Pages/PageYear/CalendarYearStyled";

interface DayCardProps{
  key: string,
  day ,
  month: string,
  year: number
}

export default function DayCard({
  key,
  day,
  month,
  year,
}:DayCardProps){
  // obtendo a função de estado quando dia for selecionado
  const [state, setState] = useState("");

  const dayPre = day._d;

  // verificando se o dia não pertence ao mês, assim ficara de outro cor
  useEffect(() => {
    
    const currentMonth = new Date(month + ",01," + year);

   if (dayPre.getMonth() !== currentMonth.getMonth()) {
      setState("nonPertenceMonth");
      return; 
    }

  },[])

  

  return (
    <>
      <Days state={state}>{day.format("DD").toString()}</Days>
      {console.log(day)}
      
    </>
  );
}