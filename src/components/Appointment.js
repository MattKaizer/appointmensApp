import React from "react";
import PropTypes from "prop-types";

const Appointment = ({ appointment, deleteAppointment }) => (
  <div className="cita">
    <p className="fullname">
      Full name:{" "}
      <span>{appointment.firstname + " " + appointment.lastname}</span>
    </p>
    <p>
      Age: <span>{appointment.age}</span>
    </p>
    <p className="right">
      {appointment.identification.toUpperCase() + ": "}
      <span>{appointment.identificationNumber}</span>
    </p>
    <p>
      Appointment: <span>{appointment.date}</span>
    </p>
    <p className="right">
      Time: <span>{appointment.time}</span>
    </p>
    <button
      className="button eliminar u-full-width"
      onClick={() => deleteAppointment(appointment.id)}
    >
      Delete &times;
    </button>
  </div>
);

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  deleteAppointment: PropTypes.func.isRequired,
};

export default Appointment;
