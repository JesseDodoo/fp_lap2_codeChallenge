const { init } = require('../dbConfig')

class User {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.author = data.author
        this.message =  data.message
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const userData = await db.collection('users').find().toArray()
                const anonUser = userData.map(d => new User({ ...d, id: d._id }))
                resolve(anonUser);
            } catch (err) {
                console.log(err);
                reject("Error retrieving User")
            }
        })
    }


    static create(title, author, message){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let postData = await db.collection('users').insertOne({ title, author, message })
                let newPost = new User(newPost.ops[0]);
                resolve (newPost);
            } catch (err) {
                reject('Error creating post');
            }
        });
    }

}

module.exports = User;
