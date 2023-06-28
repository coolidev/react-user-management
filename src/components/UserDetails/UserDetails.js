const UserDetails = (props) => {
  const updateFirstName = (e) => {
    props.onChange({ ...props.user, firstName: e.target.value });
  }

  const updateLastName = (e) => {
    props.onChange({ ...props.user, lastName: e.target.value });
  }

  const updatePhone = (e) => {
    props.onChange({ ...props.user, phone: e.target.value });
  }

  const saveUserDetails = (e) => {
    e.preventDefault();
    props.onSave(props.user);
  }

  return (
    <form className="user-details-form">
      <div className="form-row">
        <div className="form-group col-md-12">
          <label htmlFor="inputFirstName">First Name</label>
          <input type="text" className="form-control" id="inputFirstName" placeholder="First Name" value={props.user.firstName || ''} onChange={updateFirstName} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-12">
          <label htmlFor="inputLastName">Last Name</label>
          <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" value={props.user.lastName || ''} onChange={updateLastName} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-12">
          <label htmlFor="inputPhone">Phone</label>
          <input type="text" className="form-control" id="inputPhone" placeholder="Phone" value={props.user.phone || ''} onChange={updatePhone} />
        </div>
      </div>
      <button type="submit" className="btn btn-primary" onClick={saveUserDetails}>Save</button>
    </form>
  )
}

export default UserDetails;
