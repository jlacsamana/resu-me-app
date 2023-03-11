import './App.css';
import React, { useReducer, useState } from "react";

const defaultPage = (<div><p>send nudes</p></div>);
const PageContext = React.createContext(defaultPage);

function App() {
  const [currentPage, setPage] = useState(defaultPage);

  const reducer = (state, action) => {
    switch (action.type) {
      case "": {
        setPage(<></>);
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
			{currentPage}
		</PageContext.Provider>
	)
}

export default App;
