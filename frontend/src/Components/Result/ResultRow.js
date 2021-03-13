import { PureComponent, React } from "react";

class ResultRow extends PureComponent {
    render () {
        const row = this.props.data[this.props.index];
        // console.log("this.props.data[this.props.index]:", this.props.data[this.props.index])
        
        return (
            <div style={this.props.style}>
                {row}
            </div>
        )
    }
}

export default ResultRow