menuListArray = 
["Pizza Vegetariana",
"Pizza de Frango",
"Pizza Portuguesa",
"Pizza Quatro Queijos",
"Pizza de Calabresa",
"Pizza Extravaganza"
];


function getMenu(){
var htmldata="";
    menuListArray.sort();
    
    for(var i=0;i<cmenuListArray.length;i++){
    
    htmldata=htmldata+ menulistarray[i] + '<br>'
    
    }
    
    document . getElementById("displayMenu”").innerHTML = htmldata;
    }
    
function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
    var imgtags='<img id-"im1" src-"images/pizzalng.png"/>'
    menuListarray.sort();
    htmldata=""
    for(var i=0;i<menuListArray.length;it++){
    htmldata=htmldata+imgtags+ menuListarray[i]+'<br>';
    }
    document. getElementById("displayAddedMenu”").innerHTML = htmldata;
    }
    


function addTop(){

    var item=document.getElementById("addItem").value;
    menuListarray.push(item);
    addItem();
    
    }
    
