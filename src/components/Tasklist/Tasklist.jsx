import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompletedTask from './CompletedTask';
import FailedTask from './FailedTask';

const Tasklist = ({data}) => {
  return (
    
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full   mt-10 flex items-center justify-start gap-5 px-5 flex-nowwrap'>
        {data.tasks.map((e,idx)=>{
            if(e.active){
                return <AcceptTask key={idx} data={e}/>
            }
            if(e.newtask){
                return <NewTask key={idx} data={e}/>
            }
            if(e.completed){
                return <CompletedTask key={idx} data={e}/>
            }
            if(e.failed){
                return <FailedTask key={idx} data={e}/>
            }
            

        })}
        

        </div>
  )   
}
         



         
      
      
    
 


export default Tasklist;
