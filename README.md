### README for Social Media App

---

# **Social Media App**

A simple social media platform where users can:
- Register an account with their name and profile photo.
- Authenticate using secure login and logout features.
- Create and share posts (text and photos).
- Follow other users.
- Like and comment on posts.
- View a personalized timeline of posts from followed users.

---

## **Tech Stack**
- **Frontend**: React, Vite
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize

---

## **Features**
- **User Management**: 
  - Registration and authentication with secure password handling.
  - Profile creation with name and profile photo upload.
- **Social Features**:
  - Follow and unfollow users.
  - Like and comment on posts.
- **Post Management**:
  - Create and share text or photo posts.
  - View a timeline of posts from users you follow.
  
---

## **Getting Started**

### **Prerequisites**
- Node.js (v16 or higher)
- PostgreSQL (v13 or higher)
- A code editor (e.g., VSCode)

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/keystrok3/Cirql.git
   cd social-media-app
   ```

2. Navigate to the backend folder and install dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Navigate to the frontend folder and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up the `.env` file in the `backend` directory with the following variables:
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASS=your_database_password
   DB_NAME=your_database_name
   JWT_SECRET=your_jwt_secret
   ```

5. Start the backend server:
   ```bash
   cd ../backend
   npm run dev
   ```

6. Start the frontend server:
   ```bash
   cd ../frontend
   npm run dev
   ```

7. Open your browser and navigate to `http://localhost:5173`.

---

## **Contributing**
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "feat: add feature name"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---

## **Contact**
For any questions or feedback, please email: `jwalutsachi4@gmail.com.com`.