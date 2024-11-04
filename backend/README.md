# Smart Agriculture and Rural Marketplace System

## Overview
The Smart Agriculture and Rural Marketplace System is a web application built on the MERN (MongoDB, Express.js, React.js, Node.js) stack. The platform connects farmers and buyers, allowing them to trade agricultural crops, vegetables, and equipment online. Additionally, it incorporates machine learning for disease prediction and yield forecasting.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Models](#database-models)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used
- **Frontend:**
  - React.js
  - Redux (for state management)
  - Axios (for making API requests)
  - react-i18next (for internationalization)
  
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  - Bcrypt.js (for password hashing)
  - JSON Web Token (JWT) for authentication
  - dotenv (for environment variable management)

## Features
- User authentication (registration and login) for buyers, sellers, and admins.
- CRUD operations for products (adding, updating, deleting, and viewing).
- Order management system for tracking purchases.
- Machine learning integration for predicting crop diseases and yield.

## Installation

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB Atlas or local MongoDB setup.

### Steps to Set Up

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vinayRamola/Smart-Agriculture.git
   cd Smart-Agriculture
