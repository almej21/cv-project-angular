import {
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Subscription } from 'rxjs';

const VALID_PATTERN = "^[a-zA-Z -']+";
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit, OnDestroy {
  public form!: FormGroup;
  public sub!: Subscription;
  public data$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  @ViewChild('popUpSuccess') popUpSuccessTemplate!: TemplateRef<any>;
  @ViewChild('popUpError') popUpErrorTemplate!: TemplateRef<any>;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {}

  public ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(VALID_PATTERN)]],
      lastName: ['', [Validators.required, Validators.pattern(VALID_PATTERN)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public clickButton() {
    this.sub = this.data$.subscribe({
      next: (res) => {
        if (res) {
          this._snackBar.openFromTemplate(this.popUpSuccessTemplate, {
            duration: 2000,
            verticalPosition: 'top',
            panelClass: ['popup-success'],
          });
        } else {
          this._snackBar.openFromTemplate(this.popUpErrorTemplate, {
            duration: 2000,
            verticalPosition: 'top',
            panelClass: ['popup-error'],
          });
        }
      },
    });
    this.data$.next(this.form.valid);
    this.form.valid && this.form.reset();
  }

  public ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
