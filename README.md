Вот как можно обновить README файл, чтобы включить инструкции по тестированию с использованием Postman, основываясь на предоставленных вами примерах запросов и ответов.

---

# Bookstore Microservices

## Description

This project is a microservices application for managing a bookstore. It includes the following microservices:
- **book-service** - for managing books
- **order-service** - for managing orders
- **gateway-service** - an API gateway for interacting with other microservices

## Requirements

- Docker
- Docker Compose
- Postman (for testing)

## Installation

1. **Clone the repository:**

   ```bash
   git clone <git@github.com:Avetiq30/microservices.git>
   cd <microservices>
   ```

2. **Create a `.env` file in the root of the project for `book-service` and `order-service`:**

   Create a `.env` file in the root directory of the project with the following content:

   ```env
   DATABASE_HOST=book-db
   DATABASE_PORT=5432
   DATABASE_USER=book
   DATABASE_PASSWORD=password
   DATABASE_NAME=book_db
   ```

   Also, create a `.env` file in the `order-service` directory (or use a common `.env` file if it is read globally) with the following content:

   ```env
   DATABASE_HOST=order-db
   DATABASE_PORT=5432
   DATABASE_USER=order
   DATABASE_PASSWORD=password
   DATABASE_NAME=order_db
   ```

3. **Create a `.env` file in the `gateway` directory for `gateway-service`:**

   In the `gateway` directory, create a `.env` file with the following content:

   ```env
   BOOK_SERVICE_URL=http://book-service:4000
   ORDER_SERVICE_URL=http://order-service:4001
   ```

4. **Start Docker Compose:**

   ```bash
   docker-compose up --build
   ```

   The `--build` flag will rebuild the images if there are changes to the Dockerfile.

## Project Structure

- **docker-compose.yml** - Docker Compose configuration file
- **book-service/** - Microservice for managing books
    - `src/` - Source code of the microservice
    - `Dockerfile` - Dockerfile for building the Docker image
- **order-service/** - Microservice for managing orders
    - `src/` - Source code of the microservice
    - `Dockerfile` - Dockerfile for building the Docker image
- **gateway/** - API gateway for interacting with other microservices
    - `src/` - Source code of the microservice
    - `Dockerfile` - Dockerfile for building the Docker image

## Usage

1. **book-service** is available at [http://localhost:4000](http://localhost:4000)
2. **order-service** is available at [http://localhost:4001](http://localhost:4001)
3. **gateway-service** is available at [http://localhost:3002](http://localhost:3002)

## Testing with Postman

To test the APIs with Postman, follow these steps:

1. **Import Postman Collection:**

   Download the Postman collection file (e.g., `bookstore-collection.json`) from the repository or request it if it is not available.

   In Postman:
    - Go to `File` > `Import`.
    - Select the `bookstore-collection.json` file.
    - Click `Import`.

2. **Set Environment Variables:**

   Create a new environment in Postman with the following variables:
    - `BOOK_SERVICE_URL` - Set to `http://localhost:4000`
    - `ORDER_SERVICE_URL` - Set to `http://localhost:4001`

   To create an environment:
    - Click on `Environments` (top right corner).
    - Click `Add`.
    - Enter the variable names and values.
    - Save the environment and select it from the top right corner of the Postman window.

3. **Run Tests:**

   Open the imported collection in Postman and test the following endpoints:

    - **Add a New Book:**
        - **Request:**
            - **Method:** POST
            - **URL:** `http://localhost:3002/gateway/books`
            - **Body (JSON):**
              ```json
              {
                "title": "Eloquent JavaScript: A Modern Introduction to Programming",
                "author": "Marijn Haverbeke",
                "publishedDate": "2024-07-23",
                "price": 34.99
              }
              ```
        - **Response:**
            - **Status Code:** 201 Created
            - **Body (JSON):**
              ```json
              {
                "title": "Eloquent JavaScript: A Modern Introduction to Programming",
                "author": "Marijn Haverbeke",
                "publishedDate": "2024-07-23",
                "price": 34.99,
                "id": 3,
                "createdAt": "2024-07-24T07:26:27.560Z",
                "updatedAt": "2024-07-24T07:26:27.560Z"
              }
              ```

    - **Get List of Books:**
        - **Request:**
            - **Method:** GET
            - **URL:** `http://localhost:3002/gateway/books`
        - **Response:**
            - **Status Code:** 200 OK
            - **Body (JSON):**
              ```json
              [
                {
                  "id": 1,
                  "title": "JavaScript: The Good Parts",
                  "author": "Douglas Crockford",
                  "publishedDate": "2024-07-23",
                  "price": "29.99",
                  "createdAt": "2024-07-23T18:02:33.846Z",
                  "updatedAt": "2024-07-23T18:02:33.846Z"
                },
                {
                  "id": 2,
                  "title": "JavaScript: The Good Parts",
                  "author": "Douglas Crockford",
                  "publishedDate": "2024-07-23",
                  "price": "29.99",
                  "createdAt": "2024-07-23T18:07:21.649Z",
                  "updatedAt": "2024-07-23T18:07:21.649Z"
                }
              ]
              ```

    - **Create an Order:**
        - **Request:**
            - **Method:** POST
            - **URL:** `http://localhost:3002/gateway/orders`
            - **Body (JSON):**
              ```json
              {
                "bookId": 1,
                "quantity": 3
              }
              ```
        - **Response:**
            - **Status Code:** 201 Created
            - **Body (JSON):**
              ```json
              {
                "bookId": 1,
                "quantity": 3,
                "id": 2,
                "createdAt": "2024-07-24T07:21:54.650Z",
                "updatedAt": "2024-07-24T07:21:54.650Z"
              }
              ```

    - **Get List of Orders:**
        - **Request:**
            - **Method:** GET
            - **URL:** `http://localhost:3002/gateway/orders`
        - **Response:**
            - **Status Code:** 200 OK
            - **Body (JSON):**
              ```json
              [
                {
                  "id": 1,
                  "bookId": 1,
                  "quantity": 2,
                  "createdAt": "2024-07-23T18:22:59.501Z",
                  "updatedAt": "2024-07-23T18:22:59.501Z"
                }
              ]
              ```

## Docker Compose Commands

- `docker-compose up` - Starts all services
- `docker-compose up --build` - Starts all services and rebuilds images
- `docker-compose down` - Stops and removes containers, networks, and volumes
- `docker-compose logs` - Views logs of all containers

## Links

- [NestJS Documentation](https://docs.nestjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This README file now includes detailed instructions for testing your API using Postman, including request methods, URLs, request bodies, and expected responses. Adjust the details as needed based on your specific setup.