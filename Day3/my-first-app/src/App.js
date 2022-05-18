import logo from './logo.svg';
import './App.css';
import {user}from './components/User';
import {Form} from './components/Form';
import {Button} from './components/Button';

// function userItem(props){
//   let user=props.user;
//   return(<div>
//     <p>Hello {user.name}, your dob is {user.dob} and gender is {user.gender}</p>
//   </div>)
// }
// function UserArray(){
//   let users=[
//     {name :"ajayy", dob:"2008-10-22", gender:"male"},
//     {name :"anika", dob:"2005-04-22", gender:"female"},
//     {name :"charlie", dob:"2089-10-09", gender:"male"}
//   ];
//   return(<div>
//     {
//     users.map((user,index) => <userItem key = {index} user= {user} />)
//     }
//   </div>)
// }
// function SimpleArray(){
//   let fruit =['Apple',"mango","grapes","orange"];
//   return(<div>
//     <h2>fruit list:-</h2>
//     <ul>
//       {fruit.map((fruit,index)=><li key={index}>{fruit}</li>)}
//     </ul>
//   </div>)
// }
// function App(){
//   return (<div className ='conatiner-fluid'>
//     <h1>This is root</h1>
//     <div className = "row">
//       <div className="col-4">
//         <SimpleArray />
//       </div>
//       <div className="col-8">
//         <UserArray />
//       </div>
//     </div>
//   </div>)
// }
// export default App;

function App(){
  return (<div className ='container-fluid'>
    <h1>This is root</h1>
    <user username="alex " />
    <Form />
  </div>)
}
export default App;