import './App.css';
import React, { useReducer, useState } from "react";
import './QuickApplier.js';
import { QuickApplier } from './QuickApplier.js';

const defaultPage = (<div>
</div>);
const PageContext = React.createContext(defaultPage);

function App() {
  const [currentPage, setPage] = useState(defaultPage);

  const reducer = (state, action) => {
    switch (action.type) {
      case "QuickApplier": {
        setPage(<><p>PORNHUB</p></>);
        break;
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

  const [_, dispatch] = useReducer(reducer, currentPage);

  const values = {
    switchPage: dispatch
  }


  return (
    <PageContext.Provider value={values}>
      <div>
        <button onClick={() => {
          dispatch({ type: 'QuickApplier' })
        }}>QuickApplier</button>

        <button onClick={() => {

        }}>InterviewCalendar</button>
        <button onClick={() => {

        }}>Resume Manager</button>
        <button onClick={() => {

        }}>Home</button>


      </div>
    </PageContext.Provider>
  )
}

export default App;
