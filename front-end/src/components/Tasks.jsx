import React from 'react';
import { Collapsible, CollapsibleItem} from 'react-materialize'
// import TaskElement from './TaskElement';
import 'materialize-css';

// Possibly refactor to not use react-materialize but just use materialize css

const Tasks = ({taskList}) => {
  return (
    <div className='container'>
      
      <div className='tasks--subheader--container'>
          <h4 className='tasks--subheader'>Today's Tasks</h4>
          <div className='tasks--filter--container'>
              <div className='material-icons filter--icon'>filter_list</div>
          </div>    
      </div>
      
      <div className="tasks--container">
        <Collapsible popout defaultActiveKey={1}>
          {taskList.map((task, idx) => {
              return (
                <CollapsibleItem className={`task`} key={idx} header={task.title} icon="">
                  {task.description}    
                </CollapsibleItem>
              )
            })
          }
        </Collapsible>
      </div>

   </div>
  );
};

export default Tasks;

