import {Step} from './step';

export interface Task {
  _id: String;
  name: String;
  description: String;
  end_date: Date;
  added_date: Date;
  category: String;
  completion: number;
  finished: boolean;
  steps: Array<Step>;
}
