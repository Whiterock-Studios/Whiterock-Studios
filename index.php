<?php
	$title = "Web Design and Development Derby";
	$description = "White Rock Studios are a design agency based in Derbyshire. We offer a variety of bespoke design and development services.";
	include "partials/header.php";
?>

<section class="page-intro bg-move" data-layzr="<?php echo $url; ?>/assets/images/main-bg.png" data-layzr-bg>
	<div class="center">
			<h2>A real taste of design</h2>
			<a href="<?php echo $url; ?>/portfolio">View Portfolio</a>
			<a href="<?php echo $url; ?>/contact">Contact Us</a>
	</div>
</section>


<section id="home_section-2">
	<div class="home_section-2_container">
		<h2>A bit about us</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit enim, accumsan et est eget, gravida dapibus erat. Ut id mi at orci lobortis suscipit. Vestibulum mollis gravida vestibulum. Sed ultrices, erat non euismod vestibulum, dolor massa mattis velit, et aliquet felis ex ut elit. Praesent sed gravida mauris. Sed et lacus vulputate, auctor massa a, tempor enim. Praesent sem justo, pharetra eget rhoncus feugiat, aliquam molestie lacus. Etiam dolor nisl, accumsan in urna nec, molestie finibus orci. Maecenas ut massa ac urna tristique feugiat. </p>
	</div>
</section>


<section id="home_call-to-action-sections">

	<section class="home_section bg-white">
		<div class="outer-container">
			<div class="body">
				<div class="inner-body">
					<h2>Who are we?</h2>
					<p>We are a graphic design studio based in the east midlands, specialising in web design &amp; development.</p>
					<a href="<?php echo $url; ?>/about" class="wrs-button bg-light-blue">Read more</a>
				</div>
			</div>
			<div class="image-container">
				<img alt="White Rock Studios Eagle" data-layzr="<?php echo $url; ?>/assets/images/whiterock-eagle-black.jpg">
			</div>
		</div>
	</section>

	<section class="home_section bg-light-grey">
		<div class="outer-container">
			<div class="body">
				<div class="inner-body">
					<h1>Graphic Design</h1>
					<p>When you make something no one hates, no one loves it.</p>
					<a href="<?php echo $url; ?>/graphic-design" class="wrs-button bg-red">Graphic Design</a>
				</div>
			</div>
			<div class="image-container">
				<img alt="White Rock Studios Eagle" data-layzr="<?php echo $url; ?>/assets/images/home/pencils.png">
			</div>
		</div>
	</section>

	<section class="home_section bg-medium-grey">
		<div class="outer-container">
			<div class="body">
				<div class="inner-body">
					<h1>Web Development</h1>
					<p>What separated design from art is that design is meant to be...functional.</p>
					<a href="<?php echo $url; ?>/web-development" class="wrs-button bg-light-purple">Web Development</a>
				</div>
			</div>
			<div class="image-container">
				<img alt="White Rock Studios Eagle" data-layzr="<?php echo $url; ?>/assets/images/home/macbook.png">
			</div>
		</div>
	</section>

</section>

<section id="taste-of-design">
	<div class="inner">
		<img data-layzr="assets/images/home/ice-cream.png" alt="Fresh Design">
		<h3>A real taste of design</h3>
		<a href="<?php echo $url; ?>/portfolio" class="wrs-button bg light-blue">View our work</a>
	</div>
</section>

<?php
	include "partials/footer.php";
?>