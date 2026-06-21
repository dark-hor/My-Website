import React from 'react';
import { IContact } from './IContact';
import axios from 'axios';

interface IProps {
    sendContact : (contact: IContact) => void ;
 };
interface IState {
    contacts: IContact[];
};
class ContactList extends React.Component<IProps, IState> {
    /**
     *
     */
    constructor(props: IProps) {
        super(props);
        this.state = {
            contacts: [] as IContact[]
        }
    }

    componentDidMount(): void {
        let dataURL = 'https://gist.githubusercontent.com/dark-hor/0cb965b3b91369878aae8581388ea9dd/raw/a6588c90632607a671126c428e04d5b5ac792304/gistfile1.txt';
        axios.get<IContact[]>(dataURL).then((response) => {
            console.log(response.data)
            this.setState({
                contacts: response.data
            })
        }).catch((error) => {
            console.log(error)
        });
    }

    selectedContact = (contact: IContact)=>{
        // alert(JSON.stringify(contact));
        this.props.sendContact(contact);
    }

    render() {
        let { contacts } = this.state;
        return (
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.state.contacts)}</pre> */}
                <div className="section">
                    <div className="container">
                        <table className='table tablepbordered table-hover text-center table-striped'>
                            <thead className='bg-primary text-white'>
                                <tr>
                                    <th>Sno</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.length > 0 &&
                                    contacts.map(contact => {
                                        return (
                                            <tr key={contact.login.uuid} onClick={this.selectedContact.bind(this,contact)}>
                                                <td>{contact.login.uuid.substring(contact.login.uuid.length - 5)}</td>
                                                <td>{contact.name.first}{contact.name.last}</td>
                                                <td>{contact.email}</td>
                                                <td>{contact.phone}</td>
                                                <td>{contact.location.city}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ContactList