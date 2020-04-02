document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  console.log(value)
  let value2 = document.querySelector(".book-link")
  value2.href = 'livro.html?pi=' + value + '&key={{@key}}'

  let db = coDesConnect('https://projeto-ana-andre-leo-rafael.firebaseio.com/')

  db.download('/', function(data) {

    context = data
	console.log(context)
	coDesReplace('.nav', context)
    
    context = data['biblioteca'][value]
    console.log(context)
    coDesReplace('.call',context)
    coDesReplace('.book-list',context)

  })
})