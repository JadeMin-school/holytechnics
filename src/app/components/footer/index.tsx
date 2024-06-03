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
					서울특별시 중구 세종대로9길 42 부영빌딩 7층 (우 04513)<br/>
					대표 : 엄준식 | 연락처 : 010-XXXX-XXXX | contact@example.com<br/>
					Not affiliated with "한국폴리텍"
				</span>
			</div>
		</footer>
	);
};