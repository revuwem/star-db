import React from 'react';

import Spinner from '../spinner';

const withData = (View) => {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                data: null
            }
        }

        componentDidMount() {           
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data
                    });
                });
        }

        render() {
            const { data } = this.state;
            if (!data) {
                return <Spinner />;
            }

            return <View {...this.props} data={data} />
        }
    };
};

export default withData;