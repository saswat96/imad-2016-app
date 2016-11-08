console.log('Loaded!');

var button = document.getElementById("counter");
button.onclick = function() {
    
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
             var names = ['name1','name2','name3','name4'];
    var list = '';
    for(var i= 0; i<name.length;i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
            }
        }
        
    };
    request.open('GET','http://saswat96.imad.hasura-app.io/counter', true);
    request.send(null);
};


var submit = document.getElementById('submit_button');
submit.onclick = function(){
     var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
             var names = request.responseText;
             names=JSON.parse(names); 
    var list = '';
    for(var i= 0; i<name.length;i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
            }
        }
        
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://saswat96.imad.hasura-app.io/submit-name?name' + name, true);
    request.send(null);
    
   
};