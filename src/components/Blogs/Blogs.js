import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Blogs = ({ post  , theme}) => {
  const [searchId, setSearchId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const showChange = (event) => {
    setSearchId(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const idExists = post.find((p) => p.id === Number(searchId));
    if (idExists) {
      navigate(`/post/${searchId}`);
      setError("");
    } else {
      setError("Post not found.");
    }
  };
  return (
    <div className="container" >
      <h1 style={{ color: theme.headerColor }} >Latest news :</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            value={searchId}
            onChange={showChange}
            className="form-control"
            placeholder="Search by Id"
            name="name"
            type="text"
          />
          <button style={{  backgroundColor: theme.searchButton }} type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
      {error && <p>{error}</p>}
      <div class="row row-cols-1 g-4">
        {post.map((item) => (
          <div className="card mb-8 " key={item.id}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={item.img} className="img-fluid mt-3" alt="..." />
              </div>
              <div class="col-md-8">
                <div className="card-body">
                  <h5>{item.title}</h5>
                  <p>{item.summary}</p>
                  <p>
                    <small class="text-body-secondary">{item.author} </small>
                  </p>
                  <Link to={`/post/${item.id}`} class="btn btn-primary" style={{  backgroundColor: theme.searchButton }}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Blogs;
