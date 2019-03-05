import React from 'react';
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <div className="fixed-action-btn">
            <Link to="/surveys/new" className="waves-effect waves-light btn-large red"><i className="material-icons right">list</i>Create Survey</Link>
            </div>
        </div>
    );
};

export default Dashboard;
