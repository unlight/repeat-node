repeat-node
===========
Repeats specified html node.


USAGE
-----
1. Add script to page
2. Add attribute data-repeat-node="X" (where X is a number)


EXAMPLE
-------
```html
<!DOCTYPE html>
<html>
<head>
	<script src="index.js"></script>
</head>
<body>
<p data-repeat-node="3">Lorem ipsum Eiusmod incididunt adipisicing veniam ut Ut.</p>
</body>
</html>
```

Result:
```html
<p>Lorem ipsum Eiusmod incididunt adipisicing veniam ut Ut.</p>
<p>Lorem ipsum Eiusmod incididunt adipisicing veniam ut Ut.</p>
<p>Lorem ipsum Eiusmod incididunt adipisicing veniam ut Ut.</p>
```