import React from 'react'

export default function
  () {
  return (
    <div>
      <div className="bg-primary pt-5">
        <div className="container">
          <div className="row align-items-center no-gutters">
            <div className="col-xl-5 col-lg-6 col-md-12">
              <div className="py-5 py-lg-0">
                <h1 className="text-white " style={{ fontWeight: 600, maxWidth: "125rem" }}>Welcome to Geeks UI Learning Application
                </h1>
                <p className="text-white-50 mb-4 lead">
                  Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.
                </p>
                <a href="pages/course-filter-list.html" className="btn btn-success mb-5" style={{ marginRight: '4px' }}>Browse Courses</a>
                <a href="pages/sign-in.html" className="btn btn-white mb-5" style={{ background: "white" }}>Are You Instructor?</a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-12 text-lg-right text-center">
              <img src="./public/images/hero-img.png" alt="HeroSectionImage" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
