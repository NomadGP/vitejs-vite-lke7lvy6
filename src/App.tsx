import { useState } from "react";

export default function App(){

const [page,setPage]=useState("menu")

const arts=[
"Musique",
"Graffiti",
"Dessin",
"Peinture",
"Photo",
"Vidéo",
"Montage vidéo",
"Danse",
"Chant",
"Ecriture",
"Poterie",
"Cuisine",
"Humour",
"Maquillage",
"Pilotage",
"Mécanique",
"Image synthèse",
"Scrapbooking"
]

const jeux=Array(34).fill("?????")

const btn={
width:"100%",
padding:"18px",
marginBottom:"15px",
borderRadius:"40px",
border:"none",
fontSize:"22px",
cursor:"pointer"
}

const box={

background:"#02152e",
padding:30,
borderRadius:30,
border:"2px solid cyan",
maxWidth:900,
margin:"auto",
marginTop:30,
color:"white"

}

return(

<div style={{
background:"#000814",
minHeight:"100vh",
padding:20,
color:"white",
fontFamily:"Arial"
}}>

<h1 style={{
textAlign:"center",
color:"#ffb300",
fontSize:60
}}>
NOMAD GP
</h1>

<p style={{
textAlign:"center",
letterSpacing:10,
color:"cyan"
}}>
Bienvenue pilote
</p>

{page==="menu"&&(

<div style={box}>

<button
style={{...btn,background:"#ffb300"}}
onClick={()=>setPage("profil")}
>
👤 Profil
</button>

<button
style={{...btn,background:"#24c7e8"}}
onClick={()=>setPage("garage")}
>
🚗 Garage NGP
</button>

<button
style={{...btn,background:"#24c7e8"}}
onClick={()=>setPage("parties")}
>
🏆 Parties
</button>

<button
style={{...btn,background:"#24c7e8"}}
onClick={()=>setPage("jeux")}
>
🎮 Jeux
</button>

<button
style={{...btn,background:"#24c7e8"}}
onClick={()=>setPage("arts")}
>
🎨 Arts Miniiizcar
</button>

<button
style={{...btn,background:"#24c7e8"}}
onClick={()=>setPage("team")}
>
🏗️ Team/Game Masters
</button>

</div>

)}



{page==="profil"&&(

<div style={box}>

<h2>👤 Profil pilote</h2>

<p>
Email caché aux autres joueurs ✅
</p>

<br/>

Photo pilote

<input type="file"/>

<p>
(stickers IA, filtres, effets bientôt)
</p>

<br/>

Nom pilote officiel

<input
style={{width:"100%",padding:10}}
defaultValue="Jean-Sèb"
/>

<br/><br/>

Numéro pilote

<input
style={{width:"100%",padding:10}}
defaultValue="34"
/>

<br/><br/>

Nom pilote éphémère

<textarea
style={{
width:"100%",
height:70
}}
placeholder="pseudo secondaire"
/>

<br/><br/>

Crew / équipe

<input
style={{width:"100%",padding:10}}
placeholder="nom team"
/>

<br/><br/>

<div style={{

background:"#000",
padding:25,
fontSize:45,
borderRadius:20,
color:"cyan",
textAlign:"center"

}}>

890 PTS

</div>

<br/>

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




{page==="garage"&&(

<div style={box}>

<h2>🚗 Garage NGP</h2>

<p>

Ajoute les photos de tes véhicules

</p>

<input type="file" multiple/>

<br/><br/>

<div style={{

border:"2px dashed cyan",
padding:50,
textAlign:"center"

}}>

Galerie véhicules joueur

</div>

<p>

Les autres joueurs pourront admirer les machines

</p>

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




{page==="parties"&&(

<div style={box}>

<h2>
🏆 Historique Parties
</h2>

<p>

Historique vide

</p>

<p>

Les nouveaux joueurs commencent sans partie

</p>

<p>

Compte créateur = historique spécial

</p>

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




{page==="jeux"&&(

<div style={box}>

<h2>
🎮 Jeux Nomad GP
</h2>

{jeux.map((jeu,index)=>(

<div
key={index}
style={{

padding:15,
marginBottom:10,
background:"#061f44",
borderRadius:20

}}
>

Jeu {index+1} : {jeu}

</div>

))}

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




{page==="arts"&&(

<div style={box}>

<h2>
🎨 Arts Miniiizcar
</h2>

{arts.map((art)=>(

<div
key={art}
style={{

padding:15,
marginBottom:10,
background:"#061f44",
borderRadius:20

}}
>

{art}

<select
style={{
marginLeft:20
}}
>

<option>
ON
</option>

<option>
OFF
</option>

<option>
❤️
</option>

<option>
?
</option>

</select>

</div>

))}

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





{page==="team"&&(

<div style={box}>

<h2>

🏗️ Team / Game Masters

</h2>

<h3>

Contact équipe NGP

</h3>

info.nomadgp@gmail.com

<br/><br/>

<h3>

Gestion Team

</h3>

Créer équipe

<br/>

Validation membres

<br/>

Demandes rejoindre équipe

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