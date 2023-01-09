import { useEffect, useState } from "react";
import './Moyenne.css'

export default function Moyenne() {
  const [nom,setNom]=useState('')
  const [physique,setPhysique]=useState(0)
  const [math,setMath]=useState(0)
  const [francais,setFrancais]=useState(0)
  const [moyenne,setMoyenne]=useState(0)
  

    function handleChange(e){
     console.log(e.target.id)
  switch (e.target.id) {
    case "nom":
        setNom(()=> e.target.value)
        break;

    case "phy":
        setPhysique(()=>e.target.value)
    
    break;

    case "math":
        setMath(()=>e.target.value)
        
    break;

    case "fr":
        setFrancais(()=>e.target.value)
    break;

  
    default:
        break;
  }

    }

    function calculer(){
     let m=( parseFloat(physique )  +parseFloat(math)+parseFloat(francais) )/3  ;
     setMoyenne(()=>m.toFixed(2))

    }


    useEffect(()=>{
        calculer()

    },[physique,math,francais,nom])

  return (
    <div className="container">
      <h3>Execice 1 calcul moyenne</h3>
      <div>
        <label>Nom</label>
        <input type="text" id="nom"  onChange={handleChange} />
        
      </div>
      <div>
        <label>physique</label>
        <input type="text" id="phy"  onChange={handleChange} />
        
      </div>
      <div>
        <label>Math</label>
        <input type="text"  id="math" onChange={handleChange} />
        
      </div>
      <div>
        <label>Français</label>
        <input type="text"  id="fr" onChange={(e)=>handleChange(e)} />
        
      </div>
      <button onClick={()=>calculer()}>
        calculer
      </button>
      <p>{nom} vous avez eu en moyenne : {moyenne}</p>
      {moyenne<=9 && <span style={{color:"red"}}>FAIBLE</span> }
      {(moyenne>9 && moyenne<=11 ) && <span style={{color:"yellow"}}>PASSABLE</span> }
      {(moyenne>11 && moyenne<=13 ) &&<span style={{color:"green"}}>BEIN</span> }
      {(moyenne>13 && moyenne<=16 ) &&<span style={{color:"blue"}}> TRES BEIN</span> }
      {moyenne>16 &&<span style={{color:"orange"}}> EXCELLENT</span> }
      
      


    </div>
  );
}
