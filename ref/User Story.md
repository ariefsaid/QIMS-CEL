# QIMS User Stories and Use Cases

## User Stories

### Management

1. As a manager, I want to view executive summaries of ongoing inspection projects so that I can quickly assess the overall status of our quality inspection activities.
2. As a manager, I want to access KPI dashboards so that I can monitor the performance of our inspection teams and projects.

### Admin

3. As an admin, I want to arrange accommodation and transportation for inspectors so that they can efficiently conduct on-site inspections.
4. As an admin, I want to manage user accounts and permissions so that I can ensure proper access control within the system.

### Project Manager

5. As a project manager, I want to assign inspectors to projects based on their qualifications and availability so that I can optimize resource allocation.
6. As a project manager, I want to request assets and materials for projects so that inspectors have the necessary tools to perform their tasks.
7. As a project manager, I want to view the status of all my assigned projects so that I can track progress and identify any issues.

### Inspector

8. As an inspector, I want to view my daily tasks and assigned inspections so that I can plan my work efficiently.
9. As an inspector, I want to input inspection data through mobile-friendly forms so that I can easily record findings on-site.
10. As an inspector, I want to upload photos and documents related to inspections so that I can provide comprehensive evidence for my reports.
11. As an inspector, I want to work offline when there's no internet connection so that I can continue my work in remote locations.

### Asset Admin

12. As an asset admin, I want to receive notifications of asset and material requests so that I can promptly allocate resources to projects.
13. As an asset admin, I want to update asset status in the ERP system based on QIMS data so that I can maintain accurate inventory records.

## Use Cases

### UC1: Conduct Field Inspection

**Primary Actor:** Inspector

**Preconditions:**
- Inspector is logged into the QIMS mobile app
- Inspector has been assigned to a project

**Main Flow:**
1. Inspector selects the assigned inspection task from their dashboard
2. System displays the inspection form with relevant project details
3. Inspector fills out the inspection form, including:
 - General information (date, time, location)
 - Specific inspection criteria based on project type
 - Photos of inspected items
 - Additional notes or observations
4. Inspector submits the completed form
5. System saves the inspection data (locally if offline)
6. System syncs the data with the central database when online

**Alternative Flows:**
- If offline, the system stores the data locally and syncs when an internet connection is available
- If the inspection cannot be completed, the inspector can save a partial form and complete it later

**Postconditions:**
- Inspection data is recorded in the system
- Project status is updated to reflect the completed inspection

### UC2: Allocate Resources to Project

**Primary Actor:** Project Manager

**Preconditions:**
- Project Manager is logged into the QIMS web interface
- A new project has been created in the system

**Main Flow:**
1. Project Manager navigates to the resource allocation section for the project
2. System displays available inspectors, assets, and materials
3. Project Manager selects required resources:
 - Assigns inspectors based on qualifications and availability
 - Requests necessary assets and materials
4. System checks for conflicts or unavailability
5. Project Manager confirms the allocation
6. System updates the project with allocated resources
7. System sends notifications to relevant parties (inspectors, asset admin)

**Alternative Flows:**
- If there are conflicts in resource allocation, the system alerts the Project Manager and suggests alternatives
- If required assets are unavailable, the system notifies the Asset Admin for procurement

**Postconditions:**
- Resources are allocated to the project
- Relevant parties are notified of their assignments

### UC3: Generate Inspection Report

**Primary Actor:** Project Manager

**Preconditions:**
- Inspections have been completed and data is in the system
- Project Manager is logged into the QIMS web interface

**Main Flow:**
1. Project Manager navigates to the reporting section
2. System displays a list of available report templates
3. Project Manager selects the desired report template
4. System populates the report with relevant inspection data
5. Project Manager reviews the generated report
6. Project Manager makes any necessary adjustments or additions
7. Project Manager finalizes and exports the report

**Alternative Flows:**
- If data is missing, the system alerts the Project Manager and suggests actions to complete the report
- If a custom report is needed, the Project Manager can select specific data points to include

**Postconditions:**
- A comprehensive inspection report is generated
- The report is available for export or sharing with clients

These user stories and use cases provide a foundation for understanding the key interactions and workflows within the QIMS. They can be used to guide development priorities and ensure that the system meets the needs of all user types.