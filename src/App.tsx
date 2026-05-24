import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export default function App(){

const [user,setUser]=useState<any>(null);

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const [page,setPage]=useState("menu");

useEffect(()=>{

supabase.auth.getUser().then(({data})=>{
setUser(data.user)
})

const {
data:{subscription}
}=supabase.auth.onAuthStateChange(
(event,session)=>{
setUser(session?.user||null)
})

return()=>subscription.unsubscribe()

},[])

async function connexion(){

const {error}=await supabase.auth.signInWithPassword({
email,
password
})

if(error){
alert(error.message)
}

}

async function inscription(){

const {error}=await supabase.auth.signUp({
email,
password
})

if(error){
alert(error.message)
}else{
alert("Compte créé")
}

}

async function logout(){

await supabase.auth.signOut()

}

const btn={

width:"100%",
padding:"18px",
marginBottom:15,
border:"none",
borderRadius:50,
background:"#1cc7e8",
cursor:"pointer",
fontSize:18
}

const box={

maxWidth:650,
margin:"auto",
padding:25,
background:"#03152c",
border:"2px solid cyan",
borderRadius:30,
color:"white"
}

if(!user){

return(

<div style={{
background:"#000814",
minHeight:"100vh",
padding:30,
color:"white"
}}>

<h1
style={{
color:"orange",
textAlign:"center"
}}
>
NOMAD GP
</h1>

<div style={box}>

<h2>Connexion pilote</h2>

<input
placeholder="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={btn}
/>

<input
type="password"
placeholder="mot de passe"
value={password}
onChange={(e)=>setPassword(e.target.value)}
style={btn}
/>

<button
style={btn}
onClick={connexion}
>
Connexion
</button>

<button
style={{
...btn,
background:"orange"
}}
onClick={inscription}
>
Créer compte
</button>

</div>

</div>

)

}

return(

<div style={{
background:"#000814",
minHeight:"100vh",
padding:30,
color:"white"
}}>

<h1
style={{
color:"orange",
textAlign:"center"
}}
>
NOMAD GP
</h1>

<div style={box}>

{page==="menu"&&<>

<button style={btn} onClick={()=>setPage("profil")}>
👤 Profil
</button>

<button style={btn} onClick={()=>setPage("parties")}>
🏆 Parties
</button>

<button style={btn} onClick={()=>setPage("jeux")}>
🎮 Jeux
</button>

<button style={btn} onClick={()=>setPage("arts")}>
🎨 Arts
</button>

<button style={btn} onClick={()=>setPage("batisseurs")}>
🏗️ Bâtisseurs
</button>

<button
style={{
...btn,
background:"#ff4444"
}}
onClick={logout}
>
Déconnexion
</button>

</>}

{page==="profil"&&<>

<h2>👤 Mon profil</h2>

<p>Email : {user.email}</p>

<p>Nom pilote officiel</p>

<input
style={btn}
placeholder="Jean-Sèb"
/>

<p>Nom pilote éphémère</p>

<input
style={btn}
placeholder="Pseudo secondaire"
/>

<p>Photo profil</p>

<input
type="file"
/>

<p>Compteur points : 0</p>

<button
style={btn}
onClick={()=>setPage("menu")}
>
Retour
</button>

</>}

{page==="parties"&&<>

<h2>🏆 Historique</h2>

<p>Aucune partie pour le moment</p>

<button
style={btn}
onClick={()=>setPage("menu")}
>
Retour
</button>

</>}

{page==="jeux"&&<>

<h2>🎮 Jeux Nomad GP</h2>

<ul>

<li>?????</li>
<li>?????</li>
<li>?????</li>

</ul>

<button
style={btn}
onClick={()=>setPage("menu")}
>
Retour
</button>

</>}

{page==="arts"&&<>

<h2>🎨 Arts Miniiizcar</h2>

<p>Musique : ❤️</p>
<p>Graffiti : ?</p>
<p>Montage vidéo : ON</p>

<button
style={btn}
onClick={()=>setPage("menu")}
>
Retour
</button>

</>}

{page==="batisseurs"&&<>

<h2>🏗️ Bâtisseurs</h2>

<p>Contact équipe Nomad GP</p>

<p>info.nomadgp@gmail.com</p>

<button
style={btn}
onClick={()=>setPage("menu")}
>
Retour
</button>

</>}

</div>

</div>

)

}