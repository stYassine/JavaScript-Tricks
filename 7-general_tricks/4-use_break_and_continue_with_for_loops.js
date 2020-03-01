var users =[
    { name: 'Yassine', country: 'Morroco' },
    { name: 'Erick', country: 'USA' },
    { name: 'Derick', country: 'Canada' },
    { name: 'Yu', country: 'Japan' },
];


for(let i =0; i < users.length; i++){
    console.log(users[i]);
    if(users[i].country === 'USA'){
        break
    }
}