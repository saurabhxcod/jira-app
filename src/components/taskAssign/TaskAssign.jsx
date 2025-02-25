import { useState } from "react";
import "./TaskAssign.styles.css";

export const TaskAssign = ({ team_list }) => {
    const [selectedTeam, setSelectedTeam] = useState("");
    const [employees, setEmployees] = useState([]); 


    const handleTeamChange = (event) => {
        const teamName = event.target.value;
        setSelectedTeam(teamName);

        const selectedTeamObj = team_list.find(team => team.team_name === teamName);
        setEmployees(selectedTeamObj ? selectedTeamObj.emp_data : []);
    };

    const assignTask = () => {
        // Task assignment logic
    };

    return (
        <div className="task-wrapper">
            <h2>Assign Task</h2>
            <div className="form-group">
                <div className="input-group">
                    <label>Enter Task Title</label>
                    <input type="text" placeholder="Enter Task Title" />
                </div>

                <div className="input-group">
                    <label>Enter Task Description</label>
                    <textarea placeholder="Enter task description" />
                </div>

                <div className="input-group">
                    <label>Select Team</label>
                    <select value={selectedTeam} onChange={handleTeamChange}>
                        <option value="">Select Team</option>
                        {team_list.map(team => (
                            <option key={team.team_id} value={team.team_name}>
                                {team.team_name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="input-group">
                    <label>Select Employee</label>
                    <select disabled={!selectedTeam}>
                        <option value="">Select Employee</option>
                        {employees.map(emp => (
                            <option key={emp.emp_id} value={emp.emp_name}>
                                {emp.emp_name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="btn-group">
                    <button onClick={assignTask}>Assign Task</button>
                </div>
            </div>
        </div>
    );
};
