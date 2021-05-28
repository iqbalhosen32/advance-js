const students = [
    {id: 22, name: 'iqbal'},
    {id: 31, name: 'tarek'},
    {id: 35, name: 'mahtab'},
    {id: 18, name: 'noman'},
    {id: 45, name: 'hridoy'}
]

const names = students.map(s => s.name);
const ids = students.map(ids => ids.id);
const bigger = students.filter(s => s.id>33);
const isThere = students.find(s => s.id>33);

console.log(isThere);