import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
// import LogIn from './pages/LogIn';
import LoginSignUpForm from './pages/LoginSignUpForm';
// import SignUp from './pages/LoginSignUpForm';
import Question from './components/Question';
import NewDoubt from './pages/NewDoubt';

export default createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/doubt/:id",
                element: <Question />
            },
            {
                path: "/newdoubt",
                element: <NewDoubt />
            }
        ]
    },
    {
        path: "/login",
        element: <LoginSignUpForm />
    },
    {
        path: "/signup",
        element: <LoginSignUpForm />
    }
])