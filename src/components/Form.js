import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Form = ({ addAppointment }) => {
  //Set appointment state
  const [appointment, setAppointment] = useState({
    firstname: "",
    lastname: "",
    age: "",
    identification: "",
    identificationNumber: "",
    date: "",
    time: "",
    symptoms: "",
  });

  //On error state
  const [error, setError] = useState(false);

  //distructuring values
  const {
    firstname,
    lastname,
    age,
    identification,
    identificationNumber,
    date,
    time,
    symptoms,
  } = appointment;

  //Defining handler form data to set state
  const handlerChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  //submiting
  const appointmentsubmit = (e) => {
    //like js prevent sending void's
    e.preventDefault();
    // console.log('Enviando...')

    //validating
    if (
      firstname.trim() === "" ||
      lastname.trim() === "" ||
      identification.trim() === "" ||
      identificationNumber.trim() === "" ||
      age.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      symptoms.trim() === ""
    ) {
      setError(true);
      return;
    }

    //Clean error messages
    setError(false);

    //Asign an ID
    appointment.id = uuidv4();

    //Create
    addAppointment(appointment);

    //Clean Form
    setAppointment({
      firstname: "",
      lastname: "",
      age: "",
      identification: "",
      identificationNumber: "",
      date: "",
      time: "",
      symptoms: "",
    });
  };

  return (
    <Fragment>
      <h4>Make an Appointment</h4>

      <form onSubmit={appointmentsubmit}>
        <label>Firstname</label>
        <input
          className="u-full-width"
          type="text"
          name="firstname"
          placeholder="Firstname"
          onChange={handlerChange}
          value={firstname}
        />
        <label>Lastname</label>
        <input
          className="u-full-width"
          type="text"
          name="lastname"
          placeholder="Lastname"
          onChange={handlerChange}
          value={lastname}
        />
        <label>NIF</label>
        <select
          className="u-full-width"
          name="identification"
          onChange={handlerChange}
          value={identification}
        >
          <option value="">Select Id's Type</option>
          <option value="dni">DNI</option>
          <option value="nie">NIE</option>
        </select>

        <label>ID Number</label>
        <input
          className="u-full-width"
          type="text"
          pattern="(([X-Z]{1})([-]?)(\d{7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]{1}))"
          title={
            appointment.identification === "dni"
              ? "Insert like something like this format: DNI: 11223344A"
              : "Insert like something like this format: NIE: Y1122345Y"
          }
          name="identificationNumber"
          placeholder="NIF"
          onChange={handlerChange}
          value={identificationNumber}
          disabled={appointment.identification.trim() !== "" ? false : true}
        />

        <label>Age</label>
        <input
          className="u-full-width"
          type="number"
          min="1"
          max="100"
          inputMode="numeric"
          pattern="[0-9]*"
          title="Non-negative integral number"
          name="age"
          placeholder="Age"
          onChange={handlerChange}
          value={age}
        />
        <label>Date</label>
        <input
          className="u-full-width"
          type="date"
          name="date"
          onChange={handlerChange}
          value={date}
        />
        <label>Time</label>
        <input
          className="u-full-width"
          type="time"
          name="time"
          onChange={handlerChange}
          value={time}
        />
        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          onChange={handlerChange}
          value={symptoms}
        />
        <button type="submit" className="u-full-width button-primary">
          Checked
        </button>
      </form>
      {error ? (
        <p className="alerta-error">All data fields are required</p>
      ) : null}
    </Fragment>
  );
};

Form.propTypes = {
  addAppointment: PropTypes.func.isRequired,
};

export default Form;
