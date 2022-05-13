import { useState } from "react";
import moment from "moment";
import MonthCard from "../../Components/MonthCardYear/index"
import {IconButton} from "@mui/material"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"

// import sass
import "./CalendarYear.scss";

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
    <div className="header-page">
      <IconButton
        size="small"
        onClick={()=> setCurrentYear(currentYear - 1)}
      >
        <KeyboardArrowLeftIcon style={{color: "#143296", fontSize: 40}}
        />
      </IconButton>  
      {currentYear}
      <IconButton
        size="small"
        onClick={()=> setCurrentYear(currentYear + 1)}
      >
        <KeyboardArrowRightIcon style={{color: "#143296", fontSize: 40}}
        />
      </IconButton>  
    </div>
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