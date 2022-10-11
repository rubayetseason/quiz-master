import { Accordion } from 'flowbite-react';
import React from 'react';

const Blog = () => {
    return (
        <div className='w-4/5 mx-auto my-12'>
            <hr className='border-2 border-blue-600 my-8' />
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>
                        <h1 className='text-xl'> What is the purpose of React Router?</h1>
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                            React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        <h1 className='text-xl'>How does Context API work?</h1>
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                            Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
                            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        <h1 className='text-xl'>What is useRef hook in React?</h1>
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The useRef hook is the new addition in React 16.8. The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
                            <br />

                            Syntax:

                            const refContainer = useRef(initialValue);
                            <br />
                            The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Blog;