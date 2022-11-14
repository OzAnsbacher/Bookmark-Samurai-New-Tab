import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder ,  Validators  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-tab';

}


// export class ProfileEditorComponent {
//   profileForm = new FormGroup({
//     firstName: new FormControl(''),
//     lastName: new FormControl(''),
//   });
// }