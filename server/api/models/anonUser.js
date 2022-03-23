const { init } = require('../dbConfig')

class User {
    constructor(data){
        this.id = data.id,
        this.title = data.title,
        this.author = data.author,
        this.message =  data.message
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const userData = await db.collection('anonUser').find().toArray()
                const anonUser = userData.map(a => new User({ ...a, id: a._id }))
                resolve(anonUser);
            } catch (err) {
                console.log(err);
                reject("Error retrieving User")
            }
        })
    }

    

}
