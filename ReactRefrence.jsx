git add <filename> or git add -A // to add all files
git commit -m "Commit message" 
git push origin master 
//https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html 
//If you are in the directory you want the contents of the git repository dumped to, run: 
git clone git@github.com:whatever . 
//ex: git clone git:github.com/SU-SWS/open_framework.git mynewtheme 
 

//installing react CMD

npm install create-react-app -g 
or 
npm i create-react-app

//creating neew react app 
create-react-app name-of-the-app 

//starting the app 

npm start

// this can be a replacer for using <div>

<React.Fragment>
    {/* { Here we can nest the childes like we did insid a <div></div> } */}
</React.Fragment>

//////////////////////////////////////////////////////////////////
//TrenaryCheck 

this.state.count === 0 ? true //statment is here: false or else statment here

//////////////////////////////////////////////////////////////////////
//Function

functionname() {
    // some code here
}

/// Arrow Function  

funtionname = (/*this can have param or not*/) => {
    //Code here;
}

////////////////////////////////////////////////////////////////////
//image can be used from importing it in the import part of using the state 
//Exmaple
class importingimage extends Component {
    state = {
        imageurl: "https://www.google.com/url?sa=i&source=images&cd=&cad"
    }
    render() {
        return (
            <img src="{this.state.imageurl}" alt="" />
        );
    }
}

export default importingimage;

heloo

//OR  by using this 

import image form '.../../sourcehere';

//then in the render we can use it like this 
<img src="{image}" alt="" />


////////////////////////////////////////////////////////////////////
//Adding incon styling by defining a properity and refeencing it in the jsx
class Styling extends Component {
    state = {}
    styles{
    fontweiggh: 10px,
        color : red
}
render() {
    return (


        <p style={this.styles}></p>


    );
}
}

///////////////////////////////////////////////////////////////////
//rendering classes dynamically so it change with the change of the state
import React, { Component } from 'react';

class testclass extends Component {
    state = {
        count: 0
    }
    render() {

        let classes = "primarybutton"

        classes += (this.state.count === 0) ? "smallbutton" : "redbutton"


        return (
            <React.Fragment>

                <button className={classes}></button>


            </React.Fragment>

        );
    }
}

export default testclass;

//Another use which is cleaner in code wrotong is using function  
import React, { Component } from 'react';

class testclass extends Component {
    state = {
        count: 0
    }
    render() {

        return (
            <React.Fragment>
                <button className={this.getclasses()}></button>
            </React.Fragment>
        );


    }
    getclasses() {

        let classes = "primarybutton"
        classes += (this.state.count === 0) ? "smallbutton" : "redbutton"
        return classes;
    }

}

export default testclass;

///////////////////////////////////////////////////////////////////
///Rendering Lists

import React, { Component } from 'react';

class testclass extends Component {
    state = {
        tags: ['tag1', 'tag2', 'tag3']
    }
    render() {

        return (
            <React.Fragment>
                <ul>
                    {/* we can use the map method because the tags is placed in an array  And Do Not Forget To 
                    Add the Key for each value in an array, the key must be unique we use tag in this example because
                    tag is unique but in real apps this should be an id  */}
                    {this.state.tags.map(tag => <li key={tag}>  {tag} </li>)}
                </ul>

            </React.Fragment>

        );
    }
}

export default testclass;


//////////////////////////////////////////////////////////
//Condiitonal Rendering 

import React, { Component } from 'react';

class testclass extends Component {
    state = {
        tags: ['tag1', 'tag2', 'tag3']
    }


    ConditionalRendering() {
        if (this.state.tags.length === 0) return <p>There is nothing to show</p>;

        //else is here but not writin the react understand that the next line is the else statment 

        return <ul>{this.state.tags.map(tag => <li key={tag}>  {tag} </li>)} </ul>;



    }
    render() {

        return (
            <React.Fragment>
                {this.ConditionalRendering()}
            </React.Fragment>

        );
    }
}

export default testclass;
//////////////////////////////////////////////////////////
//Handling Events

import React, { Component } from 'react';

class testclass extends Component {
    state = {
        count: 0
    }
    //Click Handler Fucntion contains the code we want to run when event happens like a button click
    clickHandler() {
        console.log('something', this.state.count)
    }


    render() {

        return (
            <React.Fragment>
                {/* //using on click  */}
                <button onClick={this.clickHandler()}></button>
                {/* When Clicking this button it will return an error because the state is undefined to us so the next 
                code snippet will help definging it */}
            </React.Fragment>
        );



    }

}
//////////////////////////////////////////////////////////
//Handling Events 2 (Binding Event Handler)

import React, { Component } from 'react';

class testclass extends Component {
    state = {
        count: 0
    }
    //Bu using Constructor just like shown but another way and much simpler is usin arrow function 
    // constructor(){
    //     super()
    //     this.clickHandler = this.clickHandler.bind(this)
    // }
    //OLD
    // clickHandler(){
    //     console.log('something', this.state.count)
    // }

    //NEW (Arrow Function) but it might be deprecated in the future 
    clickHandler = () => {
        console.log('something', this.state.count)
    }



    render() {

        return (
            <React.Fragment>
                <button onClick={this.clickHandler()}></button>
                {/* When Clicking this button it will return an error because the state is undefined to us so the next 
                code snippet will help definging it */}
            </React.Fragment>
        );



    }

}

//////////////////////////////////////////////////////////
//Changing the state using events
import React, { Component } from 'react';

class testclass extends Component {
    state = {
        count: 0
    }
    //Bu using Constructor just like shown but another way and much simpler is usin arrow function 
    // constructor(){
    //     super()
    //     this.clickHandler = this.clickHandler.bind(this)
    // }
    //OLD
    // clickHandler(){
    //     console.log('something', this.state.count)
    // }

    //NEW (Arrow Function) but it might be deprecated in the future 
    clickHandler = () => {
        this.state.count++ // this will not work 
        //We Should Use SETSTATE Video 12 in Mosh Course
        this.setState({ count: this.state.count + 1 })
    }



    render() {

        return (
            <React.Fragment>
                <button onClick={this.clickHandler()}></button>
                {/* When Clicking this button it will return an error because the state is undefined to us so the next 
                code snippet will help definging it */}
            </React.Fragment>
        );



    }

}

//////////////////////////////////////////////////////////
//Passing Event Arguments Video 14
import React, { Component } from 'react';

class testclass extends Component {
    state = {
        count: 0
    }
    //add the parameter between brackets in the handler or remove them 
    //With Brackts
    clickHandler = (Argument) => {
        console.log(Argument)
        this.setState({ count: this.state.count + 1 })
    }
    //Without Brckets 
    clickHandler = Argument => {
        console.log(Argument)
        this.setState({ count: this.state.count + 1 })
    }




    render() {

        return (
            <React.Fragment>

                {/* //OLD */}
                <button onClick={this.clickHandler()}></button>
                {/* //Then to pass the Argument simply use an arrow function   */}
                {/* //NEW  */}
                <button onClick={() => this.clickHandler(Argument)}></button>
                {/* When Clicking this button it will return an error because the state is undefined to us so the next 
                code snippet will help definging it */}
            </React.Fragment>
        );



    }

}


//////////////////////////////////////////////////////////
// To install Bootstrap and font-awesomme
// in Your CMD or Terminal Write the following Commands 

npm install bootstrap@4.1.1 font - awesome@4.7.0

//Then import them in your project

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

class testclass extends Component {
    ;
    state = {}
    render() {




        return (
            <React.Fragment>



            </React.Fragment>

        );
    }
}

export default testclass;

//////////////////////////////////////////////////////////

// import React, { Component } from 'react';

// class testclass extends Component {
//     state = {}
//     render() {




//         return (
//             <React.Fragment>



//             </React.Fragment>

//         );
//     }
// }

// export default testclass;
