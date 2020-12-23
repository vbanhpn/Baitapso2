
 import './App.css';
function App() {
// Bài 1: 
let arrStudent = [{ name: "Bình", gender: "Male", age: 14 }, 
                  { name: "Thịnh", gender: "Male", age: 18 }, 
                  { name: "Huy", gender: "Male", age: 25 }]

  let trungbinhtuoi = function() {
       let age = 0;
     for (let index = 0; index < arrStudent.length; index++) {
             age += arrStudent[index].age;
     } 
     return age/arrStudent.length;
  };
  // Bài 2
  let arrStudent2 = [{ name: "Bình", gender: "Male", age: 14 }, 
  { name: "Thịnh", gender: "Male", age: 18 }, 
  { name: "Huy", gender: "Male", age: 25 }]
  let sortAge = function() { 
    arrStudent2.sort(function (a,b) { return b.age  -a.age
      
    }) 
    return arrStudent2;
  };

  // Bài 3 
  let arrStudent3 = [{ name: "Bình", gender: "Male", age: 14 }, 
  { name: "Thịnh", gender: "Male", age: 18 }, 
  { name: "Huy", gender: "Male", age: 25 }]

  let sortName = function() { 
    return  arrStudent3.sort((a, b) => a.name.localeCompare(b.name));
  };
// Bài 4
  let arrStudent4 = [{ name: "Bình", gender: "Male", age: 14 }, 
  { name: "Thịnh", gender: "Male", age: 18 }, 
  { name: "Huy", gender: "Male", age: 25 }]
  let firstH = function () {
    return arrStudent4.filter(student => student.name.toUpperCase().startsWith("H") )
  }


  return (
    <div className = "App"> 
    <div> 
      <h1> Bài 1: Tính tuổi trung bình: {trungbinhtuoi()} </h1>  
      <h1>----------------------------------------------------- </h1>
    </div>  
    <div> 
    <h1> Bài 2: Sắp xếp theo tuổi giảm dần <br/> {JSON.stringify(sortAge())} </h1>   
    <h1>----------------------------------------------------- </h1>
    </div> 
    <div> 
    <h1> Bài 3: Sắp xếp theo tên <br/> {JSON.stringify(sortName())} </h1>  
    <h1>----------------------------------------------------- </h1>
    </div> 
    <div> 
    <h1> Bài 4: Sinh viên có chữ 'H' hoặc chữ 'h' bắt đầu <br/> {JSON.stringify(firstH())} </h1>  
    <h1>----------------------------------------------------- </h1>
    </div>
    </div> 

  );
}

export default App;
