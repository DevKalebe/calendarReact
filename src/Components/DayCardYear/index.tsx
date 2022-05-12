import { Days } from "../../Pages/PageYear/CalendarYearStyled";

interface DayCardProps{
  key: string,
  day: string,
  month: string,
  year: number
}

export default function DayCard({
  key,
  day,
  month,
  year,
}:DayCardProps){

  return (
    <>
      <Days>{day}</Days>
      {console.log(day)}
      
    </>
  );
}