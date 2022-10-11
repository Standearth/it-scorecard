<script>
	export let grade;
	export let gradeDetail;
</script>

<div class="grade-{grade} grid">
	<div>{gradeDetail}</div>
</div>

<style>
	.grid {
		font-family: var(--sans-bold);
		font-weight: 900;
		font-size: 26px;
		line-height: 36px;
		color: rgb(13, 13, 13);
		
		text-align: center;
		margin: auto;
		width: 100%;
		height: 100%;
	}

	.grid div {
		padding-top: 2px;
	}

	.grade-A {
		background: #a7dbcd;
	}
	.grade-B {
		background: #85c7b9;
	}
	.grade-C {
		background: #7ba9b0;
	}
	.grade-D {
		background: #7896ab;
	}
	.grade-E {
		background: #4e6178;
		color: #fff;
	}
	.grade-F {
		background:  #4e6178;
		color: #fff;
	}
</style>
