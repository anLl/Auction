import {Component, OnInit} from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private imgUrl = 'http://iph.href.lu/320x150';

  constructor() {
  }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个产品', 40, 3.5, '这是第一个产品的信息描述部分', ['运动鞋', '体育产品'], 'http://iph.href.lu/320x150'),
      new Product(2, '第一个产品', 50, 1.5, '这是第二个产品的信息描述部分', ['运动鞋', '体育产品'], 'http://iph.href.lu/320x150'),
      new Product(3, '第一个产品', 60, 3.5, '这是第三个产品的信息描述部分', ['运动鞋', '体育产品'], 'http://iph.href.lu/320x150'),
      new Product(4, '第一个产品', 70, 4.5, '这是第四个产品的信息描述部分', ['运动鞋', '体育产品'], 'http://iph.href.lu/320x150'),
      new Product(5, '第一个产品', 80, 2.5, '这是第五个产品的信息描述部分', ['运动鞋', '体育产品'], 'http://iph.href.lu/320x150'),
      new Product(6, '第一个产品', 90, 2.5, '这是第六个产品的信息描述部分', ['运动鞋', '体育产品'], 'http://iph.href.lu/320x150'),
    ]
    ;
  }

}
