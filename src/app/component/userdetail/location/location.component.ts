import { Component, Input, OnInit,  Output, EventEmitter, OnDestroy} from '@angular/core';
import { Map, DomUtil, ZoomAnimEvent , Layer, MapOptions, tileLayer, latLng, icon, marker } from 'leaflet';
import { Coordinate } from 'src/app/interface/coordinate.interface';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, OnDestroy{  
 
  @Input() coordinate: Coordinate;
  @Input() firstName: string;
  @Input() options: MapOptions;

  @Output() map$: EventEmitter<Map> = new EventEmitter;
  @Output() zoom$: EventEmitter<number> = new EventEmitter;
  

  public map: Map;
  public zoom: number;
  icon =icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconSize: [32, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

  constructor() { 
  }

  ngOnInit(): void {
    this.options = {
      layers:[tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        maxZoom:30,
        crossOrigin: true,                              
        detectRetina: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })],
      zoom:8,
      center:latLng(this.coordinate.latitude, this.coordinate.longitude)
    } ;
  } 


  onMapReady(map: Map) {
    this.map = map;
    this.map$.emit(map);
    this.zoom = map.getZoom();
    this.zoom$.emit(this.zoom);
    // Create a marker instance
    marker(
      [this.coordinate.latitude, this.coordinate.longitude],
      { icon: this.icon } 
    ).addTo(this.map).bindPopup(`${this.firstName}'s Location`).openPopup(); 
    
  }

  ngOnDestroy() {
    this.map.clearAllEventListeners;
    this.map.remove();
  };
}