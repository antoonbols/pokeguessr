import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { GuessItem } from '../../types/guess.item';
import { PlaceName } from '../../types/placename';

@Component({
  selector: 'redblue-guessr',
  templateUrl: './redblueguessr.component.html',
  styleUrls: ['./redblueguessr.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RedBlueGuessrComponent {
  hoveredMapItem: string = "";

  guessItemsOrder: string[] = [];

  currentGuessItemsIndex: number = 0;

  currentGuessItemId: string = "";

  currentGuessItem: GuessItem | null = null;

  guessItems: GuessItem[] = [
    {
      id: "upotrt5u",
      fileName: "upotrt5u.png",
      solution: "celadon-city"
    },
    {
      id: "h3aubhzj",
      fileName: "h3aubhzj.png",
      solution: "celadon-city"
    },
    {
      id: "wcvdwmkd",
      fileName: "wcvdwmkd.png",
      solution: "celadon-city"
    },
    {
      id: "olg2ogpb",
      fileName: "olg2ogpb.png",
      solution: "celadon-city"
    },
    {
      id: "rioigm4x",
      fileName: "rioigm4x.png",
      solution: "celadon-city"
    },
    {
      id: "uoylsnmr",
      fileName: "uoylsnmr.png",
      solution: "celadon-city"
    },
    {
      id: "fupwztuf",
      fileName: "fupwztuf.png",
      solution: "celadon-city"
    },
    {
      id: "fj0molf5",
      fileName: "fj0molf5.png",
      solution: "cerulean-city"
    },
    {
      id: "vcfcvrcd",
      fileName: "vcfcvrcd.png",
      solution: "cerulean-city"
    },
    {
      id: "c51paas2",
      fileName: "c51paas2.png",
      solution: "cerulean-city"
    },
    {
      id: "vtixjng0",
      fileName: "vtixjng0.png",
      solution: "cerulean-city"
    },
    {
      id: "5urc5yeh",
      fileName: "5urc5yeh.png",
      solution: "cerulean-city"
    },
    {
      id: "wkftenab",
      fileName: "wkftenab.png",
      solution: "cinnabar-island"
    },
    {
      id: "ck05czkp",
      fileName: "ck05czkp.png",
      solution: "cinnabar-island"
    },
    {
      id: "hqnwxsa2",
      fileName: "hqnwxsa2.png",
      solution: "cinnabar-island"
    },
    {
      id: "jf35zbnt",
      fileName: "jf35zbnt.png",
      solution: "cinnabar-island"
    },
    {
      id: "vd2qwyfm",
      fileName: "vd2qwyfm.png",
      solution: "cinnabar-island"
    },
    {
      id: "d0pq1udt",
      fileName: "d0pq1udt.png",
      solution: "fuchsia-city"
    },
    {
      id: "f2hdesrt",
      fileName: "f2hdesrt.png",
      solution: "fuchsia-city"
    },
    {
      id: "pfbjbfa2",
      fileName: "pfbjbfa2.png",
      solution: "fuchsia-city"
    },
    {
      id: "gvfk324b",
      fileName: "gvfk324b.png",
      solution: "fuchsia-city"
    },
    {
      id: "b1jyjp1q",
      fileName: "b1jyjp1q.png",
      solution: "fuchsia-city"
    },
    {
      id: "byh4k3wy",
      fileName: "byh4k3wy.png",
      solution: "fuchsia-city"
    },
    {
      id: "tovnwvkl",
      fileName: "tovnwvkl.png",
      solution: "indigo-plateau"
    },
    {
      id: "vctqnysd",
      fileName: "vctqnysd.png",
      solution: "indigo-plateau"
    },
    {
      id: "fadkb151",
      fileName: "fadkb151.png",
      solution: "indigo-plateau"
    },
    {
      id: "nr1lejwd",
      fileName: "nr1lejwd.png",
      solution: "indigo-plateau"
    },
    {
      id: "3yrygn5m",
      fileName: "3yrygn5m.png",
      solution: "indigo-plateau"
    },
    {
      id: "mfxtpcq1",
      fileName: "mfxtpcq1.png",
      solution: "lavender-town"
    },
    {
      id: "hf5grqer",
      fileName: "hf5grqer.png",
      solution: "lavender-town"
    },
    {
      id: "ruky02yn",
      fileName: "ruky02yn.png",
      solution: "lavender-town"
    },
    {
      id: "wgovlavf",
      fileName: "wgovlavf.png",
      solution: "lavender-town"
    },
    {
      id: "lo4pdbj3",
      fileName: "lo4pdbj3.png",
      solution: "mt-moon"
    },
    {
      id: "ionz0fkj",
      fileName: "ionz0fkj.png",
      solution: "mt-moon"
    },
    {
      id: "ufs4v3hf",
      fileName: "ufs4v3hf.png",
      solution: "mt-moon"
    },
    {
      id: "hff0b1nw",
      fileName: "hff0b1nw.png",
      solution: "mt-moon"
    },
    {
      id: "yfi2mevw",
      fileName: "yfi2mevw.png",
      solution: "mt-moon"
    },
    {
      id: "xtfaybl0",
      fileName: "xtfaybl0.png",
      solution: "pallet-town"
    },
    {
      id: "fvwll2th",
      fileName: "fvwll2th.png",
      solution: "pallet-town"
    },
    {
      id: "42f0k0h5",
      fileName: "42f0k0h5.png",
      solution: "pallet-town"
    },
    {
      id: "za5g44k4",
      fileName: "za5g44k4.png",
      solution: "pallet-town"
    },
    {
      id: "a0dccb25",
      fileName: "a0dccb25.png",
      solution: "pewter-city"
    },
    {
      id: "vkkejfiu",
      fileName: "vkkejfiu.png",
      solution: "pewter-city"
    },
    {
      id: "5whst3hg",
      fileName: "5whst3hg.png",
      solution: "pewter-city"
    },
    {
      id: "cpbmmlnk",
      fileName: "cpbmmlnk.png",
      solution: "pewter-city"
    },
    {
      id: "3pbshjb0",
      fileName: "3pbshjb0.png",
      solution: "pewter-city"
    },
    {
      id: "wzvm1eax",
      fileName: "wzvm1eax.png",
      solution: "rock-tunnel"
    },
    {
      id: "liq2c1hj",
      fileName: "liq2c1hj.png",
      solution: "rock-tunnel"
    },
    {
      id: "yfghi2sg",
      fileName: "yfghi2sg.png",
      solution: "route-1"
    },
    {
      id: "d4oiskpn",
      fileName: "d4oiskpn.png",
      solution: "route-1"
    },
    {
      id: "hu2eh1qp",
      fileName: "hu2eh1qp.png",
      solution: "route-1"
    },
    {
      id: "xro4zg4e",
      fileName: "xro4zg4e.png",
      solution: "route-1"
    },
    {
      id: "rbniihfw",
      fileName: "rbniihfw.png",
      solution: "route-10"
    },
    {
      id: "msdg00ta",
      fileName: "msdg00ta.png",
      solution: "route-10"
    },
    {
      id: "2ib3clzn",
      fileName: "2ib3clzn.png",
      solution: "route-10"
    },
    {
      id: "rasiu5i1",
      fileName: "rasiu5i1.png",
      solution: "route-10"
    },
    {
      id: "5rs2toit",
      fileName: "5rs2toit.png",
      solution: "route-10"
    },
    {
      id: "qdzkwr0o",
      fileName: "qdzkwr0o.png",
      solution: "route-11"
    },
    {
      id: "h13oj2ct",
      fileName: "h13oj2ct.png",
      solution: "route-11"
    },
    {
      id: "jenrkzcv",
      fileName: "jenrkzcv.png",
      solution: "route-11"
    },
    {
      id: "lnygltw3",
      fileName: "lnygltw3.png",
      solution: "route-12"
    },
    {
      id: "fnyzypwp",
      fileName: "fnyzypwp.png",
      solution: "route-12"
    },
    {
      id: "iagpa2eg",
      fileName: "iagpa2eg.png",
      solution: "route-12"
    },
    {
      id: "uuhoy44j",
      fileName: "uuhoy44j.png",
      solution: "route-12"
    },
    {
      id: "nqrhz3ga",
      fileName: "nqrhz3ga.png",
      solution: "route-12"
    },
    {
      id: "kip35e4y",
      fileName: "kip35e4y.png",
      solution: "route-13"
    },
    {
      id: "viomezog",
      fileName: "viomezog.png",
      solution: "route-13"
    },
    {
      id: "au5skljn",
      fileName: "au5skljn.png",
      solution: "route-14"
    },
    {
      id: "heuefuxm",
      fileName: "heuefuxm.png",
      solution: "route-15"
    },
    {
      id: "cwhnrhfy",
      fileName: "cwhnrhfy.png",
      solution: "route-16"
    },
    {
      id: "sqcldtdw",
      fileName: "sqcldtdw.png",
      solution: "route-16"
    },
    {
      id: "tavgxzc5",
      fileName: "tavgxzc5.png",
      solution: "route-16"
    },
    {
      id: "addipslt",
      fileName: "addipslt.png",
      solution: "route-17"
    },
    {
      id: "xljltxw1",
      fileName: "xljltxw1.png",
      solution: "route-17"
    },
    {
      id: "3zr3merx",
      fileName: "3zr3merx.png",
      solution: "route-17"
    },
    {
      id: "qsedg2uq",
      fileName: "qsedg2uq.png",
      solution: "route-17"
    },
    {
      id: "e0vi3vjs",
      fileName: "e0vi3vjs.png",
      solution: "route-17"
    },
    {
      id: "ne2ojxbe",
      fileName: "ne2ojxbe.png",
      solution: "route-18"
    },
    {
      id: "mwikplpb",
      fileName: "mwikplpb.png",
      solution: "route-18"
    },
    {
      id: "booulxkz",
      fileName: "booulxkz.png",
      solution: "route-19"
    },
    {
      id: "gprllei4",
      fileName: "gprllei4.png",
      solution: "route-19"
    },
    {
      id: "vgnnqsth",
      fileName: "vgnnqsth.png",
      solution: "route-19"
    },
    {
      id: "iwpx2ccg",
      fileName: "iwpx2ccg.png",
      solution: "route-2"
    },
    {
      id: "w4vhz4gw",
      fileName: "w4vhz4gw.png",
      solution: "route-2"
    },
    {
      id: "zo5i0b3v",
      fileName: "zo5i0b3v.png",
      solution: "route-2"
    },
    {
      id: "2uixb5rh",
      fileName: "2uixb5rh.png",
      solution: "route-2"
    },
    {
      id: "iabbedlo",
      fileName: "iabbedlo.png",
      solution: "route-21"
    },
    {
      id: "01ujdwow",
      fileName: "01ujdwow.png",
      solution: "route-21"
    },
    {
      id: "dty5gy5q",
      fileName: "dty5gy5q.png",
      solution: "route-22"
    },
    {
      id: "lsa13upg",
      fileName: "lsa13upg.png",
      solution: "route-22"
    },
    {
      id: "a3dav1jm",
      fileName: "a3dav1jm.png",
      solution: "route-22"
    },
    {
      id: "t0r1zjwa",
      fileName: "t0r1zjwa.png",
      solution: "route-23"
    },
    {
      id: "fltfeea4",
      fileName: "fltfeea4.png",
      solution: "route-23"
    },
    {
      id: "u3y3sw0o",
      fileName: "u3y3sw0o.png",
      solution: "route-23"
    },
    {
      id: "brttzfpd",
      fileName: "brttzfpd.png",
      solution: "route-23"
    },
    {
      id: "dkl0w4yp",
      fileName: "dkl0w4yp.png",
      solution: "route-24"
    },
    {
      id: "a53yqrft",
      fileName: "a53yqrft.png",
      solution: "route-24"
    },
    {
      id: "1osmejv0",
      fileName: "1osmejv0.png",
      solution: "route-25"
    },
    {
      id: "gw4knoef",
      fileName: "gw4knoef.png",
      solution: "route-25"
    },
    {
      id: "cxv5lnvy",
      fileName: "cxv5lnvy.png",
      solution: "route-25"
    },
    {
      id: "klw2pe0y",
      fileName: "klw2pe0y.png",
      solution: "route-3"
    },
    {
      id: "5xxzaadi",
      fileName: "5xxzaadi.png",
      solution: "route-3"
    },
    {
      id: "feelbtmn",
      fileName: "feelbtmn.png",
      solution: "route-3"
    },
    {
      id: "qq2rqovu",
      fileName: "qq2rqovu.png",
      solution: "route-3"
    },
    {
      id: "sopn201d",
      fileName: "sopn201d.png",
      solution: "route-3"
    },
    {
      id: "hguv43kg",
      fileName: "hguv43kg.png",
      solution: "route-4"
    },
    {
      id: "bewkn5zz",
      fileName: "bewkn5zz.png",
      solution: "route-5"
    },
    {
      id: "zk4s3qzw",
      fileName: "zk4s3qzw.png",
      solution: "route-6"
    },
    {
      id: "z2f4wo0j",
      fileName: "z2f4wo0j.png",
      solution: "route-6"
    },
    {
      id: "ca3dr4dv",
      fileName: "ca3dr4dv.png",
      solution: "route-7"
    },
    {
      id: "qvqcz3o2",
      fileName: "qvqcz3o2.png",
      solution: "route-8"
    },
    {
      id: "sh4yi4sg",
      fileName: "sh4yi4sg.png",
      solution: "route-8"
    },
    {
      id: "0phak0tc",
      fileName: "0phak0tc.png",
      solution: "route-9"
    },
    {
      id: "zwfnexyt",
      fileName: "zwfnexyt.png",
      solution: "route-9"
    },
    {
      id: "tq212og2",
      fileName: "tq212og2.png",
      solution: "saffron-city"
    },
    {
      id: "lorb1kza",
      fileName: "lorb1kza.png",
      solution: "saffron-city"
    },
    {
      id: "5ceuxkfv",
      fileName: "5ceuxkfv.png",
      solution: "saffron-city"
    },
    {
      id: "vzep1z0n",
      fileName: "vzep1z0n.png",
      solution: "saffron-city"
    },
    {
      id: "3v4rrght",
      fileName: "3v4rrght.png",
      solution: "saffron-city"
    },
    {
      id: "af2di4x5",
      fileName: "af2di4x5.png",
      solution: "saffron-city"
    },
    {
      id: "kucwl2s3",
      fileName: "kucwl2s3.png",
      solution: "seafoam-islands"
    },
    {
      id: "hygmdkxv",
      fileName: "hygmdkxv.png",
      solution: "seafoam-islands"
    },
    {
      id: "jblnngdw",
      fileName: "jblnngdw.png",
      solution: "vermilion-city"
    },
    {
      id: "d24iw1md",
      fileName: "d24iw1md.png",
      solution: "vermilion-city"
    },
    {
      id: "10gxutnh",
      fileName: "10gxutnh.png",
      solution: "vermilion-city"
    },
    {
      id: "rkxa5cll",
      fileName: "rkxa5cll.png",
      solution: "vermilion-city"
    },
    {
      id: "gngy4fym",
      fileName: "gngy4fym.png",
      solution: "vermilion-city"
    },
    {
      id: "btpu2iau",
      fileName: "btpu2iau.png",
      solution: "victory-road"
    },
    {
      id: "ybmb3z2z",
      fileName: "ybmb3z2z.png",
      solution: "victory-road"
    },
    {
      id: "lam5rk0m",
      fileName: "lam5rk0m.png",
      solution: "victory-road"
    },
    {
      id: "50y5tifh",
      fileName: "50y5tifh.png",
      solution: "viridian-city"
    },
    {
      id: "ln3uqiu5",
      fileName: "ln3uqiu5.png",
      solution: "viridian-city"
    },
    {
      id: "sucamm2b",
      fileName: "sucamm2b.png",
      solution: "viridian-city"
    },
    {
      id: "5n5bavzo",
      fileName: "5n5bavzo.png",
      solution: "viridian-city"
    },
    {
      id: "kzc1gv5y",
      fileName: "kzc1gv5y.png",
      solution: "viridian-forest"
    },
    {
      id: "iarac4gk",
      fileName: "iarac4gk.png",
      solution: "viridian-forest"
    },
    {
      id: "45eb5lqc",
      fileName: "45eb5lqc.png",
      solution: "viridian-forest"
    }
  ];

  lastGuessStatus: string = "";

  placeNames: PlaceName[] = [
    { id: "route-1", name: "Route 1" },
    { id: "route-2", name: "Route 2" },
    { id: "route-3", name: "Route 3" },
    { id: "route-4", name: "Route 4" },
    { id: "route-5", name: "Route 5" },
    { id: "route-6", name: "Route 6" },
    { id: "route-7", name: "Route 7" },
    { id: "route-8", name: "Route 8" },
    { id: "route-9", name: "Route 9" },
    { id: "route-10", name: "Route 10" },
    { id: "route-11", name: "Route 11" },
    { id: "route-12", name: "Route 12" },
    { id: "route-13", name: "Route 13" },
    { id: "route-14", name: "Route 14" },
    { id: "route-15", name: "Route 15" },
    { id: "route-16", name: "Route 16" },
    { id: "route-17", name: "Route 17" },
    { id: "route-18", name: "Route 18" },
    { id: "route-19", name: "Route 19" },
    { id: "route-20", name: "Route 20" },
    { id: "route-21", name: "Route 21" },
    { id: "route-22", name: "Route 22" },
    { id: "route-23", name: "Route 23" },
    { id: "route-24", name: "Route 24" },
    { id: "route-25", name: "Route 25" },
    { id: "pallet-town", name: "Pallet Town" },
    { id: "viridian-city", name: "Viridian City" },
    { id: "indigo-plateau", name: "Indigo Plateau" },
    { id: "pewter-city", name: "Pewter City" },
    { id: "cerulean-city", name: "Cerulean City" },
    { id: "vermilion-city", name: "Vermilion City" },
    { id: "lavender-town", name: "Lavender Town" },
    { id: "saffron-city", name: "Saffron City" },
    { id: "celadon-city", name: "Celadon City" },
    { id: "fuchsia-city", name: "Fuchsia City" },
    { id: "cinnabar-island", name: "Cinnabar Island" },
    { id: "victory-road", name: "Victory Road" },
    { id: "viridian-forest", name: "Viridian Forest" },
    { id: "mt-moon", name: "Mt Moon" },
    { id: "rock-tunnel", name: "Rock Tunnel" },
    { id: "seafoam-islands", name: "Seafoam Island" }

  ];
    
  isGameOver: boolean = false;

  constructor() {
    this.setGame();
  }

  public resetGame() {
    this.setGame();
  }

  public skipGuess() {
    this.goNextGuess();
  }

  private setGame() {
    this.isGameOver = false;
    this.guessItemsOrder = this.guessItems.map(i => i.id).sort(() => Math.random() - 0.5);
    this.currentGuessItemsIndex = 0;
    this.setCurrentGuessItem(this.currentGuessItemsIndex);
    this.lastGuessStatus = "";
  }

  private setCurrentGuessItem(index: number) {
    this.currentGuessItemId = this.guessItemsOrder[index];
    this.currentGuessItem = this.guessItems.filter(i => i.id === this.currentGuessItemId)[0];
  }
  
  public updateHoveredMapItem(hoveredMapItemEvent: {
    hoveredId: string;
  }): void {
    this.hoveredMapItem = hoveredMapItemEvent.hoveredId;
  }

  public updateSelectedMapItem(selectedMapItemEvent: {
    selectedItem: string;
  }): void {
    if(this.currentGuessItem !== null && selectedMapItemEvent.selectedItem === this.currentGuessItem.solution) {
      this.lastGuessStatus = "Correct!";
      this.goNextGuess();
    }
    else {
      this.lastGuessStatus = "Wrong. Try again?"
    }
  }

  private goNextGuess() {
    this.currentGuessItemsIndex++;
    if(this.currentGuessItemsIndex >= this.guessItems.length) {
      this.isGameOver = true;
    }
    else {
      this.setCurrentGuessItem(this.currentGuessItemsIndex);
    }
  }

  public GetPlaceName(mapItemId: string ): string {
    if(mapItemId === "") return "";
    return this.placeNames.filter(p => p.id === mapItemId)[0].name;
  }
}
