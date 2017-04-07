import * as React from 'react';

import { DefaultButton, ButtonType } from 'office-ui-fabric-react/lib/components/Button';
import { Checkbox } from 'office-ui-fabric-react/lib/components/Checkbox';

export default class App extends React.Component<any, any> {

    render() {
        return (
            <div>
                <DefaultButton label='test' />
                <Checkbox />
            </div>
        )
    }
}