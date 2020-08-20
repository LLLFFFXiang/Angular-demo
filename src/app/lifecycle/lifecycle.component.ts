import { Component, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent {

  @Input('title') title:string;

  public msg:string='点击控制台观看演示'

  constructor(private route: ActivatedRoute) {
    console.log('0 构造函数执行了---除了使用简单的值对局部变量进行初始化外，什么都不应该做');
  }

  ngOnChanges() {
    console.log('1 ngOnChanges执行了---当被绑定的输入属性的值发生变化时调用（父子组件传值时会触发）');
  }

  ngOnInit() {
    console.log('2 ngOnInit执行了---请求数据一般在这里（只调用一次）');
  }

  ngDoCheck() {
    console.log('3 ngOnCheck执行了---检测，在发生Angular无法或不愿意自己检测时的变化时做出反应');
  }

  ngAfterContentInit() {
    console.log('4 ngAfterContentInit执行了---内容投影到组件后调用');
  }

  ngAfterContentChecked() {
    console.log('5 ngAfterContentChecked执行了---每次完成投影组件内容的变更检测之后调用');
  }

  ngAfterViewInit() {
    console.log('6 ngAfterViewInit执行了---初始化完组件视图及其子视图后调用（放置DOM操作)');
  }

  ngAfterViewChecked() {
    console.log('7 ngAfterViewChecked执行了---每次完成组件视图及其子视图的变更检测后调用');
  }

  ngOnDestroy() {
    console.log('8 ngOnDestroy执行了---');
  }

  ChangeMsg() {
    this.msg='数据改变了';
  }
}
