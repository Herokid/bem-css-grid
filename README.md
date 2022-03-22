# BEM CSS GRID
Flexbox grid system with BEM notation.

## Customization
You can custom this sass variables:

### Grid width
```scss
$grid-width: 100% !default;
```
### Grid columns
```scss
$grid-columns: 12 !default;
```
### Grid main gutter
```scss
$grid-gutter: 14px !default;
```
### Grid breakpoints for .g-col--[BREAKPOINT]-[COLUMNS] *modifier*
```scss
$grid-breakpoints: ( "xs" : 0px, "sm" : 768px, "md" : 992px, "lg" : 1200px) !default;
```
### Grid gutter *modifiers* for .g-row *block*
```scss
$grid-gutter-modifiers: ( "xs" : 0.25, "sm" : 0.75, "md" : 1.5, "lg" : 1.75) !default;
```