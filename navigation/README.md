# Navigation

> Semantic HTML markup for a page Navigation

This is how we previously made navs:

```html
<ul role="navigation">
	<li><a href="/toThisUrl">Navigation Link</a></li>
	<li><a href="/toThisUrl">Navigation Link</a></li>
	<li><a href="/toThisUrl">Navigation Link</a></li>
	<li><a href="/toThisUrl">Navigation Link</a></li>
</ul>
```

To make this more semantic all we have to do is wrap a `nav` around that block.

```HTML
<nav>
<ul>
	<li><a href="/toThisUrl">Navigation Link</a></li>
	<li><a href="/toThisUrl">Navigation Link</a></li>
	<li><a href="/toThisUrl">Navigation Link</a></li>
	<li><a href="/toThisUrl">Navigation Link</a></li>
</ul>
</nav>
```

## Useful Resources

- (HTML5 Doctor - Semntic Navigation)[http://html5doctor.com/nav-element/]
