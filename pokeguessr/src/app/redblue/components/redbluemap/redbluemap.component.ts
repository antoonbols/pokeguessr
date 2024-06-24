import { ChangeDetectionStrategy, Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MapItem } from '../../types/map.item';

@Component({
  selector: 'redblue-map',
  templateUrl: './redbluemap.component.html',
  styleUrls: ['./redbluemap.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RedBlueMapComponent implements OnChanges {
  @Output() public hoveredItem = new EventEmitter<{
    hoveredId: string;
  }>();

  @Output() public selectedItem = new EventEmitter<{
    selectedItem: string;
  }>();

  hoveredMapItem: string = "";

  // selectedMapItem: string = "";

  mapItems: MapItem[] = [
    { id: "route-1", itemId: "route-1", width: 20, height: 40, x: 80, y: 180 },
    { id: "route-2", itemId: "route-2", width: 20, height: 60, x: 80, y: 100 },
    { id: "route-3-a", itemId: "route-3", width: 60, height: 20, x: 100, y: 60 },
    { id: "route-3-b", itemId: "route-3", width: 20, height: 20, x: 140, y: 40 },
    { id: "route-4", itemId: "route-4", width: 60, height: 20, x: 180, y: 40 },
    { id: "route-5", itemId: "route-5", width: 20, height: 40, x: 240, y: 60 },
    { id: "route-6", itemId: "route-6", width: 20, height: 60, x: 240, y: 120 },
    { id: "route-7", itemId: "route-7", width: 40, height: 20, x: 200, y: 100 },
    { id: "route-8", itemId: "route-8", width: 60, height: 20, x: 260, y: 100 },
    { id: "route-9", itemId: "route-9", width: 60, height: 20, x: 260, y: 40 },
    { id: "route-10", itemId: "route-10", width: 20, height: 60, x: 320, y: 40 },
    { id: "route-11", itemId: "route-11", width: 60, height: 20, x: 260, y: 180 },
    { id: "route-12", itemId: "route-12", width: 20, height: 100, x: 320, y: 120 },
    { id: "route-13", itemId: "route-13", width: 80, height: 20, x: 260, y: 220 },
    { id: "route-14", itemId: "route-14", width: 20, height: 40, x: 260, y: 240 },
    { id: "route-15", itemId: "route-15", width: 40, height: 20, x: 220, y: 260 },
    { id: "route-16", itemId: "route-16", width: 60, height: 20, x: 120, y: 100 },
    { id: "route-17", itemId: "route-17", width: 20, height: 140, x: 120, y: 120 },
    { id: "route-18", itemId: "route-18", width: 80, height: 20, x: 120, y: 260 },
    { id: "route-19", itemId: "route-19", width: 20, height: 40, x: 200, y: 280 },
    { id: "route-20", itemId: "route-20", width: 100, height: 20, x: 100, y: 300 },
    { id: "route-21", itemId: "route-21", width: 20, height: 60, x: 80, y: 240 },
    { id: "route-22", itemId: "route-22", width: 40, height: 20, x: 40, y: 160 },
    { id: "route-23", itemId: "route-23", width: 20, height: 100, x: 40, y: 60 },
    { id: "route-24", itemId: "route-24", width: 20, height: 40, x: 240, y: 0 },
    { id: "route-25", itemId: "route-25", width: 40, height: 20, x: 260, y: 0 },
    { id: "pallet-town", itemId: "pallet-town", width: 20, height: 20, x: 80, y: 220 },
    { id: "viridian-city", itemId: "viridian-city", width: 20, height: 20, x: 80, y: 160 },
    { id: "indigo-plateau", itemId: "indigo-plateau", width: 20, height: 20, x: 40, y: 40 },
    { id: "pewter-city", itemId: "pewter-city", width: 20, height: 20, x: 80, y: 60 },
    { id: "cerulean-city", itemId: "cerulean-city", width: 20, height: 20, x: 240, y: 40 },
    { id: "vermilion-city", itemId: "vermilion-city", width: 20, height: 20, x: 240, y: 180 },
    { id: "lavender-town", itemId: "lavender-town", width: 20, height: 20, x: 320, y: 100 },
    { id: "saffron-city", itemId: "saffron-city", width: 20, height: 20, x: 240, y: 100 },
    { id: "celadon-city", itemId: "celadon-city", width: 20, height: 20, x: 180, y: 100 },
    { id: "fuchsia-city", itemId: "fuchsia-city", width: 20, height: 20, x: 200, y: 260 },
    { id: "cinnabar-island", itemId: "cinnabar-island", width: 20, height: 20, x: 80, y: 300 },
    { id: "victory-road", itemId: "victory-road", width: 20, height: 20, x: 40, y: 80 },
    { id: "viridian-forest", itemId: "viridian-forest", width: 20, height: 20, x: 80, y: 80 },
    { id: "mt-moon", itemId: "mt-moon", width: 20, height: 20, x: 160, y: 40 },
    { id: "rock-tunnel", itemId: "rock-tunnel", width: 20, height: 20, x: 320, y: 60 },
    { id: "seafoam-island", itemId: "seafoam-island", width: 20, height: 20, x: 140, y: 300 }
  ];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onMouseEnter(mapItemId: string) {
    this.hoveredMapItem = mapItemId;
    this.hoveredItem.emit({hoveredId: mapItemId});
  }

  onMouseLeave() {
    this.hoveredMapItem = "";
    this.hoveredItem.emit({hoveredId: ""});
  }

  onClick(mapItemId: string) {
    // if(mapItemId === this.selectedMapItem) {
      // this.selectedMapItem = "";
      // this.selectedItem.emit({selectedItem: ""});
    // }
    // else {
      // this.selectedMapItem = mapItemId;
      this.selectedItem.emit({selectedItem: mapItemId});
    // }
  }

  getClass(mapItemId: string) {
    let ret: string = "";
    // if(mapItemId === this.selectedMapItem) return "selected-item ";
    if(mapItemId === this.hoveredMapItem) return "hovered-item ";
    ret += "map-item";
    return ret;
  }
}
