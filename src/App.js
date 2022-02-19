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
import github from "./IMG/github.svg";
import illustartor from "./IMG/illustrator.svg"
import aftetEffect from "./IMG/afterEffect.svg"
import reactjs from "./IMG/reactjs.svg"
import hobbit from "./IMG/gr-hobit.svg"
import cv from "./IMG/cv.pdf"
import header from "./IMG/Cv1@2x.png"
import intro from "./IMG/intro.png"
// import award from "./IMG/award.svg"
// import  experence from "./IMG/trending-up.svg"


// --------------------

const award = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
);
const experence =(
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);
const educationtime =[{ small: "", time:"2018" }];
const ex1 =[{ small: "", time:"2015" }];
const ex2 =[{ small: "", time:"2015" }];
const ex3 =[{ small: "", time:"2017" } ,{ small: "", time:"2018" }  ];
const time =[{ small: "10/", time:"2018" },{ small: "01/", time:"2022" }];


const img =
  "https://image.thanhnien.vn/1080/uploaded/haoph/2021_03_06/img_0467_lsvb.jpg";


export default function App() {
  return (
    <div className="bg-1 cv">
      <div class="container-fluid ">
        <div className="container">
          <div className="intro col-md-12 ">
            <div className="row content-intro col-md-12 col-sm-12">
            <div className=" d-flex align-items-center align-content-center flex-wrap justify-content-center  ">
            <div className="col-md-7 col-sm-7 align-self-center  ">
              <div className=" d-flex align-items-end flex-column text-header">
                <div className="">
                  <p>Curriculum</p>
                </div>  <div className=""><span className="sub">2022</span></div>
              </div>


            </div>
            <div className="col-md-5 col-sm-5 ps-3">
              <div className="d-flex align-items-start flex-column job">
                Senior UI & UX Designer <br></br>
                Illustrator
              </div>

            </div>
            

          </div>
          {/* <div className="d-flex align-items-end flex-column ">
            <div className="mt-auto name ">Nguyễn Thị Thu Thuỷ
              </div></div> */}
            </div>
          
          </div>
         
          <div>
            
          </div>
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
                      <div className="name-user col-12 col-md-12">Nguyen Thi Thu Thuy</div>
                      <div className="sub-job col-12 col-md-12">UI & UX designer</div>
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
                  <GrIconText
                    icon={github}
                    isLink="true"
                    addLink="https://github.com/ThuyDesigner"
                    text="https://github.com/ThuyDesigner"
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
                    <div className="col-md-6 col-6 col-sm-6 ">
                      Illustrator
                    </div>
                    <div className="col-md-6 col-6 col-sm-6 ">
                      <img
                        src={illustartor}
                        class=""
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-6 col-sm-6 ">
                      Photoshop
                    </div>
                    <div className="col-md-6 col-6 col-sm-6 ">
                      <img
                        src={illustartor}
                        class=""
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-6 col-sm-6 ">
                      After effects

                    </div>
                    <div className="col-md-6 col-6 col-sm-6 ">
                      <img
                        src={aftetEffect}
                        class=""
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-6 col-sm-6 ">
                      XD

                    </div>
                    <div className="col-md-6 col-6 col-sm-6 ">
                      <img
                        src={illustartor}
                        class=""
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-6 col-sm-6 ">
                      HTML/ CSS

                    </div>
                    <div className="col-md-6 col-6 col-sm-6 ">
                      <img
                        src={illustartor}
                        class=""
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-6 col-sm-6 ">
                      Reactjs

                    </div>
                    <div className="col-md-6 col-6 col-sm-6 ">
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
                  <div className="hobby-img">
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
                <div className="button-download">

                  <a href={cv} download>
                    Download CV
                  </a>
                </div>

              </div>
              {/* group right */}
              <div class="col-lg-8 content-cv-right">
                <div className="Edu">
                  <TitleContent title="Education & Language" svg={award}> </TitleContent>
                  <TimeLine
                    times={educationtime}
                    content="Graduated Telecommunications University"
                  >
                    <div className="pt-2">
                      Bachelor of Information Technology
                    </div>
                    <div className="color-primary pt-1">
                    Software engineering
                    </div>
                    <div className="content-timeline pt-2">
                      English -TOEIC 450
                    </div>
                  </TimeLine>
                </div>
                <div className="Edu">
                  <TitleContent title="Experience" svg={experence}> </TitleContent>
                  <TimeLine
                    times={ex1}
                    content="Design interface for
                    the selling ice cream page."
                  >
                    <div className="gr-text">
                      <div className="pt-2 ">
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
                    times={ex2}
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
                    times={ex3}
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
                  times={time}
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
                        app Screenshot Mockup, make icon svg, banner CTA...).<br></br>
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
