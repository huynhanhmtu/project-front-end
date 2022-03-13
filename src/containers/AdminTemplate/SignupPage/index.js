import Loading from 'components/Loading';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actSignUp } from './modules/actions';

export default function SignUpPage() {
  const formInput = useRef(null);

  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    skill: "",
    certification: "",
    birthday: "",
    gender: true, //?
    type: "CLIENT",
  });

  const handleOnchange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

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

  useEffect(() => {
    return () => {
      formInput.current.reset();
    };
  }, []);

  if (localStorage.getItem("UserInfo")) {
    return <Redirect to="/"></Redirect>
  }
  return (
    <div className='m-auto col-5 mt-3'>
      <form onSubmit={handleSubmit} ref={formInput}>
        <div className="form-group">
          <span>Full name</span>
          <input className="form-control" type="text" name="name" onChange={handleOnchange} />
        </div>
        <div className="form-group">
          <span>Email</span>
          <input className="form-control" type="email" name="email" onChange={handleOnchange} />
        </div>
        <div className="form-group">
          <span>Password</span>
          <input className="form-control" type="password" name="password" onChange={handleOnchange} />
        </div>
        <div className="form-group">
          <span>Phone</span>
          <input className="form-control" type="tel" name="phone" onChange={handleOnchange} />
        </div>
        <div className="form-group">
          <span>Skill</span>
          <input className="form-control" type="checkbox" name="skill" onChange={handleOnchange} />
        </div>
        <div className="form-group">
          <span>Certification</span>
          <input className="form-control" type="checkbox" name="certification" onChange={handleOnchange} />
        </div>
        <div className="form-group">
          <span>Birthday</span>
          <input className="form-control" type="date" name="birthday" onChange={handleOnchange} />
        </div>
        <div className="form-group">
          <span>Gender</span>
          <select className="custom-select" name='gender' disabled>
            <option value="male" className='selected'>Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group text-center mt-3">
          <button className="btn btn-primary" onClick={() => {
            formInput.current.click()
          }}>Sign Up</button>
        </div>
        <div>
          {handleLoading()}
        </div>
      </form>
    </div>
  )
}
