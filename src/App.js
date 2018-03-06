import React, { Component } from "react";
import AOS from "aos";
import "./App.css";
import "./assets/aos.css";
import girl from "./assets/coder_girl.png";
import tsubaki from "./assets/tsubaki.svg";
import hagi from "./assets/hagi.png";
import fuji from "./assets/fuji.png";
import fujiR from "./assets/fuji_r.png";
import {
	Heart,
	Word,
	Pdf,
	ReactImg,
	NodeJs,
	MongoDb,
	Bootstrap,
	Ruby,
	Rails,
	Sass,
	Responsive,
	Octocat,
	LinkedIn,
	Email
} from "./assets/components/Svg";

class App extends Component {
	componentDidMount = () => {
		const svgWithWhiteSpace = document.getElementsByClassName("svg");
		for (let i = 0; i < svgWithWhiteSpace.length; i++) {
			const svg = svgWithWhiteSpace[i];
			const bbox = svg.getBBox();
			const viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
			svg.setAttribute("viewBox", viewBox);
		}
	};

	copyText = () => {
		const copiedText = document.getElementById("addy").select();
		document.execCommand("Copy");
		console.log(copiedText);
		// alert(copiedText)
		const tooltip = document.getElementById("myTooltip");
		tooltip.innerHTML = "Email copied!";
	};

	outFunc = () => {
		const tooltip = document.getElementById("myTooltip");
		tooltip.innerHTML = "Copy email address";
	};

	render() {
		AOS.init();
		return (
			<div className="App">
				<div className="frame" id="card1">
					<div className="md-left-pane">
						<div id="title-frame-outer">
							<img id="coder_girl_img" data-aos="flip-left" data-aos-duration="1000" alt="coder girl" src={girl} />
							<div className="title-frame">
								<div className="title-frame-first" />
								<div className="title-frame-second">
									<h1 className="vertical">Tomomi Oki</h1>
								</div>
							</div>
							<p className="text-center pb-1 bold">Web Developer</p>
						</div>
					</div>
					<div className="content">
						<ul>
							<li className="py-2">
								<a>About me</a>
							</li>
							<li className="py-2">
								<a>Skills</a>
							</li>
							<li className="py-2">
								<a>Projects</a>
							</li>
							<li className="py-2">
								<a>Contact</a>
							</li>
						</ul>
					</div>
				</div>

				{/* card 2 */}
				<div className="frame" id="card2">
					<div className="title-frame">
						<div className="title-frame-first">
							<img
								id="tsubaki"
								data-aos="fade"
								data-aos-duration="1500"
								data-aos-anchor-placement="top-center"
								alt="tsubaki"
								src={tsubaki}
							/>
						</div>
						<div className="title-frame-second">
							<h3 className="vertical">About Me</h3>
						</div>
					</div>
					<div className="content">
						<div className="textarea">
							<p>Why, hello there.</p>
							<p>My name is Tomomi, born and bred Japanese living in Melbourne.</p>
							<p>
								This portfolio was originally created to showcase my skills that I've learnt in the first 1.5 month
								of studying at{" "}
								<a href="https://coderacademy.edu.au" target="_blank" rel="noopener noreferrer">
									Coder Academy
								</a>. It is maintained and updated occasionally ever since.
							</p>
							<p>Past profession: A survey programmer in marketing research, querying away SQL</p>
							<div id="heart-wrapper">
								<Heart id="heart" />
								<span>: Music, food, art and code</span>
							</div>
						</div>
					</div>
				</div>

				{/* card 3 */}
				<div className="frame" id="card3">
					<img
						id="hagi"
						data-aos="fade-up-left"
						data-aos-anchor-placement="bottom-bottom"
						data-aos-duration="2100"
						alt="hagi"
						src={hagi}
					/>

					<div className="md-left-pane">
						<div className="title-frame">
							<div className="title-frame-first" />
							<div className="title-frame-second">
								<h3 className="">Skills</h3>
							</div>
						</div>
					</div>

					<div className="content">
						<div className="md-right-pane">
							<ul>
								<li>HTML5</li>
								<li>CSS3 &amp; 4</li>
								<li>SASS/SCSS</li>
								<li>JavaScript</li>
								<li>React</li>
								<li>Angular</li>
								<li>Node.js</li>
								<li>Express.js</li>
								<li>Mongodb</li>
								<li>SQL</li>
								<li>Ruby</li>
								<li>Ruby on Rails</li>
							</ul>
							<p className="bold py-2">Download CV</p>
							<div className="svg-wrapper clearfix">
								<a
									className="mr-4"
									href="https://github.com/okichan/portfolio-upgraded/raw/master/public/Tomomi_Oki_resume.docx"
								>
									<Word />
								</a>
								<a href="https://github.com/okichan/portfolio-upgraded/raw/master/public/Tomomi_Oki_resume.pdf">
									<Pdf />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* card 4 */}
				<div className="frame" id="card4">
					<img
						src={fuji}
						id="fuji"
						data-aos="fade-down"
						data-aos-duration="800"
						data-aos-easing="ease-in-out"
						data-aos-delay=""
						alt="fuji"
					/>
					<img
						src={fujiR}
						id="fuji-r"
						data-aos="fade-down"
						data-aos-duration="900"
						data-aos-easing="ease-in-out"
						data-aos-delay="500"
						alt="fuji right"
					/>
					<div className="title-frame">
						<div className="title-frame-first" />
						<div className="title-frame-second">
							<h3 className="vertical">Projects</h3>
						</div>
					</div>

					<div className="content mt-3">
						<div className="md-right-pane">
							<h4 className="pb-1">Tanto Management System</h4>
							<ReactImg />
							<NodeJs />
							<MongoDb />
							<Bootstrap />
							<Responsive />
							<ul>
								<li className="mr-1">
									<a href="https://mct-project-t3-demo.netlify.com/" target="_blank" rel="noopener noreferrer">
										Site
									</a>
								</li>
								<li className="mr-1">
									<a href="https://github.com/okichan/major-project-term3" target="_blank" rel="noopener noreferrer">
										Repo
									</a>
								</li>
								<li>
									<a
										href="https://www.figma.com/file/ZxpbKR6v8zlqPtBJH6aW7u/Term-3-major-project-Copy"
										target="_blank"
										rel="noopener noreferrer"
									>
										Wireframe
									</a>
								</li>
							</ul>

							<h4 className="pb-1">Wordsworth</h4>
							{/* <Ruby /> */}
							<Rails />
							<Bootstrap />
							<Responsive />
							<ul>
								<li className="mr-1">
									<a href="http://wordsworth.herokuapp.com/" target="_blank" rel="noopener noreferrer">
										Site
									</a>
								</li>
								<li className="mr-1">
									<a href="https://github.com/okichan/wordsworth" target="_blank" rel="noopener noreferrer">
										Repo
									</a>
								</li>
								<li>
									<a
										href="https://www.figma.com/file/sHidem4uBMaK1UZOQKVUwG/Wordsworth-Copy"
										target="_blank"
										rel="noopener noreferrer"
									>
										Wireframe
									</a>
								</li>
							</ul>

							<h4 className="pb-1">This portfolio</h4>
							<ReactImg />
							<Sass />
							<Responsive />
							<ul>
								<li className="mr-1">
									<a href="https://github.com/okichan/portfolio_v2" target="_blank" rel="noopener noreferrer">
										Repo
									</a>
								</li>
								<li>
									<a
										href="https://www.figma.com/file/HSQQXVgZZxc1hClYtX8x0IWr/Portfolio"
										target="_blank"
										rel="noopener noreferrer"
									>
										Wireframe
									</a>
								</li>
							</ul>

							<h4>The unofficial Radiohead fan site</h4>
							<ul>
								<li>
									<a href="https://secretary-answers-11183.netlify.com/" target="_blank" rel="noopener noreferrer">
										Site
									</a>
								</li>
							</ul>
							<h4>Project details are available in my CV.</h4>
						</div>
					</div>
				</div>

				{/* card 5 */}
				<div className="frame" id="card5">
					<div className="title-frame">
						<div className="title-frame-first" />
						<div className="title-frame-second">
							<h4 className="">Contact</h4>
						</div>
					</div>
					<div className="content">
						<a href="https://github.com/okichan" target="_blank" rel="noopener noreferrer">
							<Octocat />
						</a>

						<a href="https://www.linkedin.com/in/tomomi-oki-parsons/" target="_blank" rel="noopener noreferrer">
							<LinkedIn />
						</a>

						<div className="tooltip-positioner">
							<a onClick={this.copyText} onMouseLeave={this.outFunc}>
								<Email />
							</a>
							<p className="tooltiptext" id="myTooltip">
								Copy email address
							</p>
						</div>
					</div>
				</div>
				<footer>
					Last update: 5 Mar 2018
					<input id="addy" defaultValue="tomomioki@outlook.com" />
				</footer>
			</div>
		);
	}
}

export default App;
