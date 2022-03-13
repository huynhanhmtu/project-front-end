import React, { useRef, useState } from 'react'

export default function AdminModal() {
  const modal = useRef(null);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    skill: [],
    certification: [],
    gender: false, //?
    type: "CLIENT",
  });

  handleOnchange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.getUserSubmit(this.state);
    modal.current.click();
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {

  //   if (nextProps && nextProps.userEdit) {
  //     this.setState({
  //       id: nextProps.userEdit.id,
  //       fullname: nextProps.userEdit.fullname,
  //       username: nextProps.userEdit.username,
  //       email: nextProps.userEdit.email,
  //       phoneNumber: nextProps.userEdit.phoneNumber,
  //       type: nextProps.userEdit.type,
  //     })
  //   } else {
  //     // Reset
  //     this.setState({
  //       id: "",
  //       fullname: "",
  //       username: "",
  //       email: "",
  //       phoneNumber: "",
  //       type: "USER",
  //     })
  //   }
  // }




  return (
    <div
      className="modal fade"
      id="adminModal"
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {this.props.userEdit ? "EDIT USER" : "ADD USER"}
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" ref={modal}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleOnchange} />
              </div>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" name="fullname" value={this.state.fullname} onChange={this.handleOnchange} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleOnchange} />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" className="form-control" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleOnchange} />
              </div>
              <div className="form-group">
                <label>Type</label>
                <select className="form-control" name="type" value={this.state.type} onChange={this.handleOnchange}>
                  <option>USER</option>
                  <option>VIP</option>
                </select>
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}