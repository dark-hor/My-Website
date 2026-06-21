import React from 'react';
import { IContact } from './IContact';
import ContactList from './ContactList';
import ContactCard from './ContactCard';
interface IProps { };
interface IState {
    selectedContact: IContact,
};
class ContactApp extends React.Component<IProps, IState> {
    /**
     *
     */
    constructor(props: IProps) {
        super(props);
        this.state = {
            selectedContact: {} as IContact,
        }
    }
    receiveContact = (contact: IContact) => {
        this.setState({
            selectedContact: contact
        })
    };

    render() {
        return (
            <React.Fragment>
                <div className="section mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-primary">Contact List App</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos a maxime officia. Soluta, necessitatibus eaque repellat ipsum ipsa tempora quis delectus pariatur error dolor aliquid facere accusamus porro deserunt molestias.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <ContactList sendContact={this.receiveContact} />
                            </div>
                            <div className="col-md-4">
                                {
                                    Object.keys(this.state.selectedContact).length > 0 &&
                                    <ContactCard selectedContact={this.state.selectedContact} />

                                }
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default ContactApp;