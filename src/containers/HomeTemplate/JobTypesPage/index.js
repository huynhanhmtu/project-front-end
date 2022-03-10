import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function JobTypesPage(props) {
  const jobs = useSelector(state => state.jobTypesReducer.jobTypes);
  const typeId = props.match.params.typeId;

  const jobType = jobs?.find(type => type._id == typeId);

  if (jobType) {
    const handleRenderList = () => {
      return jobType.subTypeJobs.map(sub => {
        return (
          <li key={sub._id}>
            <Link className='nav-link dropdown-item' to={`/sub-jobs/${sub._id}`}>{sub.name}</Link>
          </li>
        )
      });
    }

    const handleRenderItem = () => {
      return jobType.subTypeJobs.map(sub => {
        return (
          <Link key={sub._id} className="card" to={`/sub-jobs/${sub._id}`}>
            <img className="card-img-top" src="..." alt={sub.name} />
              <p className="card-text">{sub.name}</p>
          </Link>
        )
      });
    }
    // Download hình ảnh về tự render cho api không có link hình ảnh (lưu ở folder theo tên id của type)

    return (
      <div>
        <div className='text-center'>
          <h5>{jobType.name}</h5>
        </div>
        <div className='row'>
          <div className='col-3'>
            <p className='font-weight-bold'>{jobType.name}</p>
            <ul className='navbar-nav'>
              {handleRenderList()}
            </ul>
          </div>
          <div className='col-9'>
            {handleRenderItem()}
          </div>
        </div>
      </div>
    )
  }
  return <></>
}
