import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormControl from '../02-State-Manupulation/Form-Control';
import MessageCard from '../02-State-Manupulation/MessageCard';
import ShoppingCart from '../02-State-Manupulation/ShoppingCart';
import ShoppingArr from '../02-State-Manupulation/ShoppingCardArray';
import SMSApp from '../02-State-Manupulation/SMS-App';
import UserInput from '../02-State-Manupulation/UserInput';
import Welcome from '../02-State-Manupulation/Welcome';
import Auth from '../03-Conditional-Rendering/Auth';
import HobbySelector from '../03-Conditional-Rendering/Hobby-selector';
import CustomerList from '../04-JSON-DATA/CustomerList';
import Digitalwatch from '../07-Digitalwatch/Digitalwatch';
import UserList from '../08-Server-Calling/UserList';
import ContactApp from '../09-Contact-App/ContactApp';
import GithubprofilesearchApp from '../10-GitHubProfile/Repos/GithubprofilesearchApp'; 
import RoutingCard from './RoutingCard';
import Message from '../Message';
import Card from '../Card';
class RoutingConfig extends React.Component {

    render() {

        return (

            <Routes>
                <Route path="/" element={<RoutingCard />} />

                <Route path="/Formcontrol" element={<FormControl/>} />

                <Route path="/Messagecard" element={<MessageCard />} />

                <Route path="/Shoppingcart" element={<ShoppingCart />} />
                
                <Route path="/ShoppingArr" element={<ShoppingArr />} />

                <Route path="/SMS" element={<SMSApp />} />
                
                <Route path="/Userinput" element={<UserInput />} />

                <Route path="/Welcome" element={<Welcome />} />

                <Route path="/Auth" element={<Auth />} />

                <Route path="/Hobbyselector" element={<HobbySelector />} />

                <Route path="/CustomerList" element={<CustomerList />} />

                <Route path="/Digitalwatch" element={<Digitalwatch />} />

                <Route path="/Userlist" element={<UserList />} />

                <Route path="/Contactapp" element={<ContactApp />} />

                <Route path="/Githubprofile" element={<GithubprofilesearchApp />} />

                <Route path="/Message" element={<Message />} />


                <Route path="/card" element={<Card />} />

                {/* <Route path="/todo" element={<ShoppingArr />} />
                <Route path="/todo" element={<ShoppingArr />} />
                <Route path="/todo" element={<ShoppingArr />} />
                <Route path="/todo" element={<ShoppingArr />} />
                <Route path="/todo" element={<ShoppingArr />} />
                <Route path="/todo" element={<ShoppingArr />} />
                <Route path="/todo" element={<ShoppingArr />} />
                <Route path="/todo" element={<ShoppingArr />} />
                <Route path="/todo" element={<ShoppingArr />} />
                <Route path="/todo" element={<ShoppingArr />} /> */}
                
                 <Route path="*" element={<RoutingCard />} />

            </Routes>

        );
    }
}

export default RoutingConfig;