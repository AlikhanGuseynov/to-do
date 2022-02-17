import {Header} from "./components/header/header";
import {ToDoList} from "./pages/to-do-list/to-do-list";

function App() {
    return (
        <div className="App">
            <Header/>
            <ToDoList/>
        </div>
    );
}

export default App;
