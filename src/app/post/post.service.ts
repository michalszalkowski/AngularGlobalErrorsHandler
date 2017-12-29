import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';

@Injectable()
export class PostService {

  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {
  }

  getPost(id): any {
    return this.http.get(this.url + "/" + id);
  }

  getPosts(): any {
    return this.http.get(this.url)
      .catch((error: Response) => {
        if (error.status === 404) {
          console.log('Some special case')
        }
        // pass error that is not special case, then GlobalHandler with catch this
        else throw error;
      });
  }
}
