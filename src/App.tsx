import {useState,useEffect} from "react"
import {supabase} from "./supabase"
import logoNGP from "./assets/logo-ngp.png"
import logoMZC from "./assets/logo-mzc.png"

export default function App(){

    const [pseudo,setPseudo]=useState("")
    const [numero,setNumero]=useState("")
    const [ephemere,setEphemere]=useState("")
    const [crew,setCrew]=useState("")
    const [photo,setPhoto]=useState("")
    useEffect(()=>{

        chargerProfil()
        
        },[])
        
        
        async function chargerProfil(){
        
        const{
        
        data:{user}
        
        }=await supabase.auth.getUser()
        
        if(!user)return
        
        const {data}=await supabase
        .from("profils")
        .select("*")
        .eq("id",user.id)
        .single()
        
        if(data){
        
        setPseudo(data.pseudo||"")
        setNumero(data.numero||"")
        setEphemere(data.ephemere||"")
        setCrew(data.crew||"")
        setPhoto(data.photo||"")
        
        }
        
        }async function sauverProfil(){

            const{
            
            data:{user}
            
            }=await supabase.auth.getUser()
            
            if(!user)return
            
            await supabase
            .from("profils")
            .upsert({
            
            id:user.id,
            
            pseudo,
            
            numero,
            
            ephemere,
            
            crew,
            
            photo
            
            })
            
            alert("Profil sauvegardé")
            
            }

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

const jeux=Array(34).fill("????")

const btn={

width:"100%",
padding:"18px",
marginBottom:"15px",
borderRadius:"50px",
border:"none",
fontSize:"22px",
cursor:"pointer"

}

const box={

background:"#04152e",
padding:30,
border:"2px solid cyan",
borderRadius:30,
maxWidth:950,
margin:"auto",
marginTop:25

}

return(

<div style={{

background:"#000814",
minHeight:"100vh",
padding:20,
color:"white"

}}>

<div style={{

textAlign:"center"

}}>

<img
src={logoNGP}
alt="Nomad GP"
style={{
width:"420px",
maxWidth:"95%",
display:"block",
margin:"auto"
}}
/>

<img
src={logoMZC}
alt="Miniiizcar"
style={{
width:"250px",
display:"block",
margin:"auto",
marginTop:"-20px"
}}
/>

</div>


{page==="menu"&&(

<div style={box}>

<button
style={{
...btn,
background:"#24c7e8"
}}
onClick={()=>setPage("profil")}
>

👤 Profil

</button>


<button
style={{
...btn,
background:"#24c7e8"
}}
onClick={()=>setPage("garage")}
>

🚗 Garage NGP

</button>


<button
style={{
...btn,
background:"#24c7e8"
}}
onClick={()=>setPage("parties")}
>

🏆 Parties

</button>


<button
style={{
...btn,
background:"#24c7e8"
}}
onClick={()=>setPage("jeux")}
>

🎮 Jeux

</button>


<button
style={{
...btn,
background:"#24c7e8"
}}
onClick={()=>setPage("arts")}
>

🎨 Arts Miniiizcar

</button>


<button
style={{
...btn,
background:"#24c7e8"
}}
onClick={()=>setPage("team")}
>

🏗 Team / Game Masters

</button>

</div>

)}






{page==="profil"&&(

<div style={box}>


<img
src={logoNGP}
style={{
width:180
}}
/>


<h2>👤 Profil pilote</h2>

{photo&&(

<img

src={photo}

style={{

width:140,
height:140,
borderRadius:"100%",
objectFit:"cover"

}}

/>

)}

<br/>

<input

type="file"

onChange={(e)=>{

const file=e.target.files?.[0]

if(!file)return

setPhoto(

URL.createObjectURL(file)

)

}}

/>

<br/><br/>

Pseudo officiel

<input

value={pseudo}

onChange={(e)=>

setPseudo(e.target.value)

}

style={{

width:"100%",
padding:15

}}

/>

<br/><br/>

Numéro pilote

<input

value={numero}

onChange={(e)=>

setNumero(e.target.value)

}

style={{

width:"100%",
padding:15

}}

/>

<br/><br/>

Nom éphémère

<textarea

value={ephemere}

onChange={(e)=>

setEphemere(e.target.value)

}

style={{

width:"100%",
height:80

}}

/>

<br/><br/>

Crew

<input

value={crew}

onChange={(e)=>

setCrew(e.target.value)

}

style={{

width:"100%",
padding:15

}}

/>

<br/><br/>


<div style={{

fontSize:50,
textAlign:"center",
background:"black",
padding:20,
borderRadius:20,
color:"cyan"

}}>

000890 PTS

</div>

<br/>

<button

style={{

...btn,
background:"lime"

}}

onClick={sauverProfil}

>

Sauvegarder profil

</button>

</div>

)}








{page==="garage"&&(

<div style={box}>


<h2>

🚗 Garage NGP

</h2>


<img
src={logoNGP}
style={{
width:180
}}
/>

<p>

Ajoute les photos véhicules

</p>

<input
type="file"
multiple
/>

<br/><br/>


<div style={{

height:300,
border:"2px dashed cyan",
borderRadius:20,
padding:20

}}>

Galerie voitures joueur

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








{page==="jeux"&&(

<div style={box}>


<img
src={logoNGP}
style={{
width:200
}}
/>


<h2>

🎮 Jeux NGP

</h2>


{jeux.map((j,i)=>(

<div
key={i}
style={{

background:"#08264f",
padding:20,
marginBottom:10,
borderRadius:20

}}
>

Jeu {i+1} : ????

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


<img
src={logoMZC}
style={{
width:250
}}
/>

<h2>

🎨 Arts Miniiizcar

</h2>


{arts.map(a=>(

<div
key={a}

style={{

display:"flex",
justifyContent:"space-between",
background:"#08264f",
padding:15,
marginBottom:10,
borderRadius:20

}}
>

<div>

{a}

</div>

<select>

<option>ON</option>
<option>OFF</option>
<option>❤️</option>
<option>?</option>

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








{page==="parties"&&(

<div style={box}>

<img
src={logoNGP}
style={{
width:180
}}
/>

<h2>

🏆 Historique

</h2>

Historique vide

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








{page==="team"&&(

<div style={box}>


<img
src={logoNGP}
style={{
width:180
}}
/>

<h2>

🏗 Team / Game Masters

</h2>

Contact Nomad GP

<br/><br/>

info.nomadgp@gmail.com

<br/><br/>

Créer équipe

<br/>

Valider membres

<br/>

Invitations joueurs

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