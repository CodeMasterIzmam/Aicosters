import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Frame from "../../Components/Assets/Frame.svg";
import Frame2 from "../../Components/Assets/Frame 2.svg";
import Illustration from "../../Components/Assets/Illustration.svg";
import Frame3 from "../../Components/Assets/Frame3.svg";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  RightOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Input, Space } from "antd";

const Login = () => {
    const [login, setLogin]= useState(true);
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const handleClicked=()=>{
setLogin(false)
  }
  const handleLogin=()=>{
setLogin(true)
  }
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div>
      <div className="login">
        <div className="accuil">
          <div className="row">
            <div className="creer col-md-5">
              <h1 className="unreer">Create an </h1>
              <h1 className="unreer compt">account</h1>
              {login ? (
                <div>
                  <p className="vous">
                    Do not have an account?{" "}
                    <Link to="#" onClick={handleClicked}>
                      <span className="current"> Sign Up</span>
                    </Link>
                  </p>
                  <Space direction="vertical">
                    <div className="spea">
                      <p className="maile">E-mail</p>
                      <Input placeholder="E-mail" />
                    </div>
                    <div className="spea">
                      <p className="maile">Enter Password</p>
                      <Input.Password placeholder="Password" />
                    </div>
                    <div className="spea">
                      <p className="maile">Confirm Password</p>
                      <Input.Password
                        placeholder="Password"
                        iconRender={(visible) =>
                          visible ? (
                            <EyeTwoTone className="eyetwo" />
                          ) : (
                            <EyeInvisibleOutlined />
                          )
                        }
                      />
                    </div>
                    <Checkbox className="jaccep" onChange={onChange}>
                      J'ai lu et j'accepte{" "}
                      <span className="current">
                        {" "}
                        la politique de confidentialité
                      </span>
                    </Checkbox>
                  </Space>
                  <div>
                    <Button className="pinsb" type="primary">
                      Login
                    </Button>
                  </div>{" "}
                </div>
              ) : (
                <div>
                  <p className="vous">
                    Already have an account?{" "}
                    <Link to="#" onClick={handleLogin}>
                      <span className="current"> Login</span>
                    </Link>
                  </p>
                  <Space direction="vertical">
                    <div className="spea">
                      <p className="maile">Username</p>
                      <Input placeholder="Name" />
                    </div>
                    <div className="spea">
                      <p className="maile">E-mail</p>
                      <Input placeholder="E-mail" />
                    </div>
                    <div className="spea">
                      <p className="maile">Password</p>
                      <Input.Password placeholder="Password" />
                    </div>
                    <Checkbox className="jaccep" onChange={onChange}>
                      I have read and accept{" "}
                      <span className="current">
                        {" "}
                        the privacy policy
                      </span>
                    </Checkbox>
                  </Space>
                  <div>
                    <Button className="pinsb" type="primary">
                      Sign Up
                    </Button>
                  </div>{" "}
                </div>
              )}
              <hr className="hr" />
              <p className="oup">Or</p>
              <div className="goologo">
                <img className="frame" src={Frame} alt="icon" />
                <img className="frame" src={Frame2} alt="icon" />
                <img className="frame" src={Frame3} alt="icon" />
              </div>
            </div>
            <div className="flex-wrape col-md-4">
              <img className="illustration" src={Illustration} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
