import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {FormArray, FormControl, FormGroup, FormsModule} from "@angular/forms";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  formModel = new FormGroup({
    dateRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    emails: new FormArray([
      new FormControl("123@qq.com"),
      new FormControl("456@qq.com")
    ])
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

  addEmail() {
    // 返回的控件的类型是 AbstractControl,所以提供一个显式的类型声明来访问FormArray。
    let emails = this.formModel.get("emails") as FormArray;
    emails.push(new FormControl());
    console.log(this.formModel.value);
  }
}
