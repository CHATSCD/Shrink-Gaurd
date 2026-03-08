// SUPABASE CONNECTION

const SUPABASE_URL = "https://ylfsqjbqhewpfiooytlg.supabase.co"

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZnNxamJxaGV3cGZpb295dGxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NzQwODQsImV4cCI6MjA4ODM1MDA4NH0.Ssl5J6ktZIVtLd2cq8vH7PWdR4-yZwI5tt4PtXkVqWk"

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
)


// SAVE INCOMING COUNT

async function saveIncoming(){

  const barcode = document.getElementById("barcode").value
  const incoming = document.getElementById("incoming").value

  if(!barcode || !incoming){
    alert("Enter barcode and incoming count")
    return
  }

  const { error } = await supabase
  .from("counts")
  .insert([
    {
      barcode: barcode,
      incoming: incoming
    }
  ])

  if(error){
    console.error(error)
    alert("Error saving incoming")
  }else{
    alert("Incoming saved")
  }

}


// SUBMIT COUNT OUT

async function submitCountOut(){

  const barcode = document.getElementById("barcode").value
  const countOut = document.getElementById("countOut").value

  if(!barcode || !countOut){
    alert("Enter barcode and count out")
    return
  }

  const { data, error } = await supabase
  .from("counts")
  .select("*")
  .eq("barcode", barcode)
  .order("id",{ascending:false})
  .limit(1)

  if(error || !data.length){
    alert("Item not found")
    return
  }

  const incoming = data[0].incoming
  const shrink = incoming - countOut

  const { error: updateError } = await supabase
  .from("counts")
  .update({
    count_out: countOut,
    shrink: shrink
  })
  .eq("id", data[0].id)

  if(updateError){
    console.error(updateError)
    alert("Error submitting count")
  }else{
    alert("Shrink recorded: " + shrink)
  }

}


// LOAD DASHBOARD DATA

async function loadDashboard(){

  const table = document.getElementById("tableBody")

  if(!table) return

  const { data, error } = await supabase
  .from("counts")
  .select("*")
  .order("created_at",{ascending:false})

  if(error){
    console.error(error)
    return
  }

  table.innerHTML = ""

  data.forEach(row => {

    table.innerHTML += `
      <tr class="border-b border-gray-700">
        <td class="p-3">${row.barcode}</td>
        <td class="p-3">${row.incoming}</td>
        <td class="p-3">${row.count_out || "-"}</td>
        <td class="p-3 text-red-400">${row.shrink || "-"}</td>
        <td class="p-3">${row.created_at}</td>
      </tr>
    `

  })

}

loadDashboard()