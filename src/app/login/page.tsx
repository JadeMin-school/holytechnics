'use client';

import Link from 'next/link';

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

import "./page.css";



export default function Login() {
	return (
		<>
			<Navbar/>
			<main id="login">
				<h1>로그인</h1>
				<form
					action="./login"
					method="post"
					onSubmit={e => e.preventDefault()}
				>
					<div id="inputs">
						<input
							type="text"
							placeholder="아이디"
						/>
						<input
							type="password"
							placeholder="비밀번호"
						/>
					</div>
					<div id="button">
						<button type="submit">로그인</button>
					</div>
				</form>
				<div id="find">
					<Link href="/find">아이디/비밀번호 찾기</Link>
				</div>
				<hr/>
				<p>
					아직 회원이 아니신가요? <Link href="/register">회원가입</Link>
				</p>
			</main>
			<Footer/>
		</>
	);
}