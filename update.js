class todo{
    constructor(id,sub, desc)
    {
        this.id=id;
        this.sub=sub;
        this.desc=desc;
    }
}
function f3()
{
    
    sub = document.getElementById("todo").value;
    desc = document.getElementById("desc").value;
    var idd = localStorage.getItem('update');
    var obj = new todo(idd,sub,desc);
    var array=localStorage.getItem('array');
    var arr = JSON.parse(array);
    // var check=-1;
    // for(var i=0;i<arr.length;i++)
    // {
    //     if(idd==arr[i].id)
    //     {
    //         check=i;
    //     }
    // }
    var check=_.findIndex(arr,function(o){
        return o.id==idd;
    })
    if(array){
        arr[check]=obj;
    }
    localStorage.setItem('array',JSON.stringify(arr));
    localStorage.removeItem('update');
}
