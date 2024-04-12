import React from 'react'
import './cards.css'

function Cards() {
  return (
    <div className="cards-bg">
      <div className='card-one'>
        <p className='free-text text-center'>FREE</p>
        <h1>$0/month</h1>
        <hr />
        <ul>
          <li className='tick'>Single User</li>
          <li className='tick'>50GB Storage</li>
          <li className='tick'>Unlimited Public Projects</li>
          <li className='tick'>Community Access</li>
          <li className='opa opacity-50'>Unlimited Private Projects</li>
          <li className='opa opacity-50'>Dedicated Phone Support</li>
          <li className='opa opacity-50'>Free Subdomain</li>
          <li className='opa opacity-50'>Monthly Status Report</li>
        </ul>
        <button className='btn btn-primary w-100'>BUTTON</button>
      </div>

      <div className='card-one'>
        <p className='free-text text-center'>PLUS</p>
        <h1>$9/month</h1>
        <hr />
        <ul>
          <li className='tick'>Single User</li>
          <li className='tick'>50GB Storage</li>
          <li className='tick'>Unlimited Public Projects</li>
          <li className='tick'>Community Access</li>
          <li className='tick'>Unlimited Private Projects</li>
          <li className='tick'>Dedicated Phone Support</li>
          <li className='tick'>Free Subdomain</li>
          <li className='opa opacity-50'>Monthly Status Report</li>
        </ul>
        <button className='btn btn-primary w-100'>BUTTON</button>
      </div>

      <div className='card-one'>
        <p className='free-text text-center'>PRO</p>
        <h1>$49/month</h1>
        <hr />
        <ul>
          <li className='tick'>Single User</li>
          <li className='tick'>50GB Storage</li>
          <li className='tick'>Unlimited Public Projects</li>
          <li className='tick'>Community Access</li>
          <li className='tick'>Unlimited Private Projects</li>
          <li className='tick'>Dedicated Phone Support</li>
          <li className='tick'>Free Subdomain</li>
          <li className='tick'>Monthly Status Report</li>
        </ul>
        <button className='btn btn-primary w-100'>BUTTON</button>
      </div>
    </div>
  )
}

export default Cards