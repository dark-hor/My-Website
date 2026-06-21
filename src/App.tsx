import React from 'react';
import logo from './logo.svg';
import Message from './components/Message';
import Card from './components/Card';
import LandingPage from './components/01-Landing Page/LandingPage2';
import Intro2 from './components/01-Landing Page/Intro2';
import CountryCard from './components/01-Landing Page/CountryCard2';
import Welcome from './components/02-State-Manupulation/Welcome';
import MessageCard from './components/02-State-Manupulation/MessageCard';
import ShoppingCard from './components/02-State-Manupulation/ShoppingCart';
import ShoppingArr from './components/02-State-Manupulation/ShoppingCardArray';
import UserInput from './components/02-State-Manupulation/UserInput';
import SMSApp from './components/02-State-Manupulation/SMS-App';
import FormControl from './components/02-State-Manupulation/Form-Control';
import Auth from './components/03-Conditional-Rendering/Auth';
import HobbySelector from './components/03-Conditional-Rendering/Hobby-selector';
// import './App.css';
import Navebar2 from './components/01-Landing Page/Navebar2';
import CustomerList from './components/04-JSON-DATA/CustomerList';
import ParentComponent from './components/05-Parent-Child-Component/01-Basic/ParentComponent';
import ParentComponentIN from './components/05-Parent-Child-Component/02-Intermediate/ParentComponentIN';
import Digitalwatch from './components/07-Digitalwatch/Digitalwatch';
import UserList from './components/08-Server-Calling/UserList';
import ContactApp from './components/09-Contact-App/ContactApp';
import ContactList from './components/09-Contact-App/ContactList';
import GithubprofilesearchApp from './components/10-GitHubProfile/Repos/GithubprofilesearchApp';
import Navbar from './components/11-Routing/Layout/Navbar';
import RouterConfig from './components/11-Routing/Users/RouterConfig';
import { BrowserRouter } from 'react-router-dom';
import RoutingCard from './components/12-All-Program-Binder/RoutingCard';
import RoutingConfig from './components/12-All-Program-Binder/Routing-Config';
import WishMessage from './Functional-components/02-Hooks-React Binding/WishMessage';
import MessageCardH from './Functional-components/02-Hooks-React Binding/MessageCard';
import UserInputH from './Functional-components/02-Hooks-React Binding/UserInput';
import ShoppingH from './Functional-components/02-Hooks-React Binding/Shoppingcart';
import FormControlH from './Functional-components/02-Hooks-React Binding/FormControlH';
import AuthAppH from './Functional-components/03-Conditional-Rendering/AuthAppH';
import HobbySelectorH from './Functional-components/03-Conditional-Rendering/HobbySelectorH';
import UserListH from './Functional-components/08-Server-Calling/UserListH';

function App() {
  return (
    <>
    {/* <nav className='navbar'>
       <a href="/">React with external css</a>
    </nav> */}
      {/* <Message/> */}
      {/* <Card msg="Good Morning"/> */}
      {/* <Card msg="Good Afternoon"/>
      <Card msg="Good Night"/> */}
      {/* <Card/>
      <button className='btn btn-success'>My Button</button> */}
       {/* <Navebar2/>
       <LandingPage/>
       <Intro2/>
       <CountryCard/> */}
{/* <Welcome/> */}
{/* <MessageCard/> */}
{/* <ShoppingCard/> */}
{/* <ShoppingArr/> */}
{/* <UserInput/> */}
{/* <SMSApp/> */}
{/* <FormControl/> */}
{/* <Auth/> */}
{/* <HobbySelector/> */}
{/* <CustomerList/> */}
{/* <ParentComponent/> */}
{/* <ParentComponentIN/> */}
{/* <Digitalwatch/> */}
{/* <UserList/> */}
{/* <ContactApp/> */}
{/* <GithubprofilesearchApp/> */}
 <BrowserRouter>
   {/* <Navbar/> */}
  {/* <RouterConfig /> 
  <RoutingCard/>  */}
  <RoutingConfig/>
   </BrowserRouter> 


   {/* <WishMessage/> */}
   {/* <MessageCardH/> */}
   {/* <UserInputH/> */}
   {/* <ShoppingH/> */}
   {/* <ShoppingArr/> */}
   {/* <FormControlH/> */}
   {/* <AuthAppH/> */}
   {/* <HobbySelectorH/> */}
   {/* <UserListH/> */}
</>

  );
}

export default App;
