'use client';

import {
	FaSun, FaCloudRain, FaSnowflake,
	FaCheckCircle
} from 'react-icons/fa';

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

import "./page.css";



export default function Home() {
	return (
		<>
			<Navbar/>
			<main>
				<div id="content">
					<div id="next-time">
						<span>다음 강의 : { "ChatGPT" }</span>
					</div>
					<div id="weather">
						<div id="icon">
							<FaCloudRain
								color="blue"
								size={60}
							/>
							<FaSun
								color="yellow"
								size={60}
							/>
							<FaSnowflake
								color="white"
								size={60}
							/>
						</div>
						<div id="description">
							<span>오늘의 날씨는 아주 화창합니다.</span>
						</div>
					</div>
				</div>
				<aside>
					<div id="hat">
						<span>구독 중인 알림 <FaCheckCircle color="#5FA777"/></span>
					</div>
					<div id="shoes">
						<ul>
							<li>학식 알림</li>
							<li>시간표 알림</li>
						</ul>
					</div>
				</aside>
			</main>
			<Footer/>
		</>
	);
}