import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { categories,productsdetail }  from '../model/list'
import { environment } from '../environment/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemlistsService {

  constructor(private http:HttpClient) { }

  getitems(){
    return this.http.get<any[]>(environment.baseurl+'categories')
  }

  getproductlist(){
    return this.http.get<any[]>(environment.baseurl+'category/jewelery')
  }

  getProductsByCategory(categories:categories[]){
    return this.http.get<any[]>(`environment.baseurl + 'category/' + ${categories}`)
  }

  getProductById(productId: string | number): Observable<any> {
    return this.http.get<any>(`${environment.baseurl}/products/${productId}`);
  }

}
