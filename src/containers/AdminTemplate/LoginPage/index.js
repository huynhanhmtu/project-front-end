import Loading from 'components/Loading';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actLogin, actLoginReset } from './modules/actions';
import { Redirect } from 'react-router-dom';

export default function LoginPage(props) {
  const [info, setInfo] = useState({
    email: "",
    password: ""
  });

  const loading = useSelector(state => state.userLoginReducer.loading);
  const error = useSelector(state => state.userLoginReducer.error);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(actLoginReset());
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(actLogin(info, props.history));
  };

  const handleOnChange = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const notifications = () => {
    if (loading) {
      return <Loading />
    }
    return error && <div className='alert alert-danger mt-3'>{error}</div>
  }

  if (localStorage.getItem("UserInfo")) {
    return <Redirect to="/"></Redirect>
  }
  return (
    <div className="container">
      <div className="row py-3">
        <div className="col-md-5 mx-auto">
          <h4 className='text-center'>Login Page</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="form-control" name="email" onChange={handleOnChange} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" autoComplete="on" onChange={handleOnChange} />
            </div>
            <div className='text-center'>
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
              <Link to="/" className='d-block mt-3'>Back to Homepage</Link>
            </div>
          </form>
          <div className='font-italic'>
            <p>Example:</p>
            {/* <p>(Admin): demo000 - 123123</p> */}
            <p>(Client): huynhanh.mtu@gmail.com - 123456 (_id: 622d51d1f85597001ca8440a)</p>
          </div>
          {notifications()}
        </div>
      </div>
    </div>
  )
}