import React from "react";
import { Button } from 'react-materialize';

//add styles.module.css to make add button plus sign bigger

function AddButton() {
  return (
    <Button floating className="material-icons" children="add" waves='light'/>
  )
}

module.exports = AddButton 