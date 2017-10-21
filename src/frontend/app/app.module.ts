import * as angular from "angular";
import * as uiRouter from "@uirouter/angularjs";
import { IState, IStateProvider } from "angular-ui-router";
import { LoginTemplate, LoginController } from "./login.component";

alert("just do it")
angular.module("app", ["ui.router"])
    .config(function ($stateProvider: IStateProvider) {
        $stateProvider.state("login", {
            url: "",
            controller: LoginController,
            template: LoginTemplate
        });
    })
    .run(["$rootscope", function ($rootscope: ng.IRootScopeService) {
        console.log($rootscope)
        // $rootscope.$on("loggedIn", function($event){
        //     alert($event);
        // });
    }])
    //.value("USER", "Hello")
    // .component("LoginComponent", LoginComponent)