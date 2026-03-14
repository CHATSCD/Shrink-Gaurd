async function loadHistory(){

const { data } = await supabase
.from("items")
.select("*")
.limit(50)

let html=""

data.forEach(item=>{

html+=`
<div class="bg-slate-800 p-3 rounded mb-2">
${item.name} - $${item.price}
</div>
`

})

document.getElementById("history").innerHTML=html

}
