const con=require("./db_connect");                // we need this file because we need connection

async function createTable(){
    let sql=`CREATE TABLE if not exists posts(
        postID INT NOT NULL AUTO_INCREMENT,
        post VARCHAR(255) NOT NULL UNIQUE,
        userID INT,
        CONSTRAINT notePK PRIMARY KEY(postID),
        CONSTRAINT FOREIGN KEY (userID) REFERENCES users(userID)
        
    );`
    await con.query(sql);                            // we need await when used async
}
//  
//
createTable();

async function getAllPosts() {
    const sql = `SELECT * FROM posts;`;
    let posts = await con.query(sql);
    console.log(posts)
  }

  async function createPost(post){

    let cPost=await getPost(post);

    const sql=`INSERT INTO posts(post,userID) VALUES ("${post.post}",${post.userID});`
    //const sql=`INSERT INTO posts(post) VALUES ("${post.post}");`

    await con.query(sql);
    return cPost[0];
    
}

  async function editPst(post){
    let sql=`update posts SET post="${post.post}" where noteID=${post.noteID}`;

    await con.query(sql);
    let updatedPost=await getNote(post);

    return updatedPost[0];
}

async function deletePost(post){
    let sql=`Delete from posts where postID=${post.postID}`;

    await con.query(sql);

}

async function getPost(post){
    let sql;

    if(post.postID){
        sql=`select * from posts where postID=${post.postID}`;

    }
    else{
        sql=`select * from posts where post="${post.post}"`;
    }

    return await con.query(sql);
}



const post=[{
    postId:1233,
    postcontent:"Hello"
},{
    postId:9383,
    postcontent:"How r u??"
},
];

function getPost(){
    return post;
}
module.exports={getPost};