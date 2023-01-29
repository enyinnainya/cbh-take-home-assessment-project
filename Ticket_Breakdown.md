# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1
#### Add the ability for Facilities to save their own custom ids for each Agent they work with:
- Update the current functionality that handles saving of Agents
- Add a new field in the Agents table called customId to hold the custom ID that the facilities will provide for each agent.
- If a custom ID is provided as part of the post data to create/edit an agent's account and this id is a valid id format according to the format of this custom ID, save this ID in the new customId field in the Agents table
- If no custom ID is provided in the post data to create/edit an agent, leave the customId field blank in the Agents table for that agent.
#### Acceptance Criteria:
Each Facility must be able to save a custom ID for agents without any issues
#### Time Estimate:
4 hours (4h)
###
### Ticket 2
#### Update the function getShiftsByFacility that gets shifts by facilities to pull custom IDs saved for agents in the Agents table:
- Update the current functionality that fetches shifts by facilities and the assigned agents.
- Pull in the new customId field that holds the custom iD for each agent as provided by the facilities as part of the fetch request.
- Return the fetched data
#### Acceptance Criteria:
The Fetched shifts data must include the custom ID for each assigned agent that is saved in the customId field of the Agents table by the facilities.
#### Time Estimate:
2 hours (2h)

### Ticket 3
#### Add the ability to pull in the agents' custom IDs provided by facilities when generating reports:
- Update the current functionality that generates report for each facility.
- For each assigned agent, if the customId field is not empty, use this customId as the ID for that agent for generating the report.
- If there is no saved customId for each agent, that is the customId field is blank, as a fallback, use the system generated ID for that agent.
#### Acceptance Criteria:
The generated report must include the agents' custom IDs as saved in the Agents table by the facilities OR a system generated ID for each agent that has no custom ID saved in their record.
#### Time Estimate:
3 hours (3h)
###
### Ticket 4
#### Run Tests to make sure these updates work as intended
- Run unit tests for each task to make sure it's working as intended.
- Run integration tests to make sure the three updates work well when integrated as a whole system.
- Run general test to make sure these updates did not break any existing functionality in the system prior to the updates.
