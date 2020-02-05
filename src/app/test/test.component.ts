import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  answers = [
    {
      text: "Alabama",
      x: "413",
      y: "273"
    },
    {
      text: "Alaska",
      x: "100",
      y: "317"
    },
    {
      text: "Arizona",
      x: "125",
      y: "254"
    },
    {
      text: "Arkansas",
      x: "347",
      y: "255"
    },
    {
      text: "California",
      x: "48",
      y: "194"
    },
    {
      text: "Colorado",
      x: "199",
      y: "193"
    },
    {
      text: "Connecticut",
      x: "545",
      y: "121"
    },
    {
      text: "Delaware",
      x: "549",
      y: "177"
    },
    {
      text: "Florida",
      x: "488",
      y: "332"
    },
    {
      text: "Georgia",
      x: "451",
      y: "266"
    },
    {
      text: "Hawaii",
      x: "173",
      y: "360"
    },
    {
      text: "Idaho",
      x: "115",
      y: "108"
    },
    {
      text: "Illinois",
      x: "373",
      y: "174"
    },
    {
      text: "Indiana",
      x: "408",
      y: "171"
    },
    {
      text: "Iowa",
      x: "326",
      y: "150"
    },
    {
      text: "Kansas",
      x: "281",
      y: "202"
    },
    {
      text: "Kentucky",
      x: "431",
      y: "202"
    },
    {
      text: "Louisiana",
      x: "349",
      y: "303"
    },
    {
      text: "Maine",
      x: "556",
      y: "50"
    },
    {
      text: "Maryland",
      x: "512",
      y: "165"
    },
    {
      text: "Massachusetts",
      x: "567",
      y: "102"
    },
    {
      text: "Michigan",
      x: "413",
      y: "101"
    },
    {
      text: "Minnesota",
      x: "314",
      y: "91"
    },
    {
      text: "Mississippi",
      x: "382",
      y: "282"
    },
    {
      text: "Missouri",
      x: "340",
      y: "199"
    },
    {
      text: "Montana",
      x: "172",
      y: "78"
    },
    {
      text: "Nebraska",
      x: "259",
      y: "162"
    },
    {
      text: "Nevada",
      x: "81",
      y: "168"
    },
    {
      text: "New Hampshire",
      x: "546",
      y: "86"
    },
    {
      text: "New Jersey",
      x: "536",
      y: "142"
    },
    {
      text: "New Mexico",
      x: "191",
      y: "253"
    },
    {
      text: "New York",
      x: "514",
      y: "102"
    },
    {
      text: "North Carolina",
      x: "503",
      y: "218"
    },
    {
      text: "North Dakota",
      x: "254",
      y: "78"
    },
    {
      text: "Ohio",
      x: "442",
      y: "162"
    },
    {
      text: "Oklahoma",
      x: "290",
      y: "245"
    },
    {
      text: "Oregon",
      x: "65",
      y: "95"
    },
    {
      text: "Pennsylvania",
      x: "496",
      y: "140"
    },
    {
      text: "Rhode Island",
      x: "573",
      y: "123"
    },
    {
      text: "South Carolina",
      x: "484",
      y: "248"
    },
    {
      text: "South Dakota",
      x: "256",
      y: "120"
    },
    {
      text: "Tennessee",
      x: "418",
      y: "228"
    },
    {
      text: "Texas",
      x: "273",
      y: "309"
    },
    {
      text: "Utah",
      x: "137",
      y: "179"
    },
    {
      text: "Vermont",
      x: "525",
      y: "77"
    },
    {
      text: "Virginia",
      x: "497",
      y: "188"
    },
    {
      text: "Washington",
      x: "76",
      y: "48"
    },
    {
      text: "West Virginia",
      x: "468",
      y: "181"
    },
    {
      text: "Wisconsin",
      x: "360",
      y: "114"
    },
    {
      text: "Wyoming",
      x: "182",
      y: "132"
    }
  ];

  constructor() {}

  ngOnInit() {}

  attempt(answer: any) {
    alert(answer.text);
  }
}
