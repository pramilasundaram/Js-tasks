//question 1) Class - Movie
        // The class Movie is stated below. An instance of class Movie represents a film.
        // This class has the following three properties:

        // title, which is a String representing the title of the movie
        // studio, which is a String representing the studio that made the movie
        // rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

        // a) Write a constructor for the class Movie, which takes a String representing the title of 
        // the movie, a String representing the studio, and a String representing the rating as its arguments, 
        // and sets the respective class properties to these values.

        // b) The constructor for the class Movie will set 
        // the class property rating to "PG" as default when no rating is provided.

        // c) Write a method getPG, which takes an array of base type Movie as its 
        // argument, and returns a new array of only those movies in the input array with a rating of "PG". 
        // You may assume the input array is full of Movie instances. The returned array need not be full.

        // d) Write a piece of code that creates an instance of the class Movie with the title
        //  “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(this.rating === undefined)
        {
            this.rating="PG"
        }
    
    }
    display (){
        console.log(`${this.title} , ${this.studio} , ${this.rating}`)
    }
   movieobject(){
    return ({title:this.title,
        studio:this.studio,
        rating:this.rating})

   }
   getPG(arr)
   {
    let data=arr.filter(film=>film.rating=="PG")
     console.log(data.map(b=>b.title))
   }
}
        let Movie1=new Movie("PK","Vinod Chopra Productions")
        let Movie2=new Movie("Bahubhali","Arka Mediaworks","R")
        let Movie3=new Movie("3 Idiots","Vinod Chopra Productions","PG-13")
        let Movie4=new Movie("Bahubhali 2","Arka Mediaworks","PG")

        let film=new Movie("Casino Royale","Eon Productions","PG13")
        film.display();

        let arr=[];
        arr.push(Movie1.movieobject())
        arr.push(Movie2.movieobject())
        arr.push(Movie3.movieobject())
        arr.push(Movie4.movieobject())
        console.log(arr);

        Movie1.getPG(arr);

        //output
        // PS C:\Users\GURU\Desktop\day 6\task 6> node "c:\Users\GURU\Desktop\day 6\task 6\classmovie.js"
        // Casino Royale , Eon Productions , PG13
        // [
        // { title: 'PK', studio: 'Vinod Chopra Productions', rating: 'PG' },
        // { title: 'Bahubhali', studio: 'Arka Mediaworks', rating: 'R' },   
        // { title: '3 Idiots',studio: 'Vinod Chopra Productions',rating: 'PG-13' },
        // { title: 'Bahubhali 2', studio: 'Arka Mediaworks', rating: 'PG' } 
        // ]
        // [ 'PK', 'Bahubhali 2' ]

//question 2) Circle - Class

        class Circle{
            constructor(centre,radius){
                this.centre=centre;
                this.radius=radius;
            }
            
            setRadius(radius){
                this.radius=radius;
            }
            
            getRadius(){
                return this.radius;
            }
            getArea(){
                let area=(Math.PI*this.getRadius()*this.getRadius()).toFixed(2)
                return `"Area of circle is" ${area}`
            }
           getCircumference(){
               let circum=(2*Math.PI*this.getRadius()).toFixed(2)
               return `"Circumference of circle is" ${circum}`
           }
        
        }
        let circle1=new Circle(5,5);
        let circle2=new Circle(0,4);
        let circle3=new Circle(3,6);
        
        circle1.setRadius(6);
        circle2.setRadius(9);
        
        console.log(circle3.getArea());
        console.log(circle3.getCircumference());
        
//output
        // PS C:\Users\GURU\Desktop\day 6\task 6> node "c:\Users\GURU\Desktop\day 6\task 6\classcircle.js"
        // "Area of circle is" 113.10
        // "Circumference of circle is" 37.70

//question 3)Write a “person” class to hold all the details

        class Person{
            constructor(name,heigth,weigth,age,qualification,job,city,state){
                this.name=name;
                this.heigth=heigth;
                this.weigth=weigth;
                this.age=age;
                this.qualification=qualification;
                this.job=job;
                this.city=city;
                this.state=state;
            }
            details(){
                return(`
                name:${this.name}
                height:${this.heigth}
                weight:${this.weigth}
                age:${this.age}
                qualification:${this.qualification}
                job:${this.job}
                city:${this.city}
                state:${this.state}`);
            }
        }
        let Person1=new Person("pramila sundaram","5.7","65","32","M.Tech","unemployed","villupuram","Tamilnadu");
        console.log(Person1.details());
        
//output
        // PS C:\Users\GURU\Desktop\day 6\task 6> node "c:\Users\GURU\Desktop\day 6\task 6\classperson.js"
        
        //         name:pramila sundaram
        //         height:5.7
        //         weight:65
        //         age:32
        //         qualification:M.Tech 
        //         job:unemployed       
        //         city:villupuram      
        //         state:Tamilnadu      

//question 4) write a class to calculate the uber price.

        class Uber{
            constructor( baseFare,costPerMinute,costPerMile,bookingFee){
                this.baseFare = baseFare;
                this.costPerMinute = costPerMinute;
                this.costPerMile = costPerMile;
                this.bookingFee = bookingFee;
            }
            your_fare(timeInRide,rideDistance){
            let fare = this. baseFare + (this.costPerMinute * timeInRide) + (this.costPerMile * rideDistance) + this.bookingFee;    
            return fare;
            }
          
        }
        const myRide=new Uber(40,10,80,20);
        console.log(myRide)
        console.log(myRide.your_fare(20,13));
        
 //output:
        // PS C:\Users\GURU\Desktop\day 6\task 6> node "c:\Users\GURU\Desktop\day 6\task 6\classuber.js"
        // Uber {
        //   baseFare: 40,
        //   costPerMinute: 10,
        //   costPerMile: 80,
        //   bookingFee: 20
        // }
        // 1300
        
        
