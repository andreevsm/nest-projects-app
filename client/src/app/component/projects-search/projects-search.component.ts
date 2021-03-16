import { ChangeDetectionStrategy } from "@angular/core";
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { Subject } from "rxjs";
import { debounceTime, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-projects-search",
  templateUrl: "./projects-search.component.html",
  styleUrls: ["./projects-search.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSearchComponent implements OnInit, OnDestroy {
  @Output() changeSearch = new EventEmitter<string>();

  search = new FormControl("");

  private destroy$ = new Subject();

  ngOnInit(): void {
    this.subscribeToSearch();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private subscribeToSearch() {
    this.search.valueChanges
      .pipe(debounceTime(300), takeUntil(this.destroy$))
      .subscribe((search) => this.changeSearch.emit(search));
  }
}
