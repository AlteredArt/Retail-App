import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
    "id":1,
    "name":"Bungalo",
    "type":"House",
    "price":1200
},
{
  "id":2,
  "name":"Bango",
  "type":"Mansion",
  "price":12200
},
{
  "id":3,
  "name":"Bungalo",
  "type":"House",
  "price":1200
},
{
  "id":4,
  "name":"Bungalo",
  "type":"House",
  "price":1200
},
{
  "id":5,
  "name":"Bungalo",
  "type":"House",
  "price":1200
},
{
  "id":6,
  "name":"Bungalo",
  "type":"House",
  "price":1200
},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
