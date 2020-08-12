import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Appointment from "./components/Appointment";

function App() {
  //Appointments on LocalStorage
  let appointmentsOnLocal = JSON.parse(localStorage.getItem("appointments"));
  if (!appointmentsOnLocal) {
    appointmentsOnLocal = [];
  }

  //appointment arrangement
  const [appointments, setAppointments] = useState(appointmentsOnLocal);

  //useEffect - save state changes on local storage
  useEffect(() => {
    let appointmentsOnLocal = JSON.parse(localStorage.getItem("appointments"));
    if (appointmentsOnLocal) {
      localStorage.setItem("appointments", JSON.stringify(appointments));
    } else {
      localStorage.setItem("appointments", JSON.stringify([]));
    }
  }, [appointments]);

  //Adding
  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  //Delete appointment
  const deleteAppointment = (id) => {
    const appointmentResult = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(appointmentResult);
  };

  //Conditional List
  const listTitle =
    appointments.length === 0
      ? "There is no appointments"
      : "Manage your Appointments";

  return (
    <Fragment>
      <h1>APPointment Manager</h1>
      <h3>Covid-19 Emergency</h3>
      <div className="container">
        <div className="row">
          <div className="image-background">
            <div className="one-half column">
              <Form addAppointment={addAppointment} />
            </div>
            <div className="one-half column">
              <h4>{listTitle}</h4>
              {appointments.map((cita) => (
                <Appointment
                  key={cita.id}
                  appointment={cita}
                  deleteAppointment={deleteAppointment}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
