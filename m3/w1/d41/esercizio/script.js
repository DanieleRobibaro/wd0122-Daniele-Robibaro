"use strict";
//LIBERO PROFESSIONISTA
//ARTIGIANO
//COMMERCIANTE
class Lavoratore {
    constructor(ral, cod, tssinps, tssirpef) {
        this.redditoannuolordo = ral;
        this.codredd = cod;
        this.tasseinps = tssinps;
        this.tasseirpef = tssirpef;
    }
    getUtileTasse() {
        let cassa = this.redditoannuolordo * (this.codredd / 100);
        return cassa;
    }
    getTasseInps() {
        let tasse1 = this.getUtileTasse() * (this.tasseinps / 100);
        return tasse1;
    }
    getTasseIrpef() {
        let tasse2 = this.getUtileTasse() * (this.tasseirpef / 100);
        return tasse2;
    }
}
//
class Artigiano extends Lavoratore {
    constructor(ral, cod, tssinps) {
        super(ral, cod, tssinps, 5);
    }
    getRedditoAnnuoNetto() {
        let tot = this.redditoannuolordo - this.getTasseIrpef();
        return tot;
    }
}
class LiberoProfessionista extends Lavoratore {
    constructor(ral, cod, tssirpef) {
        super(ral, cod, 7, tssirpef);
    }
    getRedditoAnnuoNetto() {
        let tot = this.redditoannuolordo - this.getTasseInps();
        return tot;
    }
}
class Commerciante extends Lavoratore {
    constructor(ral, cod) {
        super(ral, cod, 8.9, 15);
    }
    getRedditoAnnuoNetto() {
        let tot = this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
        return tot;
    }
}
let l1 = new Artigiano(27500, 78, 25.72);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l2 = new LiberoProfessionista(67500, 67, 15);
console.log('utile tasse LIBERO PROFESSIONISTA:' + l2.getUtileTasse() + '€');
console.log('tasse inps LIBERO PROFESSIONISTA:' + l2.getTasseInps() + '€');
console.log('tasse irpef LIBERO PROFESSIONISTA:' + l2.getTasseIrpef() + '€');
console.log('reddito annuo netto LIBERO PROFESSIONISTA:' + l2.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l3 = new Commerciante(97500, 40);
console.log('utile tasse COMMERCIANTE:' + l3.getUtileTasse() + '€');
console.log('tasse inps COMMERCIANTE:' + l3.getTasseInps() + '€');
console.log('tasse irpef COMMERCIANTE:' + l3.getTasseIrpef() + '€');
console.log('reddito annuo netto COMMERCIANTE:' + l3.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
//# sourceMappingURL=script.js.map