import React, { useState } from "react";
// import 'materialize-css';


module.exports = function Footer() {
  const [selectedState , setSelected] = useState('list')

  return (
    <div className='footer'>
      <div className="footer-container">
        <div onClick={() => setSelected('calendar')} className={`footer--icon__container ${selectedState === 'calendar' ? 'selected' : '' }`}>
          <div className="material-icons footer--icon">calendar_month</div>
        </div>

        <div onClick={() => setSelected('list')} className={`footer--icon__container ${selectedState === 'list' ? 'selected' : '' }`}>
          <div className="material-icons footer--icon">format_list_bulleted</div>
        </div>

        <div onClick={()=> setSelected('add')} className={`footer--add-btn ${selectedState === 'add' ? 'selected' : '' }`}>
          <div className="material-icons footer--add-btn__plus" children="add"/>
        </div>

        <div onClick={() => setSelected('clock')} className={`footer--icon__container ${selectedState === 'clock' ? 'selected' : '' }`}>
          <div className="material-icons footer--icon">schedule</div>
        </div>

        <div onClick={() => setSelected('journal')} className={`footer--icon__container ${selectedState === 'journal' ? 'selected' : '' }`}>
          <div className="material-icons footer--icon">menu_book</div>
        </div>
      </div>
    </div>
  )
};