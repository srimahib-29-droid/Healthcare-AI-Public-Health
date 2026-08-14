Healthcare AI – Smart Healthcare Management System

Project Overview

Healthcare AI – Smart Healthcare Management System is an integrated healthcare platform designed to improve patient and healthcare-service management using web technologies, backend services, artificial intelligence, data analytics, and workflow automation.

The project combines:

Frontend Healthcare Website

Backend API and Database

AI Chatbot

Power BI Dashboard

n8n Workflow Automation


The system helps patients access healthcare services, book appointments, communicate with the system through an AI chatbot, analyze healthcare data, and receive automated notifications and reminders.


---

Objectives

The main objectives of the project are:

1. Provide a user-friendly healthcare website.


2. Allow patients to view healthcare services and doctors.


3. Provide an online appointment booking system.


4. Provide an AI-powered chatbot for healthcare-related assistance.


5. Store and manage healthcare data through a backend system.


6. Analyze healthcare and appointment data using Power BI.


7. Automate healthcare-related tasks using n8n.


8. Send automated appointment confirmation emails.


9. Send appointment reminders.


10. Send medicine reminders.


11. Collect feedback after consultation.


12. Notify administrators about new appointments.




---

Project Components

1. Frontend

The frontend provides the user interface for the healthcare platform.

Technologies Used

HTML5

CSS3

JavaScript

Responsive Web Design


Frontend Pages

Home Page

About Page

Doctors Page

Services Page

Appointment Page

Contact Page

AI Chatbot Page

Power BI Dashboard Page


Main Frontend Files

index.html
about.html
doctors.html
services.html
appointment.html
contact.html
chatbot.html
powerbi.html
style.css
script.js


---

2. Backend

The backend manages application data and provides APIs for the healthcare system.

Technologies Used

Node.js

Express.js

JavaScript

REST API

Database


Backend Structure

backend/
│
├── config/
├── images/
├── models/
├── routes/
├── package.json
├── package-lock.json
└── server.js

Backend Responsibilities

Manage healthcare-related data

Handle appointment requests

Provide API endpoints

Connect the frontend with backend services

Manage application requests and responses



---

3. AI Chatbot

The project includes an AI-powered chatbot to provide users with healthcare-related assistance.

Features

Accepts user questions

Generates AI-based responses

Provides basic healthcare information

Provides an interactive conversational interface

Can be accessed through the healthcare website


Technologies Used

HTML

CSS

JavaScript

Generative AI


Chatbot Files

chatbot.html
chatbot.css
chatbot.js


---

4. Power BI Dashboard

Power BI is used for healthcare data analysis and visualization.

Purpose

The dashboard helps analyze patient appointment and healthcare-related data and presents the results through interactive visualizations.

Dashboard Features

Patient/appointment data analysis

Appointment statistics

Data visualization

Charts and graphs

KPI cards

Interactive filtering

Slicers

Domain-relevant healthcare insights


Power BI Components

Dataset

Data cleaning

Data transformation

Visualizations

KPI cards

Slicers

Dashboard/report


Example Visualizations

Appointment count

Appointment status analysis

Patient-related statistics

Doctor/department analysis

Date-based appointment trends

Interactive slicers


The Power BI dashboard can be accessed through the project's Power BI page.


---

5. n8n Workflow Automation

n8n is used to automate healthcare appointment-related processes.

Technologies Used

n8n

Google Sheets

Gmail

Google Gemini / AI Agent

Schedule Trigger

Webhook

Simple Memory


Completed Workflows

Workflow 1 – Appointment Booking

Webhook
   ↓
Google Sheets
   ↓
AI Agent
   ↓
Gmail – Appointment Confirmation
   ↓
Respond to Webhook

Purpose:

Receive appointment information

Store appointment details

Process the information using AI

Send appointment confirmation email

Return a response to the user



---

Workflow 2 – Appointment Reminder

Schedule Trigger
   ↓
Get Rows from Google Sheets
   ↓
AI Agent
   ↓
Gmail – Send Reminder

Purpose:

Run automatically according to a schedule

Read appointment information from Google Sheets

Generate reminder content

Send appointment reminder emails



---

Workflow 3 – Medicine Reminder

Purpose:

Automate medicine reminder notifications

Use scheduled automation

Retrieve relevant information

Send reminder messages to users



---

Workflow 4 – Feedback Form After Consultation

Purpose:

Send a feedback request after consultation

Collect patient feedback

Automate the post-consultation feedback process



---

Workflow 5 – Admin Notification for New Appointments

Purpose:

Detect new appointment information

Automatically notify the administrator

Improve appointment management


n8n Workflow Files

Appointment Booking.json
Appointment Remainder.json
Medicine Remainder.json
feedback form after consultation.json
Admin notification for new.json

n8n Benefits

Reduces manual work

Automates repetitive healthcare tasks

Provides timely notifications

Improves appointment management

Connects different services such as Google Sheets, Gmail and AI



---

6. Data Management

Google Sheets is used in the automation workflows for storing and retrieving appointment-related information.

The data can include fields such as:

Name
Email
Mobile
Doctor
Date
Time
Appointment Details

The exact fields depend on the corresponding workflow.


---

7. System Workflow

The overall system combines all major components:

Healthcare AI System
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
    Frontend             Backend            AI Chatbot
        │                   │                   │
        └───────────────────┼───────────────────┘
                            │
                     Healthcare Data
                            │
              ┌─────────────┴─────────────┐
              │                           │
          Power BI                       n8n
       Data Analysis              Workflow Automation
              │                           │
       Dashboards                 Notifications
       Charts & KPIs              Reminders
                                  Feedback
                                  Admin Alerts


---

8. Technologies Used

Component	Technologies

Frontend	HTML5, CSS3, JavaScript
Backend	Node.js, Express.js
AI	Generative AI / Google Gemini
Database/Data	Google Sheets / Project Database
Analytics	Microsoft Power BI
Automation	n8n
Email	Gmail
Version Control	GitHub
Deployment	Netlify / applicable hosting



---

9. Repository Structure

Healthcare-AI-Public-Health/
│
├── backend/
│   ├── config/
│   ├── images/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── index.html
├── about.html
├── appointment.html
├── chatbot.html
├── contact.html
├── doctors.html
├── powerbi.html
├── services.html
├── script.js
├── style.css
│
├── n8n-workflows/
│   ├── Appointment Booking.json
│   ├── Appointment Remainder.json
│   ├── Medicine Remainder.json
│   ├── feedback form after consultation.json
│   └── Admin notification for new.json
│
└── README.md


---

10. Installation and Setup

Frontend

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Open the project folder and run the frontend using a local development server such as VS Code Live Server.


---

Backend

Navigate to the backend folder:

cd backend

Install dependencies:

npm install

Start the server:

node server.js


---

n8n

1. Open n8n.


2. Import the provided .json workflow files.


3. Configure the required credentials.


4. Connect Google Sheets/Gmail/AI services where required.


5. Test each workflow.


6. Activate the workflows when ready.



Important: API keys, passwords, tokens, and private credentials are not included in the GitHub repository.


---

11. Power BI Setup

1. Open Power BI Desktop.


2. Import the healthcare dataset.


3. Clean and transform the data.


4. Create required calculations.


5. Create charts and KPI cards.


6. Add slicers for interactive filtering.


7. Build the healthcare dashboard.


8. Publish the report if required.


9. Add the Power BI report/dashboard to the project page where applicable.




---

12. Project Features

Healthcare information website

Doctor and service information

Online appointment system

AI chatbot

Backend API

Healthcare data management

Power BI analytics dashboard

Interactive charts and slicers

Automated appointment confirmation

Automated appointment reminders

Medicine reminders

Consultation feedback automation

Admin appointment notifications

GitHub source-code repository



---

13. Expected Benefits

The system helps:

Improve patient convenience

Reduce manual appointment management

Provide faster access to healthcare information

Automate repetitive tasks

Improve communication between patients and healthcare administrators

Provide data-driven healthcare insights

Centralize healthcare-related services in one platform



---

14. Repository

GitHub Repository:
https://github.com/srimahib-29-droid/Healthcare-AI-Public-Health




---

15. Live Demo

Frontend:

https://healthcare-ai-publichealth.netlify.app/
Power BI Dashboard:

https://app.powerbi.com/links/xei5VISvwo?ctid=dd2561fb-5505-4dec-ab04-5fabba24a3df&pbi_source=linkShare
n8n workflows:

Configured and demonstrated through n8n


---

16. Screenshots

The repository includes screenshots of the completed n8n workflows and can also include screenshots of:

Healthcare website

Appointment page

AI chatbot

Backend/API

Power BI dashboard

n8n workflows



---

17. Future Enhancements

Possible future improvements include:

Patient login and authentication

Online doctor consultation

More advanced AI healthcare assistance

Mobile application

Real-time notifications

Advanced healthcare analytics

Integration with additional healthcare services



---

18. Conclusion

Healthcare AI – Smart Healthcare Management System integrates a healthcare website, backend services, AI assistance, Power BI analytics, and n8n workflow automation into a single platform.

The project demonstrates how modern web technologies, artificial intelligence, data visualization, and automation can be combined to create an efficient and user-friendly healthcare management solution.
