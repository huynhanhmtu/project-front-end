import React from 'react';
import { useDispatch } from 'react-redux';
import { actSearchJobs } from './modules/actions';

export default function HomePage(props) {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(actSearchJobs(e.target.value));
  }

  const handleOnSubmit = () => {
    props.history.push("/job-detail");
  };

  return (
    <>
      <header>
        <div>
          Carousel
          <form className="form-inline my-2 my-lg-0" onSubmit={(e) => {
            e.preventDefault();
            handleOnSubmit()
          }}>
            <input className="form-control mr-sm-2" type="search" placeholder="Find Services" aria-label="Search" onChange={handleOnChange} />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        <div>
          Parner
        </div>
      </header>
      <section>
        Slider - Services
      </section>
      <section>
        Introduce
      </section>
      <section>
        Marketplace
      </section>
      <section>
        Business
      </section>
      <section>
        Slider - Users
      </section>
      <section>
        Logo maker
      </section>
      <section>
        Freelancers
      </section>
      <section>
        Guides - Get started
      </section>
    </>
  )
}
