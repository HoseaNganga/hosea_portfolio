import React from "react";
import "./Contact.css";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xnqevgnk");
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Handle form submission asynchronously
    try {
      await handleSubmit(event);
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact_content">
        <div className="contact_title">
          <h3>Contact</h3>
          <p className="lead">
            For any inquiries please fill the form below and I will get back to
            you as soon as possible. Capitalize the subject.
          </p>
        </div>
        {!submitted ? (
          <div className="contact_form">
            <form onSubmit={handleFormSubmit}>
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    size="35"
                    id="contactName"
                    name="contactName"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    size="35"
                    id="contactEmail"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="contactEmail"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="contactMessage"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    disabled={state.submitting}
                    size="35"
                    id="submit"
                  />
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>
          </div>
        ) : (
          <div className="success-message">
            <h3>Thank you... Form successfully submitted</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
