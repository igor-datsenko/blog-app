import { NavLink} from "react-router";
import {useState} from "react";
import Dialog from "../dialog/dialog.tsx";
import {LoginForm} from "../login-form/login-form.tsx";
import {RegisterForm} from "../register-form/register-form.tsx";


export const Header = () => {
    const [isAuth, setIsAuth] = useState(true);
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const [isOpenRegister, setIsOpenRegister] = useState(false);

    const activeStyle = {
        'color': 'red',
    };

    function logIn() {
        setIsAuth(true);
    }

    function logOut() {
        setIsAuth(false);
    }

    function openLogin() {
        setIsOpenLogin(true)
    }

    function switchToRegisterDialog() {
        setIsOpenLogin(false);
        setIsOpenRegister(true);
    }

    function switchToLoginDialog() {
        setIsOpenRegister(false)
        setIsOpenLogin(true);
    }

    const links = [
        {
            name: 'Main',
            path: '/main'
        },
        {
            name: 'My posts',
            path: '/my-posts'
        },
        {
            name: 'Create post',
            path: '/create-post'
        },
    ]

  return (
      <div className="inset-x-0 top-0 z-50">
          <div className="bg-white">
              <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">

                  <div className="flex">
                      <a href="#" className="-m-1.5 p-1.5">
                          <span className="sr-only">Your Company</span>
                          <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" className="h-8 w-auto" />
                      </a>
                  </div>

                  <div className="flex">
                      { isAuth && links.map((link) => (
                          <NavLink
                              to={link.path}
                              className="text-sm/6 font-semibold text-gray-900 border p-2 rounded-md m-1"
                              style={({isActive} : any) => isActive ? activeStyle : undefined}
                              key={link.name}>
                              {link.name}
                          </NavLink >
                      )) }
                  </div>

                  <div className="">
                      { !isAuth && (
                          <button className='text-sm/6 font-semibold text-gray-900' onClick={openLogin}>Log in/Register</button>
                      )}
                      { isAuth && (
                          <button className='text-sm/6 font-semibold text-gray-900' onClick={logOut}>Log out</button>
                      )}

                      <Dialog isOpen={isOpenLogin} onClose={() => setIsOpenLogin(false)}>
                          <LoginForm onSwitchToRegister={() => switchToRegisterDialog} />
                      </Dialog>

                      <Dialog isOpen={isOpenRegister} onClose={() => setIsOpenRegister(false)}>
                          <RegisterForm onSwitchToLogin={() => switchToLoginDialog} />
                      </Dialog>
                  </div>
              </nav>
          </div>

      </div>
  );
};