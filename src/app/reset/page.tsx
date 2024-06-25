'use client';

import { useState, useEffect } from 'react';

import "./page.css";



export default function Reset() {
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(true);

	const requiredInputs = [id, password];

	useEffect(() => {
		if(!requiredInputs.some(i => i.length === 0)) {
			setError(false);
		} else {
			setError(true);
		}
	}, requiredInputs);


	return (
		<main id="reset">
			<h1>비밀번호 초기화</h1>
			<form
				action="./reset"
				method="post"
				onSubmit={e => e.preventDefault()}
			>
				<input
					type="text"
					placeholder="아이디"
					required={true}
					onChange={e => setId(e.target.value)}
				/>
				<input
					type="email"
					placeholder="이메일"
					required={true}
					onChange={e => setPassword(e.target.value)}
				/>
				<button
					type="submit"
					disabled={error}
				>
					비밀번호 초기화
				</button>
			</form>
		</main>
	);
}