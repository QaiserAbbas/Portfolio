const blogs = [
  {
    'id': '1',
    'title':'What is React',
    'date':'Feb 15 2021',
    'category':'React',
    'desc':`React is a JavaScript library that allows you to build user interfaces fast, without writing any code. It can also help your organization scale its development. It's used by large organizations like Facebook, Twitter, and Netflix. But what does that mean? Let's break it down!`,
    'slug':'what-is-react',
    'image':'react.png'
  },
  {
    'id': '2',
    'title':'How to use Composer and Packagist in PHP',
    'date':'March 10 2021',
    'category':'PHP',
    'desc':`Composer is the package manager of PHP. It allows you to easily install packages into your projects. Install it on your machine (Linux/Mac or Windows) and once you’re done you should have a composer command available on your terminal.`,
    'slug':'how-to-use-composer-php',
    'image':'php.jpg',
    'content': `<h1 class="post-title" itemprop="name headline" style="margin: 40px 0px"><span>How to use Composer and Packagist in PHP</span></h1><div class="clearfix post-content" itemprop="articleBody">
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
