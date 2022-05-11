import { useState } from "react";
import moment from "moment";
import MonthCard from "../Components/MonthCard/index"

export default function Calendar() {
  // gerando um estado para saber o ano
  const [currentYear, setCurrentYear] = useState(2022);
  // criando uma variável objeto para receber ps meses da api
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // convertendo para português e sendo exibido de forma correta
  moment.updateLocale("pt", {
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
  });


  return <div id="calendar-page">
    <div className="header-page"></div>
    <div className="content">
      {month.map(value=>(
        <MonthCard 
          key={value}
          month={value}
          currentYear={currentYear}
        />
      ))}
    </div>
  </div>;
}