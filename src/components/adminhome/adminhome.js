// AdminHome.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { utils, writeFile } from 'xlsx';
import { useNavigate } from 'react-router-dom';
import './adminhome.css';

function AdminHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [page, setPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [aywiseReport, setAywiseReport] = useState([]);
  const [summaryReport, setSummaryReport] = useState([]);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    if (page === 'aywise-report') fetchAywiseReport();
    if (page === 'summary-report') fetchSummaryReport();
  }, [page]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigation = (page) => {
    setPage(page);
    setSidebarOpen(false);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleLogout = () => {
   
    navigate('/login'); // Redirect to login page
  };

  

  const handleSearch = async () => {
    try {
      const fetchURL = ""
      const params = {}
      const response = await axios.get(`/api/search?rollId=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const fetchAywiseReport = async () => {
    try {
      const response = await axios.get('/api/aywise-report');
      setAywiseReport(response.data);
    } catch (error) {
      console.error('Error fetching AY-wise report:', error);
    }
  };

  const fetchSummaryReport = async () => {
    try {
      const response = await axios.get('/api/summary-report');
      setSummaryReport(response.data);
    } catch (error) {
      console.error('Error fetching summary report:', error);
    }
  };

  const handleColumnChange = (selectedOptions) => {
    setSelectedColumns(selectedOptions.map(option => option.value));
  };

  const exportPDF = (reportType) => {
    const doc = new jsPDF();
    const columns = ['S.No', ...selectedColumns];
    const data = (reportType === 'aywise' ? aywiseReport : summaryReport).map((report, index) => {
      const row = { s_no: index + 1 };
      selectedColumns.forEach(col => row[col] = report[col]);
      return row;
    });
    doc.autoTable({
      head: [columns],
      body: data.map(row => columns.map(col => row[col])),
    });
    doc.save(`${reportType}-report.pdf`);
  };

  const exportExcel = (reportType) => {
    const data = (reportType === 'aywise' ? aywiseReport : summaryReport).map((report, index) => {
      const row = { 'S.No': index + 1 };
      selectedColumns.forEach(col => row[columnsOptions[reportType].find(option => option.value === col).label] = report[col]);
      return row;
    });
    const ws = utils.json_to_sheet(data);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Report');
    writeFile(wb, `${reportType}-report.xlsx`);
  };

  const columnsOptions = {
    'aywise-report': [
      { value: 'faculty_name', label: 'Name of the Faculty' },
      { value: 'program_name', label: 'Name of the Program' },
      { value: 'domain', label: 'Domain' },
      { value: 'dates', label: 'Dates' },
      { value: 'venue', label: 'Venue & Organised By' },
      { value: 'marks', label: 'Marks' },
    ],
    'summary-report': [
      { value: 'faculty_name', label: 'Name of the Faculty' },
      { value: 'AY_17_18', label: 'AY-17-18' },
      { value: 'AY_18_19', label: 'AY-18-19' },
      { value: 'AY_19_20', label: 'AY-19-20' },
      { value: 'AY_20_21', label: 'AY-20-21' },
      { value: 'AY_21_22', label: 'AY-21-22' },
      { value: 'AY_22_23', label: 'AY-22-23' },
    ],
  };

  return (
    <div className="adminhome">
      
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="sidebar-btn" onClick={() => handleNavigation('home')}>Home</button>
        <button className="sidebar-btn" onClick={() => handleNavigation('aywise-report')}>AY-wise Report</button>
        <button className="sidebar-btn" onClick={() => handleNavigation('summary-report')}>Summary Report</button>
      </div>

      <div className={`overlay ${sidebarOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>

      {page === 'home' && (
        <div className="content">
          <h1 className="title">Lecture Progress</h1>
          ...
          <div className="search-container">
            <input
              type="text"
              placeholder="Enter Roll ID"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button className="search-btn" onClick={handleSearch}>Search</button>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Venue</th>
                <th>Domain</th>
                <th>Year</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((result, index) => (
                <tr key={index}>
                  <td>{result.name}</td>
                  <td>{result.program}</td>
                  <td>{result.date}</td>
                  <td>{result.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {page === 'aywise-report' && (
        <div className="content">
          <h1 className="title">AY-wise Report</h1>
          <Select
            isMulti
            options={columnsOptions['aywise-report']}
            onChange={handleColumnChange}
            placeholder="Select columns to display"
            className="column-filter"
          />
          <button onClick={() => exportPDF('aywise')} className="download-btn">Download as PDF</button>
          <button onClick={() => exportExcel('aywise')} className="download-btn">Download as Excel</button>
          <table id="aywise-table" className="data-table">
            <thead>
              <tr>
                <th>S.No</th>
                {selectedColumns.map(col => {
                  const option = columnsOptions['aywise-report'].find(option => option.value === col);
                  return option ? <th key={col}>{option.label}</th> : null;
                })}
              </tr>
            </thead>
            <tbody>
              {aywiseReport.map((report, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  {selectedColumns.map(col => (
                    <td key={col}>{report[col]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {page === 'summary-report' && (
        <div className="content">
          <h1 className="title">Summary Report</h1>
          <Select
            isMulti
            options={columnsOptions['summary-report']}
            onChange={handleColumnChange}
            placeholder="Select columns to display"
            className="column-filter"
          />
          <button onClick={() => exportPDF('summary')} className="download-btn">Download as PDF</button>
          <button onClick={() => exportExcel('summary')} className="download-btn">Download as Excel</button>
          <table id="summary-table" className="data-table">
            <thead>
              <tr>
                <th>S.No</th>
                {selectedColumns.map(col => {
                  const option = columnsOptions['summary-report'].find(option => option.value === col);
                  return option ? <th key={col}>{option.label}</th> : null;
                })}
              </tr>
            </thead>
            <tbody>
              {summaryReport.map((report, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  {selectedColumns.map(col => (
                    <td key={col}>{report[col]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminHome;

