import Loading from 'components/Loading';
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actAddUser, actResetModal } from './modules/actions';

export default function AdminModal(props) {
  const method = props.method;
  const form = useRef(null);
  const message = useSelector(state => state.modalReducer.message);
  const loading = useSelector(state => state.modalReducer.loading);
  const dispatch = useDispatch();

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

  const handleOnchange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    dispatch(actAddUser(state));
    form.current.reset();
  }

  const handleLoading = () => {
    if (loading) {
      return (<Loading />);
    }
    return message && <div className='alert alert-danger mt-3'>{message}</div>
  }

  const handleChangeSkill = () => {
    const skillChecked = [];
    document.querySelectorAll(".checkbox-skill").forEach(checkbox => {
      if (checkbox.checked) {
        skillChecked.push(checkbox.value);
      }
    });
    setState({ ...state, skill: skillChecked });
  }
  const handleChangeCert = () => {
    const certChecked = [];
    document.querySelectorAll(".checkbox-cert").forEach(checkbox => {
      if (checkbox.checked) {
        certChecked.push(checkbox.value);
      }
    });
    setState({ ...state, certification: certChecked });
  }

  window.onclick = function (e) {
    if (e.target == document.getElementById('addModal')) {
      form.current.reset();
      dispatch(actResetModal());
    }
  }

  return (
    <div className="modal fade" id='addModal' tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {method} USER <span className='text-danger'>(In progress)</span>
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { form.current.reset(); dispatch(actResetModal()) }}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleOnSubmit} ref={form}>
              <div className="form-group">
                <input className="form-control" type="text" name="name" placeholder='Full name' onChange={handleOnchange} />
              </div>
              <div className="form-group">
                <input className="form-control" type="email" name="email" placeholder='Email' onChange={handleOnchange} />
              </div>
              <div className="form-group">
                <input className="form-control" type="password" name="password" autoComplete="on" placeholder='New password' onChange={handleOnchange} />
              </div>
              <div className="form-group">
                <input className="form-control" type="tel" name="phone" placeholder='Mobile number' onChange={handleOnchange} />
              </div>
              <div className="form-group">
                <label>Skill</label>
                <div className='d-flex justify-content-around'>
                  <div>
                    <label>WEB</label>
                    <input className="ml-2 checkbox-skill" type="checkbox" value="WEB" onChange={handleChangeSkill} />
                  </div>
                  <div>
                    <label>DESIGN</label>
                    <input className="ml-2 checkbox-skill" type="checkbox" value="DESIGN" onChange={handleChangeSkill} />
                  </div>
                  <div>
                    <label>GAMING</label>
                    <input className="ml-2 checkbox-skill" type="checkbox" value="GAMING" onChange={handleChangeSkill} />
                  </div>
                  <div>
                    <label>MOBILE</label>
                    <input className="ml-2 checkbox-skill" type="checkbox" value="MOBILE" onChange={handleChangeSkill} />
                  </div>
                  <div>
                    <label>REACT</label>
                    <input className="ml-2 checkbox-skill" type="checkbox" value="REACT" onChange={handleChangeSkill} />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Certification</label>
                <div className='d-flex justify-content-around'>
                  <div>
                    <label>DIB</label>
                    <input className="ml-2 checkbox-cert" type="checkbox" value="DIB" onChange={handleChangeCert} />
                  </div>
                  <div>
                    <label>PYNOW</label>
                    <input className="ml-2 checkbox-cert" type="checkbox" value="PYNOW" onChange={handleChangeCert} />
                  </div>
                  <div>
                    <label>AWS</label>
                    <input className="ml-2 checkbox-cert" type="checkbox" value="AWS" onChange={handleChangeCert} />
                  </div>
                  <div>
                    <label>CCNA</label>
                    <input className="ml-2 checkbox-cert" type="checkbox" value="CCNA" onChange={handleChangeCert} />
                  </div>
                  <div>
                    <label>IT</label>
                    <input className="ml-2 checkbox-cert" type="checkbox" value="IT" onChange={handleChangeCert} />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Birthday</label>
                <input className="form-control" type="date" name="birthday" onChange={handleOnchange} />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select className="custom-select" name='gender' disabled>
                  <option value="male" className='selected'>Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>User Type</label>
                <select className="custom-select" name='type' disabled>
                  <option value="CLIENT" className='selected'>CLIENT</option>
                  <option value="ADMIN">ADMIN</option>
                </select>
              </div>
              <div className="form-group text-center mt-3">
                <button className="btn btn-primary" type='submit'>{method}</button>
              </div>
              <div>
                {handleLoading()}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}