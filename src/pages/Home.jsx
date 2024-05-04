import TodoComponent from "../components/TodoComponent";
import TodoCard from "../components/TodoCard";

export default function Home() {

    return (
        <div className="section">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-half">
                        <h1 className='title is-1'>ToDo List</h1>
                        <TodoComponent/>
                    </div>
                </div>
            </div>
        </div>
    );
}
