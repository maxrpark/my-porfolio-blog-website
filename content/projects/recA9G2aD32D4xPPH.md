---
title: NPM SimpleSlider
id: rec30gHV1ne6J0nPj
img: https://dl.airtable.com/.attachments/3b43b92b3ada68a19a3615734b1431a8/fc7aec6f/simpleSlider.png
description: Display a simple slidershow/ carousel   in you website with this simple but effective package.
alt: Home page image
---

# Simpleslider

Take a look at the example on [codepen](https://codepen.io/maxrpark/pen/ExwXRPb).

This package is really simple to use and I let you display a slides-show or carousel on your website without having to worry at all.

All you need to do is to create a section or div tag with the class slidesContainer and inside it place as many div tags as you want your slides-show or carousel to have. This div needs to have the slide class to work.

## Installation

```
npm i @maxcoding/simpleslider
```

## Usage

### Register the packeget

```
import simpleSlider from '@maxcoding/simpleslider'
```

or

```
import simpleslider from './node_modules/@maxcoding/simpleslider/index.js';
```

#### Javascript

After registering the package inside your javascript file you just need to past this:

```
simpleslider()
```

#### Vue

```
  mounted() {
    simpleSlider();
  },
```

## Template

```
    <section class="sliderContainer">
      <div class="slide">
        <img src="cat1.jpg" alt="" />
      </div>
      <div class="slide">
        <img src="cat2.jpg" alt="" />
      </div>
      <div class="slide">
        <img src="cat3.jpg" alt="" />
      </div>
    </section>
```

### Params

SimpelSlider have some basic params so you can start using it right away but also it gives you the chance to customize them.

| Param       | Description                       | Default | Notes        |
| ----------- | --------------------------------- | ------- | ------------ |
| height      | Control height of sliderContainer | 600px   | Use px or vh |
| width       | Control width of sliderContainer  | 600px   | Use px or vh |
| autoSlide   | Run new slide every 3 seconds     | false   |              |
| arrow       | Display arrows                    | true    |              |
| color       | Change color of arrows            | black   | RGB hex name |
| arrowSize   | Size of arrows                    | 1       | From 1 to 5  |
| arrowWeight | Size of weight                    | 5       | From 1 to 10 |

### Example

```
     <section
      class="sliderContainer"
      height="300px"
      width="300px"
      arrow="true"
      arrowSize="2"
      color="white"
    >
      <div class="slide">
        <img src="cat1.jpg" alt="" />
      </div>
      <div class="slide">
        <img src="cat2.jpg" alt="" />
      </div>
      <div class="slide">
        <img src="cat3.jpg" alt="" />
      </div>
    </section>
```
