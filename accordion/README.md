# Accordion

> Semantic markup & no-js fallback for an accordion element

## Usage

Firstly start off with adding the `data-accordion` attribute to the `ul` element.

```html
<ul class="accordion" role="tablist" data-accordion>

</ul>
```

Secondly add a `li` item with the following markup below.

```html
<li class="accordion__item">
  <h2 class="accordion__heading">
    <a class="accordion__link" href="#accordion-tab-1" aria-controls="accordion-tab-1" id="accordion-link-1" role="tab" aria-selected="true" data-accordion-links="1">Accordion 1</a>
  </h2>
  <div class="accordion__section" id="accordion-tab-1" aria-labelledby="accordion-link-1" role="tabpanel" aria-hidden="false" data-accordion-tab="1">
    <p>
      Accordion Content
    </p>
  </div>
</li>
```

Links inside a heading attribute will improve accessibility and assist the user when they tab through the page. Make sure you add `aria-selected` on the
link and `aria-hidden` on the `accordion__section` element. These attributes change the state of the component.

For the JavaScript to work you need to link the `data-accordion-links` with `data-accordion-tab`. So for example:

```
  data-accordion-links="1"
  data-accordion-tab="1"
```


## Useful Resources

- (Aria Tab Panel Tutorial)[http://accessibility.athena-ict.com/aria/examples/tabpanel2.shtml]
- (Using Aria)[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques]
