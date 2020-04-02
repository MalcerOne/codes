document.addEventListener('DOMContentLoaded', function() {

  let params = coDesExtract()

  let value = params['key']

  let value2 = params['pi']
 

  let db = coDesConnect('https://projeto-ana-andre-leo-rafael.firebaseio.com/')
  
  db.download('/', function(data) {
    context = data
    console.log(context)
    coDesReplace('.nav',context)
    context = data["portfolio"][value2]["projetos"][value]
    coDesReplace('title',context)
    coDesReplace('.descricao',context)
    
  })
})

