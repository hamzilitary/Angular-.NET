export class ToDo {
  public $key: any;
  public suggest: boolean;
  constructor(public task: string, public description: string, public conditions: string, public temperature: number) { }
}
