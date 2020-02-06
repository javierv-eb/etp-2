import React, {PureComponent} from 'react';

import FormTemplateSelection from './FormTemplateSelection';
import FormTemplateBuilder from '../../../containers/connectFormTemplateBuilder';

export default class FormTemplate extends PureComponent {
    render() {
        return (
            <>
                <section className="eds-l-pad-vert-10 eds">
                    <header>
                        <h2>Select Forms</h2>
                    </header>
                    <main>
                        <FormTemplateSelection formTemplates={this.props.formTemplates} onLoad={this.props.onLoad} onEditForm={this.props.onEditForm} onDeleteForm={this.props.onDeleteForm}/>
                    </main>
                </section>
                <section className="eds-l-pad-vert-10">
                    <header>
                        <h2>Form Configuration</h2>
                    </header>
                    <main>
                        <FormTemplateBuilder {...this.props}/>
                    </main>
                </section>
            </>
        )
    }
};
