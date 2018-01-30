
import React from 'react'
//

import logoImg from 'images/logo.png'
import './header.scss'

export default () => (
  <div className="header">
    <div className="header-hero" style={{ backgroundImage: `url(${logoImg})` }} />
  </div>
)

