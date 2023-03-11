import './App.css';
import React, { useReducer, useState } from "react";
import './QuickApplier.js';
import { QuickApplier } from './QuickApplier.js';
import { HomePage } from './HomePage.js';
import { ResumeManager } from './ResumeManager.js';
import { InterviewCalendar } from './InterviewCalender.js';
import {User} from './User.js';

const defaultPage = (
  HomePage);
const PageContext = React.createContext(defaultPage);

function App() {
  const [currentPage, setPage] = useState(defaultPage);

  const reducer = (state, action) => {
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

  const [_, dispatch] = useReducer(reducer, currentPage);

  const values = {
    switchPage: dispatch
  }


  return (
    <PageContext.Provider value={values}>
      <button onClick={() => {
        dispatch({ type: 'QuickApplier' })
      }}>QuickApplier</button>
      <button onClick={() => {
        dispatch({ type: 'InterviewCalender' })
      }}>InterviewCalendar</button>
      <button onClick={() => {
        dispatch({ type: 'ResumeManager' })
      }}>Resume Manager</button>
      <button onClick={() => {
        dispatch({ type: 'HomePage' })
      }}>Home</button>

      {currentPage}
    </PageContext.Provider>

  )
}

export default App;
