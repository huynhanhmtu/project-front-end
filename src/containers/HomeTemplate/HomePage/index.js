import React from 'react';

export default function HomePage(props) {
  const handleOnChange = (e) => {
    localStorage.setItem("job-keyword", JSON.stringify(e.target.value.trim()));
  }

  const handleOnSubmit = () => {
    props.history.push("/search");
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
          Partner
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
    </>
  )
}
