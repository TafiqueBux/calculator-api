<<<<<<< HEAD
# 🧮 Calculator API

A simple and clean **REST API** built with **Node.js + Express** that performs basic arithmetic operations. Includes a **Postman Collection** and **Environment** file for easy testing.

---

## 🚀 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Testing:** Postman

---

## 📁 Project Structure

```
calculator-api/
├── server.js                                      # Main API server
├── package.json                                   # Project dependencies
├── Calculator project.postman_collection.json     # Postman test collection
├── Calculator_Environment.postman_environment.json # Postman environment
└── README.md                                      # Project documentation
```

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine
- [Postman](https://www.postman.com/downloads/) for API testing

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/calculator-api.git

# 2. Navigate into the project folder
cd calculator-api

# 3. Install dependencies
npm install

# 4. Start the server
npm start
```

The server will start at:
```
http://localhost:3000
```

---

## 📡 API Endpoints

| Method | Endpoint      | Description        | Body Example          |
|--------|---------------|--------------------|-----------------------|
| GET    | `/`           | Health check       | —                     |
| POST   | `/add`        | Addition           | `{ "a": 10, "b": 5 }` |
| POST   | `/subtract`   | Subtraction        | `{ "a": 10, "b": 3 }` |
| POST   | `/multiply`   | Multiplication     | `{ "a": 6, "b": 7 }`  |
| POST   | `/divide`     | Division           | `{ "a": 20, "b": 4 }` |

### Sample Request (Addition)
```json
POST http://localhost:3000/add
Content-Type: application/json

{
  "a": 10,
  "b": 5
}
```

### Sample Response
```json
{
  "operation": "addition",
  "a": 10,
  "b": 5,
  "result": 15
}
```

### Error Response (Divide by Zero)
```json
{
  "error": "Cannot divide by zero"
}
```

---

## 🧪 Testing with Postman

1. Open **Postman**
2. Click **Import** → select `Calculator project.postman_collection.json`
3. Click **Import** again → select `Calculator_Environment.postman_environment.json`
4. Select **Calculator_Environment** from the top-right environment dropdown
5. Make sure the server is running (`npm start`)
6. Click **Run Collection** to execute all test cases

---

## 👤 Author

**Tafique**  
GitHub: [@your-username](https://github.com/your-username)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
=======
# calculator-api
>>>>>>> 47fe4d4f33e3a9f587364ba91b6b05590b20cac2
