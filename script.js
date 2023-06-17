/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
    arr.map((arr)=>{
    if(arr.profession=="developer")     
    console.log(arr)
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((arr)=>{
    if(arr.profession=="developer")     
    console.log(arr)
  })
}

function addData() {
  //Write your code here, just console.log
  let newOne = {id:4,name:"susan",age:"20",profession:"intern"} ;
  arr.push(newOne);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const filteredData = arr.filter((arr)=>{
    return arr.profession!="admin"
  })
  arr = filteredData;
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArr = [
    {id:4,name:"Anne",age:"22",profession:"developer"},
    {id:5,name:"Frank",age:"23",profession:"developer"},
    {id:6,name:"David",age:"20",profession:"intern"}
  ]
  console.log(arr.concat(newArr));
}
