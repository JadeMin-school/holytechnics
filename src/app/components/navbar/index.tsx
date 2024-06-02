'use client';

import Link from 'next/link';
import {
	FaSearch,
	FaUserCircle, FaSignInAlt, FaUserPlus
} from 'react-icons/fa';

import { randomKeyword } from "./randomKeyword.ts";
import CONFIG from "@/config/config.mjs";

import logo from "@/public/logo.png";

import "./index.css";



export default function Navbar() {
	return (
		<nav>
			<div id="logo">
				<Link href={CONFIG.URL}>
					<img
						src={logo.src}
						alt="Logo"
					/>
				</Link>
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
					<FaSearch size={20}/>
				</button>
			</form>

			<div id="profile">
				{/* <Link href="/my" id="my">
					<FaUserCircle size={30}/>
				</Link> */}
				<Link href="/login" id="sigin">
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