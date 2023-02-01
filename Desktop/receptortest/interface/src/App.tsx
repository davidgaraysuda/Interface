
interface Theme {
  backgroundColor:string;
  color:string;
}

interface Person{
  name:string
  theme:Theme
}

const persona: Person={
  name:"Gregorio Y. Zara",
  theme:{backgroundColor:"black", color:"pink"}
}

export default function App(){
  return(
    <div style={persona.theme}>
      <h1>
        {persona.name}&apos;s Todos
      </h1>
      <img className="avatar" src="https://pbs.twimg.com/media/CdA4tjiWwAAWwlQ.jpg" alt="Gregorio Y. Zara" />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol</li>
      </ul>
    </div>
  )
}
