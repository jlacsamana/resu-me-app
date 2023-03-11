import React, { createContext } from 'react'

const defaultPage = (<div>send nudes</div>);

export const ResumeContext = React.createContext(defaultPage);

export const Store = ({children}) => {
	const [currentPage, setPage] = useState(defaultPage);
  const [_, dispatch] = useReducer(reducer, currentPage);

  const reducer = (state, action) => {
    switch (action.type) {
      case "": {
        setPage(<></>);
      }
    }
    throw Error('Unknown action: ' + action.type);
  }

	const values = {
		switchPage: dispatch
	}


	return (
		<Context.Provider value={values}>
			{children}
		</Context.Provider>
	)
}

export default Store;