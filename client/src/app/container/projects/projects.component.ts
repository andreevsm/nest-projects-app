import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { switchMap } from "rxjs/operators";
import { IProject } from "../../model/project/project.interface";
import { ProjectService } from "../../model/project/project.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  searchChange$ = new Subject<string>();

  projects$: Observable<IProject[]> = this.searchChange$.pipe(
    switchMap((search) => this.projectsService.searchAll(search))
  );

  constructor(private projectsService: ProjectService) {}

  onChangeSearch(search: string) {
    this.searchChange$.next(search);
  }
}
