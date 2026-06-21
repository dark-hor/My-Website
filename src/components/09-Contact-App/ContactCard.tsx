import React from 'react';
import { IContact } from './IContact';
import './Contactcard.css';
interface IProps {
    selectedContact: IContact
};

interface IState { };

class ContactCard extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    render() {

        let { selectedContact } = this.props;

        if (Object.keys(selectedContact).length === 0) {
            return <></>
        }

        return (
            <React.Fragment>

                <div className="card sticky-top">

                    <div className="card-header bg-primary p-5">
                    </div>

                    <div className="card-body text-center">

                        <img
                            src={selectedContact.picture.large}
                            alt="" className='rounded-circle contact-img'
                        />

                    </div>

                    <ul className='list-group'>

                        <li className='list-group-item'>
                            {selectedContact.name.first} {selectedContact.name.last}
                        </li>

                        <li className='list-group-item'>
                            {selectedContact.email}
                        </li>

                        <li className='list-group-item'>
                            {selectedContact.dob.age}
                        </li>

                        <li className='list-group-item'>
                            {selectedContact.phone}
                        </li>

                        <li className='list-group-item'>
                            {selectedContact.cell}
                        </li>

                    </ul>

                </div>

            </React.Fragment>
        );
    }
}

export default ContactCard;