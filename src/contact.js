import React from "react";
import { Layout } from "./App";
import "./styles.css";
function Contact() {
  return (
    <div >
      <Layout />
      <div className="card">
        <Avatar />
        <dvi className="data">
          <Intro />
        </dvi>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>นายจิรายุ แจ่มใส</h1>
      <p>
        นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์
        มหาวิทยาลัยอุบลราชธานี
      </p>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="photo.jpg" alt="My Avatar" />;
}

export default Contact;
