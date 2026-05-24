import { useState } from "react"
<button style={{...btn,background:"#24c7e8"}} onClick={()=>setPage("jeux")}>🎮 Jeux</button>
<button style={{...btn,background:"#24c7e8"}} onClick={()=>setPage("arts")}>🎨 Arts</button>
<button style={{...btn,background:"#24c7e8"}} onClick={()=>setPage("team")}>🏗 Team / GM</button>
</div>
)}

{page==="profil"&&(
<div style={box}>
<h2>👤 Profil</h2>
Nom pilote
<input style={input} value={pseudo} onChange={e=>setPseudo(e.target.value)}/>
<br/><br/>
Numéro pilote
<input style={input} value={numero} onChange={e=>setNumero(e.target.value)}/>
<br/><br/>
Nom pilote éphémère
<textarea style={{...input,height:80}} value={ephemere} onChange={e=>setEphemere(e.target.value)}/>
<br/><br/>
Crew
<input style={input} value={crew} onChange={e=>setCrew(e.target.value)}/>
<br/><br/>
<div style={{background:"black",padding:20,fontSize:40,borderRadius:20,textAlign:"center",color:"cyan"}}>000890 PTS</div>
<br/>
<button style={{...btn,background:"orange"}} onClick={()=>setPage("menu")}>Retour</button>
</div>
)}

{page==="garage"&&(
<div style={box}>
<h2>🚗 Garage NGP</h2>
<input type="file" multiple accept="image/*" onChange={(e)=>{
const files=e.target.files
if(!files)return
for(let i=0;i<files.length;i++){
const reader=new FileReader()
reader.onload=(ev)=>{
const car={id:Date.now()+i,image:ev.target?.result,nom:"Mon véhicule",commentaire:""}
const g=[...garage,car]
setGarage(g)
localStorage.setItem("garageNGP",JSON.stringify(g))
}
reader.readAsDataURL(files[i])
}
}}/>
<br/><br/>
{garage.map((car,index)=>(
<div key={car.id} style={{background:"#08264f",padding:15,borderRadius:20,marginBottom:20}}>
<img src={car.image} style={{width:"100%",maxHeight:250,objectFit:"cover",borderRadius:20}}/>
<br/><br/>
<input style={input} value={car.nom} onChange={(e)=>{const c=[...garage]; c[index].nom=e.target.value; setGarage(c); localStorage.setItem("garageNGP",JSON.stringify(c))}}/>
<br/><br/>
<textarea style={{...input,height:90}} value={car.commentaire} onChange={(e)=>{const c=[...garage]; c[index].commentaire=e.target.value; setGarage(c); localStorage.setItem("garageNGP",JSON.stringify(c))}}/>
</div>
))}
<button style={{...btn,background:"orange"}} onClick={()=>setPage("menu")}>Retour</button>
</div>
)}

{page==="jeux"&&<div style={box}><h2>🎮 Jeux</h2>{jeux.map((j,i)=><div key={i}>Jeu {i+1}: {j}</div>)}<button style={{...btn,background:'orange'}} onClick={()=>setPage('menu')}>Retour</button></div>}

{page==="arts"&&<div style={box}><h2>🎨 Arts</h2>{arts.map(a=><div key={a}>{a} <select><option>ON</option><option>OFF</option><option>❤️</option><option>?</option></select></div>)}<button style={{...btn,background:'orange'}} onClick={()=>setPage('menu')}>Retour</button></div>}

{page==="parties"&&<div style={box}><h2>🏆 Historique</h2>Vide pour nouveaux joueurs<button style={{...btn,background:'orange'}} onClick={()=>setPage('menu')}>Retour</button></div>}

{page==="team"&&<div style={box}><h2>🏗 Team/Game Masters</h2>Créer Team<br/>Valider membres<br/>Contact NGP<button style={{...btn,background:'orange'}} onClick={()=>setPage('menu')}>Retour</button></div>}

</div>
)
}