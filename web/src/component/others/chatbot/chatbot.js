import React,{Component} from 'react'
import './chatbot.css'
import ChatBot from 'react-simple-chatbot'

class Chatbot extends Component{
     state={
         answer:[
             {
                 problem:"how are you",
                 answer:"fine"
             },
             {
                problem:"how are you",
                answer:"fine2"
            }
         ],
         question:[],
         submit:false
     }
     componentDidUpdate(){
        console.log("updated")
     }
     getChat=(e)=>{
        let a=[...this.state.question,document.getElementById("chat").value]
        this.setState({
            question:a
        })
        document.getElementById("chat").value = "";
       console.log(this.state.question)
      
     }
    render(){
        const key=this.state.submit
        return(
             <div className="chat">
                 <div className="chat-header">Ask Questions</div>
                 <div className="chat-body">  
                 <div className="answer">{"Hello.."}</div><br/><br/>
                     {this.state.question.map(q=>{
                         return(
                            <>
                           
                            <div className="problem" key={Math.random()}>{q}</div><br/>
                           <div className="answer">{"cccdd bbb"}</div><br/>
                            </>
                         )
                     })}
                    
                 </div>
                 <div className="chat-fotter">
                 
                     <input type="text" id="chat" /><button type="submit" onClick={this.getChat}><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                 </div>
             </div>
            
        );
    }
}
export default Chatbot;
