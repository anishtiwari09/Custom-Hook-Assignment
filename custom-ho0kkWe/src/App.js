import { useState } from "react";
import { Counter } from "./Counter.jsx/counter";
import useFetch from "./Hook/useFetch";
import useTimer from "./Hook/useTimer";
import "./styles.css";

export default function App() {
  const [value, startTimer, pauseTimer, resetTimer] = useTimer({
    initialState: 20
  });

  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch({
    url: "https://api.github.com/search/users?q=masai" + `&page=${page}`
  });

  return (
    <div className="App">
      <div>
        <h1>Custom Hook</h1>
        <h2>{value}</h2>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div>
        <h3>Use Fetch</h3>
        {loading && <h3>Loading ...</h3>}
        <div>
          {!loading && data?.items?.map((item) => <div>{item.login}</div>)}
        </div>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
      <Counter initailValue={30} />
    </div>
  );
}
