const db = connect("mongodb://localhost:27017/codechallenge")

db.users.drop()

db.users.insertOne([
    {title: 'All about me', 
    author: 'jesse', 
    message: 'This is my message'
}])

