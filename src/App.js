import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

import React, { useState, useEffect } from "react";
import TitleContent from "./component/Title/TitleContent";
import GrIconText from "./component/GrIconText/GrIconText";
import TimeLine from "./component/TimeLine/TimeLine";

// -- import icon
import user from "./IMG/User.png";
import pin from "./IMG/pin.svg";
import birthday from "./IMG/birthday.svg";
import mail from "./IMG/mail.svg";
import phone from "./IMG/phone.svg";
import behance from "./IMG/behance.svg";
import dribble from "./IMG/dribble.svg";
// --------------------

const svgicon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3"
    viewBox="0 0 16 16"
    role="img"
    aria-label="Warning:"
  >
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  </svg>
);

const img =
  "https://image.thanhnien.vn/1080/uploaded/haoph/2021_03_06/img_0467_lsvb.jpg";
export default function App() {
  return (
    <div className="bg-1 ">
      <div class="container-fluid ">
        <div className="container">
          {/* <div className="hearder-cv">
            <div class="row">
              <div class="col-lg-4"> x4</div>
              <div class="col-lg-6"> x6</div>
            </div>
          </div> */}
          <div className="content-cv">
            <div class="row">
              <div class="col-lg-4 content-cv-left ">
                <div className="avata-user text-center d-flex justify-content-center">
                  <div className="row">
                    <div className="">
                      <img
                        src={user}
                        class="rounded-circle"
                        alt="Cinque Terre"
                      ></img>
                      <div className="name-user">Name of user</div>
                      <div className="sub-job">UI & UX designer</div>
                    </div>
                  </div>
                </div>

                <div className="content">
                  <TitleContent
                    title="About me"
                    sub="( 3 years of experience )"
                    decription="Hello! I'm Thuy Nguyen. With a strong passion in designing User Interfaces for Mobile and Website to become more beautiful and clear. Besides that, I have to strike a balance between easy to use customer and developer easy to program to come up with the perfect products.
I consider myself a creative, open minded and proactive person, who enjoys teamwork and who is always willing to face new challenges. Moreover, i always update new styles about design from social media (Facebook, Instagram, Behance, Dribbble..). This isn't only a big resource to discover but also to connect with designers worldwide. I believe that this is one of the best ways to perfect yourself more in the future.
"
                  ></TitleContent>
                  <GrIconText
                    icon={pin}
                    text="Trung Hamlet, Vinh Phuong Commune, Nha Trang City"
                    addClass="pt-1"
                  ></GrIconText>
                  <GrIconText
                    icon={birthday}
                    text="October 25, 1996"
                    addClass="pt-2"
                  ></GrIconText>
                  <GrIconText
                    icon={mail}
                    text="Ngthithuthuy96@gmail.com"
                    addClass="pt-2"
                  ></GrIconText>
                  <GrIconText
                    icon={phone}
                    text="+84 379 965 922"
                    addClass="pt-2"
                  ></GrIconText>
                  <GrIconText
                    icon={behance}
                    isLink="true"
                    addLink="https://www.behance.net/ngthithuthuy96"
                    text="https://www.behance.net/ngthithuthuy96"
                    addClass="pt-2"
                  ></GrIconText>
                  <GrIconText
                    icon={dribble}
                    isLink="true"
                    addLink="https://dribbble.com/thuthuycntt"
                    text="https://dribbble.com/thuthuycntt"
                    addClass="pt-2"
                  ></GrIconText>
                </div>
              </div>
              {/* group right */}
              <div class="col-lg-8 content-cv-right">
                <div className="Edu">
                  <TitleContent title="Education & Language"> </TitleContent>
                  <TimeLine
                    time="2018"
                    content="Graduated Telecommunications University"
                  >
                    <div className="pt-2">
                      Bachelor of Information Technology
                    </div>
                    <div className="color-primary pt-1">
                      Technology software
                    </div>
                    <div className="content-timeline pt-2">
                      English -TOEIC 450
                    </div>
                  </TimeLine>
                </div>
                <div className="Edu">
                  <TitleContent title="Experience"> </TitleContent>
                  <TimeLine
                    time="2015"
                    content="Design interface for
                    the selling ice cream page."
                  >
                    <div className="pt-2">
                      Bachelor of Information Technology
                    </div>
                    <div className="color-primary pt-1">
                      Technology software
                    </div>
                    <div className="content-timeline pt-2">
                      English -TOEIC 450
                    </div>
                  </TimeLine>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
