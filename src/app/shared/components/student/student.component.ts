import { Component } from "@angular/core";
import { Istd } from "../../models/student.interface";




@Component({
    selector : 'app-student',
    templateUrl : './student.component.html',
    styleUrls : ['./student.component.scss']
})
export class StudentComponent{
    stdArr : Array<Istd> = [
        {
            fname : "sachin",                                      
            lname : 'tendulkar',
            email : 'masterblaster',
            contact : 10
        },
        
        {
            fname : 'virat',
            lname : 'kohli',
            email : 'chiku',
            contact : 18
        },
        
        {
            fname : 'rohit',
            lname : 'sharma',
            email : 'hitman',
            contact : 45
        }
    ]
}