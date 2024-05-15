<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		
		<link type="text/css" rel="stylesheet" href="index.css"/>

		<?php
			$pdo = new PDO("mysql:host=localhost;dbname=hello", "root", "");

			$stmt = $pdo->prepare("SELECT * FROM board WHERE id = :id");
			$stmt->bindValue(":id", $_GET["id"]);
			$stmt->execute();
			$BOARD = $stmt->fetch();
		?>
		<?php
			$id = $BOARD["id"];
			$title = $BOARD["title"];
			$content = $BOARD["content"];
			$writerName = $BOARD["writerName"];
			$writerIP = $BOARD["writerIP"];
			$views = $BOARD["views"];
			$timestamp = $BOARD["timestamp"];
		?>

		<?php
			$stmt = $pdo->prepare("UPDATE board SET views = views + 1 WHERE id = :id");
			$stmt->bindValue(":id", $id);
			$stmt->execute();
		?>

		<title><?=$title?></title>
	</head>
	<body>
		<main id="main_content">
			<article id="post_view">
				<header>
					<h1 id="title">
						<?=$title?>
					</h1>
					<div id="info">
						<div id="fl">
							<span class="nickname">
								<?=$writerName?>
							</span>
							<span class="ip">
								(<?=$writerIP?>)
							</span>
							<time class="timestamp" datetime="<?=$timestamp?>">
								<?=$timestamp?> 
							</time>
						</div>
					</div>
				</header>
				<div id="content">
					<?=$content?>
				</div>
			</article>
		</main>
	</body>
</html>