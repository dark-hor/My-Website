import React, { useState } from 'react';
interface IProps { };
interface IState {
    fooding: boolean;
    cooding: boolean;
    eating: boolean;
};

let HobbySelectorH: React.FC<IProps> = () => {
    let [setHobby, setHobbyState] = useState<IState>({
        fooding: false,
        cooding: false,
        eating: false
    });

    let checkUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHobbyState({
            ...setHobby,
            [event.target.name]: event.target.checked
        });
    };

    return (
        <React.Fragment>
            <div className="section mt-3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Hobby Selector</h3>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <form >
                                                <div className="form-check mb-3">
                                                    <input type="checkbox"
                                                        name='fooding'
                                                        onChange={checkUpdate}
                                                        className='form-check-input'
                                                    />
                                                    <label className='form-check-label'>
                                                        Fooding
                                                    </label>
                                                </div>

                                                <div className="form-check mb-3">
                                                    <input type="checkbox"
                                                        name='cooding'
                                                        onChange={checkUpdate}
                                                        className='form-check-input' />
                                                    <label className='form-check-label'>
                                                        Cooding
                                                    </label>
                                                </div>

                                                <div className="form-check mb-3">
                                                    <input type="checkbox"
                                                        name='eating'
                                                        onChange={checkUpdate}
                                                        className='form-check-input' />
                                                    <label className='form-check-label'>Eating</label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-8">
                                            {
                                                setHobby.fooding &&
                                                <div className="card mb-3 animated jello">
                                                   <div className="card-body bg-success text-white">
                                                    <h3>Fooding</h3>
                                                    <p className='card-text text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate nobis impedit, commodi non aliquid ipsa animi debitis eum tenetur tempora. Officiis, dignissimos odio deserunt ipsa necessitatibus quidem temporibus perferendis!</p>
                                                   </div>
                                                </div>
                                            }
                                            {
                                                setHobby.cooding &&
                                                <div className="card mb-3 animated jello">
                                                    <div className="card-body bg-danger text-white">
                                                        <h3>Cooding</h3>
                                                        <p className='card-text text-white'>
                                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, repudiandae. Consequuntur repellat qui nesciunt animi dolores, atque sint enim repudiandae aspernatur ut ipsum possimus eius, tenetur aliquam doloribus excepturi vitae.
                                                        </p>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                setHobby.eating &&
                                                <div className="card animated jello">
                                                    <div className="card-body bg-warning text-white">
                                                        <h3>Eating</h3>
                                                        <p className='card-text text-white'>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, nesciunt vero! Odit minus fuga quidem, ratione voluptatum quos possimus, modi cum, adipisci non reiciendis provident delectus temporibus soluta at necessitatibus.
                                                        </p>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default HobbySelectorH;