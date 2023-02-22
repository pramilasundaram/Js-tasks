//         TASK -7
// 1.Solving problems using array functions on the rest countries'
//  data (https://restcountries.com/v3.1/all).


//a.Get all the countries from the Asia continent /region using the Filter function
        let xhr= new XMLHttpRequest;
        xhr.open('get','https://restcountries.com/v3.1/all');
        xhr.send();
        xhr.onload=function(){   
            if (xhr.status==200)
            {
                let user=JSON.parse(xhr.response);
                user.filter(({region,name})=>{
                    let {common}=name;
                if(region ==="Asia")
                console.log(common);
            });
            }
            else
                console.log(xhr.status);        
            }
//output

        // Japan
        // Jordan
        // Syria
        // Singapore
        // Kazakhstan
        // Armenia
        // China
        // Malaysia
        // Turkey
        // Iran
        //     .
        //     .
        //     .
        //     .
        //  Oman
        //  Nepal
        //  India
        //  Timor-Leste
        //  South Korea
        //  Pakistan
        //  Maldives
        //  Tajikistan
//-------------------------------------------------------------------------------------

//b.Get all the countries with a population of less than 2 lakhs using Filter function
        let xhr= new XMLHttpRequest;
        xhr.open('get','https://restcountries.com/v3.1/all');
        xhr.send();
        xhr.onload=function(){   
            if (xhr.status==200)
            {
                let user=JSON.parse(xhr.response);
                user.filter(({population,name})=>{
                    let {common}=name;
                if(population <= 200000)
                console.log(common);
            });
            }
            else
                console.log(xhr.status);        
            }

// output
        //Caribbean Netherlands
        //  Turks and Caicos Islands
        //  Nauru
        //  Palau
        //  Saint Martin
        //  Svalbard and Jan Mayen
        //  Grenada
        //  Monaco
        //  Seychelles
        //  Åland Islands
        //  Andorra
        //         .
        //         .
        //         .
        //         .
        //         .
        //  Saint Lucia
        //  Kiribati
        //  United States Minor Outlying Islands
        //  Niue
        //  San Marino
        //  Tokelau
        //  Liechtenstein
        //  Cocos (Keeling) Islands
//------------------------------------------------------------------------------------- 


//c.Print the following details name, capital, flag using forEach function
        let xhr= new XMLHttpRequest;
        xhr.open('get','https://restcountries.com/v3.1/all');
        xhr.send();
        xhr.onload=function(){   
            if (xhr.status==200)
            {
                let user=JSON.parse(xhr.response); 
                    user.forEach(({name,capital,flag}) => {
                        let {common}=name;
                        console.log(`name:${common}   capital:${capital}  flag:${flag}`);
                    });
            
            }
            else
                console.log(xhr.status);        
            }
//output
        //  name:Iceland   capital:Reykjavik  flag:🇮🇸
        //  name:Japan   capital:Tokyo  flag:🇯🇵
        //  name:Somalia   capital:Mogadishu  flag:🇸🇴
        //  name:Jordan   capital:Amman  flag:🇯🇴
        //  name:Caribbean Netherlands   capital:Kralendijk  flag:🇧🇶
        //  name:Algeria   capital:Algiers  flag:🇩🇿
        //  name:New Zealand   capital:Wellington  flag:🇳🇿
        //  name:Chile   capital:Santiago  flag:🇨🇱
        //  name:Lesotho   capital:Maseru  flag:🇱🇸
        //  name:Lebanon   capital:Beirut  flag:🇱🇧
        //                   .
        //                   .
        //                   .
        //                   .
        //  name:Rwanda   capital:Kigali  flag:🇷🇼
        //  name:Belarus   capital:Minsk  flag:🇧🇾
        //  name:Maldives   capital:Malé  flag:🇲🇻
        //  name:Lithuania   capital:Vilnius  flag:🇱🇹
        //  name:Tajikistan   capital:Dushanbe  flag:🇹🇯
        //  name:Cocos (Keeling) Islands   capital:West Island  flag:🇨🇨
//-------------------------------------------------------------------------------------


//d. Print the total population of countries using reduce function
        let xhr= new XMLHttpRequest;
        xhr.open('get','https://restcountries.com/v3.1/all');
        xhr.send();
        xhr.onload=function(){   
            if (xhr.status==200)
            {
                let user=JSON.parse(xhr.response); 
                const sum= user.reduce((total,currentValue) => {
                        return total+currentValue.population;
                    },0);
                    console.log(sum);
            }
            else
                console.log(xhr.status);        
            }
//output
        // 7777721563
//-------------------------------------------------------------------------------------


// e. Print the country which uses US Dollars as currency.
        var xhr = new XMLHttpRequest();
        xhr.open("GET","https://restcountries.com/v2/all");
        xhr.send();
        xhr.onload=function(){
        var a=[];
            var user=JSON.parse(xhr.response);
        user.forEach((value) => {
            for(let key in value.currencies){
                if(value.currencies[key].code === "USD"){
                console.log(value.name) ;
                }}
                });
            }
// output
        // American Samoa                                                   
        // Bonaire, Sint Eustatius and Saba                                  
        // British Indian Ocean Territory                                   
        // Virgin Islands (British)                                        
        // Virgin Islands (U.S.)                                           
        // Cambodia                                                         
        // Ecuador                                                           
        // El Salvador
        // Guam
        // Marshall Islands
        // Micronesia (Federated States of)
        // Northern Mariana Islands
        // Palau
        // Panama
        // Puerto Rico
        // Timor-Leste
        // Turks and Caicos Islands
        // United States of America
//--------------------------------------------------------------------------------------