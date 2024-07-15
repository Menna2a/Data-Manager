const fs= require("fs")
// const allData = require("./allData")
const addPerson=(id,fname, lname,city,age)=>{
    const allData=loadInfo()
    const duplicateddata=allData.filter((obj)=>{
        return obj.id===id
    })
    // console.log(duplicateddata)
    if(duplicateddata.length ==0){
    allData.push({
        id:id,
        fname:fname,
        lname:lname,
        city:city,
        age:age
    })
    savealldata(allData)
    console.log("Added")
}else{
    console.log("error duplicates data")
}
}
/////////////////////////////////////
const loadInfo=()=>{
    try{
    const datajson=fs.readFileSync("data10.json").toString()
    return JSON.parse(datajson)
    }
    catch{
        return []
    }

}
/////////////////////////////////////
function savealldata(allData){
    const alldatajson=JSON.stringify(allData)
    fs.writeFileSync("data10.json",alldatajson)
}
////////////////////////////////////
//delete data:
const deletedata=(id)=>{
    const allData=loadInfo()
    const datakeep=allData.filter((obj)=>{
        return obj.id !== id
    })
    console.log(datakeep)
    console.log("Deleted Successfullly")
    savealldata(datakeep)
}
////////////////////////////////////
const ReadData=(id)=>{
    const allData=loadInfo()
    const itemneeded=allData.find((obj)=>{
        return obj.id==id
    })
    if(itemneeded){
    console.log(itemneeded)}
    else{
        console.log("Item not found")
    }
}
////////////////////////////////////
const listpeople=()=>{
    const allData=loadInfo()
    allData.forEach(obj => {
        console.log(obj.fname,obj.city)   
    });
}

module.exports={addPerson,deletedata,ReadData,listpeople}