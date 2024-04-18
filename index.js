const express = require("express")
require("dotenv").config()

const app = express()

const port = process.env.port
// console.log(process.env.secret_key)


app.use(express.urlencoded({extended: true}))
app.use(express.json({}))

// require("./startup/routes")("app")


app.get("/students", ( req, res, next) => {
    const studentsDetails = {
        name: "Gabriel Rufai",
        age: 30,
        class: 2012,
        address: "Ibeju Lekki street, Dolphin Estate"
    }

    res.send(studentsDetails)
})

app.listen (port, () => {
    console.log(`server listening on port: ${port}`)
})


app.post("/register", (req, res, next) => {
    // const email = req.body.email

    // const {email, password} = req.body

    const {firstnName, email, password} = req.body

    const body = {
        firstnName,
        email,
        password
    }
    console.log(body)


    res.send ({
        responseType: req.body,
        msg: "Succefully registered"
    })

})


app.put ("/update", (req, res, next) => {
    // const full_name = req.body.full_name
    
    const {full_name, age, address} = req.body
    // const full_name = req.body.full_name
    // const age = req.body.age
    // const address = req.body.address



    const user_details = {
        email: "luka@gmail.com",
        password: "123456789",
        full_name: full_name,
        age: age,
        address: address
    }


    res.send({
        user_details,
        msg: "Successfully updated"
    })
    

})


app.patch ("/patch", (req, res, next) => {
    // const password = req.body.password
    // const full_name = req.body.full_name

    const {password, full_name} = req.body


    const user_details = {
        email: "luka@gmail.com",
        password: password,
        full_name: full_name,
        age: 25,
        address: "Luka Avenue, No. 36, Gyado Street, Gboko"
    }


    res.send({
        user_details,
        msg: "Details successfully changed"
    })
    

})


app.delete("/delete", (req, res, next) => {

    const {email, password, full_name, age, address} = req.body

    const details = {
        email: email,
        password: password,
        full_name: full_name,
        age: age,
        address: address
    }

    res.send({
        // details,
        msg: "Details successfully sent"
    })

})




// const fs = express()
// const path = express()

// const {app, fs, path} = express()

































// const  adder = (par1, par2) => {
//     console.log(par1 + par2)
//     return {par1, par2}
// }

// const {par1, par2} = adder (2, 3)






// console.log("I love Jesus the Christ")


// CALLBACK
// const myParents = (dadMum) =>{
//     dadAndMum = {
//         dad: "Luka",
//         mum: "Rifkatu",
//         address: "Boi, Bauchi, Nigeria",
//         age: 55
//     }
//     // console.log(dadAndMum)
// }

// myParents(10)


// const myDisplayer = (display) => {
//     console.log(display);
// }

// const myCalculator = (num1, num2, callBack) => {
//    const sum = num1 + num2
//     callBack(sum)
// }

// myCalculator(20, 30, myDisplayer)




//ASYNC

// 

