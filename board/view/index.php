<!DOCTYPE html>
<html>
	<head>
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


		<meta charset="UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<meta name="description" content="<?=$content?>"/>
		<meta name="author" content="<?=$writerName?>"/>
		
		<link type="text/css" rel="stylesheet" href="index.css"/>

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