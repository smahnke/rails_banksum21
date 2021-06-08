import React from 'react';
const Accounts = ({ accounts, user }) => {
  const { first_name, last_name } = user
  return (
    <>
      <h1>{first_name} {last_name}'s Accounts</h1>
      <hr/>
      <a href="/accounts/new">New Account</a>
      <h3>{accounts.length < 0 ? "No Accounts": "Your Accounts:"}</h3>
      <ul>
        {
          accounts.map( (a) => (
            <li key={a.id}>
              {a.name} has a balance of: {a.balance}
            </li>
          ))
        }
      </ul>
    </>
  )
}
export default Accounts;