import React from "react";
import "./ContactUs.css";

export default function ContactUs(props) {
      return (
        <div>
            <div className="slogan is-family-primary has-text-centered has-text-weight-bold" style={{fontSize: '20px', marginBottom: '30'}}>
            
                  <div class="container is-fluid" style={{width: '50%'}}>
                  <div class="notification">
                  <strong>Contact Us</strong> 
                  </div>
                    <h1>By Mail:</h1>
                    <h1>123 Anywhere St.</h1>
                    <h1>Anytown, USA 12345</h1>
                  </div>
                  <br />

                <div>
                <h1>By Phone:</h1>
                <h1>555-555-5555</h1>
                </div>
                <br />
            
                <div>
                <h1>
                  By Email:
                  <a href="/contactusform" class="navbar-item about" style={{}}>
                To email Better Bowl, CLICK HERE!</a></h1>
                
                </div>
               
             
            </div>
        </div>  
        );
    }


