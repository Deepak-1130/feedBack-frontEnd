import React from "react";
import "../StyleSheets/CompanyDashboard.css";

const CompanyCard = ({ company }) => {


    return (

                 <div className="card" key={company.companyId}>
            <div className="card-header">
              <div className="logo-section">
                <img
                  src={`http://localhost:8080/uploads/${company.companyName}.jpg`}
                  alt={company.companyName}
                  className="company-logo"
                />
              </div>
              <span className="category-tag">IT</span>
            </div>

            <h3 className="company-name">{company.companyName}</h3>

            <div className="key-info">
              <div className="info-label">Key Info</div>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-title">CTC</span>
                  <span className="info-value">{company.lastHighestPackage} LPA</span>
                </div>
                <div className="info-item">
                  <span className="info-title">Location</span>
                  <span className="info-value">{company.location}</span>
                </div>
                <div className="info-item">
                  <span className="info-title">Branch</span>
                  <span className="info-value">{company.branch}</span>
                </div>
              </div>
            </div>

            <button className="view-btn">View Details</button>
          </div>
        



    )
}
export default CompanyCard;