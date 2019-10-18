import React, { Component } from "react";

//eslint-disable-next-line
import BasicStructurejsx from '!raw-loader!./BasicStructure.jsx';
import Structure from "./structure/Structure";

class BasicStructure extends Component {
  render() {
    return (
        <Structure
            title="Basic Structure exercise"
            Component={() => (
                <>
                    <div className="eds-l-pad-vert-10">
                        <p> This is a p sample with structure component!!! </p>
                    </div>
                </>
            )}
            code={BasicStructurejsx}
        />
    );
  }
}

export default BasicStructure;
