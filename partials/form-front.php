<form action="<?php echo $url; ?>/partials/form-processor.php" method="post">
	<div class="left">
		<input type="text" name="name" placeholder="Name" class="form-item">
		<input type="email" name="email" placeholder="Email" class="form-item">
		<input type="text" name="subject" placeholder="Subject" class="form-item">
		<textarea name="message" rows="4" placeholder="Message" class="form-item"></textarea>
	</div>
	<div class="right">
		<input type="submit" value="Send" class="hello-form-button">
	</div>
</form>