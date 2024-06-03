import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

import "./global.css";



export default async function Home() {
	return (
		<main>
			<Navbar/>
				<h1>메인 페이지</h1>
			<Footer/>
		</main>
	);
}