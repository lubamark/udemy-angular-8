import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';


export class MyValidators {
  static restrictedEmails(control: FormControl): {[key: string]: boolean} {
    if (['mail@mail.ru', 'test@test.ru'].includes(control.value)) {
      return {restrictedEmail: true};
    }

    return null;

  }

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@async.ru') {
          resolve({uniqEmail: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
