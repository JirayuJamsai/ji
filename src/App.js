import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Contact from "./contact";
import 'bootstrap/dist/js/bootstrap.bundle';


export function Layout() {
  return (
    <nav className="p-3 mb-2 bg-warning text-white">
      <NavLink
        to="/"
        className="link px-2 "
        style={({ isActive, isPending }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        หน้าแรก
      </NavLink>
      <NavLink
        to="/contact"
        className="link px-2"
        style={({ isActive, isPending }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทํา
      </NavLink>
    </nav>
  );
}

function Index() {
  return (
    <>
      <Layout />
      <h2 className="p2">
        วิธีทำอาหารญี่ปุ่น
      </h2>
      <div className="grid-container">
        <div className="grid-item">
          <img className="img" src="1.gif" alt="Food" />
          <h2 className="p2">ซูชิหน้าปลาแซลม่อน</h2>
          <p className = 'p1'>ซูชิหน้าปลาดิบ เมนูอาหารญี่ปุ่น ยอดฮิต ที่ถือเป็นอาหารประจำชาติอีกหนึ่งเมนู  โดยเฉพาะ ซูชิหน้าปลาแซลม่อน ซึ่งเป็นซูชิหน้าปลาดิบที่คนไทยชอบรับประทานมาก ๆ วิธีการทำก็ไม่ยาก เพียงแค่หุงข้าว และ ปรุงข้าวญี่ปุ่น ให้พร้อมปั้นเป็นข้าวซูชิ แล่เนื้อปลาแซลม่อนไว้ด้านบน เพียงเท่านี้ ก็พร้อมคีบเข้าปาก ทานได้แล้ว </p>
          <Button className = 'p1'>ดูวิธีทำ</Button>
        </div>
        <div className="grid-item">
          <img className="img" src="2.gif" alt="Food" />
          <h2 className="p2">ปลาซาบะย่างซอสเทริยากิ</h2>
          <p className = 'p1'>ใครอยากทาน ปลาซาบะราดซอสเทริยากิ แบบดั้งเดิม แนะนำให้ลองทำตามสูตรนี้เลย เพราะนี่คือสูตรจาก เชฟโฌ เชฟชาวญี่ปุ่นที่มาอาศัยอยู่ในประเทศไทย รับรองว่าไม่ต้องไปทานถึงร้านอาหารญี่ปุ่น ก็จะได้ลิ้มรสชาติที่อร่อย ตามแบบฉบับชาวญี่ปุ่นแน่นอน</p>
          <Button className = 'p1'>ดูวิธีทำ</Button>

        </div>
        <div className="grid-item">
          <img className="img" src="3.gif" alt="Food" />
          <h2 className="p2">เกี๊ยวซ่า</h2>
          <p className = 'p1'>ถือว่าเป็น เมนูอาหารญี่ปุ่น ที่เหมาะกับเป็นของว่างมาก ๆ สำหรับ เกี๊ยวซ่า ด้วยรสสัมผัสจากแป้งเกี๊ยวที่กรุบกรอบและไส้หมู ผักต่าง ๆ ที่สอดไส้อยู่ด้านใน พอจิ้มกับซอสโชยุที่ให้รสเปรี้ยว ก็จะทำให้ได้ความกรอบนอกนุ่มใน พร้อมรสชาติเปรี้ยวจี๊ดที่ช่วยให้อร่อยมากขึ้น ซึ่งเมนู เกี๊ยวซ่า นั้นถือว่าเป็นเมนูเกี๊ยวทอดที่ฮิตมากในประเทศญี่ปุ่น ก่อนที่จะได้รับความนิยมอย่างมากในประเทศไทย โดยสูตรและส่วนผสมต่าง ๆ มาจาก Youtuber ช่อง daddy cooking</p>
          <Button className = 'p1'>ดูวิธีทำ </Button>
        </div>
      </div>
    </>
  );
}



function App() {
  return (
    <BrowserRouter>
      <Container className="p-3 my-3 bg-light">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
