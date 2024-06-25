'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import "./page.css";

export default function Register() {
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");
	const [passwordCheck, setPasswordCheck] = useState("");
	const [studentId, setStudentId] = useState("");
	const [email, setEmail] = useState("");
	const [agree, setAgree] = useState(false);
	const [error, setError] = useState(true);

	const requiredInputs = [id, password, passwordCheck, studentId, email];

	useEffect(() => {
		if (!requiredInputs.some(i => i.length === 0)) {
			if(password === passwordCheck && agree === true) {
				return setError(false);
			}
		}

		setError(true);
	}, [...requiredInputs, agree]);


	return (
		<main id="register">
			<h1>회원가입</h1>
			<form
				action="./register"
				method="post"
				onSubmit={e => e.preventDefault()}
			>
				<input
					type="number"
					placeholder="학번 (필수)"
					required={true}
					value={studentId}
					onChange={e => setStudentId(e.target.value)}
				/>
				<input
					type="text"
					placeholder="아이디 (필수)"
					required={true}
					value={id}
					onChange={e => setId(e.target.value)}
				/>
				<input
					type="password"
					placeholder="비밀번호 (필수)"
					required={true}
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<input
					type="password"
					placeholder="비밀번호 확인 (필수)"
					required={true}
					value={passwordCheck}
					onChange={e => setPasswordCheck(e.target.value)}
				/>
				<input
					type="email"
					placeholder="이메일 (필수)"
					required={true}
					value={email}
					onChange={e => setEmail(e.target.value)}
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
	);
}