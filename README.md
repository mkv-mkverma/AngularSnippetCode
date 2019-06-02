# AngularSnippetCode

 ## Angular interview questions
https://www.geeksforgeeks.org/difference-between-typescript-and-javascript/
https://www.geeksforgeeks.org/whats-the-difference-between-scripting-and-programming-languages/
https://hackr.io/blog/angular-interview-questions

ng-container and ng-template *ngtemplateoutlet='tempref' content={text:text}

<ng-container *ngtemplateoutlet='tempref; context: { item: item }'></ng-container>

<ng-template #tempref let-item="item">{{text}}<ng-template>

https://stackoverflow.com/questions/52908844/what-are-practical-scenarios-of-ngtemplateoutlet-directive

ng-content
https://medium.com/@joshblf/wtf-is-ng-content-8382b2a664e1

@component({
	selector: 'app-button'
	template: `<button (click)="add()">
					<ng-content></ng-content>
				</button>
});
export class child {
	add(){
		//Todo
	}
}

parent.html

<app-button>Add New</app-button>
In the template for the reusable add button component we use the <ng-content></ng-content> tag as our placeholder for the button text. 
This is telling Angular, “Hey, I don’t know what this is supposed to be right now but, I promise to tell you later”.


DI is a coding pattern in which a class asks for dependencies (services or objects that a class needs to perform its function) 
from external sources rather than creating them itself.

@Injectable
The injector is responsible for creating service instances and injecting them into classes.

JIT - Compile TypeScript just in time for executing it.

Compiled in the browser.
Each file compiled separately.
No need to build after changing your code and before reloading the browser page.
Suitable for local development.
AOT - Compile TypeScript during build phase.

Compiled by the machine itself, via the command line (Faster).
All code compiled together, inlining HTML/CSS in the scripts.
No need to deploy the compiler (Half of Angular size).
More secure, original source not disclosed.
Suitable for production builds.


## forms
Template Driven Forms Features

Easy to use
Suitable for simple scenarios and fails for complex scenarios
Similar to AngularJS
Two way data binding(using [(NgModel)] syntax)
Minimal component
Automatic track of the form and its data(handled by Angular)
Unit testing is another challenge
Reactive Forms Features

More flexible, but needs a lot of practice

Handles any complex scenarios

No data binding is done (immutable data model preferred by most developers)

More component code and less HTML markup

Reactive transformations can be made possible such as

Handling a event based on a debounce time

Handling events when the components are distinct until changed

Adding elements dynamically

Easier unit testing

With the template driven approach you basically apply directives, such as ngModel, in your template. Based on these directives Angular will create formcontrol objects. This approach is good for building simple forms with basic validation (required, minlength, maxlength,...).

With the reactive approach you basically need to create new instances of the formcontrols and formcontrolgroups in your component. Reactive forms are also the best choice for building more complex forms and are better in case you have the intention to implement unit testing for your forms.


You should be aware that the getXxx() methods will be called every time change detection runs, 
which can be quite often. Ensure that the getters return the same value (especially for objects the same instance) 
and ensure the getters don't have side effects, otherwise you'll get "Expression has changed since it was last checked ..." errors.

ng g s utils/services/dataShared --module=app.module

## LocalStorage

localStorage.removeItem('key');
localStorage.getItem('key');
localStorage.setItem('key',value);
localStorage.clear();

## TypeScript:

 

Abstraction, Encapsulation, Inheritance & Polymorphism: https://rachelappel.com/2015/01/02/write-object-oriented-javascript-with-typescript/

REST, default & optional params: https://howtodoinjava.com/typescript/functions-rest-optional-default-params/

Overloading: https://www.bennadel.com/blog/3339-using-method-and-function-overloading-in-typescript.htm

Iterators & decorators: https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html

Intersections & union types: https://www.typescriptlang.org/docs/handbook/advanced-types.html

Decorators: https://www.typescriptlang.org/docs/handbook/decorators.html


## Angular:

 
Bootstrapping: https://angular.io/guide/bootstrapping

Lifecycle hooks: https://www.cuelogic.com/blog/angular-lifecycle

Routing: https://blog.angularindepth.com/the-three-pillars-of-angular-routing-angular-router-series-introduction-fb34e4e8758e

Router gaurd: https://codecraft.tv/courses/angular/routing/router-guards/

Dependency injection (injectors, providers): https://angular.io/guide/dependency-injection

Forms: https://angular-templates.io/tutorials/about/angular-forms-and-validations

Directives: https://www.sitepoint.com/practical-guide-angular-directives/

HostListener & HostBinding: https://codecraft.tv/courses/angular/custom-directives/hostlistener-and-hostbinding/

Pipe: https://scotch.io/tutorials/create-a-globally-available-custom-pipe-in-angular-2

Component communications: https://medium.com/@mirokoczka/3-ways-to-communicate-between-angular-components-a1e3f3304ecb

ViewChildren, ViewChild, ContentChildren & ContentChild: https://medium.com/@tkssharma/understanding-viewchildren-viewchild-contentchildren-and-contentchild-b16c9e0358e 

Services: https://angular.io/tutorial/toh-pt4

HTTP Client: https://www.techiediaries.com/angular-http-client/

Web workers: https://medium.com/@damoresac/using-web-workers-on-angular-6-6fd0490d07b5

Base project structure & Webpack config: https://jasonwatmore.com/post/2019/04/24/angular-7-tutorial-part-2-create-base-project-structure-webpack-config

AOT: https://angular.io/guide/aot-compiler

Unit Tesitng: https://medium.com/@selvarajchinnasamyks/angular-7-unit-testing-97dccfdca900

Mock backend: https://jasonwatmore.com/post/2019/05/02/angular-7-mock-backend-example-for-backendless-development
     

## NgRx:

 

State, actions & reducers: https://dzone.com/articles/managing-state-in-angular-with-ngrxstore

https://blog.angularindepth.com/ngrx-tips-tricks-69feb20a42a7  

 
