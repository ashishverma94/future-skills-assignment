![Screenshot (254)](https://github.com/user-attachments/assets/eef0f4ec-747e-4e74-b1ef-658d71ce07a3)# Help Center

## QNA

1. **How can you implement shared functionality across a component tree?**

   To implement shared functionality across a React component tree. The basic and easy method is prop-drilling we can pass the data from one component to another using props. Other method is Context API allows you to provide and consume shared state or functions at any level of the component tree without prop drilling. Higher-Order Components can also be used it  wrap components to inject functionality or props. We can also use libraries like redux, thunk.

   

2. **Why is the useState hook appropriate for handling state in a complex component?**

   Because it allows for a clear and manageable way to manage and update state variables within functional components.


## Instructions to set up project

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ashishverma94/future-skills-assignment.git
   Open folder in vscode
   ```

2. **Backend:**

   - Make a .env file inside backend folder and set

   ```bash
   PORT = 3000
   DB_URL = { mongo-db-url}
   ```

   - Run the commands-

   ```bash
   cd backend
   npm i
   npm run dev
   ```

3. **Frontend:**
   - Go inside frontend/src/utils/url.js  and comment line 2 and uncomment line 1 to update backend url 
   - Run the commands-
   ```bash
   cd frontend
   npm i
   npm run dev
   ```

## To see the demo ( deployed link )-

[-http](https://future-skills-assignment-7rnp.vercel.app/)

## Screenshots-

![Uploading Screenshot (251).png…]()




