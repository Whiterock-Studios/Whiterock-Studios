<?php
$url = "http://localhost/wr";
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="<?php echo $url; ?>/assets/stylesheets/main.css">
	<link href='https://fonts.googleapis.com/css?family=Muli:300italic,300' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
	<meta charset="UFT-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<title><?php echo $title ?> | White Rock Studios</title>
	<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
</head>
<body>
	<header>
		<nav id="main-menu">
			<div id="burger">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<section id="main-menu-inner" class="menu-closed bg-move" data-layzr="<?php echo $url; ?>/assets/images/main-bg.png" data-layzr-bg>
				<ul>
					<li><a href="<?php echo $url; ?>">Home</a></li>
					<li><a href="<?php echo $url; ?>/graphic-design">Design</a></li>
					<li><a href="<?php echo $url; ?>/web-development">Development</a></li>
					<li><a href="<?php echo $url; ?>/portfolio">Portfolio</a></li>
					<li><a href="<?php echo $url; ?>/about">About</a></li>
					<li><a href="<?php echo $url; ?>/contact">Contact</a></li>
					<li class="menu-icon"><a href="<?php echo $url; ?>"><i class="icon-pinterest"></i></a></li>
					<li class="menu-icon"><a href="<?php echo $url; ?>"><i class="icon-twitter"></i></a></li>
					<li class="menu-icon"><a href="<?php echo $url; ?>"><i class="icon-instagram"></i></a></li>
				</ul>
			</section>
		</nav>
		<section id="header-logo">
			<a href="<?php echo $url; ?>" title="White Rock Studios">
				<img class="full-size" data-layzr="<?php echo $url; ?>/assets/images/whiterock-logo.png" alt="White Rock Studios Logo">
				<img class="eagle-size" data-layzr="<?php echo $url; ?>/assets/images/whiterock-eagle-white.png" alt="White Rock Studios Eagle Logo">
			</a>
		</section>
		<nav id="header-social">
			<ul>
				<li><a href="<?php echo $url; ?>"><i class="icon-pinterest"></i></a></li>
				<li><a href="<?php echo $url; ?>"><i class="icon-twitter"></i></a></li>
				<li><a href="<?php echo $url; ?>"><i class="icon-instagram"></i></a></li>
			</ul>
		</nav>
	</header>

	<main>