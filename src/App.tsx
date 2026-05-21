import { useState } from "react";
import { supabase } from "./supabase";

export default function App(){

const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

async function inscription(){

const {error}=await supabase.auth.signUp({

email,
password

});

if(error){

alert(error.message);
return;

}

alert("Compte créé 🚀 Vérifie tes emails");

}

async function connexion(){

const {error}=await supabase.auth.signInWithPassword({

email,
password

});

if(error){

alert(error.message);
return;

}

alert("Bienvenue pilote 🏁");

}


return(

<div style={page}>

<h1 style={titre}>
◢◤ NOMAD GP ◢◤
</h1>

<div style={mini}>
M I N I I I Z C A R
</div>


<div style={card}>

<h2>

Connexion Pilote

</h2>


<input

style={input}

placeholder="Email"

value={email}

onChange={(e)=>

setEmail(
e.target.value
)

}

/>


<input

type="password"

style={input}

placeholder="Mot de passe"

value={password}

onChange={(e)=>

setPassword(
e.target.value
)

}

/>


<button

style={btn}

onClick={
connexion
}

>

Connexion

</button>


<button

style={btn2}

onClick={
inscription
}

>

Créer compte

</button>


<p style={{
opacity:.6
}}>

Ta mère pourra créer son compte
depuis chez elle plus tard 😄

</p>

</div>

</div>

)

}


const page={

background:
"linear-gradient(#000,#081421)",

minHeight:"100vh",

padding:30,

color:"white",

textAlign:"center"

}


const titre={

fontSize:55,

color:"orange",

textShadow:
"0 0 30px orange"

}


const mini={

letterSpacing:8,

color:"#00d9ff"

}


const card={

maxWidth:500,

margin:"40px auto",

padding:30,

background:"#07111f",

border:
"1px solid #00d9ff",

borderRadius:25

}


const input={

width:"100%",

padding:15,

marginBottom:15,

background:"#111",

color:"white"

}


const btn={

padding:15,

width:"100%",

background:"#00d9ff",

border:"none",

borderRadius:20,

marginBottom:10

}


const btn2={

padding:15,

width:"100%",

background:"orange",

border:"none",

borderRadius:20

}