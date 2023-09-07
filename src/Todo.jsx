export default function Todo({task, isDone}){
    if(isDone){
        return <li>Finished: {task}</li>
    }
    return <li>Do that: {task}</li>
}