# Tables 

> Examples of semantic tables

## Elements
- `<caption>` - used to give a title to the table. eg(Sales over the last three months)
- `<th>` - column header 
- `<thead>` - table header
- `<tfoot>` - table footer, this can go above the `<tbody>` element and it will still display underneath.
- `<tbody>` - table body

## Basic Table (with headers)

```
<table>
	<caption>Table - Title</caption>
	<tr>
		<th>Column One</th>
		<th>Column Two</th>
	</tr>
	<tr>
		<td>Data</td>
		<td>Data</td>
	</tr>
	<tr>
		<td>Data</td>
		<td>Data</td>
	</tr>
</table>
```

## Tables with a thead, tbody and tfoot

```
<table>
	<caption>Table - Title</caption>
	<thead>
		<tr>
			<th>Column One</th>
			<th>Column Two</th>
		</tr>
	</thead>
	<tfoot>
		<tr>
			<td>Data</td>
			<td>Data</td>
		</tr>
	</tfoot>
	<tbody>
		<tr>
			<td>Data</td>
			<td>Data</td>
		</tr>
	</tbody>
</table>
```

## Useful Resources
- [MDN - Tables](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)