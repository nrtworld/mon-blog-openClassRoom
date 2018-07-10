export class AppareilService{


    appareils = [
        {
            id: 1,
          name: 'Machine à laver',
          statut: 'éteint'
        },
        {
            id: 2,
          name: 'Frigo',
          statut: 'allumé'
        },
        {
            id: 3,
          name: 'Ordinateur',
          statut: 'éteint'
        }
      ];

      switchOnAll(){
          for(let appareil of this.appareils){
              appareil.statut = "allumé";
          }
      }

      switchOffAll(){
          for(let appareil of this.appareils){
              appareil.statut = "éteint";
          }
      }

      switchOnOne(i: number){
          this.appareils[i].statut = "allumé";
      }

      switchOffOne(i: number){
        this.appareils[i].statut = "éteint";
    }

    getAppareilById(id: number){
        const appareil = this.appareils.find(
            (s)=>{
                return s.id === id;
            }
        );
        return appareil;
    }

}