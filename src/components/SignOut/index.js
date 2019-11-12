import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => ( // Takes only firebase object from props
    <button
        onClick={firebase.doSignOut}
        className="btn nav-link"
    >
        Sign Out
    </button>
)

export default withFirebase(SignOutButton);