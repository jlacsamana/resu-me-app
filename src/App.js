import './App.css';
import React, { useReducer, useState } from "react";
import { QuickApplier } from './pages/QuickApplier.js';
import { HomePage } from './pages/HomePage.js';
import { ResumeManager } from './pages/ResumeManager.js';
import { InterviewCalendar } from './pages/InterviewCalender.js';
import {User} from './pages/User.js';

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
      case "User" : {
        setPage(User);
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
