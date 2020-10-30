//Просто пример работы сетки
<template>
	<div class="b-grid-example">
		page-main
		<div class="l-stretch-global" style="background-color: red; margin-bottom: 2rem;">
			<div class="l-stretch-content">
				<div class="l-indent-left">sdfsdsdfsdf</div>
			</div>
		</div>
		<div class="l-stretch-left"  style="background-color: green;margin-bottom:20px;">left</div>
		<div class="l-stretch-right" style="background-color: green;margin-bottom:20px;">right</div>
		<div class="l-stretch-all" style="background-color: green;margin-bottom:20px;">all</div>
		<div class="l-stretch-left-all" style="background-color: green;margin-bottom:20px;">left</div>
		<div class="l-stretch-right-all" style="background-color: green;margin-bottom:20px;">right</div>
		<div class="l-stretch-all-all" style="background-color: green;margin-bottom:20px;">
			<div class="l-stretch-content-margin" style="background-color: blue; margin-bottom:20px;">content</div>
			<div class="l-indent-left" style="background-color: blue; margin-bottom:20px;">content</div>
			<div class="l-indent-left-margin" style="background-color: blue; margin-bottom:20px;">content</div>
			<div class="l-indent-left-all" style="background-color: blue; margin-bottom:20px;">content</div>
			<div class="l-indent-left-all-margin" style="background-color: blue; margin-bottom:20px;">content</div>
			<div class="l-indent-right" style="background-color: blue; margin-bottom:20px;">content</div>
			<div class="l-indent-right-margin" style="background-color: blue; margin-bottom:20px;">content</div>
			<div class="l-indent-right-all" style="background-color: blue; margin-bottom:20px;">content</div>
			<div class="l-indent-right-all-margin" style="background-color: blue; margin-bottom:20px;">content</div>
			<div class="l-indent-all" style="background-color: blue; margin-bottom:20px;">content</div>
			<div class="l-indent-all-margin" style="background-color: blue; margin-bottom:20px;">content</div>
			<div class="l-indent-all-all" style="background-color: blue; margin-bottom:20px;">content</div>
			<div class="l-indent-all-all-margin" style="background-color: blue; margin-bottom:20px;">content</div>
		</div>
	</div>
</template>
<script src="./grid-example.js"></script>