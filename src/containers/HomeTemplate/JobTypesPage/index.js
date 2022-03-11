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
          <div key={sub._id} className='col-4 p-2'>
            <Link className="card" to={`/sub-jobs/${sub._id}`}>
              <img className="card-img-top w-100" src={sub.image ? sub.image : "https://images.squarespace-cdn.com/content/v1/562e3dade4b0c308fbc94d7b/1603322266670-Y6WK1MCXQ09I5GUT4TFN/coming+soon+yellow.jpg?format=1500w"} alt={sub.name} style={{ height: 220, objectFit: "cover" }} />
              <p className="card-text">{sub.name}</p>
            </Link>
          </div>
        )
      });
    }

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
          <div className='row col-9' style={{ height: "fit-content" }}>
            {handleRenderItem()}
          </div>
        </div>
      </div>
    )
  }
  return <></>
}
