import React,{useState} from "react";
import "./styles/Form.css";

const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState(""); // Add a state variable for messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://jhonapiforemail.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setMessage("Email sent successfully.");
      } else {
        setMessage("Error: Email could not be sent.");
      }

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("Error: Something went wrong.");
    }
  };


  return (
    <div className="container-fluid formbg" >
      <div
        className=""
        style={{
          width: "88%",
          marginLeft: "auto",
          marginRight: "auto",
          color: "white",
        //   height: "100vh",
          paddingTop: "2rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="row">
          <div
            className="col-12 col-md-6 "
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            //   backgroundColor:"black",
            //   opacity:"0.5",color:"white"
            }}
          >
            <div>
              <h3 style={{fontSize:"120%"}}>Send us a Message</h3>
              <h5 style={{  marginTop: "3rem" ,fontSize:"90%",fontWeight:"500"}}>
                If you are interested in our product and want a demo or have any
                queries, please fill in the form, we will get in touch with you
                soon.
              </h5>
              <p
                style={{ margin: "0", fontSize: "95%", fontWeight: "bold" }}
              >
                Contact Us: 7995716742
              </p>
              
            </div>
          </div>
          <div
            className="col-12 col-md-6"
            style={{ paddingTop: "3rem", paddingBottom: "1rem" }}
          >
            <form className="row g-3"   onSubmit={handleSubmit}>
              <div className="col-6">
                <label
                  htmlFor="name"
                  className="form-label"
                  style={{
                    margin: "0",
                     fontSize: "90%",
                    fontWeight: "bold",
                  }}
                >
                  First name
                </label>
                 <input required
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "0",
                    borderRadius: "5px",
                    margin: "0",
                  }}
                />
              </div>
              <div className="col-6">
                <label
                  htmlFor="phone"
                  className="form-label"
                  style={{
                    margin: "0",
                     fontSize: "90%",
                    fontWeight: "bold",
                  }}
                >
                  Phone Number
                </label>
                 <input required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  id="phone"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "0",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="col-12">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{
                    margin: "0",
                     fontSize: "90%",
                    fontWeight: "bold",
                  }}
                >
                  Email
                </label>
                 <input required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  id="email"
                  placeholder=""
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "0",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="col-12">
                <label
                  htmlFor="msg"
                  className="form-label"
                  style={{
                    margin: "0",
                     fontSize: "90%",
                    fontWeight: "bold",
                  }}
                >
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  cols="50"
                  className="form-control"
                  id="msg"
                  placeholder=""
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "0",
                    borderRadius: "5px",
                  }}
                ></textarea>
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  className="btn "
                  style={{
                    backgroundColor: " black",
                    borderRadius: "8px",
                    color: "white",
                     fontSize: "90%",
                    padding: "0.6rem",
                    fontWeight: "bold",
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
            {message && (
        <div style={{ marginTop: "1rem", color: message.includes("Error") ? "white" : "white" }}>
          {message}
        </div>
      )}
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Form;
