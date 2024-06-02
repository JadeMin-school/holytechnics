import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

interface Post {
	id: number;
	title: string;
	body: string;
}



// export const revalidate = 0;

export default async function Home(): Promise<JSX.Element> {
	const result: Response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data: Post[] = await result.json();

	return (
		<main>
			<table>
				<thead>
					<tr>
						<th>아이디</th>
						<th>제목</th>
						<th>내용</th>
					</tr>
				</thead>
				<tbody>
					{
						data.map((post) => {
							return (
								<tr key={post.id}>
									<td>{post.id}</td>
									<td>{post.title}</td>
									<td>{post.body}</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
		</main>
	);
}