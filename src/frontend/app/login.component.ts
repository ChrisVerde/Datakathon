import { IComponentOptions } from "angular";
import * as ng from "angular";

export class LoginController {
    constructor(private $scope: ng.IScope) {
        this.username = "";
    }
    public username: string;
    submit() {
        this.$scope.$emit("loggedIn", this.username);
    }
}
export const LoginTemplate: string = `
<div>
    <div>
        <label for="username-field">User name</label>
        <input type="text" ng-model="$ctrl.username" id="username-field">
        <button ng-click="$ctrl.submit()">Submit to your master</button>
    </div>
</div>
`;