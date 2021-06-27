import './App.css';
import Header from './MyComponents/Header';
import AddContact from './MyComponents/AddContact';
import ContactList from './MyComponents/ContactList';
import React, {useState, useEffect} from 'react'
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Redirect } from 'react-router';

function App() {
  
  let initTodo;
  if (localStorage.getItem("AllContacts") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("AllContacts"));
  }

  const addContact = (Name, Email) =>{
    console.log("I am Adding contact", Name, Email);
    let sno;

    if(AllContacts.length === 0){
      sno = 1;
    }
    else{
      sno = AllContacts[AllContacts.length - 1].sno + 1;
    }

    let myContact = {
      sno: sno,
      Name: Name,
      Email: Email
    }

    setAllContacts([...AllContacts, myContact]);
    console.log(myContact);
    return <Redirect to="/"></Redirect>
  }

  const [AllContacts, setAllContacts] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("AllContacts", JSON.stringify(AllContacts));
  }, [AllContacts])

  const onDelete = (contact)=> {
    console.log("Deleting ", contact);
    setAllContacts(AllContacts.filter((e)=>{
      return e!==contact;
    }))
    console.log("Deleted", AllContacts);
    localStorage.setItem("AllContacts", JSON.stringify(AllContacts));
  }

  console.log("AllContacts", AllContacts.length)
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" render={()=>{
          return (
            <ContactList AllContacts = {AllContacts} onDelete={onDelete}/>
          )
        }}></Route>
        <Route exact path="/addContact" render={()=>{
          return (
            <AddContact addContact = {addContact} />
          )
        }}></Route>
      </Switch>
    </Router>
    </>


    // <div className="App">
    //   <Header />
    //   <AddContact addContact = {addContact} />
    //   <ContactList AllContacts = {AllContacts} onDelete={onDelete}/>
    // </div>
  );
}

export default App;
