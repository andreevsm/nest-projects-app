import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Subject } from "rxjs";
import { switchMap } from "rxjs/operators";
import { ProjectService } from "src/app/model/project/project.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  searchChange$ = new Subject<string>();

  projects$ = this.searchChange$.pipe(
    switchMap((search) => this.projectsService.searchAll(search))
  );

  constructor(private projectsService: ProjectService) {}

  onChangeSearch(search: string) {
    this.searchChange$.next(search);
  }
}
