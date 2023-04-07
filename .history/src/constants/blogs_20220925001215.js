const blogs = [
  {
    'id': '1',
    'title':'Using useState with an object: how to update',
    'date':'Feb 15 2021',
    'category':'React',
    'desc':`When a state variable defined with useState is an object with properties you add / update, it’s somewhat confusing how to update it. You can’t just update the object, or the component won’t rerender.`,
    'slug':'using-useState-react',
    'image':'react.png',
    'content':`<h2 class="post-title" itemprop="name headline" style="margin: 40px 0px"><span>Using useState with an object: how to update</span></h2>
    <div class="clearfix post-content" itemprop="articleBody">
    
        <p>When a state variable defined with useState is an object with properties you add / update, it’s somewhat
            confusing how to update it.</p>
        <p>You can’t just update the object, or the component won’t rerender.</p>
        <p>A pattern I found involves creating a temporary object with one property, and use object destructuring to create
            a new object from the existing 2 objects:</p>
        <div class="highlight">
            <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"
                class="language-js"><code class="language-js" data-lang="js"><span class="token keyword">const</span> <span class="token punctuation">[</span>quizAnswers<span class="token punctuation">,</span> setQuizAnswers<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token operator">...</span>
    
    <span class="token keyword">const</span> updatedValue <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    updatedValue<span class="token punctuation">[</span>quizEntryIndex<span class="token punctuation">]</span> <span class="token operator">=</span> answerIndex
    <span class="token function">setQuizAnswers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token operator">...</span>quizAnswers<span class="token punctuation">,</span>
      <span class="token operator">...</span>updatedValue
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </code></pre>
        </div>
        <p>The same technique can be used to remove a property:</p>
        <div class="highlight">
            <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"
                class="language-js"><code class="language-js" data-lang="js"><span class="token keyword">const</span> copyOfObject <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>quizAnswers <span class="token punctuation">}</span>
    <span class="token keyword">delete</span> copyOfObject<span class="token punctuation">[</span><span class="token string">'propertyToRemove'</span><span class="token punctuation">]</span>
    
    <span class="token function">setQuizAnswers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token operator">...</span>copyOfObject
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </code></pre>
        </div>
    
        <div class="custom-slant"></div>
    </div>
    `
  },
  {
    'id': '2',
    'title':'Can I use React hooks inside a conditional?',
    'date':'March 5 2021',
    'category':'React',
    'desc':`No.I do not know why technically, but it’s not possible. I stumbled on this while working with SWR and in particular the useSWR hook.`,
    'slug':'react-hooks-consitional',
    'image':'react-hooks.png',
    'content':`
    <h2 class="post-title" itemprop="name headline" style="margin-top: 40px"><span>Can I use React hooks inside a
        conditional? </span></h2>


<div class="clearfix post-content" itemprop="articleBody">
    <p>No.</p>
    <p>I do not know <em>why</em> technically, but it’s not possible.</p>
    <p>I stumbled on this while working with SWR and in particular the <code>useSWR</code> hook.</p>
    <div class="highlight">
        <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"
            class="language-js"><code class="language-js" data-lang="js"><span class="token keyword">const</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSWR</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">'</span><span class="token string">/api/user</span><span class="token template-punctuation string">'</span></span><span class="token punctuation">,</span> fetcher<span class="token punctuation">)</span>
</code></pre>
    </div>
    <p>I wanted to only retrieve some data from an API when the user was logged in, and I thought “ok, I can do this”:
    </p>
    <div class="highlight">
        <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"
            class="language-js"><code class="language-js" data-lang="js"><span class="token keyword">let</span> data

<span class="token keyword">if</span> <span class="token punctuation">(</span>loggedIn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSWR</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">'</span><span class="token string">/api/user</span><span class="token template-punctuation string">'</span></span><span class="token punctuation">,</span> fetcher<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
    </div>
    <p>but.. no.</p>
    <p>React will raise errors in the console, maybe an error that reads:</p>
    <blockquote>
        <p>Warning: React has detected a change in the order of Hooks called by Course. This will lead to bugs and
            errors if not fixed.</p>
    </blockquote>
    <p>The solution will be different depending on the hook used. In this case a very quick and efficient solution was
        provided by the <code>useSWR</code> hook, because I could pass <code>null</code> instead of the API endpoint to
        avoid loading the data:</p>
    <div class="highlight">
        <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"
            class="language-js"><code class="language-js" data-lang="js"><span class="token keyword">const</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSWR</span><span class="token punctuation">(</span>loggedIn <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">'</span><span class="token string">/api/user</span><span class="token template-punctuation string">'</span></span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> fetcher<span class="token punctuation">)</span>
</code></pre>
    </div>
    <p>I moved the conditional <em>inside</em> the hook call, and this made it work for me.</p>


    <div class="custom-slant"></div>
</div>
    `
  },
  {
    'id': '3',
    'title':'React Router, why useLocation and useHistory',
    'date':'March 20 2021',
    'category':'React',
    'desc':`I was having some head scratching moment when using the useLocation and useHistory hooks with React Router.`,
    'slug':'react-rounter-useLocation-useHistory',
    'image':'router.png',
    'content':`<article class="post-container">

    <h2 class="post-title" itemprop="name headline" style="margin-top: 40px"><span>React Router, why useLocation and
            useHistory might return undefined</span></h2>
    <div class="clearfix post-content" itemprop="articleBody">

        <p>I was having some head scratching moment when using the <code>useLocation</code> and <code>useHistory</code>
            hooks with <a href="/react-router/">React Router</a>.</p>
        <div class="highlight">
            <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"
                class="language-js"><code class="language-js" data-lang="js"><span class="token keyword">const</span> history <span class="token operator">=</span> <span class="token function">useHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
        </div>
        <p>They both returned <code>undefined</code>.</p>
        <p>Turns out I was adding the Router to the DOM with <code>&lt;Router&gt;...&lt;/Router&gt;</code> in the same
            component I was using <code>useLocation</code> and <code>useHistory</code>.</p>
        <p>Then I found <a href="https://github.com/ReactTraining/react-router/issues/7015">this issue</a> that
            explained I could not do that.</p>
        <p>I had to move the <code>&lt;Router&gt;...&lt;/Router&gt;</code> wrapping of my component one level up. In my
            case, I did that in the <code>index.js</code> file:</p>
        <div class="highlight">
            <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"
                class="language-js"><code class="language-js" data-lang="js"><span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span>

<span class="token operator">...</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span>Router<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span><span class="token punctuation">,</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre>
        </div>

        <div class="custom-slant"></div>

    </div>
    `
  },
  {
    'id': '4',
    'title':'How to use useEffect callback with event callbacks',
    'date':'March 20 2021',
    'category':'React',
    'desc':`Initialize a callback for an event newuserconnected on a socket.io connection.I assumed that after doing so, any time I called that event on the server, the client-side (React app) would print the current value at runtime of the variable connectedusers (imagine I was updating it somewhere else in the app).`,
    'slug':'react-useeffect-callback',
    'image':'useeffect.png',
    'content':`<article class="post-container">

    <h2 class="post-title" itemprop="name headline" style="margin-top: 40px"><span>React Router, why useLocation and
            useHistory might return undefined</span></h2>
    <div class="clearfix post-content" itemprop="articleBody">

        <p>I was having some head scratching moment when using the <code>useLocation</code> and <code>useHistory</code>
            hooks with <a href="/react-router/">React Router</a>.</p>
        <div class="highlight">
            <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"
                class="language-js"><code class="language-js" data-lang="js"><span class="token keyword">const</span> history <span class="token operator">=</span> <span class="token function">useHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
        </div>
        <p>They both returned <code>undefined</code>.</p>
        <p>Turns out I was adding the Router to the DOM with <code>&lt;Router&gt;...&lt;/Router&gt;</code> in the same
            component I was using <code>useLocation</code> and <code>useHistory</code>.</p>
        <p>Then I found <a href="https://github.com/ReactTraining/react-router/issues/7015">this issue</a> that
            explained I could not do that.</p>
        <p>I had to move the <code>&lt;Router&gt;...&lt;/Router&gt;</code> wrapping of my component one level up. In my
            case, I did that in the <code>index.js</code> file:</p>
        <div class="highlight">
            <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"
                class="language-js"><code class="language-js" data-lang="js"><span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span>

<span class="token operator">...</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span>Router<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span><span class="token punctuation">,</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre>
        </div>

        <div class="custom-slant"></div>

    </div>
    `
  },
  {
    'id': '5',
    'title':'React, how to make responsive JSX',
    'date':'March 20 2021',
    'category':'React',
    'desc':`I had the need to make a sidebar look in one particular way when in a big screen in React, and in another way when in a smaller screen, so I wanted to have some way to detect responsive layouts changes in JSX.`,
    'slug':'react-make-responsive-jsx',
    'image':'responsive.png',
    'content':`<article class="post-container">

    <h2 class="post-title" itemprop="name headline" style="margin-top: 40px"><span>React Router, why useLocation and
            useHistory might return undefined</span></h2>
    <div class="clearfix post-content" itemprop="articleBody">

        <p>I was having some head scratching moment when using the <code>useLocation</code> and <code>useHistory</code>
            hooks with <a href="/react-router/">React Router</a>.</p>
        <div class="highlight">
            <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"
                class="language-js"><code class="language-js" data-lang="js"><span class="token keyword">const</span> history <span class="token operator">=</span> <span class="token function">useHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
        </div>
        <p>They both returned <code>undefined</code>.</p>
        <p>Turns out I was adding the Router to the DOM with <code>&lt;Router&gt;...&lt;/Router&gt;</code> in the same
            component I was using <code>useLocation</code> and <code>useHistory</code>.</p>
        <p>Then I found <a href="https://github.com/ReactTraining/react-router/issues/7015">this issue</a> that
            explained I could not do that.</p>
        <p>I had to move the <code>&lt;Router&gt;...&lt;/Router&gt;</code> wrapping of my component one level up. In my
            case, I did that in the <code>index.js</code> file:</p>
        <div class="highlight">
            <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"
                class="language-js"><code class="language-js" data-lang="js"><span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span>

<span class="token operator">...</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span>Router<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span><span class="token punctuation">,</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre>
        </div>

        <div class="custom-slant"></div>

    </div>
    `
  },
  {
    'id': '6',
    'title':'React, how to dynamically choose a component to render',
    'date':'March 20 2021',
    'category':'React',
    'desc':`using the very cool @heroicons/react package. In the JSX I iterated on the menu array to show {item.icon} But then I had to change the Tailwind classes I was using depending on the responsive state of the app, for which I used the react-responsive package.`,
    'slug':'react-dynamically-choose-component',
    'image':'react.png',
    'content':`<h2 class="post-title" itemprop="name headline" style="margin-top: 40px"><span>React, how to dynamically choose a
    component to render</span></h2>


<div class="clearfix post-content" itemprop="articleBody">

<p>I had the need to render a list of items in a menu, each with its own icon.</p>
<p>I initially hardcoded the component in a menu, like this:</p>
<div class="highlight">
    <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"
        class="language-jsx"><code class="language-jsx" data-lang="jsx">const menu = [
{
title: 'Home',
icon: &lt;HomeIcon className="mr-3 ml-1 h-5 w-5" /&gt; 
},
{ title: 'Notifications', icon: &lt;BellIcon className="mr-3 ml-1 h-5 w-5" /&gt; },
{ title: 'Profile', icon: &lt;UserIcon className="mr-3 ml-1 h-5 w-5" /&gt; },
]
</code></pre>
</div>
<p>using the very cool <code>@heroicons/react</code> package.</p>
<p>In the JSX I iterated on the <code>menu</code> array to show <code>{item.icon}</code></p>
<p>But then I had to change the Tailwind classes I was using depending on the responsive state of the app, for which
    I used the <code>react-responsive</code> package.</p>
<p>I decided to pass a string instead, so I first did this:</p>
<div class="highlight">
    <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"
        class="language-js"><code class="language-js" data-lang="js"><span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">[</span>
<span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'HomeIcon'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Notifications'</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'BellIcon'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Profile'</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'UserIcon'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> <span class="token function-variable function">Icon</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> props

<span class="token keyword">let</span> icon <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token string">'HomeIcon'</span><span class="token punctuation">)</span> icon <span class="token operator">=</span> HomeIcon
<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token string">'BellIcon'</span><span class="token punctuation">)</span> icon <span class="token operator">=</span> BellIcon
<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token string">'UserIcon'</span><span class="token punctuation">)</span> icon <span class="token operator">=</span> UserIcon

<span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>icon<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token operator">...</span>props <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token operator">...</span>

<span class="token operator">&lt;</span>Icon name<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>icon<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre>
</div>
<p>Another possible solution would be to use an object to look up the components, instead of a bunch of
    <code>if</code> checks:
</p>
<div class="highlight">
    <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"
        class="language-js"><code class="language-js" data-lang="js"><span class="token keyword">const</span> icons <span class="token operator">=</span> <span class="token punctuation">{</span>
HomeIcon<span class="token punctuation">,</span>
BellIcon<span class="token punctuation">,</span>
UserIcon<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">Icon</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> props

<span class="token keyword">const</span> TheIcon <span class="token operator">=</span> icons<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
<span class="token keyword">return</span> <span class="token operator">&lt;</span>TheIcon <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token operator">&lt;</span>Icon name<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>icon<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre>
</div>
<blockquote>
    <p>I had to use <code>TheIcon</code> as React components start with an uppercase letter by convention.</p>
</blockquote>
<p>This was good enough, but I then realized I could do it in a much simpler way by using the actual component
    instead of a string in the <code>menu</code> array:</p>
<div class="highlight">
    <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"
        class="language-js"><code class="language-js" data-lang="js"><span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">[</span>
<span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> HomeIcon <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Notifications'</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> BellIcon <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Profile'</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> UserIcon <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> <span class="token function-variable function">Icon</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> icon <span class="token punctuation">}</span> <span class="token operator">=</span> props
<span class="token keyword">const</span> TheIcon <span class="token operator">=</span> icon
<span class="token keyword">return</span> <span class="token operator">&lt;</span>TheIcon <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token operator">...</span>

<span class="token operator">&lt;</span>Icon icon<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>icon<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre>
</div>

<div class="custom-slant"></div>

</div>
    `
  },
  {
    'id': '7',
    'title':'How to use Composer and Packagist in PHP',
    'date':'March 10 2020',
    'category':'PHP',
    'desc':`Composer is the package manager of PHP. It allows you to easily install packages into your projects. Install it on your machine (Linux/Mac or Windows) and once you’re done you should have a composer command available on your terminal.`,
    'slug':'how-to-use-composer-php',
    'image':'php.jpg',
    'content': `<h2 class="post-title" itemprop="name headline" style="margin: 40px 0px"><span>How to use Composer and Packagist in PHP</span></h2><div class="clearfix post-content" itemprop="articleBody">
    <p><a href="https://getcomposer.org">Composer</a> is the package manager of PHP.</p>
    <p>It allows you to easily install packages into your projects.</p>
    <p>Install it on your machine (<a href="https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos">Linux/Mac</a> or <a href="https://getcomposer.org/doc/00-intro.md#installation-windows">Windows</a>) and once you’re done you
       should have a <code>composer</code> command available on your terminal.
    </p>
    <p><img style="width: 100%; height: auto; max-width: 800px; margin: 0 auto;" src="https://flaviocopes.com/php-composer-packagist/Screen_Shot_2022-06-27_at_16.25.43.jpg" alt=""></p>
    <p>Now inside your project you can run <code>composer require &lt;lib&gt;</code> and it will be installed locally,
       for example le’ts install <a href="https://carbon.nesbot.com">the Carbon library</a> that helps us work with
       dates in PHP
    </p>
    <div class="highlight">
       <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;" class="language-php"><code class="language-php" data-lang="php">composer <span class="token keyword">require</span> nesbot<span class="token operator">/</span>carbon
 </code></pre>
    </div>
    <p>It will do some work:</p>
    <p><img style="width: 100%; height: auto;  max-width: 800px; margin: 0 auto;" src="https://flaviocopes.com/php-composer-packagist/Screen_Shot_2022-06-27_at_16.27.11.jpg" alt=""></p>
    <p>Once it’s done, you will find some new things in the folder, <code>composer.json</code> that lists the new
       configuration for the dependencies:
    </p>
    <div class="highlight">
       <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;" class="language-php"><code class="language-php" data-lang="php"><span class="token punctuation">{</span>
     <span class="token string double-quoted-string">"require"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
         <span class="token string double-quoted-string">"nesbot/carbon"</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">"^2.58"</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 </code></pre>
    </div>
    <p><code>composer.lock</code> which is used to “lock” the versions of the package in time, so the exact same
       installation you have can be replicated on another server, and the <code>vendor</code> folder, that contains the
       library just installed, and its dependencies.
    </p>
    <p>Now in the <code>index.php</code> file with we can add this code at the top:</p>
    <div class="highlight">
       <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;" class="language-php"><code class="language-php" data-lang="php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
 <span class="token keyword">require</span> <span class="token string single-quoted-string">'vendor/autoload.php'</span><span class="token punctuation">;</span>
 
 <span class="token keyword">use</span> <span class="token package">Carbon<span class="token punctuation">\</span>Carbon</span><span class="token punctuation">;</span>
 </span></code></pre>
    </div>
    <p>and then we can use the library!</p>
    <div class="highlight">
       <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;" class="language-php"><code class="language-php" data-lang="php"><span class="token keyword">echo</span> <span class="token class-name static-context">Carbon</span><span class="token operator">::</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 </code></pre>
    </div>
    <p><img style="width: 100%; height: auto; max-width: 800px; margin: 0 auto;" src="https://flaviocopes.com/php-composer-packagist/Screen_Shot_2022-06-27_at_16.34.47.jpg" alt=""></p>
    <p>See? We didn’t have to manually download a package from the internet, install it somewhere.. it was all fast,
       quick, and well organized.
    </p>
    <p>The <code>require 'vendor/autoload.php';</code> line is what enables <strong>autoloading</strong>. Remember when
       we talked about <code>require_once()</code> and <code>include_once()</code>? This solves all of that, we don’t
       need to manually search for the file to include, we just use the <code>use</code> keyword to import the library
       into our code.
    </p>
    <div class="custom-slant"></div>
 </div>`
  }
]

export default blogs
