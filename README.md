# c7-uea-final-project
This is a repository with code for the website for our final project
## Project structure
page_code - is the main directory where the code for web page contains (In classes we used to name it 'public')
* css - for styles
* html - all html files
* js - scripts
* materials - for pictures and their resources
  * fonts - for custom font files (.ttf, .woff, .woff2, .otf)
* index.html - entry of the website 
app.js - server script
package.json - server settings

## How to Use External Fonts from a Local Folder

To use custom fonts stored in your local project folder, follow these steps:

### Step 1: Add your font files to the fonts folder

Place your font files (e.g., `.ttf`, `.woff`, `.woff2`, `.otf`) in the `page_code/materials/fonts/` directory.

### Step 2: Define the font using @font-face in CSS

In your CSS file (e.g., `page_code/css/style.css`), add the `@font-face` rule to load your custom font:

```css
/* Define a custom font */
@font-face {
    font-family: 'MyCustomFont';           /* Give your font a name */
    src: url('../materials/fonts/MyFont.woff2') format('woff2'),  /* Modern browsers */
         url('../materials/fonts/MyFont.woff') format('woff'),    /* Most browsers */
         url('../materials/fonts/MyFont.ttf') format('truetype'); /* Safari, older browsers */
    font-weight: normal;   /* Specify font weight (normal, bold, 100-900) */
    font-style: normal;    /* Specify font style (normal, italic) */
}
```

### Step 3: Use the font in your CSS styles

After defining the font, you can use it anywhere in your CSS:

```css
body {
    font-family: 'MyCustomFont', sans-serif;
}

h1 {
    font-family: 'MyCustomFont', Arial, sans-serif;
}
```

### Best Practices

1. **Use multiple formats**: Include `.woff2` (best compression), `.woff` (wide support), and `.ttf` (fallback) for maximum browser compatibility.

2. **Provide fallback fonts**: Always list fallback fonts after your custom font (e.g., `Arial, sans-serif`) in case the custom font fails to load.

3. **Use relative paths**: Use relative paths in `url()` that are relative to your CSS file location.

4. **Font file naming**: Keep font filenames simple and avoid spaces (use hyphens or underscores instead).

### Example with Multiple Font Weights

```css
/* Regular weight */
@font-face {
    font-family: 'Roboto';
    src: url('../materials/fonts/Roboto-Regular.woff2') format('woff2'),
         url('../materials/fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}

/* Bold weight */
@font-face {
    font-family: 'Roboto';
    src: url('../materials/fonts/Roboto-Bold.woff2') format('woff2'),
         url('../materials/fonts/Roboto-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
}
```
