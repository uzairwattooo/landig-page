import React from "react";
import Logo from "./Assets/Logo.jpeg";
function Page() {
return (
<div className="container">
    <div className="row">
        <div className="mt-5" style={{ textAlign: "center", fontSize: "20px", fontFamily:"monospace" }}>
            Built with systeme.io|  Privacy <br /> policy | Legal | Terms and <br /> conditions
    </div>
        <img className="d-flex justify-content-center images" src={Logo} alt="" />
        <div className="mt-3" style={{ textAlign: "center", fontSize: "20px", fontFamily:"monospace",backgroundColor:"#a09556" }}>
            Get Daily Gold & Currencies <br /> Signals With Perfect SL/TP & <br /> Lot Size!!
        </div>
        <a href="https://t.me/falconfxsignals" style={{ textDecoration: "none", color: "white" }}>
        <div className="mt-3 d-flex" style={{ textAlign: "center", fontSize: "20px",backgroundColor:"blue" }}>
            <i  class="fa-brands fa-telegram icons1"></i>
            <h1  className="telegram" style={{display:"flex",justifyContent:"center"}}>Join Telegram <br /> Channel</h1>
            <i class="fa-brands fa-telegram icon2"></i>
        </div>
        </a>
                <div className="mt-3" style={{ textAlign: "center", fontSize: "20px", fontFamily:"monospace" }}>
            More Than 93% Accuracy!
        </div>
        <a href="https://t.me/falconfxsignals" style={{ textDecoration: "none", color: "white" }}>
                <div className="mt-3 d-flex " style={{ textAlign: "center", fontSize: "20px",backgroundColor:"blue" }}>
            <i  class="fa-brands fa-telegram icon3 mt-4"></i>
            <h4 className="mt-4">Join Telegram Channel</h4>
            <i class="fa-brands fa-telegram icon3 mt-4"></i>
        </div>
        </a>
    </div>
</div>
);
}

export default Page;