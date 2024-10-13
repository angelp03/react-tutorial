import React, { useState, useEffect } from "react";
import './App.css';
import Banner from './components/Banner';
import { useJsonQuery } from "./utilities/fetch";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TermPage from "./components/TermPage";
import FormComponent from "./components/FormComponent";

const Main = ({setCourses}) => {
  const scheduleUrl = "https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php"
  const [data, isLoading, error] = useJsonQuery(scheduleUrl);

  useEffect(() => {
    if (data) {
      setCourses(data.courses);
    }
  }, [data, setCourses]);

  if (error) return <h1>Error loading schedule data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading schedule data...</h1>;
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
