function startScanner(){

Quagga.init({

inputStream:{
type:"LiveStream",
target:document.querySelector('#scanner'),
constraints:{ facingMode:"environment" }
},

decoder:{
readers:["upc_reader","ean_reader"]
}

},

function(err){

if(err){
console.log(err)
return
}

Quagga.start()

})

Quagga.onDetected(function(result){

const code = result.codeResult.code

alert("Scanned: " + code)

Quagga.stop()

})

}