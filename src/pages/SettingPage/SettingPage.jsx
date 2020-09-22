import React from "react"
import { Link } from 'react-router-dom';
import './SettingPage.css'

const SettingPage = (props) => {
  return (
    <div>
      <Link className='home-link btn btn-default' to='/'>Home</Link>

      <h1>Setting Page</h1>
      <p>
        {props.match.params.id}
      </p>
    </div>
  )
}

export default SettingPage;