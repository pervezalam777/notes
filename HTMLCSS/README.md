# HTML and CSS notes

## Parse CSS
After loading HTML css gets loaded and parsed. During the parsing it does two important steps 
1) Cascading (resolving conflicting CSS declarations) 
2) Process final CSS value

DOM + CSSOM -> render tree : rendering tree uses the visual formating model for rending final render tree on browser.


## Specificity
The following is the for catagories while calculating css specificity.
1) Inline style
2) IDs
3) Classes, pseudo-classes, attribute
4) Element, pseudo-element


## CSS value processing
The are following important points to know when using px, percentage, em, rem for defining font-size, padding, margin and dimensions.
* Each property has an initial value, used if nothing is declared (and if there is no inheritance)
* Browser specify a root font-size of each page (usually 16px)
* Percentage and relative values are always converted to pixels
* Percentages are measured relative to their parent's font-size, if used to specify font-size
* Percentages are measured relative to their parent's with, if used to specify lengths
* em are measured relative to their parent's font-size, if used to specify font-size
* em are measured relative to current font-size, if used to specify lengths
* rem are always measured relative to the document's root font-size
* vh and vw are simply percentage measurements of the viewport's height and width 

## BEM
BEM stand for Block Element Modifier. BEM is a methodology for naming CSS class name. 

> **BLOCK**: standalone component that is meaningful on its own <br/>
> **ELEMENT**: part of the block that has no standalone meaning <br/>
> **MODIFIER**: a different version of a block or an element 

The following are the few example for the same.
```CSS
/*naming of CSS class with BEM "block__element--modifier" */
.recipe{}
.recipe__hero{}
.recipe__img{}
.recipe__info{}
.recipe__category{}
.recipe__details{}
.recipe__title{}
.recipe__description{}
.recipe__btn {}

.btn{}
.btn--round{}
```

```HTML
<figure  class='recipe'>
    <div class='recipe__hero'>
        <img class='recipe__img' src='' />
    </div>
    <div class='recipe__info'>
        <div class='recipe__category'></div>
    </div>
    <figcaption class='recipe__details'>
        <h2 class='recipe__title'></h2>
        <p class='recipe__description'></p>    
    </figcaption>
    <a class='recipe__btn btn btn--round'></a>
</figure>

```

**recipe** and **btn** are block that can be use as component <br/>
**recipe__hero**, **recipe__img**, **recipe__info** are element of **recipe** block <br/>
**btn--round** is a modifier of **btn** block

### Reference:
* [BEM Naming](http://getbem.com/naming/) 
* [Why you need BEM](https://www.smashingmagazine.com/2018/06/bem-for-beginners/)


## Architect CSS

### Reference
* [happy with your css file in big app?](https://medium.com/@albinotonnina/happy-with-your-css-files-in-your-big-app-ca03d51ed5bd)
* [ITCSS architecture](https://dev.to/carlillo/understanding-itcss-real-case-using-itcss-in-a-ghostcms-blog-1p9b)
* [SMACSS (Scalable and Modular Architect for CSS)](http://smacss.com/)
* [The 7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern)


## Animation

> clip-path : it can be use to create various shapes

> box-size: border-box : include padding and border while calculating container dimension. 

```css
* {
    margin:0;
    padding:0;
}

html {
    box-sizing: border-box;
}

*,
*::after,
*::before {
    box-sizing: inherit;
}

```

> @keyframes define annimation


```css
@keyframes moveInRight {
    0% { }
    80% { }
    100% { }
}

.animation-in {
    animation-name:moveInRight;
    animation-duration: 1s;
    animation-timing-function: ease-in
}
/*or*/
.animation-in-2 {
    animation: moveInRight 1s ease-in
}
```

> *backface-visibility: hidden;* it fixes jerkiness in with animation it should be applied to animation parent element.

> *transition: all 0.2s;* it apply animation to all the property of class. it should added where initial state is defined of an element. it can be used for a subtle animation with sudo classes. like button hover, activated and normal state.

```css
/*the following applied to anchor tag*/
.btn:link
.btn:visited {
    text-transform: uppercase;
    /*remove default style blue color and underline*/
    text-decoration: none; 
    padding: 15px 40px;
    display: inline-block;
    border-radius: 100px;
    transition: all 0.2s;
}

.btn:hover {
    transform: translateY(-3px);
    /*on hover it appear box is lifted up*/
    box-shadow: 0 10px 20px rgb(0,0,0, 0.2);
}

.btn:activate {
    transform: translateY(-1px);
    /*it will gives an effect as it is pushed back
    when user clicks on it. it combine hover and activated*/
    box-shadow: 0 5px 10px rgb(0,0,0, 0.2);
}

.btn.white {
    background-color:#fff;
    color:#777;
}

```

> *animation-fill-mode: backwords* : it applies first keyframe (0%) properties to the button.

> clear-fix

> rem : if you want to create responsive and fluid layout use rem for font-size, padding, margin, width and height. 

> _base.scss : file name start with "_" is called partial file.

> partials and imports

```SCSS
// scss/base/_base.scss


// scss/main.scss
@import "base/base"; // scss compile figure out about _base.scss with this import which is without '_'.

```

> 7-1 pattern (with BEM)

```scss
abstract
    _functions.scss
    _mixins.scss
    _variables.scss
base
    _base.scss
    _animations.scss
    _typography.scss
    _utilities.scss
component
    _button.scss
layout
    _header.scss
page
    _home.scss
theme

vendor
```

_variables.scss
```scss
//_variables.scss
$color-primary:#55c57a;
$color-primary-light:#7ed56f;
$color-primary-dark:#28b485;

$color-secondary-light: #ffb900;
$color-secondary-dark: #ff7730;

$color-tertiary-light: #2998ff;
$color-tertiary-dark: #5643fa;

$color-grey-light-1: #f7f7f7;

$color-grey-dark:#777;
$color-white:#fff;
$color-black:#000;

$grid-width:116rem;
$gutter-horizontal: 6rem;
$gutter-vertical: 8rem;

```

_base.scss
```scss
// _base.scss
*,
*::after
*::before {
    margin:0;
    padding:0;
    box-sizing: inherit;
}

html {
    // 10px (1rem) calculated based on browser default font-size which is 16px so 62.5% = (10*100)/16;
    // This defines what 1rem is
    font-size: 62.5%;
}

body {
    box-sizing: border-box;   
}
```

_typography.scss
```scss
//_typography.scss
body {
    font-family: "lato", sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: $color-grey-dark;
    padding: 3rem
}

.heading_primary {
    color: $color_white;
    text-transform: uppercase;
    backface-visibility: hidden;
    margin-bottom: 6rem;

    &--main {
        display: block;
        font-size: 6rem;
        font-weight: 400;
        letter-spacing: 3.5rem;
        animation: moveInLeft 1s ease-out; 
        /*
        animation-name: moveInLeft;
        animation-duration: 1s;
        animation-timing-function: ease-out;

        animation-delay: 3s;
        animation-iteration-count: 3;
        */
    }

    &--sub {
        display: block;
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 1.7rem;
        animation: moveInRight 1s ease-out; 
    }
}
```


_animation.scss
```scss
@keyframes moveInLeft{
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }
    80% {
        transform: translateX(1rem);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}

@keyframes moveInRight{
    0% {
        opacity: 0;
        transform: translateX(10rem);
    }
    80% {
        transform: translateX(-1rem);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}

@keyframes moveInBottom{
    0% {
        opacity: 0;
        transform: translateY(3rem);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}
```

_button.scss
```scss
.btn{
    &:link
    &:visited {
        text-transform: uppercase;
        /*remove default style blue color and underline*/
        text-decoration: none; 
        padding: 1.5rem 4rem;
        display: inline-block;
        border-radius: 10rem;
        transition: all 0.2s;
        font-size: 1.6rem;
        position:relative;
    }

    &:hover {
        transform: translateY(-3px);
        /*on hover it appear box is lifted up*/
        box-shadow: 0 1rem 2rem rgb($color-black, 0.2);
        
        &::after{
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }   

    &:activate {
        transform: translateY(-1px);
        /*it will gives an effect as it is pushed back
        when user clicks on it. it combine hover and activated*/
        box-shadow: 0 .5rem 1rem rgb($color-black, 0.2);
    }

    &::after {
        content:"";
        display: inline-block;
        height: 100%;
        width:100%;
        border-radius: 10rem;
        position: absolute;
        top:0;
        left:0;
        z-index: -1;
        transition: all .4s;
    }

     &--white {
        background-color:$color-white;
        color:$color-dark-grey;
        &::after {
            background-color:$color-white;
        }
    }

    &--animated {
        animation: moveInBottom .5s ease-out .75s;
        animation-fill-mode:backwards;
    }
}
```

_header.scss
```scss
.header {
    height: 95vh;
    background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, .8);
        rgba($color-primary-dark, .8);
    ), url("../img/hero.jpg");
    background-size: cover;
    background-position: top;
    position: relative;

    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

    &__logo--box{
        position: absolute;
        top: 4rem;
        left: 4rem;
    }

    &__logo {
        height:3.5rem;
    }

    &__text--box{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(50%, 50%);
        text-align: center;
    }
}
```

_mixins.scss
```scss
@mixin clearfix {
    &::after {
        content:"";
        display: table;
        clear: both;
    }
}
/* in order to use clearfix. write in inside the other scss class as '@include clearfix' */
```

_grid.scss
```scss
.row {
    max-width:$grid-width;
    background-color:#eee;
    margin: 0 auto;

    &:not(:last-child){
        margin-bottom: $gutter-vertical;
    }

    @include clearfix;

    [class^="col-"] {
        background-color: orangered;
        float: left;

        &:not(:last-child) {
            margin-right: $gutter-horizontal;
        }
    }

    .col-1-of-2 {
        width: calc((100% - #{$gutter-horizontal}) / 2);
    }

    .col-1-of-3 {
        width: calc((100% - (#{$gutter-horizontal}) * 2) / 3);
    }

    .col-2-of-3 {
        width: calc((((100% - (#{$gutter-horizontal}) * 2) / 3) * 2) + #{$gutter-horizontal});
    }

    .col-1-of-4 {
        width: calc((100% - (#{$gutter-horizontal}) * 3) / 4);
    }

    .col-2-of-4 {
        width: calc((((100% - (#{$gutter-horizontal}) * 3) / 4) * 2) + #{$gutter-horizontal});
    }

    .col-3-of-4 {
        width: calc((((100% - (#{$gutter-horizontal}) * 3) / 4) * 3) + (#{$gutter-horizontal} * 2));
    }
}

```

_utilities.scss
```scss
u-text-center { text-align: center; }
u-margin-bottom-big { margin-bottom: 8rem;}
u-margin-bottom-medium { margin-bottom: 4rem;}
u-margin-bottom-small { margin-bottom: 2rem;}
```

_composition.scss
```scss
.composition {
    position: relative;
    &__photo {
        position: absolute;
        width:55%;
        border-radius: 2px;
        z-index: 10;
        box-shadow: 0 1.5rem 4rem rgba($color-black, .4);
        transition: all .2s;
        outline-offset: 2rem;

        &--p1 {
            left: 0;
            top: -2rem;
        }
        &--p2 {
            right:0;
            top: 2rem;
        }
        &--p3 {
            left: 20%;
            top: 10rem;
        }

        &:hover {
            z-index: 20;
            outline: 1.5rem solid $color-primary;
            transform: scaleY(1.05) translateY(-.5rem);
            box-shadow: 0 2.5rem 4rem rgba($color-black, .5);
        }
    }   

    &:hover &__photo:not(:hover) {
        transform: scale(.95);
    }
}
```

_card.scss
```scss
.card {
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    height: 52rem;

    &__side {
        height: 50rem;
        transition: all .8s ease;
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        backface-visibility: hidden;
        border-radius: 3px;
        overflow:hidden;
        box-shadow: 0 1.5rem 4rem rgba($color-black, .15);

        &--front {
            background-color: $color-white;
        }

        &--back {
            transform: rotateY(180deg)

            &-1 {
                background-image: linear-gradient(
                    to right bottom,
                    $color-secondary-light,
                    $color-secondary-dark
                );
            }
        }
    }
    
    &:hover &__side--front {
        transform: rotateY(-180deg)
    }

      &:hover &__side--front {
        transform: rotateY(0deg)
    }

    //FRONT side styling
    &__picture {
        background-size:cover;
        height: 23rem;
        background-blend-mod: screen;
        clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;

        &--1{
            background-image: linear-gradient(
                    to right bottom,
                    $color-secondary-light,
                    $color-secondary-dark
                ), url('../img/nat-5.jpg')
        }

        &--2 {}
        &--3 {}
    }

    &__heading {
        font-size:2.8rem;
        font-weight:300;
        text-transform: uppercase;
        text-align: right;
        color: $color-white;
        position: absolute;
        top: 12rem;
        right: 2rem;
    }

    &__heading-span {
        padding: 1rem 1.5rem;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;

        &--1{
            background-image: linear-gradient(to right bottom,
            rgba($color-secondary-light, .85),
            rgba($color-secondary-dark, .85));
        }
    }

    &__details {
        padding: 3rem;

        ul {
            list-style: none;
            width: 80%
            margin: 0 auto;
            
            li {
                text-align: center;
                font-size:1.5rem;
                padding: 1rem;

                &:not(:last-child) {
                    border-bottom: 1px solid $color-gray-light-2;
                }
            }
        }
    }
}

```

_story.scss
```scss
.story {
    width: 70%;
    margin: 0 auto;
    box-shadow: 0 3rem 6rem rgba($color-black, .1);
    background-color: $color-white;
    border-radius: 3px;
    padding: 6rem;
    font-size: $default-font-size;

    &__shape {
        width: 15rem;
        height: 15rem;
        background-color: orangered;
        float: left;
        -webkit-shape-outside: circle(50% at 50% 50%);
        shape-outside: circle(50% at 50% 50%);
        -webkit-clip-path: circle(50% at 50% 50%);
        clip-path: circle(50% at 50% 50%);
        transform: translateX(-3rem);
    }

}

```

main.scss
```scss
@import "abstracts/functions";
@import "abstracts/mixins";
@import "abstracts/variables";

@import "base/animations";
@import "base/base";
@import "base/typography";
@import "base/utilities";

@import "component/button";
@import "component/composition";

@import "layout/header";
@import "layout/grid";

@import "page/home";
```


## Basic principles of responsive design and layout type

### Fluid grids and layouts
To allow content to easily adapt to the current viewport width used to browse the website. Use **%** rather than **px** for all layout related lengths (specially widths)

### Flexible responsive images
Images behave differently than text content and so we need to insure that they also adapt nicely to the current viewport. Since images consume most of the part of  Image should be optimized for different viewport size. 

### Media queries
To change styles on certain viewport width (breakpoints). allowing us to create different version of our website for different width.


> best practice do not use *0.5* instead write it like *.5*

> **row:not(:last-child) {}**  -> Properties written in the block will be applied to all row but last row will be excluded.

> **width: calc((100% - #{$gutter-horizontal})/2)**  -> In scss #{} is used for getting the variable value. $gutter-horizontal is 6rem which is 60px as 1 rem is set to 10px as per best practice.

> **[class^="col-"] {}**  -> Properties inside the block will be applied to all the class start with "col-". "^=" symbol tell see from the start. "*=" will check if the class contains "col-" text. "$=" any class that ends with "col-"


> **-webkit-background-clip: text** clip the background in way it is under the text in order to see background through text assign transparent color on text *color: transparent;*

```scss
.heading-secondary {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
    -webkit-background-clip: text;
    color: transparent
}
```

> **transform: skewY(2deg) skewX(2deg)** : This property will skew text or container by 2 degree x and y direction

> **text-shadow: .5rem 1rem 2rem rgba($color-black, .2)** : .5rem in x direction, 1rem in y direction and 2rem blur value

> inline-block element containing the text appear in the center if parent container has *text-align:center;* property


> **& > * {}** the symbol *>* is a referred as direct child of a class not the child of child 
```scss
.section-feature {
    padding: 2rem 0;
    background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, .8),
        rgba($color-primary-dark, .8)
    ), url(../img/nat-4.jpg);
    background-size: cover;
    
    transform: skewY(-7deg);

    & > * {
        transform: skewY(7deg);
    }
}
```


> **shape-outside: circle(50% at 50% 50%)** this will create a outside circle so that text would appear circling around the circle image. it should be combine with float properties. 


> **object-fit: cover** this fit the object in the container with maintaining aspect ratio *cover* is the one of the option available with **object-fit**

> **img** tag supports *src* for single image and *srcset* for multiple images. 
```HTML
<img srcset="img/logo-1x.jpg 1x, img/logo-2x.jpg 2x" alt="logo" class="logo" src="img/logo-2x.jpg" />
```

> **Art Direction** is another way to set images with different screen size.
```HTML
<picture class="logo">
    <source srcset="img/logo-small-1x.jpg 1x, img/logo-small-2x.jpg" media="(max-width: 600px)" />
    <img srcset="img/logo-1x.jpg 1x, img/logo-2x.jpg 2x" alt="logo" class="logo" src="img/logo-2x.jpg"/>
</picture>
```

> **resolution switching** 
```HTML
<img srcset="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
     size="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
     alt="photo"
     class=""
     src="img/nat-1-large.jpg"   
>   

```


**package.json**
```JSON
{
    "name":"scss-packager",
    "version":"1.0.0",
    "description": "SCSS setup for bundling scss file and concatenation at the end",
    "script": {
        "watch:scss": "node-sass sass/main.scss css/style.css -w",
        "devserver":"live-server",
        "start":"npm-run-all --parallel devserver watch:scss",

        "compile:sass":"node-sass sass/main.scss css/style.comp.css",
        "concat:css": "concat -o css/style.concat.css css/icon-font.css css/style.comp.css",
        "prefix:css": "postcss --use autoprefixer -b 'last 10 version' css/style.concat.css -o css/style.prefix.css",
        "compress:css":"node-sass css/style.prefix.css css/style.css --output-style compressed",
        "build:css":"npm-run-all compile:sass concat:css prefix:css compress:css"
    },
    "author":"",
    "devDependencies": {
        "autoprefixer":"^7.1.4",
        "concat":"^1.0.3",
        "node-sass":"^4.5.3",
        "npm-run-all":"^4.1.1",
        "postcss-cli":"^4.1.1"
    }

}

```

## FlexBox
FlexBox is a new module in CSS3 that makes it easy to align elements to one another, in different direction and order; The main idea behind the flexbox is to give the container the ability to expand and to shrink elements to best use all the available space; FlaxBox really changes the way that we build one-dimensional layouts; FlexBox replace float layout;


> Custom properties (sometimes referred to as CSS variables or cascading variables) are entities defined by CSS authors that contain specific values to be reused throughout a document

> **currentColor** it inherit the color value from the parent can be use for setting svg *fill* property
```css
icon {
    color: white;
    fill: currentColor;
}
```

> The **mask-image** CSS property sets the image that is used as mask layer for an element.
```css
.item::before {
    content: "";
    display: inline-block;
    height: 1.75rem;
    width:1.75rem;
    
    //old browser
    //background-image: url(../img/icon.svg);
    //background-size: cover;

    //new browser
    background-color: var(--color-primary);
    -webkit-mask-image: url(../img/icon.svg);
    -webkit-mask-size: cover;
}

```


## References
* [Coding heroes](https://codingheroes.io/resources/)
* [icon to svg](https://icomoon.io/app/#/select)
* [HTML Entities](https://css-tricks.com/snippets/html/glyphs/)