import React from 'react'
// import '../App.css'
import './Terminal.css'
import {XTerm} from 'xterm-for-react'
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { dark  } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class Echo extends React.Component {
    constructor(props) {
        super(props)
        // Create a ref
        this.xtermRef = React.createRef()
        
        this.state = {
            input: "",
        }
    }

    componentDidMount() {
        // Add the starting text to the terminal
        this.xtermRef.current.terminal.writeln(
            "Please enter any string then press enter:"
        );
        this.xtermRef.current.terminal.write("echo> ");
    }

    render() {
        return (
            <>
                {/* Create a new terminal and set it's ref. */}
                <XTerm
                    className = 'terminal'
                    ref={this.xtermRef}
                    onData={(data) => {
                        const code = data.charCodeAt(0);
                        // If the user hits empty and there is something typed echo it.
                        if (code === 13 && this.state.input.length > 0) {
                            this.xtermRef.current.terminal.write(
                                "\r\nYou typed: '" + this.state.input + "'\r\n"
                            );
                            this.xtermRef.current.terminal.write("echo> ");
                            this.setState({input: ""})
                        } else if (code < 32 || code === 127) { // Disable control Keys such as arrow keys
                            return;
                        } 
						else if (code === 8) { // Backspace	
							this.setState({input: this.state.input.slice(0, -1)})
							console.log('backspace triggered')
                            this.xtermRef.current.terminal.write('\b \b');

						}
						else { // Add general key press characters to the terminal
                            this.xtermRef.current.terminal.write(data);
                            this.setState({input: this.state.input + data})
                        }
                    }}
					options = {{ITheme : 'cursorAccent'},{cursorBlink: true},{cols: 200},{rows: 60}}
                />
                
            </>
        )
    }
}

export default Echo