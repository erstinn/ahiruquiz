<h3>Purpose of installed npm packages</h3>
- **redux** most popular state management tool
- **@reduxjs/toolkit** easy way to use redux (wrapper) 
- **redux-persist** to store local state to local storage if needed. e.g. user token info into local state such that when user closes tab
- **react-dropzone** handle file upload/handling to send it to the backend
- **dotenv** env vars
- **formik** form handling
- **yup** for validation
- **react-router-dom@6** handling diff. routes/pages
- **@mui/material** material ui
  - **@mui/icons-material** 
- **@emotion/react** material ui
- **@emotion/styled** material ui


<h3>Purpose certain files</h3>
- _jsconfig.json_ when you import diff. files into other files, you can start from `src`
  - e.g. no need to `../client/src/ahiru/...` or instead of `./ahiru`
  - can just `/ahiru`
- **_state folder_** where our redux and toolkit info, _keep your data and component separate
- _
