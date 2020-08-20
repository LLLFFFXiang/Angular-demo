import {Component, NgZone, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Form, FormControl, FormGroup} from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name: string;

  ProfileForm = this.fb.group ({
    username: ['', Validators.required],
    mobile: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });

  // 通过把 ActivatedRoute 的一个实例添加到应用的构造函数中来注入它：
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private zone:NgZone)
  {
  }

  // 更新 ngOnInit() 方法来访问这个 ActivatedRoute 并跟踪 id 参数：
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

  onSubmit() {
    console.log(this.ProfileForm.value);
  }

  updateProfile() {
    this.ProfileForm.patchValue({
      username: 'lili',
      mobile: '15187202193',
      address: {
        street: '123 Drew Street'
      }
    });
  }



}
