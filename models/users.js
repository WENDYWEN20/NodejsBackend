import mongoose from 'mongoose'
const data=[
    {username:'user1',
    emailaddress:'user1@gmail.com',
    },

    {username:'user2',
    emailaddress:'user2@gmail.com',
   },

    {username:'user3',
            emailaddress:'user3@gmail.com',
            },
    ]

const usersSchema= new mongoose.Schema({
    name:{  type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
    },
    email:{    type: String,
        required: true,
        minLength: 12,
        maxLength: 1200,
    },
   
   address:{
    type: String,       
    },
    orderHistory:[]
})

const usersModel=mongoose.model('users', usersSchema)

export default usersModel