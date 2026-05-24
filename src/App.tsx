import { useState } from "react"

export default function App(){

const [page,setPage]=useState("menu")

const btn={
width:"100%",
padding:22,
borderRadius:40,
border:"none",
marginBottom:20,
fontSize:30,
cursor:"pointer",
background:"#24c7e8",
color:"black",
fontWeight:"bold"
}

const box={
background:"#001633",
padding:25,
borderRadius:30,
border:"2px solid cyan",
maxWidth:700,
margin:"auto"
}

return(

<div style={{
background:"#000814",
minHeight:"100vh",
padding:20,
color:"white"
}}>

<h1
style={{
textAlign:"center",
color:"#ffb700",
fontSize:60
}}
>
NOMAD GP
</h1>

<div
style={{
textAlign:"center",
color:"cyan",
letterSpacing:10,
marginBottom:30
}}
>
Bienvenue pilote
</div>

{page==="menu" && (

<div style={box}>

<button
style={{
...btn,
background:"#ffb700"
}}
onClick={()=>setPage("profil")}
>
👤 Profil
</button>

<button
style={btn}
onClick={()=>setPage("garage")}
>
🚗 Garage NGP
</button>

<button
style={btn}
onClick={()=>setPage("parties")}
>
🏆 Parties
</button>

<button
style={btn}
onClick={()=>setPage("jeux")}
>
🎮 Jeux
</button>

<button
style={btn}
onClick={()=>setPage("arts")}
>
🎨 Arts Miniiizcar
</button>

<button
style={btn}
onClick={()=>setPage("team")}
>
🏗 Team/Game Masters
</button>

</div>

)}

{page==="profil" && (

<div style={box}>

<h2>👤 Profil pilote</h2>

Pseudo pilote

<input
style={btn}
/>

<br/><br/>

Nom éphémère

<input
style={btn}
/>

<br/><br/>

<button
style={{
...btn,
background:"orange"
}}
onClick={()=>setPage("menu")}
>
Retour
</button>

</div>

)}

{page==="garage" && (

<div style={box}>

<h2>🚗 Garage NGP</h2>

Charge tes véhicules ici

<br/><br/>

<input
type="file"
multiple
/>

<br/><br/>

<button
style={{
...btn,
background:"orange"
}}
onClick={()=>setPage("menu")}
>
Retour
</button>

</div>

)}

{page==="parties" && (

<div style={box}>

<h2>🏆 Historique</h2>

Aucune partie enregistrée

<br/><br/>

<button
style={{
...btn,
background:"orange"
}}
onClick={()=>setPage("menu")}
>
Retour
</button>

</div>

)}

{page==="jeux" && (

<div style={box}>

<h2>🎮 Jeux Nomad GP</h2>

<div>Jeu secret 1 ????</div>
<div>Jeu secret 2 ????</div>
<div>Jeu secret 3 ????</div>
<div>Jeu secret 4 ????</div>

<br/><br/>

<button
style={{
...btn,
background:"orange"
}}
onClick={()=>setPage("menu")}
>
Retour
</button>

</div>

)}

{page==="arts" && (

<div style={box}>

<h2>🎨 Arts Miniiizcar</h2>

<div>Musique</div>
<div>Graffiti</div>
<div>Photo</div>
<div>Vidéo</div>
<div>Montage vidéo</div>
<div>Danse</div>

<br/><br/>

<button
style={{
...btn,
background:"orange"
}}
onClick={()=>setPage("menu")}
>
Retour
</button>

</div>

)}

{page==="team" && (

<div style={box}>

<h2>🏗 Team / Game Masters</h2>

Messages GM bientôt

<br/><br/>

<button
style={{
...btn,
background:"orange"
}}
onClick={()=>setPage("menu")}
>
Retour
</button>

</div>

)}

</div>

)

}