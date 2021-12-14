import React, {Component} from 'react';
import Button from './Button';
import Display from './Display';
import Keypad from './Keypad';
import '../css/Calculator.css';

class Calculator extends Component {
    constructor() {
        super();
        this.state = { data: ''}
    }

    calc = () => {
        try {
            const result = eval(this.state.data); // Calculation occurs using the built in eval function
            this.setState({data: result});
        } catch (e) {
            this.setState({data: 'error'})
        }
    }

    btnClick = e => {
        const value = e.target.getAttribute('data-value');
        switch(value) {
            case 'clear':
                this.setState({ data: ''});
                break;
            case 'equal':
                this.calc();
                break;
            default:
                this.setState({ data: this.state.data + value});
        }
    }
    render(){
        return(
            <div className="Calculator">
                <Display data={this.state.data}/>
                <Keypad>
                    <Button onClick={this.btnClick} label="C" value="clear" />
                    <Button onClick={this.btnClick} label="7" value="7" />
                    <Button onClick={this.btnClick} label="4" value="4" />
                    <Button onClick={this.btnClick} label="1" value="1" />
                    <Button onClick={this.btnClick} label="0" value="0" />

                    <Button onClick={this.btnClick} label="/" value="/" />
                    <Button onClick={this.btnClick} label="8" value="8" />
                    <Button onClick={this.btnClick} label="5" value="5" />
                    <Button onClick={this.btnClick} label="2" value="2" />
                    <Button onClick={this.btnClick} label="." value="." />

                    <Button onClick={this.btnClick} label="x" value="*" />
                    <Button onClick={this.btnClick} label="9" value="9" />
                    <Button onClick={this.btnClick} label="6" value="6" />
                    <Button onClick={this.btnClick} label="3" value="3" />
                    <Button onClick={this.btnClick} label="" value="null" />

                    <Button onClick={this.btnClick} label="-" value="-" />
                    <Button onClick={this.btnClick} label="+" size="2" value="+" />
                    <Button onClick={this.btnClick} label="=" size="2" value="equal" />
                </Keypad>
            </div>
        );
    }
}

export default Calculator;