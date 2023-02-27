// The process of lifting state to a common parent component would give us a way to share the setter and getter down through props to all the child components that need to have access to them.

// App.js
// imports removed for brevity
function App() {
    const [currentMsg, setCurrentMsg] = useState("There are no messages");
    
    const youveGotMail = ( newMessage ) => {
        setCurrentMsg( newMessage );
    }
    
    return (
        <>
            // We pass in our function that will take in a string and update our state in our App component
            <MessageForm onNewMessage={ youveGotMail } />
            // We pass our state getter from our App component down to MessageDisplay through props
            //    for displaying its value
            <MessageDisplay message={ currentMsg } />
        </>
    );
}
    
// MessageForm.jsx
// imports removed for brevity  
const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage( msg );
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Set Message</h1>
            <textarea 
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={ (e) => setMsg(e.target.value) }
                value={ msg }
            ></textarea>
            <input type="submit" value="Send Message" />
        </form>
    );
};

// MessageDisplay.jsx
// imports removed for brevity
    
const MessageDisplay = (props) => {
    return (
        <>
            <h1>Current Message</h1>
            <pre>{ props.message }</pre>
        </>
    );
};



