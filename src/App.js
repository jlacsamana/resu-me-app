import './App.css';
import React, { useReducer, useState } from "react";
import './pages/QuickApplier.js';
import { QuickApplier } from './pages/QuickApplier.js';
import { HomePage } from './pages/HomePage.js';
import { ResumeManager } from './pages/ResumeManager.js';
import { InterviewCalendar } from './pages/InterviewCalender.js';

const defaultPage = (HomePage);
export const PageContext = React.createContext(defaultPage);

function App() {
  const [currentPage, setPage] = useState(defaultPage);

  const reducer = (_, action) => {
    switch (action.type) {
      case "QuickApplier": {
        setPage(QuickApplier);
        break;
      }
      case "InterviewCalender": {
        setPage(InterviewCalendar);
        break;
      }
      case "ResumeManager": {
        setPage(ResumeManager);
        break;
      }
      case "HomePage": {
        setPage(HomePage);
        break;
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

  const [, dispatch] = useReducer(reducer, currentPage);

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
