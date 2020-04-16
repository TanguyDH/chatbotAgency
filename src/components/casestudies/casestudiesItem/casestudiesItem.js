import React from 'react'
import {Link} from 'gatsby';
import './casestudiesItem.scss';

const CaseStudiesItem = ({ path, title, img, subject }) => {
  return (
    <Link className="casestudiesItem" to={path}>
      <img src={img} alt="img" />
      <span>{subject}</span>
      <h4>{title}</h4>
    </Link>
  )
}

export default CaseStudiesItem;