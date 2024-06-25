'use client';

import Link from 'next/link';

import "./page.css";



export default function Login() {
	return (
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
						required={true}
					/>
					<input
						type="password"
						placeholder="비밀번호"
						required={true}
					/>
				</div>
				<div id="submit">
					<button type="submit">로그인</button>
				</div>
			</form>
			<Link href="/reset">비밀번호를 잊으셨나요?</Link>
			<hr/>
			<p>
				아직 회원이 아니신가요? <Link href="/register">회원가입</Link>
			</p>
		</main>
	);
}