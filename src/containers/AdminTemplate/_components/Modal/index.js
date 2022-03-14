import Loading from 'components/Loading';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actManageUsers, actResetModal } from './modules/actions';

export default function AdminModal(props) {
  const { method, userEdit } = props;

  const message = useSelector(state => state.modalReducer.message);
  const loading = useSelector(state => state.modalReducer.loading);
  const dispatch = useDispatch();

  const initialState = {
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    skill: [],
    certification: [],
    gender: false, //?
    type: "CLIENT",
  }

  const initialChecked = {
    WEB: false,
    DESIGN: false,
    GAMING: false,
    MOBILE: false,
    REACT: false,
    DIB: false,
    PYNOW: false,
    AWS: false,
    CCNA: false,
    IT: false,
  }

  const [state, setState] = useState({ ...initialState });
  const [checked, setChecked] = useState({ ...initialChecked });

  const handleResetForm = () => {
    dispatch(actResetModal());
    if (userEdit) {
      setState({
        name: userEdit.name,
        email: userEdit.email,
        // password: "",
        phone: userEdit.phone,
        birthday: userEdit.birthday,
        skill: userEdit.skill,
        certification: userEdit.certification,
        gender: false, //?
        type: userEdit.role,
      });
      setChecked({
        WEB: userEdit.skill.includes("WEB") ? true : false,
        DESIGN: userEdit.skill.includes("DESIGN") ? true : false,
        GAMING: userEdit.skill.includes("GAMING") ? true : false,
        MOBILE: userEdit.skill.includes("MOBILE") ? true : false,
        REACT: userEdit.skill.includes("REACT") ? true : false,
        DIB: userEdit.certification.includes("DIB") ? true : false,
        PYNOW: userEdit.certification.includes("PYNOW") ? true : false,
        AWS: userEdit.certification.includes("AWS") ? true : false,
        CCNA: userEdit.certification.includes("CCNA") ? true : false,
        IT: userEdit.certification.includes("IT") ? true : false,
      });
    } else {
      setState({ ...initialState });
      setChecked({ ...initialChecked });
    }
  }

  useEffect(() => { handleResetForm() }, [userEdit]);

  const handleOnchange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    dispatch(actManageUsers(state, method, userEdit?._id));
  }

  const handleLoading = () => {
    if (loading) {
      return (<Loading />);
    }
    return message && <div className='alert alert-danger mt-3 text-center'>{message}</div>
  }

  const handleChangeSkill = e => {
    const skillChecked = [];
    document.querySelectorAll(".checkbox-skill").forEach(checkbox => {
      if (checkbox.checked) {
        skillChecked.push(checkbox.value);
      }
    });
    setState({ ...state, skill: skillChecked });
    if (!e.target.checked) {
      setChecked({ ...checked, [e.target.value]: false });
    } else {
      setChecked({ ...checked, [e.target.value]: true });
    };
  };

  const handleChangeCert = (e) => {
    const certChecked = [];
    document.querySelectorAll(".checkbox-cert").forEach(checkbox => {
      if (checkbox.checked) {
        certChecked.push(checkbox.value);
      }
    });
    setState({ ...state, certification: certChecked });
    if (!e.target.checked) {
      setChecked({ ...checked, [e.target.value]: false });
    } else {
      setChecked({ ...checked, [e.target.value]: true });
    };
  }

  window.onclick = function (e) {
    if (e.target == document.getElementById('addModal')) {
      handleResetForm();
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
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => {
              handleResetForm();
            }}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleOnSubmit}>
              <div className="form-group">
                <input className="form-control" type="text" name="name" placeholder='Full name' onChange={handleOnchange} value={state.name} />
              </div>
              <div className="form-group">
                <input className="form-control" type="email" name="email" placeholder='Email' onChange={handleOnchange} value={state.email} />
              </div>
              <div className="form-group">
                <input className="form-control" disabled={userEdit ? true : false} type="password" name="password" autoComplete="on" placeholder={userEdit ? "Password" : "New password"} onChange={handleOnchange} />
              </div>
              <div className="form-group">
                <input className="form-control" type="tel" name="phone" placeholder='Mobile number' onChange={handleOnchange} value={state.phone} />
              </div>
              <div className="form-group">
                <label>Skill</label>
                <div className='d-flex justify-content-around'>
                  <div>
                    <label>WEB</label>
                    <input className="ml-2 checkbox-skill" type="checkbox" value="WEB" onChange={handleChangeSkill} checked={checked.WEB} />
                  </div>
                  <div>
                    <label>DESIGN</label>
                    <input className="ml-2 checkbox-skill" type="checkbox" value="DESIGN" onChange={handleChangeSkill} checked={checked.DESIGN} />
                  </div>
                  <div>
                    <label>GAMING</label>
                    <input className="ml-2 checkbox-skill" type="checkbox" value="GAMING" onChange={handleChangeSkill} checked={checked.GAMING} />
                  </div>
                  <div>
                    <label>MOBILE</label>
                    <input className="ml-2 checkbox-skill" type="checkbox" value="MOBILE" onChange={handleChangeSkill} checked={checked.MOBILE} />
                  </div>
                  <div>
                    <label>REACT</label>
                    <input className="ml-2 checkbox-skill" type="checkbox" value="REACT" onChange={handleChangeSkill} checked={checked.REACT} />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Certification</label>
                <div className='d-flex justify-content-around'>
                  <div>
                    <label>DIB</label>
                    <input className="ml-2 checkbox-cert" type="checkbox" value="DIB" onChange={handleChangeCert} checked={checked.DIB} />
                  </div>
                  <div>
                    <label>PYNOW</label>
                    <input className="ml-2 checkbox-cert" type="checkbox" value="PYNOW" onChange={handleChangeCert} checked={checked.PYNOW} />
                  </div>
                  <div>
                    <label>AWS</label>
                    <input className="ml-2 checkbox-cert" type="checkbox" value="AWS" onChange={handleChangeCert} checked={checked.AWS} />
                  </div>
                  <div>
                    <label>CCNA</label>
                    <input className="ml-2 checkbox-cert" type="checkbox" value="CCNA" onChange={handleChangeCert} checked={checked.CCNA} />
                  </div>
                  <div>
                    <label>IT</label>
                    <input className="ml-2 checkbox-cert" type="checkbox" value="IT" onChange={handleChangeCert} checked={checked.IT} />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Birthday</label>
                <input className="form-control" type="date" name="birthday" onChange={handleOnchange} value={state.birthday ? new Date(state.birthday).toLocaleDateString('en-GB').split("/").reverse().join("-") : ""} />
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
                <select className="custom-select" name='type' value={state.type} onChange={(e) => { setState({ ...state, [e.target.name]: e.target.value }) }}>
                  <option>CLIENT</option>
                  <option>ADMIN</option>
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
      </div >
    </div >
  )
}