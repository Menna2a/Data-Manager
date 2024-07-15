const fs= require("fs")
const yargs= require("yargs")
const data10=require("./data10")

yargs.command({
    command: "add",
    describe:"to add an item",
    builder:{
        fname:{
            describe:"this is the first name desc in add command",
            demandOption:true,//required
            type:"string",
        },
        lname:{
            describe:"2",
            demandOption:true,
            type:"string",
        }
        // id:{
        //     describe:"3",
        //     demandOption:true,
        //     type:"string",
        // }
    },
    handler:(x)=>{
        // console.log(x.fname, x.lname)
        data10.addPerson(x.id,x.fname,x.lname,x.city,x.age)
    }


})

yargs.command({
    command:"delete",
    describe:"to delete an item",
    handler:(x)=>{
        data10.deletedata(x.id)
    }
})
yargs.command({
    command:"read",
    builder:{
        id:{
            describe:"this is id description",
            demandOption:true,
            type:"string"
        }
    },
    describe:"to Read an item",
    handler:(x)=>{
        data10.ReadData(x.id)
    }
})
yargs.command({
    command:"list",
    describe:"to list fname and city",
    handler:()=>{
        data10.listpeople()
    }
})
yargs.parse()