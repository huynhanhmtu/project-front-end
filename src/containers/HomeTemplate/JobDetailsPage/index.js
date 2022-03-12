import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actFetchJobDetail from './modules/actions';

export default function JobDetailPage(props) {
  const jobData = useSelector(state => state.jobDetailReducer.jobData);
  const comments = useSelector(state => state.jobDetailReducer.comments);
  const jobId = props.match.params.jobId;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchJobDetail(jobId));
  }, []);

  const handleFetchListComments = () => {
    if (comments && comments.length > 0) {
      return (
        <div>
          <p>({comments.length}) Comments:</p>
          {handleRenderComments(comments)}
        </div>
      )
    }
    return (
      <div>
        <p>There are no comments yet, leave your comment below.</p>
      </div>
    )
  }

  const handleRenderComments = comments => {
    return comments.map(comment => {
      return <p key={comment._id}>{comment.content} - by {comment.user.name} ({comment.user.role})</p>
    });
  }


  if (jobData) {
    return (
      <div>
        <div>Navbar cho Job Detail : Overview, Description, FAQ, Reviews, About the seller, Compare packages, Recommendations</div>
        <div className='row'>
          <div className='col-7'>
            <h5 style={{ textTransform: "capitalize" }}>{jobData.name}</h5>
            <img className='w-100' src={jobData.image}></img>
            <h5>About This Gig</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className='col-5'></div>
        </div>
        <div className='text-warning'>Review Chart</div>
        <div className='text-warning'>Comment</div>
        {handleFetchListComments()}
      </div>
    )
  }
  return (
    <></>
  )
}
