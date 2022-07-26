import React from "react";
import { Collapsible, CollapsibleItem } from 'react-materialize'

module.exports = function TaskElement({title, description, idx}) {
  return (
    <div className={ `task ${idx % 2 === 0 ? '' : 'task-card-secondary'}` }>
      <Collapsible accordion defaultActiveKey={1}>
        <CollapsibleItem className={``} key={idx} header={title} icon="">
          {description}    
        </CollapsibleItem>
      </Collapsible>
    </div>
  )  
};

