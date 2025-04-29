# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-I-learned)
  - [Continued Development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Loopstudios landing page Desktop preview](https://github.com/Rgit915/loopstudios-landing-page/blob/master/src/screenshots/loopstudio-landing-page-desktop-solution-preview.png)

![Loopstudios landing page Mobile menu preview](https://github.com/Rgit915/loopstudios-landing-page/blob/master/src/screenshots/loopstudios-landing-page-mobile-menu-solution-preview.png)

![Loopstudios landing page Mobile preview](https://github.com/Rgit915/loopstudios-landing-page/blob/master/src/screenshots/loopstudios-landing-page-mobile-solution-preview.png)

### Links

- Solution URL: [Code Repo](https://github.com/Rgit915/loopstudios-landing-page)
- Live Site URL: [Live Demo](https://loopstudios-landing-page-rora.netlify.app/)

## My process

### Built with

- React
- Tailwind CSS
- Flexbox
- Mobile-first workflow

### What I learned

- How to use the `<picture>` element with source and media attributes to implement responsive images.
- Using Tailwind’s group utility to coordinate hover effects between parent and child elements. When you add group to a parent element, you can target its children with group-hover:
```html
<div className="card group relative">
  <img
    src={deepEarthMobile}
    alt="deep earth"
    className="w-full h-auto object-cover transition-opacity group-hover:opacity-50"
  />
  <h3 className="absolute bottom-4 left-4 text-white group-hover:text-black">
    Deep earth
  </h3>
</div>
```
- `transition-opacity` on the image enables a smooth fade effect when hovering.
- `group-hover:opacity-50` fades the image background, making the overlaid text more visible.

- `group-hover:text-black` changes the text color on hover for better contrast.

### Continued Development

- Add hover animations and transitions to card elements for better interactivity.


- Improve accessibility by enhancing keyboard navigation and alt text coverage.

### Useful Resources

- [React Documentation](https://react.dev/) – Helped me understand how to structure components and manage reusable image card layouts effectively. The component-based pattern makes the UI modular and maintainable.

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) – Was incredibly helpful in understanding how to build responsive layouts, apply utility classes for hover effects, and use `group` and `transition` to coordinate animations between elements.

- [MDN Web Docs – `<picture>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) – Clarified how to serve different images for various screen sizes using the `<picture>` tag and `source` elements.


## Author

- GitHub - [Rgit915](https://github.com/Rgit915)
- Frontend Mentor - [@Rgit915](https://www.frontendmentor.io/profile/Rgit915)
