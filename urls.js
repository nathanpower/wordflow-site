const urls ={
	"urlset": {
		"url": [
			{
				"loc": "https://www.wordflow.ie/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/services/website-copy/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/services/blog-creation/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/services/video-scripts/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/services/copy-editing/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/services/social-media/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/services/writer-for-hire/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/services/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/contact/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/about/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/windows-doors-and-sliders:-how-big-is-too-big/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/triple-glazing-is-it-worth-it/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/buying-windows-how-long-should-my-lead-time-be/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/the-amazing-possibilities-of-schuco/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/explainer:-10-terms-to-understand-when-buying-windows/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/five-questions-people-ask-when-buying-windows/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/alu-clad:-what-it-is-and-why-you-want-it/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/the-new-wonder-wood-for-windows/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/passive-house-builds/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/never-say-die!-a-blog-on-the-power-of-resilience/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/the-path-of-forgiveness/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/entering-the-global-marketplace/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/the-shifting-sands-of-brazil/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/why-irish-eyes-are-smiling/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/is-japan-falling-on-it's-sword'/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/releasing-the-happiness-within/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/italy-a-country-divided/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/from-success-to-significance/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/the-rise-and-rise-of-china/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/finding-your-flow/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/the-french-conundrum/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/post/meanwhile-in-waterford/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/category/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/category/glazing-industry/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/category/self-help/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/category/economics/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/category/opinion/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/archive/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/archive/2018/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/archive/2017/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/archive/2016/",
				"priority": "0.5"
			},
			{
				"loc": "https://www.wordflow.ie/blog/archive/2015/",
				"priority": "0.5"
			}
		],
		"_xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9"
	}
};

const paths = urls.urlset.url.map(i => `<Link to="${i.loc.replace('https://www.wordflow.ie', '')}" />`)
paths.forEach(path => console.log(path))