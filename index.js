var arr=[];

class todo{
    constructor(id,sub, desc)
    {
        this.id=id;
        this.sub=sub;
        this.desc=desc;
    }
}
function onloadfunc(){
    if(localStorage.getItem('array')==null)
    {
        
        localStorage.setItem('array',JSON.stringify(arr));
       
    }
    else
    {
        array=localStorage.getItem('array');
        console.log(array);
        arr=JSON.parse(array);
    }
    var tablebody=document.getElementById("tb");
    let str="";
    if(arr)
    {
        arr.forEach((element,sr) => {
            str = `<tr><th scope="row">${element.id}</th><td>${element.sub}</td><td>${element.desc}</td><td><button type="button" class="btn btn-primary" onclick='f2(${element.id})'>Delete</button></td><td><a href="update.html"> <button type="button" class="btn btn-primary" onclick='f3(${element.id})'>Update</button></a></td></tr>`;
            tablebody.innerHTML+=str;
        });
    }
}
var id=1;
function f1()
{
    
    sub = document.getElementById("todo").value;
    desc = document.getElementById("desc").value;
    
    let obj = new todo(id,sub,desc);
    id++;
    if(localStorage.getItem('array'))
    {
        array=localStorage.getItem('array');
        arr=JSON.parse(array);
        arr.push(obj);
        localStorage.setItem('array',JSON.stringify(arr));
        
    }
    else
    {
        arr.push(obj);
        localStorage.setItem('array',JSON.stringify(arr));
    }
    var tablebody=document.getElementById('tb');
    let str="";
    arr.forEach((element,sr) => {
        str += `<tr><th scope="row">${element.id}</th><td>${element.sub}</td><td>${element.desc}</td><td><button type="button" class="btn btn-primary" onclick='f2(${element.id})'>Delete</button></td><td><a href="update.html"> <button type="button" class="btn btn-primary" onclick='f3(${element.id})'>Update</button></a></td></tr>`;
        tablebody.innerHTML=str;
    });
}
function f2(idd)
{
    var check=_.findIndex(arr,(o) => o.id==idd);
    arr.splice(check,1);
    localStorage.setItem('array',JSON.stringify(arr));
    var tablebody=document.getElementById('tb');
    let str="";
    arr.forEach((element,sr) => {
        str += `<tr><th scope="row">${element.id}</th><td>${element.sub}</td><td>${element.desc}</td><td><button type="button" class="btn btn-primary" onclick='f2(${element.id})'>Delete</button></td><td><a href="update.html"> <button type="button" class="btn btn-primary" onclick='f3(${element.id})'>Update</button></td></a></tr>`;
        tablebody.innerHTML=str;
    });
}
function f3(id)
{
    localStorage.setItem("update",id);

}