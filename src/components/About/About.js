import React from "react";
import about from "../../assets/about.png";

const About = () => {
  return (
    <div>
      <div style={{ marginTop: "30px" }} class="container">
        <div class="row">
          <div class="col-6">
            <div class="container">
              <div class="row">
                <div class="col-2 ">
                  <img style={{ width: "70px" }} src={about} alt="" />
                </div>
                <div class="col-2">
                  <img
                    style={{ width: "70px", marginTop: "40px" }}
                    src={about}
                    alt=""
                  />
                </div>
                <div class="col-2">
                  <img
                    style={{
                      width: "70px",

                      marginTop: "80px",
                      borderRadius: "12px",
                    }}
                    src={about}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <h3>About Us</h3>{" "}
            <p>
              Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder
              text used in design when creating content. It helps designers plan
              out where the content will sit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
