import React, { useState, useEffect } from "react";
import './App.css';
import Banner from './components/Banner';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TermPage from "./components/TermPage";
import FormComponent from "./components/FormComponent";
import { useDbData } from "./utilities/firebase";

const Main = ({setCourses}) => {
  const [data, error] = useDbData("/")

  useEffect(() => {
    if (data) {
      setCourses(data.courses);
    }
  }, [data, setCourses]);

  if (error) return <h1>Error loading schedule data: {`${error}`}</h1>;
  if (!data) return <h1>No schedule data found</h1>;
  return (
    <div className="main-content App">
      <Banner title={data.title} />
      <TermPage courses={data.courses}/>
    </div>
  );
};

const queryClient = new QueryClient();

const App = () => {
  const [courses, setCourses] = useState(null)
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Main setCourses={setCourses}/>}/>
          <Route path="/edit/:id" element={<FormComponent courses={courses}/>}/>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
