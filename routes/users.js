import express from 'express'
import {Router} from 'express'

const router=new Router

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

      
router.get('/', async(req,res)=>{ res.send(`User Page`)})

router.post('/', (req,res)=>{console.log(req.params)})
 

router.put('/', async(req,res)=>{ res.send(`Update a user`)
                        })
router.patch('/', async(req,res)=>{ res.send(`Edit a user`)
                        })
                        
router.delete('/', async(req,res)=>{ res.send(`Delete a user`)})
                        
export default router