const loginform=document.getElementById("login_form");

if(loginform) loginform.addEventListener('submit',create_u);

class User{

    constructor(username,password,firstname,lastname){
        this.username=username;
        this.password=password;
        this.firstname=firstname;
        this.lastname=lastname;
       
    }

    getfirstname(){
        return this.firstname;
    }

    setfirstname(f_name_parameter){
        this.firstname=f_name_parameter;
    }

    getlastname(){
        return this.lastname;
    }

    setlastname(l_name_parameter){
        this.lastname=l_name_parameter;
    }
    getUsername(){
        return this.username;
    }

    setUsername(name_parameter){
        this.Username=name_parameter;
    }

    getPassword(){
        return this.password;
    }

    setPassword(passcode_parameter){
        this.password=passcode_parameter;
    }
}

function create_u(e){

    e.preventDefault();

    let username=document.getElementById('uname/email').value;
    let password=document.getElementById('pass').value;

    

    const user1=new User(username,password);

    console.log(user1);
}

const registerform=document.getElementById("register_form");

if(registerform) registerform.addEventListener('submit',create_r);

function create_r(e){

    e.preventDefault();

    let firstname=document.getElementById("fname").value;
    let lastname=document.getElementById("lname").value;
    let username=document.getElementById("uname/email").value;
    let password=document.getElementById("pass").value;

    

    const register1=new User(firstname,lastname,username,password);

    console.log(register1);

}

const postform=document.getElementById("post_form");

if(postform) postform.addEventListener('submit',create_n);

class Post{

    constructor(text){
        this.posttext=text;
    }

    getpost(){
        return this.posttext;

    }

    setpost(text_parameter){
        this.posttext=text_parameter;
    }


}

function create_n(e){

    e.preventDefault();

    let post=document.getElementById("post_id").value;

    

    const post1=new Post(post);
    console.log(post1);
}


const usersBtn=document.getElementById("users-btn");

if(usersBtn)usersBtn.addEventListener('click',getUsers);

function getUsers(){
    fetch("http://localhost:3000/users/")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        let ul=document.getElementById("allUsers");

        data.forEach((user)=>{
            let li=document.createElement('li');
            let text=document.createTextNode(user.userName);

            li.appendChild(text);
            ul.appendChild(li);
        })
    })

    .catch((err)=>console.log(`error! ${err}`));
}