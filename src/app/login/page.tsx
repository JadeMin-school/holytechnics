'use client';

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

import "./page.css";



export default function Login() {
	return (
		<>
			<Navbar/>
			<main>
				<h1>로그인</h1>
				<form>
					<input
						type="text"
						placeholder="아이디"
					/>
					<input
						type="password"
						placeholder="비밀번호"
					/>
					<button type="submit">로그인</button>
				</form>
				<hr/>
				<p>
					아직 회원이 아니신가요? <a href="/register">회원가입</a>
				</p>
			</main>
			<Footer/>
		</>
	);
}