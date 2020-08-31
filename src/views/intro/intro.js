import React from 'react';
import Search from '../search';
import './intro.scss';

const Intro = () => (
  <section className="intro d-flex align-items-center">

    <div className="container">
      <div className="row justify-content-center">
        <Search
          label="Find Your Movie"
          placeholder="What do you want to watch?"
          buttonLabel="Search"
        />
      </div>
    </div>
  </section>
);

export default Intro;
