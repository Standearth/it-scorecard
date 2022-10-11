<script>
	export let title = "Title TK";
	export let description = "Description TK";
	export let url = "https://pudding.cool";
	export let keywords = "";
	export let preloadFont = [];
</script>

<svelte:head>
	<!-- HEAD -->
	<title>Supply Change</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="An analysis of climate commitments and greenhouse gas emissions reductions taken by global technology brands and their top suppliers." />
	<meta name="author" content="Stand.earth" />
	<meta name="news_keywords" content="" />

	<meta property="og:title" content="Supply Change" />
	<meta property="og:site_name" content="Stand.earth" />
	<meta property="og:url" content="https://publications.stand.earth/yoga-letter/" />
	<meta property="og:description" content="An analysis of climate commitments and greenhouse gas emissions reductions taken by global technology brands and their top suppliers" />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="en_US" />

	<meta property="og:image" content="https://acb0a5d73b67fccd4bbe-c2d8138f0ea10a18dd4c43ec3aa4240a.ssl.cf5.rackcdn.com/10046/imgonline-com-ua-CompressToSize-aSaGUGhdUN3.jpeg?v=1657902529000" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="600" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="https://publications.stand.earth/yoga-letter/" />
	<meta name="twitter:creator" content="@standearth" />
	<meta name="twitter:title" content="Supply Change" />
	<meta name="twitter:description" content="An analysis of climate commitments and greenhouse gas emissions reductions taken by global technology brands and their top suppliers" />
	<meta name="twitter:image:src" content="https://acb0a5d73b67fccd4bbe-c2d8138f0ea10a18dd4c43ec3aa4240a.ssl.cf5.rackcdn.com/10046/imgonline-com-ua-CompressToSize-aSaGUGhdUN3.jpeg?v=1657902529000" />
	

	<meta name="robots" content="max-image-preview:large" />

	<link rel="canonical" href="{url}/" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css">

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-39F5CEFSFR"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-39F5CEFSFR');
	</script>

	{#each preloadFont as href}
		<link rel="preload" {href} as="font" type="font/woff2" crossorigin />
	{/each}
</svelte:head>
