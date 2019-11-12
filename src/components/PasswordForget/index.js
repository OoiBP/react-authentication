import React from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForgetPage = () => (
    <div>
        <h1 className="text-center">Password Forget</h1>
        <PasswordForgetForm />
    </div>
)

const INITIAL_STATE = {
    email: '',
    error: null,
}

class PasswordForgetFormBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email } = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            })

        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { email, error } = this.state;

        const isInvalid = email === '';

        return (
            <div className="d-flex flex-column align-items-center">
                <div className="jumbotron w-50">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                name="email"
                                type="email"
                                value={this.state.email}
                                onChange={this.onChange}
                                placeholder="Email Address"
                                className="form-control"
                            />
                        </div>

                        <button
                            disabled={isInvalid}
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Reset My Password
                </button>

                        {error && <p className="text-danger">{error.message}</p>}
                    </form>
                </div>
            </div>
        )
    }
}

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
)

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };