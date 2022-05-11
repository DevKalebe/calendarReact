import moment from "moment";
import { useEffect, useState } from "react";
import DayCard from "../DayCard";

interface MonthCardProps{
  key: string,
  month: string,
  currentYear: number,
} 

export default function MonthCard({
 key,
 month,
 currentYear,
}: MonthCardProps){

  // useState para chamar os dia conforme o mês e o ano
  const [value, setValue] = useState(
    moment().locale("pt").month(month).year(currentYear)
  );
  
  // criando array para receber os dia da semana
  const [calendar, setCalendar] = useState<any[]>([]);

  
  useEffect(()=>{
    const startDay =value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week");
    const day = startDay.clone().subtract(1,"day");

    // while para listar os dias da semena
    while (day.isBefore(endDay, "day")) {
      calendar.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }
  
  }, [value]);

  return(
    <div id="month-card">
      <div className="header"></div>
        <div className="week-days">
          {
            calendar.map((week) => (
              <div className="week" key={week}>
                {week.map(day=>(day))}
              </div>
            ))
          }
        </div>
    </div>    
  );

}