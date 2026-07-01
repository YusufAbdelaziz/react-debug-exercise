import { useState } from 'react';

// TASK — Make this table sortable, filterable and paginated.
// Right now it just dumps every row, unsorted. Requirements are on the card.
// Edit only this file.

type Person = { id: number; name: string; role: string; age: number };

const PEOPLE: Person[] = [
  { id: 1, name: 'Ada', role: 'Engineer', age: 36 },
  { id: 2, name: 'Alan', role: 'Engineer', age: 41 },
  { id: 3, name: 'Grace', role: 'Manager', age: 52 },
  { id: 4, name: 'Linus', role: 'Engineer', age: 33 },
  { id: 5, name: 'Margaret', role: 'Designer', age: 45 },
  { id: 6, name: 'Katherine', role: 'Analyst', age: 39 },
  { id: 7, name: 'Barbara', role: 'Manager', age: 48 },
  { id: 8, name: 'Dennis', role: 'Engineer', age: 29 },
  { id: 9, name: 'Radia', role: 'Designer', age: 44 },
  { id: 10, name: 'Guido', role: 'Analyst', age: 37 },
  { id: 11, name: 'Bjarne', role: 'Engineer', age: 50 },
  { id: 12, name: 'Anders', role: 'Manager', age: 46 },
];

export default function Build2() {
  const [rows] = useState<Person[]>(PEOPLE);

  return (
    <table className="tbl">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.role}</td>
            <td>{p.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
