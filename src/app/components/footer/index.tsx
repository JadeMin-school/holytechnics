'use client';

import Link from 'next/link';

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
					인천광역시 부평구 무네미로 448번길 56 (우 21417)<br/>
					대표 : 엄준식 | 연락처 : 010-XXXX-XXXX | contact@example.com<br/>
					Not affiliated with "한국폴리텍"
				</span>
			</div>
		</footer>
	);
};