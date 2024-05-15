<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		
		<link type="text/css" rel="stylesheet" href="index.css"/>

		<?php
			$pdo = new PDO("mysql:host=localhost;dbname=hello", "root", "");

			$stmt = $pdo->prepare("SELECT * FROM board ORDER BY id DESC");
			$stmt->execute();
		?>

		<title>게시글 목록</title>
	</head>
	<body>
		<main id="main_content">
			<table id="post_list">
				<colgroup>
					<col style="width: 7%;"/>
					<col style="width: 60px;"/>
					<col style="width: 18%;"/>
					<col style="width: 18%;"/>
					<col style="width: 6%;"/>
				</colgroup>
				<thead>
					<tr>
						<th>번호</th>
						<th>제목</th>
						<th>글쓴이</th>
						<th>작성일</th>
						<th>조회</th>
					</tr>
				</thead>
				<tbody>
					<?php
						while ($row = $stmt->fetch(PDO::FETCH_ASSOC)):
							$id = $row["id"];
							$title = $row["title"];
							$writerName = $row["writerName"];
							$writerIP = $row["writerIP"];
							$views = $row["views"];
							$timestamp = $row["timestamp"];
					?>
						<tr class="post">
							<td class="id">
								<?=$id?>
							</td>
							<td class="title">
								<a href="../view?id=<?=$id?>">
									<?=$title?>
								</a>
							</td>
							<td class="writer">
								<span class="nickname">
									<?=$writerName?>
								</span>
								<span class="ip">
									(<?=$writerIP?>)
								</span>
							</td>
							<td class="timestamp">
								<time datetime="<?=$timestamp?>">
									<?=$timestamp?>
								</time>
							</td>
							<td class="views">
								<?=$views?>
							</td>
						</tr>
					<?php endwhile; ?>
				</tbody>
			</table>
		</main>
	</body>
</html>