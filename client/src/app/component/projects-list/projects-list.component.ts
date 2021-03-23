import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IProject } from "../../model/project/project.interface";

@Component({
  selector: "app-projects-list",
  templateUrl: "./projects-list.component.html",
  styleUrls: ["./projects-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsListComponent {
  @Input() projects: IProject[] = [];
}
