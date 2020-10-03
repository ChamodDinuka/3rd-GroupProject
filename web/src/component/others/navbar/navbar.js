import React,{Component} from 'react'
import './navbar.css'
import firebase from '../../../firebase'


class Navbar extends Component{
    signout=()=>{
        firebase.auth().signOut()
    }
    render(){
        return(
            <>
            <header>
            <div class="container-fluid p-0">
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand" href="#"><img class="logo" src="/images/logo.png"/></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <div class="mr-auto"></div>
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/tourist/profile"><button class="btn btn-primary px-5 py-2"><i class="fa fa-user-plus" aria-hidden="true"></i>Guide</button> <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login"><button class="btn btn-primary px-5 py-2">Sign In</button></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={this.signout}><button class="btn btn-primary px-5 py-2">Sign Out</button></a>
                        </li>
                        
                        </ul>
                    </div>
                </nav>
            </div>
            </header></>
        );
    }
}
export default Navbar