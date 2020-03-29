# React Firebase Auth Example

> Demonstrates how to use Firebase for authentication in an SPA-style React
> app.

### Features

- Email-based Sign Up
- Email-based Sign In
- Authenticated User Persistence
- Sign Out

### Try it out

Create a Firebase app at
[firebase.google.com/](https://firebase.google.com/), turn on Email-based
authentication, and then copy your authentication config values over to the
`src/firebase/firebase.js` file.

Fire it up with `yarn start`.

Give the authentication a whirl. Can you sign up with a new email and
password? Sign out? Sign in with the account you just created?


   <p style={{    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 25,
    marginLeft: 215,
    width: 1000,
    backgroundColor: 'powderblue',}} >
        
        Welcome! Thank you for trying to help our community in these trying times. With Shopping Buddy,
        we make it easy for you to help people in need. Simply <Link to={routes.SIGN_UP_PATH}>sign up</Link>, and be taken to a page with people who
        need help. Then click help, and open up a maps page to see directions to get groceries and where to drop them off.
        Some people can't afford to go out right now and by signing up to help, you are making a difference in their lives.

        {/* Welcome, please <Link to={routes.SIGN_IN_PATH}>sign in</Link> */}
      </p>
