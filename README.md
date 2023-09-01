# Metro Full Finder 
###  Billing Data Management Web Application

Welcome to the **Metro Full Finder** project! This repository contains the source code and configuration files for a web application designed to manage billing data for customers. The application provides features to create, read, update, and delete customer records, utilizing various technologies such as Azure AD, React.js, Express.js, SQL, AWS EC2, and Docker Compose.

## Features

- **User Authentication**: Secure user authentication is implemented using Azure AD. Users can log in using their email accounts associated with the system.

- **Customer Data Management**: The application supports CRUD (Create, Read, Update, Delete) operations on customer billing data, providing efficient management of records.

- **Responsive User Interface**: The frontend is built with React.js, offering a responsive and intuitive user experience across different devices and screen sizes.

- **Backend Services**: The backend is powered by Express.js, a fast Node.js framework that handles data processing, authentication, and interacts with the SQL database.

- **Database Integration**: Customer billing data is securely stored in a SQL database, ensuring reliable data storage and retrieval.

- **Deployment with AWS EC2**: The application is deployed on AWS EC2 instances, providing scalability and availability for users.

- **Containerized Deployment**: Docker Compose is used to manage and run application components, simplifying deployment and maintenance.

## Setup and Deployment

1. **Clone the Repository**: Clone the project repository from GitHub.


2. **Azure AD Setup**: Configure Azure AD to enable OAuth authentication. Ensure that user email accounts match those in the SQL database.

3. **Database Setup**: Set up a SQL database with the required tables for storing customer billing data.

4. **Backend Configuration**:
- Configure the backend (Express.js) to connect to the SQL database.
- Implement CRUD APIs for customer data management.
- Integrate Azure AD authentication and authorization.

5. **Frontend Configuration**:
- Configure the frontend (React.js) to communicate with backend APIs.
- Develop user interface components for customer data management.

6. **AWS EC2 Deployment**:
- Set up an AWS EC2 instance.
- Install Docker and Docker Compose on the instance.
- Deploy the application using Docker Compose.



## Getting Help

If you encounter issues, have questions, or need assistance, please open an issue in the GitHub repository. We're here to help you make the most of the Metro Full Finder application.

## Conclusion

Metro Full Finder is a comprehensive solution for managing customer billing data, leveraging Azure AD, React.js, Express.js, SQL, AWS EC2, and Docker Compose. Whether you're streamlining business processes or learning from this project, we hope Metro Full Finder proves valuable.

Thank you for using Metro Full Finder! We appreciate your feedback and contributions to enhance this project.

