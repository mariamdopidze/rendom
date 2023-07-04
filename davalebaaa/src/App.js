import  { useState } from 'react';

function App(){
  const students =['ნინი', 'სალომე', 'ანი','მარიამი'];

  const [gryffindor, setGryffindor]= useState([]);
  const [reivenqlo, setReivenqlo]= useState([]);
  const [slizerin, setSlizerin]= useState([]);
  const [gryf, setGryf]= useState([]);

const handleClick =()=>{
  for(let i= 0; i < students.length; i++){
    const num =Math.floor(Math.random()*3)+1;

if(num===1)setGryffindor((prev)=>[...prev, students[i]]);
if(num===2)setReivenqlo((prev)=>[...prev, students[i]]);
if(num===3)setSlizerin((prev)=>[...prev, students[i]]);
if(num===4)setGryf((prev)=>[...prev, students[i]]);

  }
};


return(
  <>
  <div>
<ul className='list-group'>
{students.map((student)=>(
  <li className='list-group-item'>{student}</li>
))}

</ul>
<div className='row'>
  <div className='col-3'>
<h3>გრიფინდორი</h3>
{gryffindor.map((gr)=>(
  <li>{gr}</li>
))}
  </div>

  <div className='col-3'>
<h3>რეივენქლო</h3>
{reivenqlo.map((gr)=>(
  <li>{gr}</li>
))}
  </div>

  <div className='col-3'>
<h3>სლიზერინი</h3>
{slizerin.map((gr)=>(
  <li>{gr}</li>
))}
  </div>

  <div className='col-3'>
<h3>ჰაფელჰაფი</h3>
{gryf.map((gr)=>(
  <li>{gr}</li>
))}
  </div>

</div>
<button className='btn btn-primary' onClick={handleClick}>გამანაწილებელი ქუდი</button>
 
  </div>
  </>

  
)

};

export default App;