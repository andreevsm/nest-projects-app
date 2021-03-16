import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IProject } from "./project.interface";
import { HttpClient } from "@angular/common/http";
import { PROJECTS_SEARCH } from "src/app/core/constant";

@Injectable({ providedIn: "root" })
export class ProjectService {
  private _projects$ = new BehaviorSubject<IProject[]>([]);

  get projects$(): Observable<IProject[]> {
    return this._projects$.asObservable();
  }

  constructor(private httpClient: HttpClient) {}

  searchAll(search: string): Observable<IProject[]> {
    return this.httpClient.post<IProject[]>(PROJECTS_SEARCH, { search });
  }
}
