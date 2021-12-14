import React, {Component} from 'react';
import "../css/Display.css";

class Display extends Component {
    render(){
        return(
            <div className="Display">
                <div className="Data">
                    {this.props.data}
                </div>
            </div>
        );
    }
}

export default Display;