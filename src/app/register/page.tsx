'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

import "./page.css";

export default function Login() {
	const [password, setPassword] = useState("");
	const [passwordCheck, setPasswordCheck] = useState("");
	const [agree, setAgree] = useState(false);
	const [error, setError] = useState(true);

	useEffect(() => {
		if (password === passwordCheck && agree === true) {
			setError(false);
		} else {
			setError(true);
		}
	}, [password, passwordCheck, agree]);


	return (
		<>
			<Navbar/>
			<main id="register">
				<h1>회원가입</h1>
				<form
					action="./register"
					method="post"
					onSubmit={e => e.preventDefault()}
				>
					<input
						type="text"
						placeholder="아이디"
						required={true}
					/>
					<input
						type="password"
						placeholder="비밀번호"
						required={true}
						value={password}
						onChange={e => {
							setPassword(e.target.value);
						}}
					/>
					<input
						type="password"
						placeholder="비밀번호 확인"
						required={true}
						value={passwordCheck}
						onChange={e => {
							setPasswordCheck(e.target.value);
						}}
					/>
					<input
						type="number"
						placeholder="학번"
						required={true}
					/>
					<input
						type="email"
						placeholder="이메일"
						required={false}
					/>
					<input
						type="number"
						placeholder="전화번호"
						required={false}
					/>
					<div id="agrees">
						<input
							type="checkbox"
							id="privacy"
							required={true}
							checked={agree}
							onChange={e => {
								setAgree(e.target.checked);
							}}
						/>
						<label htmlFor="privacy">
							<Link href="/privacy">개인정보 수집</Link>에 동의합니다.
						</label>
					</div>
					<button
						type="submit"
						disabled={error}
					>
						회원가입
					</button>
				</form>
			</main>
			<Footer/>
		</>
	);
}