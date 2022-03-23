# HKST CSS GRID
Flexbox grid system.

## Classnames

### .g-wrap
The main grid wrapper

### .g-row
The main grid row container

### .g-row--[MODIFIER]
Grid row with gutter modifier.<br>
See [breakpoints variable](#grid-gutter-modifiers)

### .g-col
Auto width column

### .g-col--[BP]-[1-12]
Column with [1-12] columns space since [BP] breakpoint width.<br>
See [breakpoints variable](#grid-breakpoints)

## Basic markup structure with auto width columns
If you don't use columns *modifier classnames* the columns has auto width.<br>
In this example the grid system have 12 columns and each *.g-col* element in this markup use 3 columns space(3*4=12)
```html
<div class="g-wrap">
    <div class="g-row">
        <div class="g-col">
            <!-- Your content -->
        </div>
        <div class="g-col">
            <!-- Your content -->
        </div>
        <div class="g-col">
            <!-- Your content -->
        </div>
        <div class="g-col">
            <!-- Your content -->
        </div>
    </div>
</div>
```

## Basic markup structure with columns width by breakpoint
*(Very similar html markup than bootstrap grid)*
```html
<div class="g-wrap">
    <div class="g-row">
        <div class="g-col--xs-6">
            <!-- Your 6 columns content in all  breakpoints -->
        </div>
        <div class="g-col--xs-6">
            <!-- Your 6 columns content in all  breakpoints -->
        </div>
        <div class="g-col--sm-6 g-col--md-4">
            <!-- Your 6 columns content since 'small' breakpoint -->
            <!-- Your 4 columns content since 'medium' breakpoint -->
        </div>
        <div class="g-col--sm-6 g-col--md-4">
            <!-- Your 6 columns content since 'small' breakpoint -->
            <!-- Your 4 columns content since 'medium' breakpoint -->
        </div>
        <div class="g-col--lg-4">
            <!-- Your 4 columns content since 'large' breakpoint -->
        </div>
    </div>
</div>
```
## How to use
```scss
@import '~bem-css-grid-test/src/scss/grid/styles';
```
## Variables

### Grid width
```scss
$grid-width:  100% !default;
```
### Grid columns
```scss
$grid-columns: 12 !default;
```
### Grid main gutter
```scss
$grid-gutter: 14px !default;
```
### Grid breakpoints
```scss
$grid-breakpoints: ( "xs" : 0px, "sm" : 768px, "md" : 992px, "lg" : 1200px) !default;
```
### Grid gutter modifiers
```scss
$grid-gutter-modifiers: ( "xs" : 0.25, "sm" : 0.75, "md" : 1.5, "lg" : 1.75) !default;
```
If you use .g-row--xs, the gutter is ```$grid-gutter * 0.25;```.<br>
If you use .g-row--lg, the gutter is ```$grid-gutter * 1.75;```.

## Custom variables values
```scss
$grid-gutter: 30px;
@import '~bem-css-grid-test/src/scss/grid/styles';
```
