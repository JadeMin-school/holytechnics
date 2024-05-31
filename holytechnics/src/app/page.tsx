import Image from 'next/image';

import {
	TableContainer, Table, Thead, Tbody, Tr, Th, Td,
} from '@chakra-ui/react';



export default function Home() {
	return (
		<TableContainer>
			<Table>
				<colgroup>
					<col style="width: 7%;"/>
					<col style="width: 60px;"/>
					<col style="width: 18%;"/>
					<col style="width: 18%;"/>
					<col style="width: 6%;"/>
				</colgroup>
				<Thead>
					<Tr>
						<Th>번호</Th>
						<Th>제목</Th>
						<Th>글쓴이</Th>
						<Th>작성일</Th>
						<Th>조회</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr">
						<Td>

						</Td>
						<Td class="title">
							<a href="../view?id="></a>
						</td>
						<td class="writer">
							<span class="nickname"></span>
							<span class="ip">()</span>
						</td>
						<td class="timestamp">
							<time datetime=""></td></time>
						</td>
						<td class="views">
						</td>
					</Tr>
				</Tbody>
			</Table>
		</TableContainer>
	);
}