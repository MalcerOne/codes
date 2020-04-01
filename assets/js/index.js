document.addEventListener('DOMContentLoaded', function() {
	
	let db = coDesConnect('https://projeto-ana-andre-leo-rafael.firebaseio.com/')

	db.download('/', function(data) {
		context = data
		console.log(context)
		coDesReplace('.menu-list', context)
		coDesReplace('.section-list',context)
	})
   	
})



