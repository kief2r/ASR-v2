import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  const [formData, setFormData] = useState({
    file: null,
    lunchPeriods: [],
  });

  const navigate = useNavigate();

  const handleFileUpload = (e) => {
      setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleUpload = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxUpload = (e) => {
    const { checked, value } = e.target;
    setFormData({
      ...formData,
      lunchPeriods: checked 
        ? [...formData.lunchPeriods, value]
        : formData.lunchPeriods.filter((v) => v !== value),
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form data:', formData); // Example logging
    //navigate('/timetable');              // Navigate to timetable when submited
  };

  return (
    <main class="container">
      <h2 class="title">Upload Schedule</h2>
      <div class="form-container">
        <form id="upload-form" onSubmit={handleSubmit}>
        <div class="form-group">
                    <label for="file-upload" class="form-label">Upload Teacher Excel File:</label>
                    <input type="file" id="file-upload" name="file-upload" accept=".xlsx, .xls" class="form-input" onChange={handleFileUpload} required />
                </div>
                <div class="align-vertical">
                    <div class="Can-Not">
                        <label for="class1-dropdown" class="form-label">Class 1:</label>
                        <select id="class1-dropdown" name="class1-dropdown" class="form-input" onChange={handleUpload} required>
                            <option value="">Select Class</option>
                            <option value="class1A">Class 1A</option>
                            <option value="class1B">Class 1B</option>
                        </select>
                    </div>
                    <div class="Can-Not">
                        <label for="class2-dropdown" class="form-label">Cant conflict with :</label>
                        <select id="class2-dropdown" name="class2-dropdown" class="form-input" onChange={handleUpload} required>
                            <option value="">Select Class</option>
                            <option value="class2A">Class 2A</option>
                            <option value="class2B">Class 2B</option>
                        </select>
                    </div>
                </div>    
                <div class="Paramaters">
                    <div class="lunch">
                        <div class="Lunch-checkboxs">
                            <h3>Possible Lunch Periods:</h3>
                            <label for="Period1">
                                <input type="checkbox" id="Period1" name="lunch_periods" value="1" onChange={handleCheckboxUpload} />
                                Period: 1
                            </label>
                            <label for="Period2">
                                <input type="checkbox" id="Period2" name="lunch_periods" value="2" onChange={handleCheckboxUpload} />
                                Period: 2
                            </label>
                            <label for="Period3">
                                <input type="checkbox" id="Period3" name="lunch_periods" value="3" onChange={handleCheckboxUpload} />
                                Period: 3
                            </label>
                            <label for="Period4">
                                <input type="checkbox" id="Period4" name="lunch_periods" value="4" onChange={handleCheckboxUpload} />
                                Period: 4
                            </label>
                            <label for="Period5">
                                <input type="checkbox" id="Period5" name="lunch_periods" value="5" onChange={handleCheckboxUpload} />
                                Period: 5
                            </label>
                            <label for="Period6">
                                <input type="checkbox" id="Period6" name="lunch_periods" value="6" onChange={handleCheckboxUpload} />
                                Period: 6
                            </label>
                            <label for="Period7">
                                <input type="checkbox" id="Period7" name="lunch_periods" value="7" onChange={handleCheckboxUpload} />
                                Period: 7
                            </label>
                        </div>
                    </div>
                </div>
          <div className="form-submit">
            <button type="submit" className="submit-btn">
              Upload
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Home;