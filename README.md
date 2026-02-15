🛒 CloudShop: A Decoupled Microservices E-Commerce Project
This project is a high-performance, distributed e-commerce backend and frontend designed to demonstrate cloud-native development practices. It utilizes a decoupled microservices architecture to ensure scalability and independent deployment of business domains.

🏗️ System Architecture
The application is split into three core components that operate independently:

Product Service: Manages the inventory and product catalog, running on port 8080.

Order Service: Handles customer order history and transactions, running on port 8081.

Frontend Dashboard: A React-based interface that aggregates data from both services, running on port 3000.

🛠️ Tech Stack
Backend: Java 17, Spring Boot 3.x

Frontend: React, Axios (for API communication)

Build Tool: Maven

Styling: Lucide-React (Icons), Modern CSS/Tailwind logic

Cloud (Planned): AWS (Amplify, Elastic Beanstalk, DynamoDB)

🔌 Communication & Security
REST APIs: All services communicate via lightweight RESTful endpoints.

CORS Management: The backend services utilize Cross-Origin Resource Sharing (CORS) to securely allow the React frontend to fetch data from different local ports (8080 and 8081).

Decoupling: Each microservice has its own logic and database configuration, ensuring that a failure in the Order service does not affect the Product Catalog.

🚀 How to Run Locally
Clone the Repository

Start Product Service: Run ProductServiceApplication in your IDE or use mvn spring-boot:run in the /product-service folder.

Start Order Service: Run OrderServiceApplication in your IDE or use mvn spring-boot:run in the /order-service folder.

Launch Frontend:
        cd frontend
        npm install
        npm start
