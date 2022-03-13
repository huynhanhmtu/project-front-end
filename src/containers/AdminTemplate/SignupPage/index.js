import Loading from 'components/Loading';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { actResetSignUpMessenger, actSignUp } from './modules/actions';

export default function SignUpPage() {
  const formInput = useRef(null);

  const [info, setInfo] = useState({
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
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    return () => {
      dispatch(actResetSignUpMessenger());
    };
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(actSignUp(info));
    formInput.current.reset();
  }

  const dispatch = useDispatch();
  const message = useSelector(state => state.signUpReducer.message);
  const loading = useSelector(state => state.signUpReducer.loading);

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
    setInfo({ ...info, skill: skillChecked });
  }
  const handleChangeCert = () => {
    const certChecked = [];
    document.querySelectorAll(".checkbox-cert").forEach(checkbox => {
      if (checkbox.checked) {
        certChecked.push(checkbox.value);
      }
    });
    setInfo({ ...info, certification: certChecked });
  }

  if (localStorage.getItem("UserInfo")) {
    return <Redirect to="/"></Redirect>
  }
  return (
    <div className='m-auto col-5 py-3'>
      <h4 className='text-center'>Sign Up</h4>
      <form id='signup' onSubmit={handleSubmit} ref={formInput}>
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
        <div className="form-group text-center mt-3">
          <button className="btn btn-primary" type='submit'>Sign Up</button>
        </div>
        <div>
          {handleLoading()}
        </div>
        <div className='text-center'>
          <Link className='p-3' to="/login">Login</Link>
          <Link className='p-3' to="/">Back to Homepage</Link>
        </div>
      </form>
    </div>
  )
}