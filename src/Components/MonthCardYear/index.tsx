import moment from "moment";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import CalendarBuild from "../../Pages/PageYear/CalendarBuild";
import DayCard from "../DayCardYear";





interface MonthCardProps {
  month: string,
  currentYear: number,
}

export default function MonthCard({
  month,
  currentYear,
}: MonthCardProps) {

  Modal.setAppElement('#root')

const [modalIsOpen, setModalIsOpen] = useState(false);

function openModal() {
  setModalIsOpen(true);
}

function closeModal() {
  setModalIsOpen(false);
}

const customizacao = {
  content:{
    top: '50%',
    left: '50%',
    rigth: 'auto',
  }
}

  // useState para chamar os dia conforme o mês e o ano
  const [value, setValue] = useState(
    moment().locale("pt").month(month).year(currentYear)
  );

  // criando array para receber os dia da semana
  const [calendar, setCalendar] = useState<any[]>([]);
  // colocando os dias da semana
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]

  useEffect(() => {
    setCalendar(CalendarBuild(value));
  }, [value]);

  return (
    <>
        <div id="month-card" onClick={openModal}>
          {/* Chamando o mês */}
          <div className="header">{value.format("MMMM")}</div>
          {/* Chamando os dias da semana*/}
          <div className="week-days">
            {weekDays.map((value) => (
              <div className="week-day">
                {value}
              </div>
            ))}
          </div>
          {/* Chamando os dia da semana  */}
          {calendar.map((week) => (
            <div className="week" key={week}>
              {week.map((day) => (
                /* Chamando os dias conforme o mês */
                <DayCard
                  key={day._d.getTime() + month}
                  day={day}
                  month={month}
                  year={currentYear}
                />
              ))}
            </div>
          ))}
        </div>

      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}>
        <h1>Teste modal</h1>
        
      </Modal>            
    </>
  );
}

function calendarBuild(): import("react").SetStateAction<any[]> {
  throw new Error("Function not implemented.");
}



