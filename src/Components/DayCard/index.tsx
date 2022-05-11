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
    <p>{day.format("DD").toString()}</p>
  );
}