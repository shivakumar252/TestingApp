# Insureminds

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Development related test cases
developed this website for two users ,for one private user and public user.
for private user we are giving access to the gallery tool bar menu option,but we are hiding the gallery tool bar option for public users
email:abc@media.com
password:abc123
this user treated as private user.
email:def@media.com
password:def123

For this i used the ReactiveForms approach with form group and validators for validations
here ,i validate the email id patterns
and empty field of username and password .

here i implemented with success toast message ,for this i had ngx-Toast service for on login successful
and error toast mesaage for empty field of username and password and on click of sign in.

I implemented with common header file.
and i implemented the Lazy module for all the other modules like home,About and Gallery module.

I had used the querry params,for sending the data from login to other screens.and also i had used the 
@Input set concept for data transfering between parent and child i.e from Login screen to header component.I had set the isPrivateUser boolean property ,based on i am authenticating it as private user and public user .

i had used the shared module ,in order to use the headercomponent in all other components.
In gallery screen for animation of the images used ngx-animation
and i created the json file ,from that file i had get the images by creating the service.

Logout functionality is used for logout from the applications.
I had created  enum in Global constants in order to mention the constsnt contents of the different web screens.