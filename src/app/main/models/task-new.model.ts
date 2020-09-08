import {CardCollectorModel} from './card-collector.model';

export class TaskNewModel {
  constructor(
    public taskName: string, public cardTitle: CardCollectorModel) {
  }
}
