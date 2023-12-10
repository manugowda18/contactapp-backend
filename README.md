# Contact App Backend

This is the backend server for a contact app, built with JavaScript, Express.js, Thunderbolt, MongoDB, and JWT token authentication.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB installed and running
- Thunderbolt CLI installed globally (`npm install -g thunderbolt-cli`)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/contact-app-backend.git

2. Navigate to the project directory:

   ```bash
   cd contactapp-backend

3. Install dependencies:

   ```bash
   npm install
4. API Endpoints<br/>

<li>POST /api/auth/register: Register a new user.<br/></li>
<li>POST /api/auth/login: Log in and receive a JWT token.<br/></li>
<li>GET /api/contacts: Get all contacts (requires authentication).<br/></li>
<li>POST /api/contacts: Add a new contact (requires authentication).<br/></li>
<li>PUT /api/contacts/:id: Update a contact (requires authentication).<br/></li>
<li>DELETE /api/contacts/:id: Delete a contact (requires authentication).<br/></li>

<br/><br/>
5. Set up environment variables:
Create a .env file in the root directory and add the following:
  ```bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017/contact_app
JWT_SECRET=your_jwt_secret
