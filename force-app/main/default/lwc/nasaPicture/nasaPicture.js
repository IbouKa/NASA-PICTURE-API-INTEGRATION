/**
 * @description       :
 * @author            : Ibou KA
 * @group             :
 * @last modified on  : 09-20-2024
 * @last modified by  : Ibou KA
 **/
import { LightningElement } from "lwc";
import nasa_key from "@salesforce/label/c.nasa_key_api";
export default class NasaPicture extends LightningElement {
  imageUrl;
  mydate = new Date();
  currentdate;

  connectedCallback() {
    this.callApi(this.mydate);
  }
  handleBack() {
    this.mydate.setDate(this.mydate.getDate() - 1);
    this.callApi(this.mydate);
  }
  handleNext() {
    this.mydate.setDate(this.mydate.getDate() + 1);
    this.callApi(this.mydate);
  }
  callApi(date) {
    this.currentdate = date;
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=" +
        nasa_key +
        "&date=" +
        date.toISOString().split("T")[0],
      {
        method: "GET",
      }
    )
      .then((result) => result.json())
      .then((data) => {
        console.log("DATA ", data);
        this.imageUrl = data.hdurl;
      });
  }
}
