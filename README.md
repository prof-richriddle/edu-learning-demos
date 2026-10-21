# Assignments and Tinkerings of Professor Richard Dixon Riddle

Assignment pages by Rich Riddle.

- `index.html`: home page, lists every assignment
- `cp2.html`: ENG 1320 Culminating Project 2
- `cp2-guided-ai-path.html` and `cp2-non-ai-research-path.html`: the two CP2 paths
- `site.js`: site name, top bar, and tab names
- `styles.css`: shared styles
- `images/`: images

## Changing the site name

Edit the first line of `site.js`. It fills in the top bar and the browser tab name on every page.

## Adding a page

Put these two lines right after `<body>`:

```html
<header class="site-header"></header>
<script src="site.js"></script>
```
