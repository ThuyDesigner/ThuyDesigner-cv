import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

import React, { useState, useEffect } from "react";
import TitleContent from "./component/Title/TitleContent";
import GrIconText from "./component/GrIconText/GrIconText";
import TimeLine from "./component/TimeLine/TimeLine";

// -- import icon
import user from "./IMG/usename.png";
import pin from "./IMG/pin.svg";
import birthday from "./IMG/birthday.svg";
import mail from "./IMG/mail.svg";
import phone from "./IMG/phone.svg";
import behance from "./IMG/behance.svg";
import dribble from "./IMG/dribble.svg";
import illustartor from "./IMG/illustrator.svg"
import aftetEffect from "./IMG/afterEffect.svg"
import reactjs from "./IMG/reactjs.svg"
import hobbit from "./IMG/gr-hobit.svg"

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
    <div className="bg-1 cv">
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
                      <div className="name-user">Nguyen Thi Thu Thuy</div>
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
                {/* target */}
                <div className="target">
                  <TitleContent title="Target"> </TitleContent>
                  <div className="gr-text">
                    <div className="pt-2">
                      Short term target
                    </div>
                    <div className="color-primary pt-1">
                      Find a suitable job to promote all abilities, contribute
                      for developing company.
                    </div>
                  </div>
                  <div className="gr-text">
                    <div className="pt-2">
                      Long term target
                    </div>
                    <div className="color-primary pt-1">
                      Learn new knowledge, always up-to-date my skill
                      from different sources.
                      Become more a knowledgeable, professional person
                      in the future.
                    </div>
                  </div>

                </div>
                {/* Skill */}
                <div className="target">
                  <TitleContent title="Skill"> </TitleContent>
                  <div className="row">
                    <div className="col-md-6">
                      Illustrator
                    </div>
                    <div className="col-md-6">
                      <img
                        src={illustartor}
                        class=""
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                    Photoshop 
                    </div>
                    <div className="col-md-6">
                      <img
                        src={illustartor}
                        class=""
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                    After effects 

                    </div>
                    <div className="col-md-6">
                      <img
                        src={aftetEffect}
                        class=""
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                    XD 

                    </div>
                    <div className="col-md-6">
                      <img
                        src={illustartor}
                        class=""
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                    HTML/ CSS

                    </div>
                    <div className="col-md-6">
                      <img
                        src={illustartor}
                        class=""
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                    Reactjs 

                    </div>
                    <div className="col-md-6">
                      <img
                        src={reactjs}
                        class=""
                        alt=""
                      ></img>
                    </div>
                  </div>


                </div>
                {/* hobbit */}
                <div className="hobby">
                  <TitleContent title="hobby"> </TitleContent>
                  <div>
                  <img
                        src={hobbit}
                        class=""
                        alt=""
                      ></img>
                    
                  </div>

                </div>
                {/* hobbit */}
                <div className="My Products">
                  <TitleContent title="My Products"> </TitleContent>
                  <div className="Link">
                  <a href="https://tinyurl.com/j8e26vbm">https://tinyurl.com/j8e26vbm</a><br></br>
                  <a href="https://www.behance.net/ngthithuthuy96">https://www.behance.net/ngthithuthuy96</a><br></br>
                  <a href="https://dribbble.com/thuthuycntt">https://dribbble.com/thuthuycntt</a><br></br>

                    
                  </div>

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
                    <div className="gr-text">
                      <div className="pt-2">
                        Language develop
                      </div>
                      <div className="color-primary pt-1">
                        HTML,  Javascript,  PHP.
                      </div>
                    </div>
                    <div className="gr-text">
                      <div className="pt-2">
                        Content working
                      </div>
                      <div className="color-primary pt-1">
                        - Starting design UI by photoshop tool. <br></br>
                        - Building UI by HTML, CSS, Javascript on
                        Dreamweaver tool.<br></br>
                        - Run it on localhost/Xampp to watch live UI
                        and error control<br></br>
                        - Building database on mySQL and connect with
                        website.<br></br>
                        - Run, test and complex product.<br></br>
                      </div>
                    </div>
                  </TimeLine>
                  {/* 2015 */}
                  <TimeLine
                    time="2015"
                    content="Design interface for
                    the selling ice cream page."
                  >
                    <div className="gr-text">
                      <div className="pt-2">
                        Experience
                      </div>
                      <div className="color-primary pt-1">
                        Wordpress theme
                      </div>
                    </div>
                    <div className="gr-text">
                      <div className="pt-2">
                        Content working
                      </div>
                      <div className="color-primary pt-1">
                        - Starting install and setup WordPress.<br></br>
                        - Finding themes suitable for purpose.<br></br>
                        - Developing, installing, design for the website.<br></br>
                        - database initialization, upload product category,
                        edit pricing, activate cart.<br></br>
                        Creating link  to social media (Facebook, Gmail..)
                        - Run, test and complex product.<br></br>
                      </div>
                    </div>
                  </TimeLine>
                  {/* 2017-2018 */}
                  <TimeLine
                    time="2017-2018"
                    content="Partime: Design texture for T-shirt"
                  >
                    <div className="gr-text">
                      <div className="pt-2">
                        Experience
                      </div>
                      <div className="color-primary pt-1">
                        Up-to-date for my skill about using
                        Photoshop, Illustrator tool.
                      </div>
                    </div>
                    <div className="gr-text">
                      <div className="pt-2">
                        Content working
                      </div>
                      <div className="color-primary pt-1">
                        - Get the designing content.<br></br>
                        - Create and design patterns.<br></br>
                        - Error checking.<br></br>
                        - Export the PNG type and complete the task.<br></br>
                      </div>
                    </div>
                  </TimeLine>
                  {/* 10/2018 */}
                  <TimeLine
                    time="10/2018 
                    05/2021"
                    content="Working as UI/UX designer
                    at the Hanbiro Company in Ho Chi Minh City"
                  >
                    <div className="gr-text">
                      <div className="pt-2">
                        Experience
                      </div>
                      <div className="color-primary pt-1">
                        - Knowledge of theoretical color, wire / mesh
                        layout, typography, images.<br></br>
                        - Proficient use of software: Photoshop, Illustrator,
                        Adobe XD,  Zeplin ...<br></br>
                        - Basic understanding of HTML / CSS, Javascript,
                        Bootstrap, Reactjs.<br></br>
                        - Good communication skills, cognitive ability,
                        teamwork.<br></br>
                        - Data analysis skills and creativity.<br></br>
                        - Knowledge of Marketing (TCA, Email Template for
                        Quote / Purchase Order / Invoice, banner, …)<br></br>
                      </div>
                    </div>
                    <div className="gr-text">
                      <div className="pt-2">
                        The projects that attended
                      </div>
                      <div className="color-primary pt-1">
                        <div className="row">
                          <div className=" col-md-4 left-blue">
                            Websitte
                          </div>
                          <div className=" col-md-8  right-content">
                            Hanbiro Groupware <span className="note">(Mail, Task… page)</span> <br></br>
                            Hanbrio HR<br></br>
                            Hanbiro CRM <span className="note">(Mail template,
                              Landing page, UI page)</span>
                          </div>

                        </div>
                        <div className="row">
                          <div className=" col-md-4 left-blue">
                            PC App
                          </div>
                          <div className=" col-md-8  right-content">
                            Hanbiro Talk app  <br></br>
                            Hanbrio CRM Call<br></br>

                          </div>

                        </div>
                        <div className="row">
                          <div className=" col-md-4 left-blue">
                            Mobile app
                          </div>
                          <div className=" col-md-8  right-content">
                            Hanbiro Talk app <br></br>
                            Hanbrio Mail app<br></br>
                            Hanbiro HR app<br></br>
                            Hanbiro Work<br></br>

                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="gr-text">
                      <div className="pt-2">
                        Content working:
                      </div>
                      <div className="color-primary pt-1">
                        - Get the designing content (Storyboard)<br></br>
                        - Make idea, choose color, font type. <br></br>
                        - Make components for color concept, type of
                        text, items, list object by XD tool. <br></br>
                        - Arrange layout, design interface and think
                        about
                        how customers use it to ease. <br></br>
                        - After finished designing UI, Check ui and wait
                        for approval from the Leader. <br></br>
                        - Send it to the developer and support UI with
                        developer (make HTML, Css file, Scss file.
                        Make tyle for hover, active, focus action,
                        app Screenshot Mockup, make icon svg, banner CTA...).
                        - Check UI (font-size, color, type of text
                        synchronization of components), edit, improve
                        after the Developer finished the project.<br></br>
                        - Completed the project. <br></br>
                      </div>
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
