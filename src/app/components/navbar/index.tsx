'use client';

import {
	FaSearch,
	FaUserCircle, FaSignInAlt, FaUserPlus
} from 'react-icons/fa';

import $ from "@/config.json";

import { randomKeyword } from "./randomKeyword.ts";

import logo from "@/public/logo.png";

import "./index.css";



export default function Navbar() {
	return (
		<nav>
			<div id="logo">
				<a href={`${$.ENTRY_PATH}/`}>
					<img
						src={logo.src}
						alt="Logo"
					/>
				</a>
			</div>

			<form
				id="search"
				action="/search"
				onSubmit={e => e.preventDefault()}
			>
				<input
					type="text"
					placeholder={randomKeyword()}
				/>
				<button type="submit">
					<FaSearch size={22}/>
				</button>
			</form>

			<div id="profile">
				{/* <Link href="/my" id="my">
					<FaUserCircle size={30}/>
				</Link> */}
				<a href={`${$.ENTRY_PATH}/login`} id="login">
					<FaSignInAlt/> 로그인
				</a>
				<div className="divider">|</div>
				<a href={`${$.ENTRY_PATH}/register`} id="register">
					<FaUserPlus/> 회원가입
				</a>
			</div>
		</nav>
	);
}