var input = document.getElementById("input");
const dataBase = firebase.database().ref(`/`);

document.getElementById("btn").addEventListener('click', ()=>{
    let obj = {
        name : input.value
    }
    dataBase.child("todoapp").push(obj);
})

dataBase.child("todoapp").on(`child_added`,(extra)=>{
    var xyz =  extra.val();
    xyz.id = extra.key;
    console.log(xyz.name);
    var getDiv =  document.getElementById("div");
    var node1 = document.createTextNode(xyz.name);
    getDiv.appendChild(node1);
})









































// let input1 = document.getElementById(`input1`);

// const dataBase = firebase.database().ref(`/`);

// document.getElementById(`btn1`).addEventListener(`click`,()=>{
//   const myObj = {
//       inputData : input1.value
//   }
//   dataBase.child(`todo`).push(myObj);

// })


 

// dataBase.child(`todo`).on(`child_added`,(a)=>{
//     var dataValue = a.val();
//     dataValue.id = a.key;
//     console.log(dataValue);
//     var div1 = document.getElementById(`div1`);
//     var uList = document.getElementById(`beer`);
//  var list1 = document.createElement(`li`);
//      list1.setAttribute(`id`,dataValue.inputData)
//     var listValue = document.createTextNode(dataValue.inputData);
//     list1.appendChild(listValue);
//     uList.appendChild(list1);
//     var button1 = document.createElement(`input`);
//     button1.setAttribute(`type`,`button`);
//     button1.setAttribute(`value`,`delete`);
//     button1.setAttribute(`id`,dataValue.id);
//     list1.appendChild(button1);
//     var update1 = document.createElement("input");
//     update1.setAttribute(`type`,`button`);
//     update1.setAttribute(`value`,`update`);
//     update1.setAttribute(`id`,dataValue.id);
//     list1.appendChild(update1);
//      button1.addEventListener(`click`,function(){
//          dataBase.child(`todo/` + dataValue.id).remove();
//           this.parentNode.remove();
//      })
//     update1.addEventListener(`click`,function(){
//         var parentElement = this.parentNode;
//           var userValue = prompt(`enter value`,parentElement.id);
//           dataBase.child(`todo/` + dataValue.id).update({inputData:userValue});
//           parentElement.innerHTML = userValue;
//           list1.appendChild(button1);
//           list1.appendChild(update1);
//           list1.setAttribute(`id`,userValue);


//     })
// })