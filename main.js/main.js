function yarat(){
    var div11 = document.createElement('div');
    var form1 = document.getElementById('form1');
    div11.style.width = "70%"
    div11.style.height = "30px"
    div11.style.backgroundColor = "#1D2733";
    div11.style.borderRadius = "20px";
    div11.style.marginTop = "20px";
    
    form1.appendChild(div11);
    var bt1 = document.createElement('button');
    var bt2 = document.createElement('button');
    bt1.style.width = "15%";
    bt1.style.height = "30px";
    bt1.style.backgroundColor = "#1D2733";
    bt1.innerText = "Delete"
    bt1.style.float = "right";
    bt1.style.color = "white";
    bt1.style.border = " none";
    bt1.style.borderRadius = "20px";
    div11.appendChild(bt1);
    
    
   
    bt2.style.width = "15%";
    bt2.style.height = "30px";
    bt2.style.backgroundColor = "#1D2733";
    bt2.innerText = "Edit"
    bt2.style.float = "right";
    bt2.style.border = " none";
    
    bt2.style.color = "white";
    div11.appendChild(bt2);

    



}