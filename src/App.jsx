import React from "react";
import './App.css';
import Banner from './components/Banner';
import { useJsonQuery } from "./utilities/fetch";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import TermPage from "./components/TermPage";

const Main = () => {
  const scheduleUrl = "https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php"
  const [data, isLoading, error] = useJsonQuery(scheduleUrl);

  if (error) return <h1>Error loading schedule data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading schedule data...</h1>;
  if (!data) return <h1>No schedule data found</h1>;

  return (
    <div className="main-content">
      <Banner title={data.title} />
      <TermPage courses={data.courses}/>
    </div>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="App">
      <Main />
    </div>
  </QueryClientProvider>
);

export default App;
