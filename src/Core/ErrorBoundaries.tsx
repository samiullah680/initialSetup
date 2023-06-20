import { Card, PageHeader } from '@cedcommerce/ounce-ui';
import React from 'react';
// import { DI } from './DependencyInjection';

class ErrorBoundary extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false, message: '' };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: any) {
        // You can also log the error to an error reporting service
        this.setState({ message: error.toString() });
    }

    render() {
        const { message } = this.state;
        if (this.state.hasError) {
            return (
                <>
                    <PageHeader title="Something went wrong"        />
                    <Card>
                        <div className="inte-flex intel-flex--align-center intel-flex--distribute-center inte-flex--spacing-Extraloose inte-flex--vertical     ">
                            <div className="inte-flex__item">
                                <img
                                    src="https://icons-for-free.com/iconfiles/png/512/bug+fixing+fix+repair+seo+spider+tools+icon-1320196668193986777.png"
                                    height="200"
                                />
                            </div>
                            <div className="inte-flex__item">
                                <h3 className="inte__Heading--Medium   none">
                                    {message != ''
                                        ? message
                                        : 'Something went wrong.'}
                                </h3>
                            </div>
                            <div className="inte-flex__item">
                                <h3 className="inte__text--medium   none">
                                    We are fixing the bug
                                </h3>
                            </div>
                            <div className="inte-flex__item">
                                <button
                                    className="inte-btn inte__plain-btn inte-plain-dark-btn"
                                    onClick={() => {
                                        // this.props.history(-1);
                                    }}>
                                    <span className="inte__text">Go Back</span>
                                </button>
                            </div>
                        </div>
                    </Card>
                </>
            );
        }

        return this.props.children;
    }
}

export default (ErrorBoundary);
