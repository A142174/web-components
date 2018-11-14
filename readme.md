# Web Components

This is a sample project for building a standalone Address Search Web Component using Stencil and Angular Elements.

Both web components function the exact same just built using different technologies.


## Stencil: A Compiler for Web Components

Stencil is a compiler that generates Web Components (more specifically, Custom Elements). Stencil combines the best concepts of the most popular frameworks into a simple build-time tool.

Stencil takes features such as

- Virtual DOM
- Async rendering (inspired by React Fiber)
- Reactive data-binding
- TypeScript
- JSX

and then generates standards-based Web Components with these features baked in.

Since Stencil generates standards-compliant web components, they can work with many popular frameworks right out of the box, and can be used without a framework because they are just web components. Stencil also enables a number of key capabilities on top of Web Components, in particular, pre-rendering, and objects-as-properties (instead of just strings).

Compared to using Custom Elements directly, Stencil provides extra APIs that makes writing fast components simpler. APIs like Virtual DOM, JSX, and async rendering make fast, powerful components easy to create, while still maintaining 100% compatibility with Web Components.

The developer experience is also tuned, and comes with live reload and a small dev server baked in to the compiler.

Goals And Objectives

- [Web Standards](https://stenciljs.com/docs/goals-and-objectives#web-standards)
- [Automatic Optimisations](https://stenciljs.com/docs/goals-and-objectives#automatic-optimizations)
- [Future Friendly](https://stenciljs.com/docs/goals-and-objectives#future-friendly)
- [Run-time Performance](https://stenciljs.com/docs/goals-and-objectives#run-time-performance)
- [Tiny API](https://stenciljs.com/docs/goals-and-objectives#tiny-api)
- [Framework Features During Development](https://stenciljs.com/docs/goals-and-objectives#framework-features-during-development)
- [Wide Browser Support](https://stenciljs.com/docs/goals-and-objectives#wide-browser-support)  

   Chrome 60+  
   Safari 10.1+  
   Firefox 63+  
   Edge 16+  
   IE 11  
   Support with bundled polyfills  



## Angular Elements

Angular elements are Angular components packaged as custom elements, a web standard for defining new HTML elements in a framework-agnostic way.

[Custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) are a Web Platform feature currently supported by Chrome, Opera, and Safari, and available in other browsers through polyfills (see [Browser Support](https://angular.io/guide/elements#browser-support)). A custom element extends HTML by allowing you to define a tag whose content is created and controlled by JavaScript code. The browser maintains a CustomElementRegistry of defined custom elements (also called Web Components), which maps an instantiable JavaScript class to an HTML tag.

The `@angular/elements` package exports a `createCustomElement()` API that provides a bridge from Angular's component interface and change detection functionality to the built-in DOM API.

Transforming a component to a custom element makes all of the required Angular infrastructure available to the browser. Creating a custom element is simple and straightforward, and automatically connects your component-defined view with change detection and data binding, mapping Angular functionality to the corresponding native HTML equivalents.

> Angular are working on custom elements that can be used by web apps built on other frameworks. A minimal, self-contained version of the Angular framework will be injected as a service to support the component's change-detection and data-binding functionality. For more about the direction of development, check out this [video presentation](https://www.youtube.com/watch?v=Z1gLFPLVJjY&t=4s).


## Comparison

| Web Components   | Size (minified) | Gzipped | Fast 4g | Fast 3g | Slow 3g | Firefox |
| ---------------- | --------------- | ------- | ------- | ------- | ------- | ------- |
| Stencil          | 29 KB           | 11.8 KB | 152ms   | 723ms   | 2.56s   | Yes     |
| Angular Elements | 305 KB          | 86.5 KB | 205ms   | 2.22s   | 8.10s   | No      |
