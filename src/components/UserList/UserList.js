const UserList = (props) => {
  const handleFilterPatternChange = (e) => {
    props.onFilterPatternChange(e.target.value);
  }

  return (
    <div className="list-group list-group-flush">
      <div className="list-group-item">
        <div className="top-container">
          <div className="btn btn-primary new-user-button" onClick={props.onNewUser}>
            New user
          </div>
          <input type="text" className="form-control user-search-box" placeholder="Find user..." aria-label="Find user..." value={props.filterPattern} onChange={handleFilterPatternChange} />
        </div>
        {props.users && props.users.map((u, idx) => (
          <div key={`${u._id} ${idx}`} className="list-group-item user" onClick={() => props.onUserSelect(u._id)}>
            {u.firstName} {u.lastName} {u.phone}
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList;
