import { Component , OnDestroy, OnInit} from '@angular/core';
import { interval, Observable, range, Subscriber} from 'rxjs';
import { reduce } from 'rxjs/operators'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit  , OnDestroy{

  private numbers: any;
  private takeFourNumbers: any;
 
  
  ngOnInit(){

   /* this.numbers = interval(1000);

    this.takeFourNumbers = this.numbers.pipe(take(4));
    
    this.takeFourNumbers.subscribe(
      (x: number) =>{
        console.log('Next: ', x);
      },
      (error: any)=>{
        console.log("error !!!"+error);
      },
      ()=>{
        console.log("completed !");
      }

      );*/

    const observable = new Observable((subscriber)=>{

          subscriber.next(4);
          subscriber.next(5);
          subscriber.complete();
      })


    const subscription = observable.subscribe(

       (Next)=>{
         console.log(Next);
       },
       (error)=>{
         console.log(error);
       },
       ()=>{
         console.log("end !");
       }
     );

    /* const myInterval = new Observable((subscriber)=>{

      try {

        let i = 1;
        const id = setInterval(()=>{

          subscriber.next(i);
          i++;

        },1000);
      } catch (err) {
        
        subscriber.error(err);
      }

     })

     const subscription =  myInterval.subscribe(

       (Next: number)=>{

        console.log(Next);
       },
       (error)=>{

        console.log(error);
       },
       ()=>{

        console.log("completed !");
       }
     )*/


  }

  ngOnDestroy(){
    
    this.takeFourNumbers.unsubscribe();
  }


}
