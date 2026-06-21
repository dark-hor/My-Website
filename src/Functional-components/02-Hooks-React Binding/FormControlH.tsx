import React, { useState } from 'react';

interface IUser {
    username: string,
    email: string,
    password: string,
    designation: string,
    bio: string,
    terms: boolean,
};

interface IProps { };

interface IState {
    user: IUser
};

let FormControlH: React.FC<IProps> = () => {

    let [FormState, setFormState] = useState<IState>({
        user: {
            username: '',
            email: '',
            password: '',
            designation: '',
            bio: '',
            terms: false
        }
    })

    let userInput = (
        event: React.ChangeEvent<
            HTMLSelectElement |
            HTMLInputElement |
            HTMLTextAreaElement
        >
    ) => {

        setFormState({
            user: {
                ...FormState.user,
                [event.target.name]: event.target.value
            }
        });
    }

    let updateChecked = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {

        setFormState({
            user: {
                ...FormState.user,
                [event.target.name]: event.target.checked
            }
        });
    }

    let submitRegister = (
        event: React.FormEvent<HTMLFormElement>
    ) => {

        event.preventDefault();
        console.log(FormState.user);
    }

    return (
        <React.Fragment>

            <div
                className="vh-100 d-flex align-items-center justify-content-center"
                style={{
                    background:
                        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}
            >

                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-md-5 col-lg-4">

                            <div className="card border-0 shadow-lg rounded-4">

                                <div
                                    className="card-header text-center text-white py-3 rounded-top-4"
                                    style={{
                                        background:
                                            'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)'
                                    }}
                                >
                                    <h3 className="fw-bold mb-0">
                                        Registration Form
                                    </h3>
                                </div>

                                <div className="card-body bg-light p-4">

                                    <form onSubmit={submitRegister}>

                                        <div className="form-group mb-3">
                                            <input
                                                type="text"
                                                name='username'
                                                onChange={userInput}
                                                value={FormState.user.username}
                                                className='form-control rounded-3'
                                                placeholder='Username'
                                            />
                                        </div>

                                        <div className="form-group mb-3">
                                            <input
                                                type="text"
                                                name='email'
                                                onChange={userInput}
                                                value={FormState.user.email}
                                                className='form-control rounded-3'
                                                placeholder='Email'
                                            />
                                        </div>

                                        <div className="form-group mb-3">
                                            <input
                                                type="text"
                                                name='password'
                                                onChange={userInput}
                                                value={FormState.user.password}
                                                className='form-control rounded-3'
                                                placeholder='Password'
                                            />
                                        </div>

                                        <div className="form-group mb-3">

                                            <select
                                                name="designation"
                                                value={FormState.user.designation}
                                                onChange={userInput}
                                                className='form-select rounded-3'
                                            >

                                                <option value="">
                                                    Select Designation
                                                </option>

                                                <option value="Software Engineer">
                                                    Software Engineer
                                                </option>

                                                <option value="Sr. Software Engineer">
                                                    Sr. Software Engineer
                                                </option>

                                                <option value="Tech Lead">
                                                    Teach Lead
                                                </option>

                                                <option value="Manager">
                                                    Manager
                                                </option>

                                            </select>

                                        </div>

                                        <div className="form-group mb-3">

                                            <textarea
                                                name="bio"
                                                value={FormState.user.bio}
                                                onChange={userInput}
                                                rows={4}
                                                className='form-control rounded-3'
                                                placeholder='Bio'
                                            ></textarea>

                                        </div>

                                        <div className="form-check mb-3">

                                            <input
                                                type="checkbox"
                                                name='terms'
                                                onChange={updateChecked}
                                                className='form-check-input'
                                            />

                                            <label className='form-check-label'>
                                                Accept Terms
                                            </label>

                                        </div>

                                        <div className="form-group">

                                            <input
                                                type="submit"
                                                className='btn w-100 text-white fw-bold rounded-3'
                                                value="Register"
                                                style={{
                                                    background:
                                                        'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)',
                                                    border: 'none'
                                                }}
                                            />

                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </React.Fragment>
    )
}

export default FormControlH;