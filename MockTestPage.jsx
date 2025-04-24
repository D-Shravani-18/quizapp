import React from 'react';
import './MockTestPage.css';

const MockTestPage = () => {
  return (
    <div className="container">
      {/* Header Navigation */}
      <nav className="navbar">
        <button>Home</button>
        <button>Exams</button>
        <button>Courses</button>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Image Section */}
        <div className="left-section">
          <img src="/mock-test-banner.png" alt="Mock Test Banner" className="promo-img" />
        </div>

        {/* Right Form Section */}
        <div className="form-section">
          <h2>MOCK TEST</h2>
          <form>
            <label>Select Exam: *</label>
            <select>
              <option>JEE Mains</option>
              <option>NEET UG</option>
            </select>

            <label>Select Mock Test Type: *</label>
            <select>
              <option>Select Mock Test Type</option>
            </select>

            <label>Select Mock Test: *</label>
            <select>
              <option>Select Mock Test</option>
            </select>

            <label>Student Name: *</label>
            <input type="text" placeholder="Enter Name" />

            <label>Contact Number: *</label>
            <input type="text" placeholder="Enter Mobile No" />

            <label>Email: *</label>
            <input type="email" placeholder="Enter Email" />

            <p className="mandatory-note">* All fields are mandatory</p>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div>
          <strong>eGRADTutor®</strong><br />
          <a href="#">Terms and Conditions</a><br />
          <a href="#">Privacy Policy</a><br />
          <a href="#">Pricing & Refund Policy</a>
        </div>
        <div>
          <p>📞 +91-7993270532</p>
          <p>✉️ contact@egradtutor.in</p>
        </div>
        <div>
          <strong>Contact Us</strong><br />
          eGRADTutor (GATETutor Academy)<br />
          R.K Nivas, 2nd Floor, Shivam Road,<br />
          New Nallakunta, Hyderabad - 500044.
        </div>
      </footer>
    </div>
  );
};

export default MockTestPage;
