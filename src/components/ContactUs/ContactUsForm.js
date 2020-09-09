import React from "react";
import "./ContactUs.css";

export default function ContactUsForm(props) {
      return (
        <div>
          <br />
        <h1>To contact us by email, please complete and submit the form below.</h1>
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


