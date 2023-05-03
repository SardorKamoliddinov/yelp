import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Yelp from './Yelp';

Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <header>
            <h1>My Yelp</h1>
            <button onClick={signOut} className="sign">Sign out</button>
          </header>
          <Yelp />
        </div>
      )}
    </Authenticator>
  );
}
