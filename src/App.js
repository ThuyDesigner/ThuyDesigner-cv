import "./styles.css";
import AlertsCommon from "./component/Alerts/AlertsCommon";
import "bootstrap/dist/css/bootstrap.css";
import ButtonCommon from "./component/Button/ButtonCommon";
import BagetCommon from "./component/Baget/BagetCommon";
import AvataImg from "./component/Avata/AvataImg";
import AvataUser from "./component/Avata/AvataUser";
import Card from "./component/Card/Card";
import "./App.css";
import Ticon from "./component/Icon/TIcon";
import ShowItem from "./component/ShowItem/ShowItem";
import ListCommon from "./component/ListCommon/ListCommon";
import Img from "./component/Card/Img";
import imageUser from "./IMG/User.png";
import DropDownCommon from "./component/DropDown/DropDownCommon";
import SpinnersCommon from "./component/Spinners/SpinnersCommon";
import TooltipCommon from "./component/Tooltip/TooltipCommon";
import InputCommon from "./component/InputCommon/InputCommon";
import TodoForm from "./component/InputCommon/TodoForm";
import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import Checkbox from "./component/InputCommon/Checkbox";
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
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Hi, I’m @ThuyDesigner  😍', email:'ngthithuthuy' },
    { id: 2, title: 'I’m interested in ... 🥰' },
    { id: 3, title: 'I’m looking to collaborate on🚀' },
  ]);
  function handleTodoFormSubmit(formValues) {
    console.log('Form submit: ', formValues);
    // add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };
  return (
    <div className="bg-light ">
      <div className="container-fluid">
        <div className="row">
          <div className=" tab-selection bg-dark  col-md-2">
            <ListCommon
              titleLists={[
                {
                  title: "AlertsCommon",
                  section: "#section1",
                  icon: Ticon.nav,
                },
                {
                  title: "ButtonCommon",
                  section: "#section2",
                  icon: Ticon.nav,
                },
                { title: "BagetCommon", section: "#section3", icon: Ticon.nav },
                {
                  title: "AvataUser & AvataImg",
                  section: "#section4",
                  icon: Ticon.nav,
                },
                {
                  title: "CardCommon",
                  section: "#section5",
                  icon: Ticon.nav,
                },
                {
                  title: "DropdownCommon",
                  section: "#section6",
                  icon: Ticon.nav,
                },
                {
                  title: "SpinnersCommon",
                  section: "#section7",
                  icon: Ticon.nav,
                },
              ]}
              addClass="fixed"
            ></ListCommon>
          </div>
          <div className=" col-md-10 App ">
            <div className="fix-top">
              <h1 className="">
                <span></span> Show all component
              </h1>
            </div>

            {/*this is Alerts  */}
            <ShowItem
              name="1.AlertsCommon"
              directions={[
                `type = "", isbtnbutton = false, children = "", icon = ""`,
              ]}
              id="section1"
            >
              {" "}
              <div className="col-md-6">
                <AlertsCommon
                  className="pd-2"
                  isbtnbutton="true"
                  icon={svgicon}
                >
                  <div className="row">
                    <div>
                      <h1>Well done! </h1>
                      <h6>
                        Aww yeah, you successfully read this important alert
                        message. This example text is going to run a bit longer
                        so that you can see how spacing within an alert works
                        with this kind of content.
                      </h6>
                      <hr></hr>
                    </div>
                    <div>An example success alert with an icon</div>
                  </div>
                </AlertsCommon>
                <AlertsCommon type="warning">This is AlertsCommon</AlertsCommon>
              </div>
              <div className="col-md-6">
                <AlertsCommon
                  className="pd-2"
                  isbtnbutton="true"
                  type="secondary"
                  icon={svgicon}
                >
                  <h2>This is Baget Secondary </h2>
                </AlertsCommon>
              </div>
            </ShowItem>
            {/*this is Button   */}
            <ShowItem
              name="2.ButtonCommon"
              directions={[
                `type = "", variant = "", children = "", size = "", addClass
              = "", isLoading = false`,
              ]}
              id="section2"
            >
              <div className=" p-3">
                <ButtonCommon type="submit" variant="outline-primary">
                  {" "}
                  button
                </ButtonCommon>
              </div>
              <div className=" p-3 ">
                <ButtonCommon type="buton" addClass="btn-outline-secondary  ">
                  {" "}
                  button
                </ButtonCommon>
              </div>
              <div className="  p-3">
                <ButtonCommon
                  type="buton"
                  isLoading="true"
                  addClass="btn-primary"
                >
                  {" "}
                  button
                </ButtonCommon>
              </div>
            </ShowItem>

            {/*this is Baget */}

            <ShowItem
              name="3.BagetCommon"
              directions={[
                `bgColor = "", isPill = false, children, addClass = ""`,
              ]}
              id="section3"
            >
              <div className=" p-3">
                <h5>
                  this is baget{" "}
                  <BagetCommon bgColor="secondary" isPill="true" isPill="true">
                    hello
                  </BagetCommon>
                </h5>
                <h1>
                  this is baget{" "}
                  <BagetCommon bgColor="warning">hello</BagetCommon>
                </h1>
              </div>
            </ShowItem>

            {/*this is Avata */}

            <ShowItem
              name="4.AvataUser & AvataImg"
              directions={[
                `srcImg = "", isFluid = false, isRounded = false,
              isRoundedCircle = false, isthumbnai = false, addClass = "",
              width = "", height = "", size = ""`,
              ]}
              id="section4"
            >
              <div className="col-md-12">
                <AvataImg
                  srcImg={img}
                  size="big"
                  isRoundedCircle="true"
                ></AvataImg>
                <AvataImg srcImg={img} size="big" isthumbnai="true"></AvataImg>
              </div>
              <div className=" p-3 col-md-4">
                <AvataUser
                  img={img}
                  name="Nguyen Thi Thu Thuy"
                  info="Designer"
                  subInfo="CRM"
                  isBtnAction="TRUE"
                  isBaget="true"
                ></AvataUser>
              </div>
              <div className=" p-3 col-md-4">
                <AvataUser
                  img={img}
                  name="Nguyen Thi Thu Thuy"
                  info="Designer"
                  subInfo="CRM"
                  isBtnAction="TRUE"
                  isBaget="true"
                ></AvataUser>
              </div>
              <div className=" p-3 col-md-4">
                <AvataUser
                  img={img}
                  name="Nguyen Thi Thu Thuy"
                  info="Designer"
                  subInfo="CRM"
                  isBtnAction="TRUE"
                  isBaget="true"
                ></AvataUser>
              </div>
            </ShowItem>

            {/*this is Card */}
            <ShowItem
              name="5.CardCommon"
              directions={[`children, addClass = "" `]}
              id="section5"
            >
              <div className="col-md-2">
                <Card>
                  <Card.Header addClass="bg-white">
                    <Card.Img
                      type="img-bottom"
                      src={imageUser}
                      isRoundedCircle="true"
                    ></Card.Img>
                  </Card.Header>
                  <Card.Body>
                    <h3 class="card-title">Nguyen Thi Thu Thuy</h3>
                    <p class="card-text">
                      👋 Hi, I’m @ThuyDesigner <br></br>
                      👀 I’m interested in ... <br></br>
                      🌱 I’m currently learning ...<br></br>
                      💞️ I’m looking to collaborate on... <br></br>
                      📫 How to reach me ...
                    </p>
                  </Card.Body>
                  <Card.Footer
                    isButton="true"
                    btn1="Read more"
                    btn2="Contact"
                  ></Card.Footer>
                </Card>
              </div>
              {/* test using card  */}
              <div className="col-md-2">
                <Card>
                  <Card.Header>
                    <h2>Help desk</h2>
                  </Card.Header>
                  <Card.Footer>
                    <div className="border-bottom w-100 pb-2">
                      {" "}
                      <Card.Link href="" addClass="">
                        What do you want?
                      </Card.Link>
                    </div>
                    <div className="border-bottom w-100 pb-2">
                      {" "}
                      <Card.Link href="" addClass=" ">
                        What’s your favorite thing you own and why?
                      </Card.Link>
                    </div>
                    <div className=" w-100 pb-2">
                      {" "}
                      <Card.Link href="" addClass=" ">
                        How do you like to be comforted when you’re sad or
                        upset?
                      </Card.Link>
                    </div>
                  </Card.Footer>
                </Card>
              </div>
            </ShowItem>
            {/*Drop down  */}
            <ShowItem
              name="6.Dropdown"
              directions={[
                `ListItem = [], addClass = "", nameBtn = " Dropdown button",`,
              ]}
              id="section6"
            >
              <div className="row">
                <div className="col-md-4">
                  {" "}
                  <DropDownCommon
                    addClass="btn-info"
                    nameBtn="Click me to see special thing!"
                    ListItem={[
                      `"Bad Blood" (2014)`,
                      `"Santa Baby" (2007)`,
                      `"A Place in This World" (2006)`,
                      `
                    "Christmas Must Be Something More" (2007)`,
                    ]}
                  ></DropDownCommon>
                </div>
                <div className="col-md-4">
                  {" "}
                  <DropDownCommon
                    addClass="btn-primary"
                    ListItem={["list 1", "list 2", "list 3"]}
                  ></DropDownCommon>
                </div>

                <div className="col-md-4">
                  {" "}
                  <DropDownCommon
                    ListItem={["list 1", "list 2", "list 3"]}
                  ></DropDownCommon>
                </div>
              </div>
            </ShowItem>
            {/*spinner  */}
            <ShowItem
              name="7.SpinnersCommon"
              directions={[`type = "", color = "", addClass = ""`]}
              id="section7"
            >
              <div className="col">
                <span className="pe-2">
                  <SpinnersCommon type="grow" addClass="pd-2"></SpinnersCommon>
                </span>
                <span className="pe-2">
                  {" "}
                  <SpinnersCommon type="spinner"></SpinnersCommon>
                </span>
                <span className="pe-2">
                  {" "}
                  <SpinnersCommon
                    type="grow"
                    color="text-danger"
                  ></SpinnersCommon>
                </span>
                <span className="pe-2">
                  {" "}
                  <SpinnersCommon
                    type="spinner"
                    color="text-dark"
                  ></SpinnersCommon>
                </span>
              </div>
            </ShowItem>
            {/*tooltip  */}
            <ShowItem name="8.TooltipCommon" directions={[``]} id="section7">
              <div className="col-md-3">
                <InputCommon
                  ContentLabe="Your name or your email"
                  placeholder="Please add your name or your email in here"
                  size ="form-control-lg"
                ></InputCommon>
                 <InputCommon
                  ContentLabe="Your name or your email"
                  placeholder="Please add your name or your email in here"
                  size ="" isButton ="true"
                ></InputCommon>
               
                
                <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
                 <ListCommon  titleLists={todoList} addClass="bg-dark">

                </ListCommon>
                <InputCommon isButton="true"></InputCommon>
              </div>
            </ShowItem>
          </div>
        </div>
      </div>
    </div>
  );
}
