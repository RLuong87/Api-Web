import React from "react";

function WithListLoading(Component) {
    return function WithLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return (
            <p style={{ textAlign: 'center', fontSize: '30px' }}>
                Loading...
            </p>
        )
    }
}

export default WithListLoading;