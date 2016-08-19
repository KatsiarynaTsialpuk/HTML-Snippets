# Aticle Elements

> How to semantically write an article element.

## HTML Structure

To make your aticle more semantic you can use:

- `<header>` - You can use this to represent the header or the article
- `<footer>` - splits out content that shouldnt be in the main section of content. So for example the author of the blog post.
- `<address>` - Author, email address etc. 
- `<time>` - useful for adding the time of when the blog was posted on.
- `rel="author"` - defines th elink reference to be related to the author. 

```html
<article>
	<header>
		<h1>This is an article heading</h1>
	</header>

	<p>Content</p>

	<footer>
		<p>Posted on <time datetime="2001-05-15T19:00"></time></p>

		<!-- If it is a blog post you can use the address tag to specify the author -->

		<address>
		    You can contact author at <a href="http://www.somedomain.com/contact" rel="author">www.somedomain.com</a>. 
	 	</address>
	</footer>

</article>
```

## Useful resources
- [MDN - Articles](https://developer.mozilla.org/en/docs/Web/HTML/Element/article)