export interface User {
  name?: string;

  /**
   * maybe this can be useful to avoid unnespected type errors
   * if somenone decide to include new keys.
   * use wiselly ;)
   */
  [key: string]: any;
}
