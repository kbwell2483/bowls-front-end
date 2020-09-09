import React from "react";
import "./ContactUs.css";

export default function ContactUsForm(props) {
      return (
        <div>
          <br />
          <h1><strong>Contact Form</strong></h1>
          <br />
        <h1>To contact us by email, please complete and submit the form below. We do our best to respond within 24 business hours, but it may take longer if our volume is unusually high. For urgent matters, please call 555-555-5555 during business hours for immediate assistance.</h1>
        <br />
        <form>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input type="text" name="firstName" required onChange={props.handleInput} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" name="lastName" required onChange={props.handleInput} />
        </div>
        <div>
          <label htmlFor="ordernumber">Order Number: </label>
          <input type="text" name="ordernumber" onChange={props.handleInput} />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" onChange={props.handleInput} />
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <input type="message" name="message" required onChange={props.handleInput} />
        </div>
        <input value="Submit" type="submit" onClick={props.handleSignUp} />
        </form>
        </div>
               
        );
    }


