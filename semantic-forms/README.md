# Semantic Forms
> A guideline for creating semantic Forms.

## Form Attributes
- `action` - the url of a web page that processes the information submitted via the form.
- `autocomplete` - on means that this for can have autocomplete fields. Default is set to on.
- `method` - post/get most of the time its post
- `name` - must be named unique among other forms in the document
- `novalidate` - default is false. This just means the form is not to be validated after submission

## Common Input Attributes
- `pattern` - Use regex to define a pattern (EG: 00-00-00) This is useful if you want just numbers to appear on mobile keyboard `pattern="[0-9]*"`
- `name` - gives an input a name which can be used as a reference
- `id` - the input an ID so your label can belong to that input.
- `autofocus` - default is set to false
- `value` - Set a value for the element
- `placeholder` - Some placeholder text for your input field
- `disabled` - Prevents the user from selecting this input

## Useful Resources
- [How to structure an HTML form](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/How_to_structure_an_HTML_form)
- [Sensible Forms: A Form Usability Checklist](http://alistapart.com/article/sensibleforms)
