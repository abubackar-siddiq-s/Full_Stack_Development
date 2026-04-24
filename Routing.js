import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
    <nav style={{textAlign: "center"}}>
      <h1>Codetantra</h1>
      <p>Welcome to the Codetantra Home Page</p><br />
      <Link to="/timetable">View Classes/Meetings</Link><br /><br />
      <Link to="/course">Courses</Link><br /><br />
      <Link to="/test">Tests</Link><br /><br />
      <Link to="/lab">Labs</Link><br /><br />
      <Link to="/tools">Tools</Link><br /><br />
      <a href="https://kongu.codetantra.com/contact-us.jsp" target="_blank">Help & Support</a><br /><br />
      </nav>
    </>
  );
}

function Timetable() {
  return (
    <>
      <h1>Timetable</h1>
      <p>This is the Timetable page.</p>
      <Link to="/">Home</Link><br />
    </>
  );
}

function Course() {
  return (
    <>
      <h1>Courses</h1>
      <p>This is the courses page.</p>
      <Link to="/">Home</Link><br />
    </>
  );
}

function Test() {
  return (
    <>
      <h1>Test</h1>
      <p>This is the Test page.</p>
      <Link to="/">Home</Link><br />
    </>
  );
}

function Lab() {
  return (
    <>
      <h1>Lab</h1>
      <p>This is the Lab page.</p>
      <Link to="/">Home</Link><br />
    </>
  );
}

function Tools() {
  return (
    <>
      <h1>Tools</h1>
      <p>This is the Tools page.</p>
      <Link to="/">Home</Link><br />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/course" element={<Course />} />
        <Route path="/test" element={<Test />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </div>
  );
}

export default App;