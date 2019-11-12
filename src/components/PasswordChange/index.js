import React from 'react';

import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class PAsswordChangeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { passwordOne } = this.state;

        this.props.firebase
            .doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error })
            })

        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { passwordOne, passwordTwo, error } = this.state;

        const isInvalid = passwordOne === '' || passwordTwo === '' || passwordOne !== passwordTwo;

        return (
            <div className="d-flex flex-column align-items-center">
                <div className="jumbotron w-50">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>New Password</label>
                            <input
                                name="passwordOne"
                                type="password"
                                value={this.state.passwordOne}
                                onChange={this.onChange}
                                placeholder="New Password"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm New Password</label>
                            <input
                                name="passwordTwo"
                                type="password"
                                value={this.state.passwordTwo}
                                onChange={this.onChange}
                                placeholder="Confirm New Password"
                                className="form-control"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isInvalid}
                            className="btn btn-primary btn-block"
                        >
                            Change My Password
                        </button>

                        {error && <p className="text-danger">{error.message}</p>}
                    </form>
                </div>
            </div>
        )
    }
}

export default withFirebase(PAsswordChangeForm);