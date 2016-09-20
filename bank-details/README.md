# Bank Details Component

> A list of inputs you can use for bank details and using autocomplete to improve the speed of the form process

Here is a basic form following the standards in [Semantic Forms](https://github.com/code-computerlove/HTML-Snippets/tree/master/semantic-forms) we can now extend the speed of how quick the form is filled in by adding `autocomplete` with `hints` to make the user journey a lot better.

Here is a list of what I have used below:

- `cc-type` - Card type
- `cc-exp` - Expiry Date
- `cc-name` - Card Name
- `cc-number` - Account Number
- `cc-csc` - CVC Number


```html
<form role="form" name="form3" novalidate="true" action="" method="post">
	<fieldset>
		<legend>
			Bank Details - All field types
		</legend>
		<div class="form-group">
			<label for="card-type">
				Card Type
				<input type="text" name="card-type" id="card-type" placeholder="Mr John M Doe" autocomplete="cc-type"  required />
			</label>
		</div>
		<div class="form-group">
			<label for="card-expiry">
				Card Expiry
				<input type="text" name="card-expiry" id="card-expiry" placeholder="01-1990" autocomplete="cc-exp"  required />
			</label>
		</div>
		<div class="form-group">
			<label for="ccname">
				Account Holder's Name
				<input type="text" name="ccname" id="ccname" placeholder="Mr John M Doe" autocomplete="cc-name"  required />
			</label>
		</div>
		<div class="form-group">
			<label for="acc-number">
				Account Number
				<input type="text" name="acc-number" id="acc-number" placeholder="0000-0000-0000-0000" pattern="[0-9]*" maxlength="19" autocomplete="cc-number" required />
			</label>
		</div>
		<div class="form-group">
			<label for="sort-code">
				Sort Code
				<input type="text" name="sort-code" id="sort-code" placeholder="00-00-00" pattern="[0-9]*" maxlength="8" required />
			</label>
		</div>
		<div class="form-group">
			<label for="cvc">
				CVC
				<input type="text" name="cvc" id="cvc" placeholder="000" pattern="[0-9]*" maxlength="3" autocomplete="cc-csc" required />
			</label>
		</div>
		<div class="form-footer">
			<button type="submit">Submit</button>
		</div>
	</fieldset>
</form>
```

## Useful Resources
- [Help users checkout faster with Autofill](https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill?hl=en)
