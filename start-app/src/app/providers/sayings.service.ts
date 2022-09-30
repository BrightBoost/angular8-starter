import { Injectable } from "@angular/core";
import { Saying } from "../models/saying.model";

@Injectable({
  providedIn: "root",
})
export class SayingsService {
  categories: Array<string>;
  sayings: Array<Saying>;

  constructor() {
    this.sayings = [
      new Saying(
        "Inspiration",
        "You're braver than you believe, and stronger than you seem, and smarter than you think."
      ),
      new Saying(
        "Inspiration",
        "Nothing is particularly hard if you break it down into small jobs."
      ),
      new Saying("Staying Safe", "An apple a day keeps the doctor away."),
      new Saying(
        "Staying Safe",
        "A ship in a harbor is safe, but that is not what ships are for."
      ),
      new Saying(
        "Statistics",
        "He uses statistics as a drunken man uses lamp posts... for support rather than illumination."
      ),
    ];
    this.categories = ["Inspiration", "Staying Safe", "Statistics"];
  }

  public getCategories(): Array<string> {
    return this.categories;
  }

  public getSayings(): Array<Saying> {
    console.log("getting sayings from service", this.sayings);
    return this.sayings;
  }
  public getSayingsThatMatchCategory(category: string): Array<Saying> {
    let matching = this.sayings.filter((s) => (s.category == category));
    return matching;
  }
}
