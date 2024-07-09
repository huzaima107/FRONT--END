
import React from "react";
import Nav from "../component/Navigation/Nav";

function Home() {
  return (
    
      <div id="#main">
        <center><h1>Welcome To The Sickle Cell Clinic System</h1></center>

        <u><h2>INTRODUCTION TO SICKLE CELL DISEASE</h2></u>
        <p>Sickle cell disease is an inherited blood disorder... (rest of the content about Sickle Cell Disease) </p>

        <div>
          <section>
            <h2>Symptoms and Management of Sickle Cell Disease</h2>
            <div>
              <h3>Primary Symptoms:</h3>
              <ul>
                <li>Recurring episodes of severe pain (sickle cell crisis)</li>
                <li>Anemia (low red blood cell count)</li>
                <li>Increased risk of infections</li>
                <li>Stroke</li>
                <li>Damage to organs like the spleen, liver, and kidneys</li>
              </ul>
              <h3>Effective Management:</h3>
              <ul>
                <li>Hydroxyurea medication to reduce the frequency of pain crises</li>
                <li>Blood transfusions to improve oxygen delivery</li>
                <li>Pain management during sickle cell crises</li>
                <li>Antibiotics to prevent infections</li>
                <li>Immunizations to protect against common illnesses</li>
              </ul>
              <img src='cell2.png'></img>
            </div>
          </section>

          <section>
            <h2>Our Clinic's Specialized Care</h2>
            <div>
              <p>At the Sickle Cell Clinic, our experienced team... (rest of the content about clinic services)</p>
              <ul>
                <li>Comprehensive evaluation and personalized treatment plans</li>
                <li>24/7 emergency care and crisis management</li>
                <li>Coordination of care with specialists (e.g., neurologists, cardiologists)</li>
                <li>Patient education and self-management support</li>
                <li>Access to clinical trials and the latest treatment options</li>
                <li>Psychosocial support services for patients and families</li>
              </ul>
              <p>We are committed to improving... (rest of the closing paragraph)</p>

              <div>
                <h3>Contact Us</h3>
                <p>
                  <a href="tel:0777794570">
                    <i className="fas fa-envelope"></i> Phone: 0777794570
                  </a>
                  <br />
                  <a href="https://wa.me/0620271415">
                    <i className="fab fa-whatsapp"></i> WhatsApp: 0620271415
                  </a>
                  <br />
                  <a href="https://www.tiktok.com/@huzram">
                    <i className="fab fa-tiktok"></i> TikTok: @huzram
                  </a>
                  <br />
                  <a href="https://www.instagram.com/huzram">
                    <i className="fab fa-instagram"></i> Instagram: @huzram
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}

export default Home;
