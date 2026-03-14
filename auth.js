const SUPABASE_URL = "https://ylfsqjbqhewpfiooytlg.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZnNxamJxaGV3cGZpb295dGxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NzQwODQsImV4cCI6MjA4ODM1MDA4NH0.Ssl5J6ktZIVtLd2cq8vH7PWdR4-yZwI5tt4PtXkVqWk"

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

async function login(){
const userId = document.getElementById("userid").value
const password = document.getElementById("password").value

const email = userId + "@shrinkshield.app"

const { data, error } = await supabase.auth.signInWithPassword({
email,
password
})

if(error){
alert("Login Failed")
return
}

window.location.href="app.html"
}

async function logout(){
await supabase.auth.signOut()
window.location.href="index.html"
}

async function checkSession(){
const { data } = await supabase.auth.getSession()
if(!data.session){
if(!window.location.pathname.includes("index.html")){
window.location.href="index.html"
}
}
}

checkSession()
