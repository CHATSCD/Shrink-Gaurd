async function lookupItem(){

const barcode = document.getElementById("barcodeInput").value

const { data } = await supabase
.from("items")
.select("*")
.eq("barcode", barcode)
.single()

if(!data){
document.getElementById("itemResult").innerHTML="Item not found"
return
}

document.getElementById("itemResult").innerHTML = `
<div class="bg-slate-800 p-4 rounded">
<h3>${data.name}</h3>
<p>$${data.price}</p>
</div>
`
}

async function addItem(){

const barcode=document.getElementById("manualBarcode").value
const name=document.getElementById("manualName").value
const price=document.getElementById("manualPrice").value

await supabase
.from("items")
.insert([
{
barcode,
name,
price
}
])

alert("Item Added")
}

function openAdmin(){
window.location.href="admin.html"
}
