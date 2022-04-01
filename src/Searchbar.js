import { useState } from "react";
import Animals from "./Animals";

function Searchbar() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function Type(event) {
        setTask(event.target.value);
    }

    function Click() {
        setTasks([task, ...tasks]);

        console.log(tasks);
    }
    return(
        <div className="bg-atomic-tangerine-500 flex float-right border-2 border-atomic-tangerine-500 rounded-2xl">
            <input type="text"
                   placeholder="Search Here!"
                   onChange={Type} className="rounded-2xl text-center p-1"/><br />


            <button onClick={Click} className="bg-powder-blue-500 hover:powder-blue-300 rounded-2xl border-l-2 border-atomic-tangerine-500">
                Search! =^.^=</button><br />
        </div>
    );
}

export default Searchbar;