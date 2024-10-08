import React, { useState } from "react"; 

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color,setColor] = useState(""); 

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<div className="traffic-light-container">
                {/* Componente del semáforo */}
                <div className="traffic-light">
                    <div
                        className={`light red ${color === "red" ? "selected" : ""}`}
                        onClick={() => setColor("red")}
                    ></div>
                    <div
                        className={`light yellow ${color === "yellow" ? "selected" : ""}`}
                        onClick={() => setColor("yellow")}
                    ></div>
                    <div
                        className={`light green ${color === "green" ? "selected" : ""}`}
                        onClick={() => setColor("green")}
                    ></div>
                </div>
            </div>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
