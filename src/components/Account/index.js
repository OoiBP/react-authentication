import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
    <div>
        <h1 className="text-center">Account</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
    </div>
)

export default AccountPage;