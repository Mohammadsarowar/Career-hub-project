import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className=' m-10'>
                <h2 className='bold'>What is Custom Hook: <span className="font-light">Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.Custom Hooks are named with "use" as prefix. For example, a custom hook could be named useLocalStorage or useAuthentication. In our case, the custom hook will be named useBoolean.
Custom Hooks consist of built-in React Hooks or other custom Hooks. Therefore a custom Hook is always a new composition of one or multiple Hooks. If a custom Hook does not use any hooks internally, it's not a custom Hook and shouldn't have the prefix "use".</span></h2>
<hr className='m-2 border-lime-400 '/>
<h2 className='bold '>when should use context api <span className="font-light ">Now you may ask yourself when it is a good idea to use context for global state? I am glad you asked, this chart is my As you can see, there are a lot of scenarios where other tools are preferable. I will explore a few of the alternatives in future posts.Technically we could just place our whole state at our top-level component and pass it down the React element tree to the components that need access to the state. But in any application but a very simple one that would require us to pass down the state several levels down the tree and through components that are not using the state themselves at all. It would pollute the code and ruin the Developer Experience (DX). That problem is known as prop-drilling. React's Context API was created to mitigate this issue.</span></h2>
            </div>
        </div>
    );
};

export default Blog;