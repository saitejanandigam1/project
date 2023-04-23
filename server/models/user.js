const users =[
    {
        userId:1,
        userName:"Teja",
        password:"admin1"
    },
    {
        userId:2,
        userName:"Hitesh",
        password:"admin2"
    },
    {
        userId:3,
        userName:"pavan",
        password:"admin3"
    },
];

function getUsers(){
    return users;
}

module.exports={getUsers};