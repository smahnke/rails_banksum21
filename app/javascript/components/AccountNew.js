import React from 'react'
const AccountNew = ({ account }) => {
  const { name, balance, user_id } = account
  const defaultName = name ? name : ""
  const defaultBalance = balance ? balance : 0
  return(
    <>
      <h1>Add Account</h1>
      <form action="/accounts" method="post">
        <input type="hidden" name="account[user_id]" value={user_id} />
        <input
          placeholder="account name"
          type="text"
          defaultValue={defaultName}
          name="account[name]"
          required
        />
        <input
          type="number"
          defaultValue={defaultBalance}
          name="account[balance]"
          required
        />
        <button type="submit">Add</button>
      </form>
    </>
  )
}
export default AccountNew;