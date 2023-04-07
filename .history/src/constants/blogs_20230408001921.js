const blogs = [
  {
    'id': '1',
    'title':'Use React hooks and the Context API to manage global state',
    'date':'April 16 2022',
    'category':'React',
    'desc':`React hooks and the Context API are powerful tools that can be used together to manage global state in React applications. In this blog, we’ll explore how to use these tools to create a centralized state management system that simplifies the process of sharing data between components.',
    'image':'responsive.png'
  },
  {
    'id': '2',
    'title':'Can I use React hooks inside a conditional?',
    'date':'March 10 2022',
    'category':'React',
    'desc':`No.I do not know why technically, but it’s not possible. I stumbled on this while working with SWR and in particular the useSWR hook.`,
    'slug':'react-hooks-consitional',
    'image':'react-hooks.png'
  },
  {
    'id': '3',
    'title':'React Router, why useLocation and useHistory',
    'date':'Feb 17 2022',
    'category':'React',
    'desc':`I was having some head scratching moment when using the useLocation and useHistory hooks with React Router.`,
    'slug':'react-rounter-useLocation-useHistory',
    'image':'router.png'
  },
  {
    'id': '4',
    'title':'How to use useEffect callback with event callbacks',
    'date':'Jan 27 2022',
    'category':'React',
    'desc':`Initialize a callback for an event newuserconnected on a socket.io connection.I assumed that after doing so, any time I called that event on the server, the client-side (React app) would print the current value at runtime of the variable connectedusers (imagine I was updating it somewhere else in the app).`,
    'slug':'react-useeffect-callback',
    'image':'useeffect.png'
  },
  {
    'id': '5',
    'title':'Using useState with an object: how to update',
    'date':'Dec 8 2021',
    'category':'React',
    'desc':`When a state variable defined with useState is an object with properties you add / update, it’s somewhat confusing how to update it. You can’t just update the object, or the component won’t rerender.`,
    'slug':'using-useState-react',
    'image':'react.png'
  },
  {
    'id': '6',
    'title':'React, how to dynamically choose a component to render',
    'date':'Nov 16 2022',
    'category':'React',
    'desc':`using the very cool @heroicons/react package. In the JSX I iterated on the menu array to show {item.icon} But then I had to change the Tailwind classes I was using depending on the responsive state of the app, for which I used the react-responsive package.`,
    'slug':'react-dynamically-choose-component',
    'image':'react.png'
  },
  {
    'id': '7',
    'title':'How to use Composer and Packagist in PHP',
    'date':'March 10 2020',
    'category':'PHP',
    'desc':`Composer is the package manager of PHP. It allows you to easily install packages into your projects. Install it on your machine (Linux/Mac or Windows) and once you’re done you should have a composer command available on your terminal.`,
    'slug':'how-to-use-composer-php',
    'image':'php.jpg'
  }
]

export default blogs
