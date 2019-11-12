import React from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                authUser: null,
            }
        }

        componentDidMount() {
            // Store the returned function
            this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
                authUser ? this.setState({ authUser }) : this.setState({ authUser: null });
            })
        }

        componentWillUnmount() {
            this.listener(); // Call the function to avoid memory leak
        }

        render() {
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            )
        }
    }

    return withFirebase(WithAuthentication);
    /*
    withAuthentication is a context provider
    withFirebase is a context consumer

    <FirebaseContext.Consumer>
        <AuthUserContext.Provider>
            <Component />
        </AuthUserContext.Provider>
    </FirebaseContext.Consumer>

    firebase props is required in the WithAuthentication component for state changed
    */
}

export default withAuthentication;