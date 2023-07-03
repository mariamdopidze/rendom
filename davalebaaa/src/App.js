import React, { useState } from 'react';

const App = () => {
  const students = ['მარიამ', 'სალომე', 'ანი', 'ნინი'];
  const [groups, setGroups] = useState([]);

  const distributeStudents = () => {
    const shuffledStudents = [...students].sort(() => Math.random() - 0.5);
    const dividedGroups = [[], [], [], []];

    shuffledStudents.forEach((student, index) => {
      const groupIndex = index % 4;
      dividedGroups[groupIndex].push(student);
    });


    setGroups(dividedGroups);
  };

  return (
    <div>
      <button onClick={distributeStudents}>განაწილების ქუდი</button>
      
      {groups.map((group, index) => (
        <div key={index}>
          <h3>გრიფინდორი {index + 1}</h3>
          
          <ul>
            {group.map((student, studentIndex) => (
              <li key={studentIndex}>{student}</li>
            ))}
          </ul>
        </div>
      ))}
      
    </div>
    
  );
};

export default App;
