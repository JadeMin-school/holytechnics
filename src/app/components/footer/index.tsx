'use client';

import Link from 'next/link';

import PRIVACY from "@/config/privacy.ts";
import "./index.css";



export default function Footer() {
	return (
		<footer>
			<div id="link">
				<Link href="/privacy">개인정보처리방침</Link>
				{/* <div className="divider">|</div>
				<Link href="/service">서비스소개</Link> */}
			</div>
			<div id="note">
				<span>
					{PRIVACY.ADDRESS}<br/>
					대표 : {PRIVACY.CONTACT.NAME} | 연락처 : {PRIVACY.CONTACT.PHONE} | {PRIVACY.CONTACT.EMAIL}<br/>
					Not affiliated with "한국폴리텍"
				</span>
			</div>
		</footer>
	);
};