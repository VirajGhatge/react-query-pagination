import "./App.css";
import Header from "./layout/header/Header";
import PaginatedList from "./screen/paginatedList/PaginatedList";

function App() {
  return (
    <>
      <div className="app-root">
        <Header title="User Directory" subTitle="Paginated userList"></Header>
        <main className="main">
          <PaginatedList />
        </main>
      </div>
    </>
  );
}

export default App;
