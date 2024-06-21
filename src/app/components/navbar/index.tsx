'use client';

import {
	FaSearch,
	FaUserCircle, FaSignInAlt, FaUserPlus
} from 'react-icons/fa';

import Link from 'next/link';

import { randomKeyword } from "./randomKeyword.ts";

import logo from "@/public/logo.png";
import "./index.css";



export default function Navbar() {
	return (
		<nav>
			<div id="logo">
				<Link href="/">
					<img
						src={logo.src}
						alt="Logo"
					/>
				</Link>
			</div>

			<form
				id="search"
				role="search"
				action="/search"
				onSubmit={e => e.preventDefault()}
			>
				<input
					type="search"
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
				<Link href="/login" id="login">
					<FaSignInAlt/> 로그인
				</Link>
				<div className="divider">|</div>
				<Link href="/register" id="register">
					<FaUserPlus/> 회원가입
				</Link>
			</div>
		</nav>
	);
}