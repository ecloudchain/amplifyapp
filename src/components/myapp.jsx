import { render } from "@testing-library/react";
import React, { Component } from "react";
import Counter from './counter'
import Navbar from './navbar'
import Header from './header'
import ContactCard from './contactCard'


 

class Myapp extends Component {
    
    render() { 
        return ( 
     <div>

          <Navbar/>
          <Header />
           <Counter/>
           <Navbar/>
            
    </div> 
        )
    }
}

export default Myapp;

/*
class Myapp extends Component {

    
    
    render() { 
        return ( 
<div>

                <Joke  answer=" Answer1 here"/>
                <Joke question="What is your name2" answer=" Answer2 here"/> 
                <Joke question="What is your name3" answer=" Answer3 here"/>
                <Joke question="What is your name4" answer=" Answer4 here"/>
                 <Joke question="What is your name5" answer=" Answer5 here"/>
                <Joke question="What is your name6" answer=" Answer6 here"/> 
                <Joke question="What is your name7" answer=" Answer7 here"/>
                <Joke question="What is your name8" answer=" Answer8 here"/>

                
                
                
</div>

         );
    }
}
 






/*

<div>

<Navbar/>
<Header />

    <ContactCard
    
    imageurl="https://picsum.photos/200/300/?blur=/200/300.jpg"
    name="Children1"
    phone="9981800486"
    email="munavvar.kk@gmail.com"

    />

    <ContactCard
    
    imageurl="https://picsum.photos/200/300?random=1"
    name="Children2"
    phone="9981800486"
    email="munavvar.kk@gmail.com"

    />

    <ContactCard
    
    imageurl="https://picsum.photos/200/300.jpg"
    name="Children3"
    phone="9981800486"
    email="munavvar.kk@gmail.com"

    />

      </div>

         );
    }
}

*/
 
