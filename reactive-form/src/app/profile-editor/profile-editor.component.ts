/**
 * forms
 * Template Driven Forms Features
 * Easy to use
 * Suitable for simple scenarios and fails for complex scenarios
 * Similar to AngularJS
 * Two way data binding(using [(NgModel)] syntax)
 * Minimal component
 * Automatic track of the form and its data(handled by Angular)
 * Unit testing is another challenge
 * Reactive Forms Features
 * More flexible, but needs a lot of practice
 * Handles any complex scenarios
 * No data binding is done (immutable data model preferred by most developers)
 * More component code and less HTML markup
 * Reactive transformations can be made possible such as
 * Handling a event based on a debounce time
 * Handling events when the components are distinct until changed
 * Adding elements dynamically
 * Easier unit testing
 * With the template driven approach you basically apply directives, such as ngModel,
 * in your template. Based on these directives Angular will create formcontrol objects.
 * This approach is good for building simple forms with basic validation (required, minlength, maxlength,...).
 * With the reactive approach you basically need to create new instances of the formcontrols and formcontrolgroups in your component.
 * Reactive forms are also the best choice for building more complex forms and are better in case you
 * have the intention to implement unit testing for your forms.
 */

import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray
} from "@angular/forms";
import {} from "@angular/forms";
@Component({
  selector: "app-profile-editor",
  templateUrl: "./profile-editor.component.html",
  styleUrls: ["./profile-editor.component.css"]
})
export class ProfileEditorComponent implements OnInit {
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  profileForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: [""],
    address: this.fb.group({
      street: [""],
      city: [""],
      state: [""],
      zip: [""]
    }),
    aliases: this.fb.array([this.fb.control("")])
  });

  constructor(private fb: FormBuilder) {}
  ngOnInit() {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: "Nancy",
      address: {
        street: "123 Drew Street"
      }
    });
  }
  get aliases() {
    return this.profileForm.get("aliases") as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(""));
  }
}
